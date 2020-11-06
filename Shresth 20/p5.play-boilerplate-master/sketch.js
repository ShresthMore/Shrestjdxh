var car,wall;
var speed,weigt;

function setup() {
  car =createSprite(50,200,50,50);
  wall =createSprite( 1500 ,200,60,height/2)
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
car.velocityX=speed;

function draw() {
  background(255,255,255);  
  drawSprites();
  if (wall.x-car.x<(car.width=wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight* speed*speed/22509;
  if (deformation>180)
  {
    car.shapeColor=(255,0,0);
  }
  if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0)
}
  }
}
