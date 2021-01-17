var monster1Temp, monster1, monster2Temp, monster2;
var fruit1Temp, fruit2Temp, fruit4Temp, fruit4Temp;
var swordTemp, sword;
var fruit1, fruit2, fruit3, fruit4;
var fruitGroup, monsterGroup, fruit1Group, fruit2Group, fruit3Group,fruit4Group;
var sound, gameOverSound;
var gameOverTemp, gameOver;
var score = 0;
var PLAY = 1, END = 0;
var gameState = PLAY;

function preload() 
{
  //loading images and sounds
  monster1Temp = loadImage("alien1.png");
  monster2Temp = loadImage("alien2.png")
  fruit1Temp = loadImage("fruit1.png");
  fruit2Temp = loadImage("fruit2.png");
  fruit3Temp = loadImage("fruit3.png");
  fruit4Temp = loadImage("fruit4.png");
  swordTemp = loadImage("sword.png");
  
  sound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
  gameOverTemp = loadImage("gameover.png");
}

function setup()
{
  createCanvas(600,600);
  
  sword = createSprite(300, 300, 10, 10);
  sword.addImage(swordTemp);
  sword.setCollider("rectangle",18,-17,30,70,215);
  
  gameOver = createSprite(300, 300, 10, 10);
  gameOver.addImage(gameOverTemp);

  //creating groups
  fruitGroup = createGroup();
  monsterGroup = createGroup();
  fruit1Group = createGroup();
  fruit2Group = createGroup();
  fruit3Group = createGroup();
  fruit4Group = createGroup();
}

function draw()
{
  background(180);
  World.frameRate = 60;

  if (gameState == PLAY) 
  {
    gameOver.visible = false;

    sword.x = mouseX;
    sword.y = mouseY;

    spawnFruits();
    spawnMonsters();
    scoring();

    if(sword.isTouching(monsterGroup))
    {
      gameState = END;
      gameOverSound.play();
    }
    
  }

  drawSprites();

  //display score
  stroke("black");
  fill("black");
  strokeWeight(2);
  textSize(25);
  text(score, 5, 25);
  
  if (gameState == END) 
  {
    fruitGroup.destroyEach();
    monsterGroup.destroyEach();

    stroke("black");
    fill("black");
    strokeWeight(2);
    textSize(25);
    text("Press R to restart", 200, 350);
    gameOver.visible = true;

    if(keyDown("r"))
    {
      score = 0;
      gameState = PLAY;      
    }
  }
  
}

//FUNCTIONS
function spawnFruits() 
{
  
  if (frameCount % Math.round(random(15, 40)) == 0) 
  {
    var rand = Math.round(random(1, 4));
  
    if(rand == 1)
    {
      fruit1Spawn();
    } else if (rand == 2) {
      fruit2Spawn();
    } else if (rand == 3) {
      fruit3Spawn();
    } else {
      fruit4Spawn();
    }
  }
  
}

function spawnMonsters() 
{
  
  if (frameCount % Math.round(random(90,180)) == 0) 
  {
    
    var rand = Math.round(random(1, 2));

    if (rand == 1) 
    {
      monster1 = createSprite(10, random(20, 550), 10, 10);
      monster1.addImage(monster1Temp);
      monster1.scale = 0.5;
      monster1.velocityX = (6+score/100);
      monsterGroup.add(monster1);
    } else {
      monster2 = createSprite(610, random(20, 550), 10, 10);
      monster2.addImage(monster2Temp);
      monster2.scale = 0.5;
      monster2.velocityX = -(6+score/100);
      monsterGroup.add(monster2);
    }
  }
  
}

function scoring() 
{
  
  if(sword.isTouching(fruit1Group)) 
  {
    fruit1Group.destroyEach();
    sound.play();
    score = score + 20;
  }
 
  if(sword.isTouching(fruit2Group))
  {
    fruit2Group.destroyEach();
    sound.play();
    score = score + 10;
  }
  
  
  if(sword.isTouching(fruit3Group))    
  {
    fruit3Group.destroyEach();
    sound.play();
    score = score + 30;
  }

  if(sword.isTouching(fruit4Group))   
  {
    fruit4Group.destroyEach();
    sound.play();
    score = score + 45;
  }

}

function fruit1Spawn()
{
  
  var rand = Math.round(random(1,2));
  
  if(rand == 1)
  {
    fruit1 = createSprite(-10,random(20, 550),10,10);
    fruit1.addImage(fruit1Temp);
    fruit1.scale = 0.3;
    fruit1.velocityX = (6+score/100);
    fruitGroup.add(fruit1);
    fruit1Group.add(fruit1);
    fruit1.lifeTime = 90;
  }  
  
  if(rand == 2)
  {
    fruit1 = createSprite(610,random(20, 550),10,10);
    fruit1.addImage(fruit1Temp);
    fruit1.scale = 0.3;
    fruit1.velocityX = -(6+score/100);
    fruitGroup.add(fruit1);
    fruit1Group.add(fruit1);
    fruit1.lifeTime = 90;
  }                        

}

function fruit2Spawn()
{
  var rand = Math.round(random(1,2));
  
  if(rand == 1)
  {
    fruit2 = createSprite(-10,random(20, 550),10,10);
    fruit2.addImage(fruit2Temp);
    fruit2.scale = 0.3;
    fruit2.velocityX = (6+score/100);
    fruitGroup.add(fruit2);
    fruit2Group.add(fruit2);
  }  
  
  if(rand == 2)
  {
    fruit2 = createSprite(610,random(20, 550),10,10);
    fruit2.addImage(fruit2Temp);
    fruit2.scale = 0.3;
    fruit2.velocityX = -(6+score/100);
    fruitGroup.add(fruit2);
    fruit2Group.add(fruit2);
    fruit2.lifeTime = 2;
  }                        
  
}


function fruit3Spawn()
{
  var rand = Math.round(random(1,2));
  
  if(rand == 1)
  {
    fruit3 = createSprite(-10,random(20, 550),10,10);
    fruit3.addImage(fruit3Temp);
    fruit3.scale = 0.3;
    fruit3.velocityX = (6+score/100);
    fruitGroup.add(fruit3);
    fruit3Group.add(fruit3);
    fruit3.lifeTime = 2;
  }  
  
  if(rand == 2)
  {
    fruit3 = createSprite(610,random(20, 550),10,10);
    fruit3.addImage(fruit3Temp);
    fruit3.scale = 0.3;
    fruit3.velocityX = -(6+score/100);
    fruitGroup.add(fruit3);
    fruit3Group.add(fruit3);
    fruit3.lifeTime = 2;
  }                        

}

function fruit4Spawn()
{
  var rand = Math.round(random(1,2));

  if(rand == 1)
  {
    fruit4 = createSprite(-10,random(20, 550),10,10);
    fruit4.addImage(fruit4Temp);
    fruit4.scale = 0.3;
    fruit4.velocityX = (6+score/100);
    fruitGroup.add(fruit4);
    fruit4Group.add(fruit4);
    fruit4.lifeTime = 2;
  }  
  
  if(rand == 2)
  {
    fruit4 = createSprite(610,random(20, 550),10,10);
    fruit4.addImage(fruit4Temp);
    fruit4.scale = 0.3;
    fruit4.velocityX = -(6+score/100);
    fruitGroup.add(fruit4);
    fruit4Group.add(fruit4);
    fruit4.lifeTime = 2;
  }        
  
}