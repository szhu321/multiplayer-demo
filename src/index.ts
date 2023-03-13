import { Server, LobbyRoom } from "colyseus";
import WaitingRoom from "./rooms/waiting_room/WaitingRoom";

const PORT = 3000;
const gameServer = new Server();

gameServer.define('lobby', LobbyRoom);
    
gameServer
    .define('waiting', WaitingRoom)
    .enableRealtimeListing();

gameServer.listen(PORT).then(() => {
    console.log("Game Server is listening on port: ", PORT);
});
