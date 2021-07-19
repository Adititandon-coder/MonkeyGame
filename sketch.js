var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600)
 
  monkey = createSprite(50,550,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  ground = createSprite(200,590,800,15) 
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  
 score=0
}


function draw() {

  background("white");
  
  monkey.collide(ground)
  
  if(ground.x<300){
    ground.x=300
  }
  
  score = score+Math.round(getFrameRate()/60)
  if(keyDown("space")){
     monkey.velocityY=-10 
     }
  
  monkey.velocityY=monkey.velocityY+0.8
  obstacles()
  bananas()
  drawSprites()
  textSize(15)
  text("SurviveTime:"+score,400,50)
}

//spawn bananas
  function bananas(){
    
    if (frameCount%80===0){
      banana = createSprite(300,100,20,20)
      banana.y = Math.round(random(500,250));
      banana.scale=0.1
      banana.addImage(bananaImage);
      banana.velocityX=-4
    }
  }

//spawn obstacles
  function obstacles(){
    
    if (frameCount%100===0){
      obstacle = createSprite(300,580,20,20)
      obstacle.scale=0.1
      obstacle.addImage(obstacleImage);
      obstacle.velocityX=-4
      
    }
  }


