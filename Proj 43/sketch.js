var iss;
var hasDocked = false;
var spacecraft;
function preload(){
  bg = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png")
  space1 = loadImage("spacecraft1.png")
  space2 = loadImage("spacecraft2.png")
  space3 = loadImage("spacecraft3.png")
  space4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.25

  spacecraft = createSprite(285,284)
  spacecraft.addImage(space1);
  spacecraft.scale = 0.25
}

function draw() {
  background(bg);  
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown(UP_ARROW)){
      
      spacecraft.y = spacecraft.y -2
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(space3)
      spacecraft.x = spacecraft.x -2

    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(space4)
      spacecraft.x = spacecraft.x +2
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(space1)
    }
    
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25)
    fill("white");
    text("docking sucessful ", 200,300)
  }
  drawSprites();
}