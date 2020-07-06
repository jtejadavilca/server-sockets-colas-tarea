import { Router, Request, Response } from 'express';


const routerColas = Router();

routerColas.get( '/colas', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        mensaje: 'Todo bien'
    });
});

export default routerColas;