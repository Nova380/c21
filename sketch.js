function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(600,100,50,50);
  rect3 = createSprite(200,100,50,50);
  rect2.velocityX=-5;
  rect3.velocityX=5;
  rect2.shapeColor = "yellow";
  rect3.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(istouching(rect1,movingrect)){
    rect1.shapeColor="violet";
    movingrect.shapeColor="violet";
  }
  else{
    rect1.shapeColor="green";
  movingrect.shapeColor="green"; 
  }
  bounceOff(rect2,rect3);
  drawSprites();
}
