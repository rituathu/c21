var fixedRect, movingRect, f3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  f3 =createSprite(300,220,40,40);
  f3.shapeColor  = "pink"
  f3.debug = true;
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (zayden(movingRect,fixedRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "orange";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }
  drawSprites();

}



