var player;
var bgrp;
var lgrp;
var edges;
var points = 0;
var l1Image;
var plh;
var plh2;
var li;
var liImage;
var shut;
var lose;
var win;
var hit;
var collide;
var box;
var intro;
var introImage;
var war;
var warImage;
var a,aImage,b,bImage,c,cImage;
var le1,le2,le3,le4;
var le1Image,le2Image,le3Image,le4Image;
var p = 0;
function preload(){
l1Image = loadImage("large.jpg");
liImage = loadImage("li.gif");
shut = loadSound("shut.mp3");
lose = loadSound("lose.wav");
win = loadSound("win.wav");
hit = loadSound("hit.wav");
collide = loadSound("collide.wav");
warImage = loadImage("back.png");
introImage = loadImage("intro.jpg");
aImage = loadImage("A.png");
bImage = loadImage("b.png");
cImage = loadImage("C.png");
le1Image = loadImage("1level.gif");
le2Image = loadImage("2level.gif");
le3Image = loadImage("3level.gif");
le4Image = loadImage("4level.gif");
}

function bubble(){
  var s = round(random(0,3));
  if(s === 0){
    var ry =  random(0,700);
    var rx = -31;
  }else if(s === 1){
    var rx =  random(0,1390);
    var ry = -31;
  }else if(s === 2){
    var ry =  random(0,700);
    var rx = 1390;
  }else if(s === 3){
    var rx =  random(0,1300);
    var ry = 731;
  }
  var b = createSprite(rx,ry,0.1,0.1);
  b.debug = true;
  b.setCollider("circle",0,0,20);
  
  if(b.x > 300){
    b.velocityX = 0 - random(1,20);
  }else{
    b.velocityX = random(1,20);
  }
  if(b.y > 300){
    b.velocityY = 0 - random(1,20);
  }else{
    b.velocityY = random(1,20);
  }
  bgrp.add(b);
  b.lifetime = 400;
}
function setup() {
 
  createCanvas(1340,640);

  war = createSprite(1340/2,640/2,1340,640);
  war.addImage(warImage);
  player = createSprite(675,320,30,40);
  player.addImage(l1Image);
  player.scale = 0.1;
   
  player.rotateToDirection = true;
  player.maxSpeed = 15;
  player.setCollider("rectangle",0,0,850,450)
  player.debug = false;
  
  plh = createSprite(675,320,10000,1);
  plh.setCollider("rectangle",0,0,10000,1000);
  plh.rotateToDirection = true;
  plh.shapeColor = "blue";

  plh2 = createSprite(675,320,1,10000);
  plh2.setCollider("rectangle",0,0,100000,1000);
  plh2.rotateToDirection = true;
  plh2.shapeColor = "blue";
  
  box = createSprite(675,320,1,1);
  box.debug = true;
  box.setCollider("circle",0,0,100);
  box.visible = true;
  
 intro = createSprite(1340/2,640/2,1340,640);
  intro.addImage(introImage);
  intro.scale = 1.3;


  a = createSprite(100,550,1,1);
  a.addImage(aImage);
  a.scale = 1;

  b = createSprite(580,560,1,1);
  b.addImage(bImage);
  b.scale = 0.5;

  c = createSprite(900,560,1,1);
  c.addImage(cImage);
  c.scale = 0.7;

  intro.depth = a.depth;
  a.depth = a.depth + 2;
  a.depth = b.depth;
  b.depth = c.depth;
  
  le1 = createSprite(1150,375,20,20);
  le1.addImage(le1Image);
  le1.scale = 0.3;
  le1.setCollider("rectangle",0,0,500,185);
  

  le2 = createSprite(1150,435,20,20);
  le2.addImage(le2Image);
  le2.scale = 0.3;
  le2.setCollider("rectangle",0,0,500,185);
  

  le4 = createSprite(1150,590,20,20);
  le4.addImage(le4Image);
  le4.scale = 0.4;
  le4.setCollider("rectangle",0,50,320,150);
 
  le3 = createSprite(1150,500,20,20);
  le3.addImage(le3Image);
  le3.scale = 0.3;
  le3.setCollider("rectangle",0,80,450,185);
 

  edges = createEdgeSprites();
  bgrp = createGroup();
  lgrp = createGroup();
  points.shapeColor = "red";
}

function draw() {
  background(0,0,0);
  drawSprites();
  move();
 
  bgrp.collide(box);

  if(points>100 && p === 2){
    alert("You won");
    points = 0;
    p = 0;
    win.play();
    box.x = 675;
    player.x = 675;
    player.y = 320;  
    box.y= 320;
  }
  if(points>100 && p === 1){
    alert("You won");
    points = 0;
    p = 0;
    win.play();
    box.x = 675;
    player.x = 675;
    player.y = 320;  
    box.y= 320;
  }
  
  if(points>100 && p === 4){
    alert("You won");
    points = 0;
    p = 0;
    win.play();
    box.x = 675;
    player.x = 675;
    player.y = 320;  
    box.y= 320;
  }
  if(points>100 && p === 3){
    alert("You won");
    points = 0;
    p = 0;
    win.play();
    box.x = 675;
    player.x = 675;
    player.y = 320;  
    box.y= 320;
  }
  if(points===70 && p === 1){
    alert("You are near to win");
    points = points+10;
  }
  if(points===70 && p === 2){
    alert("You are near to win");
    points = points+5;
  }
  if(points===70 && p === 4){
    alert("You are near to win");
    points = points+1;
  }
  if(points===70 && p === 3){
    alert("You are near to win");
    points = points+1;
  }
  if(points > 20 && p === 2){
    box.x = 2000;
  }
  if(points < -20 && p === 2){
    box.x = 238;
    box.y = 200;
  }
  if(points <-60 && p === 2){
    box.x = 2000;

  }
 
  if(points <-100 && p === 2){
    alert("You lose the game,To try again click on ok");
    p = 0;
    points = 0;
    box.x = 675;
    box.y= 320;
    player.x = 675;
    player.y = 320;
    lose.play();
  }
  
  if(points <-100 && p === 1){
    alert("You lose the game,To try again click on ok");
    p = 0;
    points = 0;
    box.x = 675;
    box.y= 320;
    player.x = 675;
    player.y = 320;
    lose.play();
  }
  if(points <-100 && p === 4){
    alert("You lose the game,To try again click on ok");
    p = 0;
    points = 0;
    box.x = 675;
    box.y= 320;
    player.x = 675;
    player.y = 320;
    lose.play();
  }
  if(points <-100 && p === 3){
    alert("You lose the game,To try again click on ok");
    p = 0;
    points = 0;
    box.x = 675;
    box.y= 320;
    player.x = 675;
    player.y = 320;
    lose.play();
  }
if(points < -80 && p === 2){
  box.x = 600;
  box.y = 200;
}
  if(points === -80 && p === 2){
    alert("You are near to lose");
   points = points-5;
  

  }
  if(points === -80 && p === 4){
    alert("You are near to lose");
   points = points-10;
  

  }
  if(points === -80 && p === 3){
    alert("You are near to lose");
   points = points-10;
  

  }
  if(points === -80 && p === 1){
    alert("You are near to lose");
   points = points-1;
  

  }
   plh.y = player.y;
   plh2.x = player.x-6;
   if(frameCount%12 === 0 && p === 1){
    bubble();
  }
  if(frameCount%12 === 0 && p === 2){
    bubble();
  }
  if(frameCount%9 === 0 && p === 3){
    bubble();
  }
  if(frameCount%5 === 0 && p === 4){
    bubble();
    bgrp.velocityX = bgrp.velocityX+5;
    bgrp.velocityY = bgrp.velocityY+5;
  }

  textSize(200);
  textAlign(CENTER);
  text(points,675,375);
  textSize(50);
  fill("green");
  if(keyDown("p")){
    points = points-10;
  }
  if(keyDown("l")){
    points = points+10;
  }
  if(p === 1){
    box.x = player.x;
    if(keyDown("p")){
      points = points-10;
    }
    if(keyDown("l")){
      points = points+10;
    }
   }
  if(p === 0){
    player.x = 675;
    player.y=320;
    intro.x = 1340/2;
    intro.y = 640/2;
    a.x = 100;
    a.y = 550;
    b.x = 580;
    b.y = 560;
    c.x = 900;
    c.y = 560;
    textSize(40);
    fill("blue");
    stroke("black");
    strokeWeight(2);
    text("It's Space Tank War Time",600,50);
    strokeWeight(0);
    fill("black");
    textSize(30);
    text("You are Selected To Do The Space Tank War From Your Country",450,100);
    text("You have to Shoot the Green Holes created by the enemy  ",420,150);
    text(" in the Game And collect 100 Points TO Win the Game",385,175);
    text("If the points will be in -100 then You will lose the War",380,225);
    textSize(40);
    fill("Yellow");
    text("Rules",80,285);
    textSize(25);
    stroke("black");
    strokeWeight(2);
    text("You have To use Space button to Fire over Green Holes",400,325);
    text("If your bullet hits the green Holes then your points will Increase",450,350);
    text("And If the Green Holes hits you then the Points will be Decreased",460,375);
    text("If you will be in the Green zone then The Green Holes cannot Hit you",470,400);
    text("Green zone will be disappering in some time and will come back again",470,425);
    text("By Using UP,Left,Right arrow you can move your Tank",400,450);
    fill("red");
    textSize(40);
    strokeWeight(0);
    text("Green Holes",120,500);
    fill("blue");
    text("Green Zone",580,500);
    fill("green");
    text("Tank",900,500);
   if(p === 0){
    le1.x = 1150;
    le2.x = 1150;
    le3.x = 1150;
    le4.x = 1150;
   }
   if(mousePressedOver(le1)&& p === 0){
     p = 1;
     points = 0;
     intro.x = 20000;
     bgrp.debug = true;
     le1.x = 2000;
     le2.x = 2000;
     le3.x = 2000;
     le4.x = 2000;
    
   }
   
   if(mousePressedOver(le2)&& p === 0){
    p = 2;
    intro.x = 20000;
    points = 0;
    bgrp.debug = true;
    le1.x = 2000;
    le2.x = 2000;
    le3.x = 2000;
    le4.x = 2000;

  }
  if(mousePressedOver(le3)&& p === 0){
    p = 3;
    intro.x = 20000;
    points =0;
    bgrp.debug = true;
    le1.x = 2000;
    le2.x = 2000;
    le3.x = 2000;
    le4.x = 2000;
    box.x = 20000;
  }
  if(mousePressedOver(le4)&& p === 0){
    p = 4;
    intro.x = 20000;
    points = 0;
    bgrp.debug = true;
    le1.x = 2000;
    le2.x = 2000;
    le3.x = 2000;
    le4.x = 2000;
    box.x = 20000;
  }
  }else{
    a.x = 2000;
    b.x = 2000;
    c.x = 2000;
  }
}

function move(){
  if(keyDown('A') || keyDown(LEFT_ARROW)&& p !== 0){
    player.rotation -= 10;
   
  }else if(keyDown('D') || keyDown(RIGHT_ARROW)&& p !== 0){
    player.rotation += 10;
   
  }
  if(keyDown('W') || keyDown(UP_ARROW)&& p !== 0){
    player.setSpeed(0.1+player.getSpeed()*1.5);
  }else{
    player.setSpeed(player.getSpeed()/1.05);
  }
  player.collide(edges);
  if(player.isTouching(bgrp)&& p !== 0){
    points -= 1;
    collide.play();
  }
  if(lgrp.isTouching(bgrp)&& p !== 0){
    points += 1;
    hit.play();
  }
}

function laser(){
  var l = createSprite(player.x,player.y,20,5);
  l.rotation = player.rotation;
  l.rotateToDirection = true;
  l.shapeColor = "red";
  l.setSpeed(20);
  lgrp.add(l);
  l.lifetime = 100;
}

function keyTyped(){
  if(key === ' '&& p !== 0){
      laser();
     shut.play();
    }
    
  }
