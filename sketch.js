
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,20);
	box1=new Box(1150,650,200,200);
	//box2=new Box(1200,600,30,100);
	//box3=new Box(1100,660,200,20);
	ground=new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
paper.display();
box1.display();
//box2.display();
//box3.display();
ground.display();

drawSprites();
 
}

function keyPressed() {

if (keyCode===UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

}

}


