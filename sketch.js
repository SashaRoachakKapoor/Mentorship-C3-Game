var splashscreen;
var playbutton,aboutbutton;
var gameState="wait";
var health1 = 200;
var maxhealth1 = 200;
var score1 = 0;
var playerimg, player;
var enemy; enemyimg

function preload(){
splashscreen=loadImage('assets/The quest.gif')
bgwait=loadImage('assets/level1_bg.avif')
playerimg=loadImage('assets/captain_america.png')
enemyimg=loadImage('assets/chitauri.png')
}

function setup(){
createCanvas(windowWidth, windowHeight)


playbutton= createImg("assets/play_button.png");
playbutton.position(width-300,height-100);
playbutton.size(200,75);


aboutbutton= createImg("assets/information_button.png");
aboutbutton.position(100,height-100);
aboutbutton.size(200,75);

player = createSprite(50, height-100);
player.addImage(playerimg);
player.visible = false;
player.scale=0.5


}


function draw(){
    if(gameState=="wait"){
        background(splashscreen);
    }
        playbutton.mousePressed(()=>{
            gameState="play";
            playbutton.hide();
    
       })
    
       aboutbutton.mousePressed(()=>{
            gameState="aboutgame";   
            aboutbutton.hide();
    })
    
    if(gameState=="aboutgame"){
        aboutpopup();
    }

    if (gameState == "play") {
        background(bgwait);
        aboutbutton.hide();
        playbutton.hide();
        player.visible = true
       healthBar(width-300,33,health1,maxhealth1,"violet");
       healthBar(155,33,10,200,"green")
       movement();
       spawnRewards();
       spawnEnemy();
      }
    
    
      drawSprites()
    
      if(gameState == "play") {
        textSize(50)
        stroke("red")
        strokeWeight(4)
        fill("yellow")
        text("LEVEL 1",width/2-100,50)
        textSize(30)
        fill("cyan")
        stroke("red")
        text("TARGET :",15,50)
        }
    
}

function aboutpopup(){
    swal({
title:"Avengers- Assemble!!!",
text:"The Avengers have all been captured, even director of S.H.I.E.L.D, Agent Nick Fury! The leader of the Avengers, Captain America is the only one that can save them! However, he needs to face many villains along the way. Can he succeed in his quest? Remember to watch out for the obstacles and collect the points to reach to the next level!",
textAlign:"center",
imageUrl:"assets/captain_america.png",
imageSize:"200x200",
confirmButtonText:"Let's Assemble!!!",
confirmButtonColor:"blue",
    },
    function(){
        gameState="wait"
    }
)
}


function healthBar(x, y, h, mx, clr) {
    noFill();
    stroke("cyan");
    strokeWeight(2);
    rect(x, y, mx, 20);
    fill(clr);
    rect(x, y, h, 20);
  }
  
  function spawnRewards() {
    if (frameCount % 100 == 0) {
      reward = createSprite(
        Math.round(random(10, width - 100)),
        Math.round(random(50, height - 100)),
        50,
        50
      );
    }
  }
  
  function movement() {
    if (keyDown("RIGHT")) {
      player.x += 5;
    }
    if (keyDown("DOWN")) {
      player.y+= 5;
    }
    if (keyDown("UP")) {
        player.y-= 5;
      }
    if (keyDown("LEFT")) {
        player.x-= 5;
      }
  }
  
  function spawnEnemy() {
    if (frameCount % 60 == 0) {
      enemy = createSprite(width,Math.round(random(50,height-150)) );
      enemy.addImage(enemyimg)
      enemy.scale=0.3
      enemy.velocityX=-7
    }
  }
  
