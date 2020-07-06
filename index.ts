import Server from './classes/server';


const server = Server.instance

server.start( (port: number) => {
    console.log(`Servidor escuchando en el puerto ${ port }`);
});