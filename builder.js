const fs = require('fs-extra');

const { transpile } = require('./transpiler');

const SOURCE_PATH = './src'
const INDEX_PATH = `${SOURCE_PATH}/public/index.html`;
const PAGES_PATH = `${SOURCE_PATH}/pages`;
const DIST_PATH = './dist';

const INIT_OPTIONS = {
    isDev: false,
}

const pages = fs.readdirSync(PAGES_PATH);

async function distDirInit() {
    if (fs.existsSync(DIST_PATH)) {
        await fs.rmdir(DIST_PATH, {
            recursive: true,
            force: true,
        });
    }
    await fs.mkdir(DIST_PATH);
    await fs.copy(`./src/public/`, `${DIST_PATH}/`, {
        recursive: true,
    });
}

/**
 * @param {{ isDev?: boolean }} options 
 */
async function makeIndex({ isDev } = INIT_OPTIONS) {
    const indexFile = (await fs.readFile(INDEX_PATH)).toString();
    const newIndex = transpile(indexFile, {
        ignoreError: isDev,
        params: { pages }
    });
    await fs.writeFile(`${DIST_PATH}/index.html`, newIndex);
}

async function watchIndex() {
    fs.watch(INDEX_PATH, (eventType) => {
        if (eventType === 'change') {
            const time = new Date();
            makeIndex({ ignoreError: true });
            console.log(`Rebuild... index.html : ${new Date() - time}`);
        }
    });
}

/**
 * @param {string} path 
 * @param {{ isDev?: boolean }} options 
 */
async function makePage(path, { isDev } = INIT_OPTIONS) {
    const indexPath = `${PAGES_PATH}/${path}/index.html`;
    const indexFile = (await fs.readFile(indexPath)).toString();
    const newIndex = transpile(indexFile, {
        ignoreError: isDev,
    });
    if (!fs.existsSync(`${DIST_PATH}/${path}`)) {
        await fs.mkdir(`${DIST_PATH}/${path}`);
    }
    if (isDev) {
        await fs.writeFile(`${DIST_PATH}/${path}/index.html`, newIndex.replace('</body>', `
            <script src="/socket.io/socket.io.js"></script>
            <script>
                var socket = io();
                socket.on('onchange', function() {
                    location.reload();
                });
            </script>
            </body>
        `));
        return;
    }
    await fs.writeFile(`${DIST_PATH}/${path}/index.html`, newIndex);
}

/**
 * @param {string} path
 */
async function watchPage(path, onChange) {
    const indexPath = `${PAGES_PATH}/${path}/index.html`;
    fs.watch(indexPath, async (eventType) => {
        if (eventType === 'change') {
            const time = new Date();
            await makePage(path, { isDev: true });
            console.log(`Rebuild... ${path} : ${new Date() - time}`);
            if (onChange) {
                onChange(path);
            }
        }
    });
}

module.exports = {
    distDirInit,
    makeIndex,
    watchIndex,
    pages,
    makePage,
    watchPage,
}