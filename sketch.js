var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(225,225,60,30);
  movingRect = createSprite(290,290,30,60);

}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
 else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}