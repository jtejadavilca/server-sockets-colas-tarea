import { Socket } from 'socket.io';
import socketIO from 'socket.io';


export const colasListener = ( client: Socket, io: socketIO.Server ) => {
    client.on('nuevo-ticket', (payload, callback) => {
        //Generar nuevo ticket
    });
    client.on('atender-ticket', (payload, callback) => {
        //Generar nuevo ticket
    });
    client.on('cuatro-ultimos', (payload, callback) => {
        //Generar nuevo ticket
    });
}