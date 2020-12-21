var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box2
var box3
var box1

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box2=new Box(290,610,20,100)
	box3=new Box(470,610,20,100)
	box1=new Box(380,650,200,20)

	

  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box2.display()
  box3.display()
  box1.display()
  


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW && helicopterSprite.x === 400) {
Body.setStatic(packageBody,false)
    
  }

  
}