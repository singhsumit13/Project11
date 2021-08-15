var Runner, path, coin, bomb, energyDrink, power;

function preload(){
  //pre-load images

  RunnerImg=loadAnimation("Runner-1.png","runner-2.png");
  pathImg=loadImage("path.png");
  powerImg=loadImage("power.png");
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  //create path sprites
  path=createSprite(200,200,200,400);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  
  //create runner sprites
  Runner=createSprite(180,340,50,170);
  Runner.addAnimation("running", RunnerImg);
  Runner.scale=0.05;

  //create power sprites
  //power=createSprite(200,80,100,100);
 // power.addImage(powerImg);
 
  //create coin sprites
  //coin=createSprite(200,200,80,90);
 // coin.addImage(coinImg);
  //coin.scale=0.3
 

  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  Runner.x=mouseX;
  
  if(path.y>=350){
    path.y=height/2
  }
  Runner.collide(left_boundary)
  Runner.collide(right_boundary)

  drawSprites();
}