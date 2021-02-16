const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;

var gameState = "play";
var divisionHeight= 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795)
  for (var k = 0; k <=innerWidth; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }

  Engine.run(engine);
}

function draw()
 {
  //rectMode(CENTER);
  background(0);  
  
  Engine.update(engine);

  ground.display();

  for(var j = 0; j < divisions.length; j++){
    divisions[j].display();
  }

  for(var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>550)
      {
            if (particle.body.position.x < 160) 
            {
                score=score+500;      
                particle=null;
                if (turn>= 5) gameState ="end";                          
            }
            else if (particle.body.position.x < 320 && particle.body.position.x > 160 ) 
            {
                  score = score + 200;
                  particle=null;
                  if ( turn>= 5) gameState ="end";

            }
            else if (particle.body.position.x < 480 && particle.body.position.x > 320 )
            {
                  score = score + 100;
                  particle=null;
                  if ( turn>= 5)  gameState ="end";

            }      
 
 
}


  }
  
  textSize(20);
  text("score: " + score, 10, 40);
  textSize(15);
  text("500", 25, 550);
  text("500", 110, 550);
  text("200", 190, 550);
  text("200", 270, 550);
  text("100", 345, 550);
  text("100", 430, 550);
}




function mouseReleased() {
 if(gameState!="end")   {
   turn=turn+1;
   particle=new Particle(mouseX,10,10,10);
 }
    
}