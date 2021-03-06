import { Server as SocketServer } from 'socket.io';

import * as builder from './modules/builder';
import { clientManager } from './modules/client-manager';
import { useDebounceEvent, useHttpServer } from './modules/hooks';

new SocketServer(useHttpServer(3000)).on('connection', (socket) => {
    clientManager.push({
        id: socket.id,
        onChange: (path) => socket.emit('onchange', path),
    });

    socket.on('disconnect', () => {
        clientManager.remove(socket.id);
    });
});

(async () => {
    await builder.distDirInit();

    for (const page of builder.pages) {
        const debounceEvent = useDebounceEvent<string>((value='') => {
            clientManager.run(value);
        }, 1000);

        await builder.makePage(page, { isDev: true });
        await builder.watchPage(page, (path) => {
            debounceEvent(path);
        });
    }
})();