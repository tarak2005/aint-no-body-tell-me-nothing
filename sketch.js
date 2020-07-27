const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var slingshot,slingshot1,slingshot2,slingshot3,slingshot4;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.

	ground = new Ground(400,300,200,20);
	ball = new Ball(400,500,20,20);
	ball1= new Ball(380,500,20,20);
	ball2=new Ball(360,500,20,20);
	ball4=new Ball(420,500,20,20);
	ball3=new Ball(440,500,20,20);

	slingshot = new SlingShot(ball.body,{x:400,y:300});
	slingshot1 = new SlingShot(ball1.body,{x:380,y:300});
	slingshot2= new SlingShot(ball2.body,{x:360,y:300});
	slingshot3 = new SlingShot(ball3.body,{x:440,y:300});
	slingshot4= new SlingShot(ball4.body,{x:420,y:300});
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 ball.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 slingshot.display();
 slingshot1.display();
 slingshot2.display();
 slingshot3.display();
 slingshot4.display();
}

function mouseDragged(){
	//if (gameState!=="launched"){
		Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});
	//}
  }
  
  
