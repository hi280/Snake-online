const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

const getPlayers = require("./player").getPlayers;

const app = express();
const server = http.Server(app)
const io = socketIO(server)

const PORT = process.env.PORT || 5000

app.set("port", PORT);
app.use("/static", express.static(path.dirname(__dirname) + "/static"));

app.get("/", (require, response) => {
    response.sendFile(path.join(path.join(__dirname), "index.html"));
});

server.listen(PORT, ()=>{
    console.log("Starting server on port " + PORT);
});

let players = null;
let count = 1;
io.on("connection", (socket)=>{
    players = getPlayers(socket)
    socket.on("eat", (id) =>{
      for(let i = 0;i < apples.length;i++){
        if(apples[i].id == id){ 
          apples.splice(i, 1);
          spawnApple()
          break
        }
      }
    })
    io.sockets.emit("updateFood", apples);
    console.log("conected " + socket.id)
})

const apples = []

const gameLoop = (players, io) =>{
    io.sockets.emit("state", players);
}

setInterval(() =>{
    if(players && io){
        gameLoop(players,io)
    }
}, 1000/60)

spawnApple()
spawnApple()

function spawnApple()
{
  var
    newApple = {
      x: ~~(Math.random() * 1280),
      y: ~~(Math.random() * 720),
      id: "apple" + Math.random() * 1000,
      color: 'red'
    };

  apples.push(newApple);

  if( apples.length < 3 && ~~(Math.random() * 1000) > 700 )
  {
    // 30% chance to spawn one more apple
    spawnApple();
  }
  io.sockets.emit("updateFood", apples);
}