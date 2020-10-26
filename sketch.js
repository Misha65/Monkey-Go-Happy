var score;
var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacleImage;
var ground;
var FoodGroup, obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 400);
  monkey=createSprite(100,350,50,60);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(300,390,600,5);
  ground.velocityX=-2;
  ground.visible=false;
}


function draw() {
background(0);
  
  if(keyDown("space")){
    monkey.velocityY=-5;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  
 text(mouseX+", "+mouseY,mouseX,mouseY);
  drawSprites();
  spawnObstacles();
  spawnBanana();
  
}

function spawnObstacles(){
if(World.frameCount%300===0){
   obstacles=createSprite(600,360,10,40);
   obstacles.addImage(obstacleImage);
   obstacles.scale=0.25;
   obstacles.velocityX=-5;
   obstacles.lifetime=100;
} 
}

function spawnBanana(){
if(World.frameCount%200===0){
   banana=createSprite(600,190,10,40);
   banana.addImage(bananaImage);
   banana.scale=0.20;
   banana.velocityX=-5;
   banana.lifetime=100;
} 
}




