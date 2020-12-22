const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,invroof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 50;

	roof = new Roof (width/2,150,350,10);
    invroof = new Roof (width/2,250,350,15)
	

	bob1= new Bob (width/2,(height/2)+100,70)
	bob2= new Bob (width/2-50,(height/2)+100,70)
	bob3= new Bob (width/2-100,(height/2)+100,70)
	bob4= new Bob (width/2+50,(height/2)+100,70)
	bob5= new Bob (width/2+100,(height/2)+100,70)

	rope1 = new Rope(bob1.body,roof.body,0,100);
	rope2 = new Rope(bob2.body,roof.body,-75,100);
	rope3 = new Rope(bob3.body,roof.body,-150,100);
	rope4 = new Rope(bob4.body,roof.body,75,100);
	rope5 = new Rope(bob5.body,roof.body,150,100);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  //roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  invroof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:200});
  
}else if(keyCode===DOWN_ARROW){
    Body.applyForce(bob5.body,bob5.body.position,{x:200,y:-200});
  
}

}



