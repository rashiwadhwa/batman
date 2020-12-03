const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var spruce,wi1,ti1,ti2,ti3,ti4;
var drops=[]
function preload(){
    wi1=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    ti1=loadImage("images/thunderbolt/1.png")
    ti2=loadImage("images/thunderbolt/2.png")
    ti3=loadImage("images/thunderbolt/3.png")
    ti4=loadImage("images/thunderbolt/4.png")
}

function setup(){
createCanvas(1500,900) ;  
 
engine=Engine.create()
world=engine.world

spruce=createSprite(200,600,30,100)
spruce.addAnimation("walking",wi1);
spruce.scale=0.5

for(var i=0; i<100; i++){
    drops.push(new rainDrop(random(0,1200), random(0,600))); 
}
}

function draw(){
 background("black")

 Engine.update(engine);

thunderBolt()

for(var i = 0; i<100; i++){
     drops[i].display();
     drops[i].updateY(); 
    }




    drawSprites()
}   

function thunderBolt(){

    if (frameCount%100==0){

var thunder=createSprite(random(100,1200),random(100,300),40,80);
thunder.lifetime=10
thunder.scale=0.8


var r=Math.round(random(1,4))
switch(r){
    case 1:thunder.addImage(ti1);
    break;
    case 2:thunder.addImage(ti2);
    break;
    case 3:thunder.addImage(ti3);
    break;
    case 4:thunder.addImage(ti4);
    break;
}
    }



}
