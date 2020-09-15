var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  //set the background to black
  background(0); 

  //make the moving rectangle move with the mouse
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  //draw the sprites
  drawSprites();
}