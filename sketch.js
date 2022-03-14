var backgroundImg;
var backgroundImg1;
var normal;
var lander;
var obstacle, obstacleGroup;
var ground;
var alien, alien2, alien3;
var rand;
var fuel;
var fuel1;
var score = 0;


function preload(){
  backgroundImg=loadImage("bg.png");
  backgroundImg1=loadImage("bg_sur.png");
  normal=loadImage("normal.png");
  alien = loadImage("alien.png");
  alien2 = loadImage("alien2.png");
  alien3 = loadImage("alien3.png");
  fuel1 = loadImage("fuel.png");
}

function setup(){
  createCanvas(1000,800);

  lander = createSprite(600,350,40,40);
  lander.addImage(normal);
  lander.scale = 0.1;
  
  obstacleGroup = new Group();
  
  ground = createSprite(500,800, 1000, 20);
  ground.shapeColor = "brown";
}

function draw(){
  background("pink");
  image(backgroundImg1, 0,0)
  
  
  textSize(25);
  fill("white");
  text("Score: " +score, 50, 100);
  
  

  if (keyDown(UP_ARROW)){
    lander.y -=5;
  }
  if (keyDown(DOWN_ARROW)){
    lander.y +=5;
  }
  if (keyDown(RIGHT_ARROW)){
    lander.x +=5;
  }
  if (keyDown(LEFT_ARROW)){
    lander.x -=5;
  }

  if (obstacleGroup.isTouching(lander)){
    console.log("Game Over!")
  }

  spawnFuel();
  spawnObstacles();

  
  

  
  
  drawSprites();

  /*(if(fuel.isTouching(lander)){
    score = score+5
  }*/
}

function spawnObstacles(){
  if (frameCount %60==0){
     obstacle = createSprite(Math.round(random(1,1000)), 50, 50, 50);
    obstacle.velocityY =10;

    var rand = Math.round(random(1,3));
    switch (rand) {
      case 1:
        obstacle.addImage(alien);
        obstacle.scale = 0.1;
        break;
        case 2:
          obstacle.addImage(alien2);
          obstacle.scale = 0.5;
           break;
          case 3:
            obstacle.addImage(alien3);
            obstacle.scale = 0.1;
            break;
      
      default:
        break;
    }

    obstacleGroup.add(obstacle);
  }
}

function spawnFuel(){
  if (frameCount %200 == 0){
   fuel = createSprite(Math.round(random(1,1000)), 50, 30, 30);
   fuel.addImage(fuel1);
   fuel.velocityY +=15
   fuel.scale = 0.3
  }
}