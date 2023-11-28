const players = {}

class Player{
    constructor(props){
        this.name = props.name;
        this.id = props.id;
        this._playerRadius = 30;
        this.trail   = [];
    }   
}

module.exports.getPlayers = (socket) =>{
    socket.on("new player", (name)=>{
        console.log("connected "+ name)
        players[socket.id] = new Player({
            id: socket.id,
            name: name,
        })
    });
    socket.on("position",data=>{
        const player = players[socket.id] || {};
        player.trail = data
    })
    socket.on("disconnect", () =>{
        console.log("disconected " + socket.id)
        delete players[socket.id]
    })
    return players;
}