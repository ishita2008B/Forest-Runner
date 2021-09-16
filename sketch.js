var gameState;


var player,playerImg;
var path,pathImg,forestSound,wolfHowl;
var fire, fireImg;
function preload(){
  pathImg = loadImage("depositphotos_211414398-stock-video-halloween-shortcut-road-forest-scary.jpg");
  playerImg = loadAnimation("boy running 1.png","boy running 2.png","boy running 3.png","boy running 4.png");
  forestSound = loadSound("dark-forest.mp3");
 // wolfHowl = loadSound("mixkit-lone-wolf-howling-1729.wav");
  fireImg = loadImage("fire.png");
  
  
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  forestSound.loop();
   path = createSprite(200,300,100,50)
   path.addImage(pathImg);
   path.scale = 4.5;
   path.velocityX  = -30;
    
   player = createSprite(200,300,100,50);
   player.addAnimation("player_running",playerImg);
   player.scale = 1;
   player.x = 100

  

  


   
   
   


   
   
   

} function draw(){
  if (path.x > -width){
    path.x = -width/-2;
  }
  
  if(frameCount === 100){
    spawnFire();
      } 
      
  if (keyDown("space")){
    player.velocityY = -80
    
  }
  
  
   

     drawSprites();
     
     }
   

   function spawnFire(){
     fire  = createSprite(Math.round(random,700,900))
     fire.addImage(fireImg);
     fire.scale = 0.5;



   }
  