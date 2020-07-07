import fs from 'fs';
import path from 'path';
import Ticket from './ticket';
export default class DataTickets {
    constructor(
        private dia: number,
        private data: Ticket[],
        private ultimosCuatro: Ticket[]
    ) {

    }

    getDia(): number {
        return this.dia;
    }
    agregarNuevoTicket( nuevoTicket: Ticket ) {
        this.data.push( nuevoTicket );
        this.actualizarArchivoData();
    }

    atenderTicket( ticketPorAtender: Ticket ) {
        this.ultimosCuatro = [ ...this.ultimosCuatro.slice(-3), ticketPorAtender ];
        this.actualizarArchivoData();
    }
    obtenerUltimosCuatro() {
        return this.ultimosCuatro;
    }

    reiniciarData( dia: number ){
        this.dia = dia;
        this.data = [];
        this.ultimosCuatro = [];
        this.actualizarArchivoData();
    }

    actualizarArchivoData() {
        fs.writeFileSync( path.join(__dirname, '../data/data.json'), JSON.stringify(this) );
    }
}