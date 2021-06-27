var ground;
var line1,line2, line3;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	World.add(world);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 line1 = new DustBin(430,height-45,200,10);
	 line2 = new DustBin(530,height-90,10,100);
	 line3 = new DustBin(320,height-90,10,100);
	 paper = new Paper(320 ,300);
	Engine.run(engine);
  paper = new Paper(200, 200)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.x= paper.position.x 
  paper.y= paper.position.y 
  drawSprites();
  line1.display(); 
  line2.display(); 
  line3.display(); 
  paper.display();
  
}


