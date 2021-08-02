const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(480,320,70,70);
    box2 = new Box(720,320,70,70);

    box3 = new Box(480,240,70,70);
    box4 = new Box(720,240,70,70);
   
    box5 = new Box(600,160,70,70);
    box6 = new Box(600,320,70,70);

    player = new Player(200,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    player.display();
}