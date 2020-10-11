
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper(130, 606, 40);

	dustbin1 = new dustbin(530, 580, 20, 100);
	dustbin2 = new dustbin(620, 620, 200, 20);
	dustbin3 = new dustbin(710, 580, 20, 100);

	ground = new Ground(400, 630, 800, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  ground.display();
  
  drawSprites();
 
}
/// share  the code / github repo URL : hussain.madarwala@whitehatjr.com

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:120, y:-120})
	
	}

}

// any idea y its not working ?
//  let me check

