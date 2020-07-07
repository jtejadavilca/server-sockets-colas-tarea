import express from 'express';
import http from 'http';

import { SERVER_PORT } from '../environment/environment';
import socketIO from 'socket.io';

import cors from 'cors';

import * as socket from '../sockets/socket';
import routes from '../routes/routes';


export default class Server {

    private static _instance: Server;

    private port: number;
    private app: express.Application;
    private io: socketIO.Server;
    private httpServer: http.Server;

    constructor() {
        this.port = SERVER_PORT;

        this.app = express();

        this.httpServer = new http.Server( this.app );

        this.io = socketIO( this.httpServer );

        this.escucharSockets();
    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    escucharSockets() {
        this.io.on('connection', client => {

            // Escuchando eventos de colas
            socket.colasListener(client, this.io);

        });
    }

    start( callback: Function ) {
        this.httpServer.listen(this.port, () => callback( this.port ));
        this.configCors();
        this.configRoutes();
    }

    configCors() {
        this.app.use( cors( { origin: true, credentials: true } ) );
    }

    configRoutes() {
        this.app.use( routes );
    }
}