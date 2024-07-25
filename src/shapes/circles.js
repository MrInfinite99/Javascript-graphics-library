export function drawCircle(ctx,radius,color,x,y){
ctx.fillstyle =color;
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, true);
ctx.fill();
}
