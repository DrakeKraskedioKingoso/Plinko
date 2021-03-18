const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var score = 0
var count = 0
var particles = []
var plinkos = []
var divisions = []



function setup() {
  createCanvas(480, 800);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(width/2, height-20, width, 20)
  wall1 = new Division(0, height/2, 10, height)
  wall2 = new Division(width, height/2, 10, height)
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-300/2, 10, 300))
  }
   for (var j = 40; j <=width; j=j+50){
     plinkos.push(new Plinko(j, 75, 10))
   }
   for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 150, 10))
  }
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 225, 10))
  }
  for (var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 300, 10))
  }
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 375, 10))
  }
  for (var j = 15; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 450, 10))
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  
  ground.display()

  for (var i = 0; i<divisions.length; i++){
    divisions[i].display()
  }
  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display()
  }
  for (var i = 0; i<particles.length; i++){
    particles[i].display()
    particles[i].score()
  }
  text(mouseX+","+mouseY, mouseX, mouseY)
  fill(255)
  textSize(20)
  text("Score:"+score, 350, 30)
  text("500", 25, 550)
  text("400", 105, 550)
  text("300", 185, 550)
  text("300", 265, 550)
  text("400", 335, 550)
  text("500", 415, 550)

}

function mouseClicked(){
  if(mouseY<75&&count<=10){
    particles.push(new Particle(mouseX, mouseY, 10))
    count++
  }
 
}