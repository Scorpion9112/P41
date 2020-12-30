const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var umbrella1
var maxDrops=200
var drops = [];
var lightningGroup
function preload(){
    walking=loadAnimation("walking/walking_1.png","walking/walking_2.png","walking/walking_3.png","walking/walking_4.png","walking/walking_5.png","walking/walking_6.png","walking/walking_7.png","walking/walking_8.png")
  t1=loadImage("thunderbolt/1.png")
  t2=loadImage("thunderbolt/2.png")
  t3=loadImage("thunderbolt/3.png")
  t4=loadImage("thunderbolt/4.png")
}

function setup(){
   createCanvas(800,1000)
   engine = Engine.create();
    world = engine.world;
    person=createSprite(400,600,50,400)
    person.addAnimation("walks",walking)
  umbrella1=new Umbrella(395,380)
  for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,800), random(0,800)))
    drops[i].display()
  }
  lightningGroup= createGroup()
}

function draw(){
    background("black")
    drawSprites()
    Engine.update(engine);
    for (var i = 0; i < drops.length; i++) {
     drops[i].display();
    }  
    spawnlightning()
}  
function spawnlightning(){
  if (frameCount % 60 === 0){
    var lightning = createSprite(600,100,20,30);
    lightning.x = Math.round(random(100,700));
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: lightning.addImage(t1);
               break;
       case 2: lightning.addImage(t2);
               break;
       case 3: lightning.addImage(t3);
               break;
       case 4: lightning.addImage(t4);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     lightning.scale = 0.5;
     lightning.lifetime = 11;
    
    //add each obstacle to the group
     lightningGroup.add(lightning);
  }
 } 

