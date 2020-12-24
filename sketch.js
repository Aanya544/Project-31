var particle = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var ground;
var division1;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,700,800,10);
  
  for( var k =0;k <=width; k=k+80){
    divisions.push(new Division(k , height-divisionHeight/2,10,divisionHeight))
   }

   for(var a = 75;a <=width; a=a+50){
    plinko.push(new Plinko(a,75))
  }
  for(var a = 50;a <=width-10; a=a+50){
    plinko.push(new Plinko(a,175))
  }
  for(var a = 75;a <width-10;a=a+50){
    plinko.push(new Plinko(a,275));
  }
  for(var a = 50;a <width-10;a=a+50){
    plinko.push(new Plinko(a,375))
  }




}

function draw() {
  background(rgb(36, 206, 2)); 
  Engine.update(engine); 

  ground.display();



  if(frameCount%60===0){
particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
    for(var j=0;j<particle.length;j++){
    particle[j].display();
    }
    for(var k=0;k<divisions.length;k++){
      divisions[k].display();
      }
      for(var l=0;l<plinko.length;l++){
        plinko[l].display();
        }

  
}