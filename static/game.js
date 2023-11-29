function start(name, color){
  const socket = io()
 console.log(color)
const WINDOW_WIDTH = 1280;
const WINDOW_HIGHT = 720;

const canv = document.getElementById("canvas")
//canv.style = "position: absolute; top: 50px; left: 10%"
canv.width = WINDOW_WIDTH;
canv.height = WINDOW_HIGHT;
socket.emit("new player", name);

class Player{
    constructor(props){
        this.name = props.name;
        this.id = props.id;
        this._playerRadius = 30;
        this.trail   = [];
    }   
}

document.addEventListener('keydown', changeDirection);
const player = new Player({
    id: socket.id,
    name: name,
})
    var
        px = 600;
        py = 350
        ctx					= canv.getContext('2d'), // 2d context
        gs = fkp			= false, // game started && first key pressed (initialization states)
        speed = baseSpeed 	= 3, // snake movement speed
        xv = yv				= 0, // velocity (x & y)
        pw = ph				= 20, // player size
        aw = ah				= 20, // apple size
        apples				= [], // apples list
        tail 				= 10, // tail size (1 for 10)
        tailSafeZone		= 20, // self eating protection for head zone (aka safeZone)
        cooldown			= false, // is key in cooldown mode
        score				= 0; // current score
        color = color


  function loop(players)
  {
    // logic
  
    // force speed
    px += xv;
    py += yv;
  
    // teleports
    if( px > canv.width )
      {px = 0;}
  
    if(     px + pw < 0 )
      {px = canv.width;}
  
    if( py + ph < 0 )
      {py = canv.height;}
  
    if( py > canv.height )
      {py = 0;}
  
    // paint the snake itself with the tail elements
  
    player.trail.push({x: px, y: py, color: color});
  
    // limiter
    if( player.trail.length > tail )
    {
        player.trail.shift();
    }
  
    // eaten
    if( player.trail.length > tail )
    {
        player.trail.shift();
    }
    let isdead = false;
    // self collisions
    if(gs)
    {
        for(const id in players){
            const Player = players[id]
            for( var i = Player.trail.length - tailSafeZone; i >= 0; i-- )
            {
                if(
                    px < (Player.trail[i].x + pw)
                    && px + pw > Player.trail[i].x
                    && py < (Player.trail[i].y + ph)
                    && py + ph > Player.trail[i].y
                )
                {
                    isdead = true
                }
            }
        }
      
    }
    if(isdead){
        gs = false
        location.reload()
    }

    for( var a = 0; a < apples.length; a++ )
  {
    ctx.fillStyle = apples[a].color;
    ctx.fillRect(apples[a].x, apples[a].y, aw, ah);
  }
   if(!gs) return

  for( var a = 0; a < apples.length; a++ )
  {
    if(
      px < (apples[a].x + pw)
      && px + pw > apples[a].x
      && py < (apples[a].y + ph)
      && py + ph > apples[a].y
    )
    {
      // got collision with apple
      socket.emit("eat", apples[a].id)
      apples.splice(a, 1); // remove this apple from the apples list
      tail += 10; // add tail length
      speed += .1; // add some speed
      break;
    }
  }
  }
  


socket.on("updateFood", foods =>{
    apples = foods
})



  
  
socket.on("state", (players) =>{
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, WINDOW_WIDTH, WINDOW_HIGHT)
    ctx.closePath();
    for(const id in players){
        if(id != socket.id){
            const player = players[id]
            drawPlayer(ctx,player)
        }
    }
    if(player && socket){
        loop(players);
        socket.emit("position", player.trail);
        drawPlayer(ctx, player)
    }

});

function changeDirection(evt)
{
  if( !fkp && [37,38,39,40].indexOf(evt.keyCode) > -1 )
  {
    setTimeout(function() {gs = true;}, 1000);
    fkp = true;
  }

  if( cooldown )
    {return false;}

  /*
    4 directional movement.
   */
  if( evt.keyCode == 37 && !(xv > 0) ) // left arrow
    {xv = -speed; yv = 0;}

  if( evt.keyCode == 38 && !(yv > 0) ) // top arrow
    {xv = 0; yv = -speed;}

  if( evt.keyCode == 39 && !(xv < 0) ) // right arrow
    {xv = speed; yv = 0;}

  if( evt.keyCode == 40 && !(yv < 0) ) // down arrow
    {xv = 0; yv = speed;}

  cooldown = true;
  setTimeout(function() {cooldown = false;}, 100);
}
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("detect android")
    document.getElementById("buttonsAndroid").removeAttribute("hidden")
}
function up(){
  if( !(yv > 0) ) // top arrow
    {xv = 0; yv = -speed;}
}
function left(){
  if(!(xv > 0) ) // left arrow
    {xv = -speed; yv = 0;}
}
function right(){
  if(!(xv < 0) ) // right arrow
    {xv = speed; yv = 0;}
}
function down(){
  if(!(yv < 0) ) // down arrow
    {xv = 0; yv = speed;}
}
