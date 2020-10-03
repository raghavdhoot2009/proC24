
var ground;
var paper;
var dustbinObj, paperObject, groundObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



function setup() {
createCanvas(1600, 700);
  
engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
dustbinObj=new Dustbin(1200,650);
paperObject=new Paper(200,450,40);




//Create a Ground
groundSprite=createSprite(width/2, height-35, width,10);
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(0);
paperObject.display();
render.display();
keyPressed();
drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});

}
}
  

