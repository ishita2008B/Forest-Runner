var gameState;


var player,playerImg;
var path,pathImg,forestSound,wolfHowl;
var fire, fireImg;
function preload(){
  pathImg = loadImage("depositphotos_211414398-stock-video-halloween-shortcut-road-forest-scary.jpg");
  playerImg = loadImage("—Pngtree—school girl skateboarding original hand_5749612.png");
  forestSound = loadSound("dark-forest.mp3");
  wolfHowl = loadSound("mixkit-lone-wolf-howling-1729.wav");
  fireImg = loadImage("fire.png");
  
  
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  forestSound.loop();
   path = createSprite(200,300,100,50)
   path.addImage(pathImg);
   path.scale = 4.5;
   path.velocityX  = 12;
    
   player = createSprite(200,300,100,50);
   player.addImage(playerImg);
   player.scale = 0.2;
   player.x = 100

  

  


   
   
   


   
   
   

} function draw(){
  if (path.x > width){
    path.x = width/2;
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
     fire  = createSprite(random(50,350),40,10,10)
     fire.addImage(fireImg);
     fire.scale = 0.5;



   }
  