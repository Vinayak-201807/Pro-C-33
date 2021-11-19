const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  sb1 = new SnowballClass(50,20,50,50);
  sb2 = new SnowballClass(150,20,50,50);
  sb3 = new SnowballClass(250,20,50,50);
  sb4 = new SnowballClass(350,20,50,50);
  sb5 = new SnowballClass(450,20,50,50);
  sb6 = new SnowballClass(550,20,50,50);
  sb7 = new SnowballClass(650,20,50,50);
  sb8 = new SnowballClass(750,20,50,50);

}

function draw() {
  background(backgroundImg); 
  Engine.update(engine); 

  sb1.display();
  sb2.display();
  sb3.display();
  sb4.display();
  sb5.display();
  sb6.display();
  sb7.display();
  sb8.display();

}