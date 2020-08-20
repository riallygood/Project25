
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,dustbin;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	
	




	//Create the Bodies Here.
	  paperObject = new Paper();
	 
	  ground = new Ground();
	  dustbin=new Dustbin();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paperObject.display();
  ground.display();
  dustbin.display();
  //keyPressed();
  
 // drawSprites();
}
 
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1100,y:-1100});
	}
	return false;
}
