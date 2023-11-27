const drawPlayer = (ctx, player)=>{
    ctx.fillStyle = 'lime';
    for( var i = 0; i < player.trail.length; i++ )
    {
      ctx.fillStyle = player.trail[i].color || 'lime';
      ctx.fillRect(player.trail[i].x, player.trail[i].y, 20, 20);
    }
}