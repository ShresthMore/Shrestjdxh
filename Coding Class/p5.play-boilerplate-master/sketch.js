var  fixedrect,movingrect;
var gameobject1 ,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,80,50)
  movingrect.debug=true;
  fixedrect.debug=true;
  movingrect.shapeColor="green";
fixedrect.shapeColour="green";
gameobject1=createSprite(100,100,50,50);
gameobject1.shapeColor="orange";
gameobject2=createSprite(200,100,50,50);
gameobject2.shapeColor="orange";
gameobject3=createSprite(300,100,50,50);
gameobject3.shapeColor="orange";
gameobject4=createSprite(400,100,50,50);
gameobject4.shapeColor="orange";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
 
var return_value=isTouching()
console.log("istouchingoutput"+ return_value)
  if(isTouching(movingrect,gameobject1)){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2 ){
 return true;
    }
    else{
    return false;
    }
}