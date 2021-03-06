const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var box1,box2,box3;
var box4,box5,box6;
var ground,ground2;
var shooter;
var chain;
 var engine,world;
 
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(550,175,40,40);
  box2 = new Box(610,175,40,40);
  box3 = new Box(670,175,40,40);
  box4 = new Box(580,135,40,40);
  box5 = new Box(640,135,40,40);
  box6 = new Box(610,95,40,40);

  ground = new Ground(610,200,200,10);
  ground2 = new Ground(400,390,800,20);

  shooter = new Shot(100,150,5,5);
  chain = new Chain(shooter.body,{x:100,y:100});
  

}

function draw() {
  background(255);
  Engine.update(engine); 
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  ground.display();
  ground2.display();
 
 shooter.display();
  chain.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
      }

function mouseReleased(){
    chain.fly();
}