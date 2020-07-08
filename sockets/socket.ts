import path from 'path';
import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import DataTickets from '../classes/data-tickets';

const jsonDataTickets = require( '../data/data.json' );
export const dataTickets = new DataTickets(jsonDataTickets.dia, jsonDataTickets.data, jsonDataTickets.ultimosCuatro);

console.log('jsonDataTickets', jsonDataTickets);
console.log('dataTickets', dataTickets);
if( jsonDataTickets.dia !== (new Date().getDate()) ) {
    dataTickets.reiniciarData(new Date().getDate());
}
console.log('dataTickets', dataTickets);
export const colasListener = ( client: Socket, io: socketIO.Server ) => {
    client.on('nuevo-ticket', (payload, callback) => {
        //Generar nuevo ticket
        console.log('Generar un nuevo ticket...', client.id);
        callback( dataTickets.generarNuevoTicket() );
        client.broadcast.emit('cuatro-ultimos', dataTickets.obtenerUltimosCuatro());
    });
    client.on('atender-ticket', (payload, callback) => {
        //Generar nuevo ticket
    });
    client.on('cuatro-ultimos', (payload, callback) => {
        //Generar nuevo ticket
    });
}