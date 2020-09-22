var monkey, monkey_running
var ground
var banana, bananaGroup, bananaImage;
var obstacle, obstacleGroup, obstacleImage;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(600, 200);
  monkey = createSprite(70, 150, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(300, 190, 1200, 20)
  ground.velocityX = -4;

}


function draw() {
  background("lightblue");

  monkey.collide(ground);
  if (ground.x < 0) {
    ground.x = 300;

  }

  bananaGroup = new Group();
  if (keyDown("space") && monkey.y >= 149) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.7;

  console.log(monkey.y);

  survivalTime = Math.round(frameCount / 60)
  text("Survival Time = " + survivalTime, 100, 50)

  spawnBanana();
  spawnObstacle();
  drawSprites();
}

function spawnBanana() {

  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 165, 40, 10);
    banana.y = Math.round(random(150, 100));
    banana.addImage("banana", bananaImage);
    banana.velocityX = -3;

    banana.lifetime = 200;
    banana.scale = 0.1;

    bananaGroup.add(banana);

  }

}



function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 170, 40, 10);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;

    //assign lifetime to the variable
    obstacle.lifetime = 200;
  }
}