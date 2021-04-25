var engine
var world
var ground
var ball
var box1, box2,box3,box4,box5
var pig1,pig2
var bird1
var wood1,wood2,wood3,wood4

function setup() {
  createCanvas(1200,400);
  engine=Matter.Engine.create();
  world=engine.world;
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
ground=new Ground(600,380,1200,20)
   
  pig1=new Pig(810,350,50,50)

wood1=new wood(810,260,300,20,PI/2)
  
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)
  box1.display();
box2.display();
ground.display();
pig1.display();
wood1.display();



}
