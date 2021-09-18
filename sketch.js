var gameState;


var player,playerImg;
var path,pathImg,forestSound,wolfHowl;
var fire, fireImg;
var coin , coinImg,coinSound;
var coins;
var cactus,cactusImg;
var ground;
//coinGroup = new Group();
//fireGroup = new Group();

function preload(){
  pathImg = loadImage("depositphotos_211414398-stock-video-halloween-shortcut-road-forest-scary.jpg");
  playerImg = loadAnimation("boy running 1.png","boy running 2.png","boy running 3.png","boy running 4.png");
  forestSound = loadSound("dark-forest.mp3");
 wolfHowl = loadSound("mixkit-lone-wolf-howling-1729.wav");
  fireImg = loadImage("fire.png");
  coinImg = loadImage("—Pngtree—coin golden 3d digital_5879622.png")
  //coinSound = loadSound("mixkit-space-coin-win-notification-271.wav")
  cactusImg = loadImage("kisspng-cactus-clip-art-portable-network-graphics-image-fr-cactus-png-transparent-images-pictures-photos-pn-5c9d2a4d7ac150.5892471815538038535028.png")
  
  
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  forestSound.loop();
   path = createSprite(200,300,100,50)
   path.addImage(pathImg);
   path.scale = 4.5;
   path.velocityX  = -30;
    
   player = createSprite(300,500,100,50);
   player.addAnimation("player_running",playerImg);
   player.scale = 1;

   ground = createSprite(500,600,1000,10);
   ground.visible = false;
   

   textSize(25);

  

  

  


   
   
   


   
   
   

} function draw(){
  textSize(25);
 text("Coins:",coins,500,50);





  if (path.x < 0){
    path.x = width/2;
  }
 // if(coins.isTouching(player)){
    ///coins = coins + 5;
 // }
 
  
  if(frameCount % 200 === 0){
    spawnFire();
      } 
  
      
  
  if (frameCount % 500 === 0 ){
    wolfHowl.play();
  }
  if(frameCount % 10 === 0){
    spawnCoins();
  }
  if (frameCount % 100 === 0){
    spawnCactus();
  }
  //if(keyDown("space")){
    //ground.velocityY = -60;

  
 // }
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -78;

    
  }
  player.velocityY = player.velocityY +10;
  player.collide(ground)
  
  if (frameCount === 10){
    text("Press on space key to jump"+300,100)
  }

     drawSprites();
     
     }
   

   function spawnFire(){
     fire  = createSprite(Math.round(random(500,1000)),500,400,40,40)
     fire.addImage(fireImg);
     fire.scale = 0.5;
     fire.lifetime = 60;
     fire.velocityX = -30;
     
      }
  function spawnCoins(){
    coin = createSprite(Math.round(random(400,700)),500,400,40,40)
    coin.addImage(coinImg);
    coin.scale = 0.01;
    coin.lifetime = 60;
    coin.velocityX = -30;
    
 }
 function spawnCactus(){
   cactus = createSprite(Math.round(random(500,1000)),500,400,40,40);
   cactus.addImage(cactusImg);
   cactus.lifetime = 60;
   cactus.velocityX = -30;
   cactus.scale = 0.5
   
 }
  