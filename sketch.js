const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box28,box29,box30;
var chain, box31,ground1,ground2,ground3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(800,250,200,20);
    ground2 = new Ground(800,450,200,20);
    ground3 = new Ground(600,580,1200,20);

    box1 = new Box(750,150,25,25);
    box2 = new Box(775,150,25,25);
    box3 = new Box(800,150,25,25);
    box4 = new Box(825,150,25,25);
    box5 = new Box(850,150,25,25);

    box6 = new Box(765,120,25,25);
    box7 = new Box(790,120,25,25);
    box8 = new Box(815,120,25,25);
    box9 = new Box(840,120,25,25);

    box10 = new Box(775,100,25,25);
    box11 = new Box(800,100,25,25);
    box12 = new Box(825,100,25,25);

    box13 = new Box(785,80,25,25);
    box14 = new Box(810,80,25,25);

    box15 = new Box(795,60,25,25);

    box16 = new Box(750,350,25,25);
    box17 = new Box(775,350,25,25);
    box18 = new Box(800,350,25,25);
    box19 = new Box(825,350,25,25);
    box20 = new Box(850,350,25,25);

    box21 = new Box(765,320,25,25);
    box22 = new Box(790,320,25,25);
    box23 = new Box(815,320,25,25);
    box24 = new Box(840,320,25,25);

    box25 = new Box(775,300,25,25);
    box26 = new Box(800,300,25,25);
    box27 = new Box(825,300,25,25);

    box28 = new Box(785,280,25,25);
    box29 = new Box(810,280,25,25);

    box30 = new Box(795,260,25,25);

    box31 = new MainBox(250,350,50,50);

    chain = new Slingshot(box31.body,{x:250,y:410});
    
}

function draw(){
    background(0);
    Engine.update(engine);

    fill("blue");
    ground1.display();
    ground2.display();
    fill("green");
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    chain.display();
    box31.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(box31.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        chain.stick(box31.body);
        Matter.Body.setPosition(box31.body,{x:250,y:300});
        
    }
}
