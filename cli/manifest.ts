import * as fs from 'fs-extra';
import * as path from 'path';

interface ManifestPage {
    slug: string;
    category: string;
    year: number | null;
    title: string;
    description: string;
    path: string;
}

interface DesignManifest {
    version: string;
    sourceRepo: string;
    generatedAt: string;
    pages: ManifestPage[];
}

const SRC_PAGES_DIR = path.resolve('./src/pages');
const OUTPUT_PATH = path.resolve('./ai/design-manifest.json');

function extractMeta(source: string, key: string): string {
    const regex = new RegExp(`<!--\\s*${key}:\\s*(.+?)\\s*-->`);
    return source.match(regex)?.[1]?.trim() || '';
}

function resolveCategory(slug: string): string {
    if (slug.startsWith('design-')) return 'design';
    if (slug.startsWith('concept-')) return 'concept';
    if (slug.startsWith('effect-')) return 'effect';
    return 'system';
}

function resolveYear(slug: string): number | null {
    const match = slug.match(/^(?:design|concept)-(\d{4})/);
    return match ? Number.parseInt(match[1], 10) : null;
}

async function collectPages(): Promise<ManifestPage[]> {
    if (!await fs.pathExists(SRC_PAGES_DIR)) return [];

    const slugs = await fs.readdir(SRC_PAGES_DIR);
    const pages: ManifestPage[] = [];

    for (const slug of slugs) {
        const htmlPath = path.join(SRC_PAGES_DIR, slug, 'index.html');
        if (!await fs.pathExists(htmlPath)) continue;

        const source = await fs.readFile(htmlPath, 'utf8');
        pages.push({
            slug,
            category: resolveCategory(slug),
            year: resolveYear(slug),
            title: extractMeta(source, 'title'),
            description: extractMeta(source, 'description'),
            path: `src/pages/${slug}/index.html`,
        });
    }

    pages.sort((a, b) => {
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        if ((a.year || 0) !== (b.year || 0)) return (a.year || 0) - (b.year || 0);
        return a.slug.localeCompare(b.slug);
    });

    return pages;
}

async function run() {
    const manifest: DesignManifest = {
        version: '1.0.0',
        sourceRepo: 'https://github.com/baealex/design',
        generatedAt: new Date().toISOString().slice(0, 10),
        pages: await collectPages(),
    };

    await fs.ensureDir(path.dirname(OUTPUT_PATH));
    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    console.log(`[manifest] generated ai/design-manifest.json (${manifest.pages.length} pages)`);
}

void run();
