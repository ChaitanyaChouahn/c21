function setup() {
  createCanvas(800,400);
  fixedrect =createSprite(400, 200, 50, 50);
  movingrect =createSprite(200, 200, 50, 50);
}

function draw() {
  background("black"); 
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

if(isTouching(movingrect,fixedrect)){

  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}
else {

  movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
}


drawSprites();
}

