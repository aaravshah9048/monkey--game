
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup , bananaGroup;
var score;

function preload(){
  
  
  monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
  
 
}



function setup() {
  createCanvas(400,400);
  
 monkey=createSprite(50,350,10,10);
 monkey.addAnimation("anm",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(10,380,800,10);
  
  score=0;
  bananaGroup = createGroup();
  
  obstacleGroup = new Group();
  

}


function draw() {
  monkey.collide(ground);
  background("white");
  
 score = Math.ceil(frameCount/frameRate())

   
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
 monkey.velocityY = monkey.velocityY + 0.8
  
  ground.visible = false;
  
  if(bananaGroup.isTouching(monkey)){
    
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    score = 0;
    
  }
  
  

  obs();
  banana();
  
  textSize(24);
  text("Score:" + score,270,50);
  
  drawSprites();
  
  
  
}

function obs(){
  if(frameCount % 200 === 0){
  var obstacle = createSprite(400,350,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.200;
    
    obstacle.velocityX = -5;
    
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 350;
  
  }
}

function banana(){
  
  if(frameCount % 80 === 0){
    
    var fruit = createSprite(400,200,10,10);
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    
    fruit.velocityX = -5;
    fruit.y=Math.round(random(120,200))
    fruit.lifetime = 300;
    
    
    
    
    bananaGroup.add(fruit);
    
  }
  
}  
  
  
    
  
      
  