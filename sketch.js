const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,790,480,20);

 for (var j = 40; j <=width; j=j+50)
  {
  
      plinkos.push(new Plinko(j,75,5));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
    {
  
      plinkos.push(new Plinko(j,125,5));
    }
   
    for (var k = 0; k <= width; k = k + 80){
      divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }
  Engine.run(engine);
}

function draw() {
  background("black");  
  drawSprites();

for(var j = 0; j < divisions.length; j++){

  divisions[j].display();
}
for(var k = 0; k < plinkos.length; k++){

  plinkos[k].display();
}


  ground.display()
  
  
   if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10, width/2-+10), 10,10));
    
  }
  for(var k = 0; k < particles.length; k++){

    particles[k].display();
  }

  
}
