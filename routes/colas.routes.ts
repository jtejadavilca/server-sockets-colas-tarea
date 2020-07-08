import { Router, Request, Response } from 'express';
import { dataTickets } from '../sockets/socket';


const routerColas = Router();



routerColas.get( '/colas/cuatro-ultimos', (req: Request, resp: Response) => {
    resp.send(dataTickets.obtenerUltimosCuatro());
});

export default routerColas;