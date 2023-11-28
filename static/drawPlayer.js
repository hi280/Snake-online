const drawPlayer = (ctx, player)=>{
    ctx.fillStyle = 'lime';
    for( var i = 0; i < player.trail.length; i++ )
    {
      ctx.fillStyle = player.trail[i].color || 'lime';
      ctx.fillRect(player.trail[i].x, player.trail[i].y, 20, 20);
    }

    ctx.beginPath();
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.fillStyle = 'white';
    ctx.font = "15px sans-serif";
    ctx.fillText(player.name, player.trail[player.trail.length-1].x + 9.5, player.trail[player.trail.length-1].y+30);
    ctx.closePath()
}