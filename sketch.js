var back, bImage;
var monkey, monkeyImage;
var ground;
var banana;
var obstacle;
var obstacleImage;
var bananaImage;
var score;
var bananaGroup;
var obstacleGroup;
function preload(){
  bImage=loadImage("jungle.jpg");
 monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacleImage = loadImage("stone.png");
 bananaImage = loadImage("banana.png");  
}

function setup(){
  createCanvas(800, 400);
 back = createSprite(200,200,400,400);
  back.addImage(bImage);
  monkey = createSprite(50,360,10,10);
monkey.scale = 0.1;
  monkey.addAnimation("Animation",monkeyImage);  
  monkey.depth = back.depth+1;
  ground = createSprite(200,370,400,10);
  ground.visible = false;
  back.velocityX = -4;
  score = 0;
  bananaGroup = new Group();
  score.depth = back.depth+2;
  obstacleGroup  = new Group();
}

function draw() {
  

  background(220);
  
  if(keyDown("space")&&monkey.y>=310) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
   if(back.x<189){
     back.x = back.width/2; 
   }
  SpawnBananas();
  SpawnObstacle();
  bananaGroup;
  for(var i = 0;i<bananaGroup.length;i++){
  if(bananaGroup.get(i).isTouching(monkey)){
    bananaGroup.get(i).destroy();
   score = score+1;
   
  }
  }
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
      case 20: monkey.scale = 0.14;
      break;
      case 30: monkey.scale = 0.16;
      break;
      case 40: monkey.scale = 0.18;
      break;
      default: break;
  }
obstacleGroup;
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.1;
     }
  drawSprites();
  stroke("WHITE");
  textSize(20);
  fill("black");
  text("SCORE : "  +score,500,50);
}

function SpawnBananas(){
  if(frameCount%60==0){
    banana = createSprite(800,random(240,300),10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 160;
    bananaGroup.add(banana);
  }
  
}
function SpawnObstacle(){
  if(frameCount%70==0){
    obstacle = createSprite(800,340,10,10);
      obstacle.addImage("stone",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime=(800/6);
    obstacle.depth = monkey.depth-1;
    
    obstacleGroup.add(obstacle);
   
 }
}
