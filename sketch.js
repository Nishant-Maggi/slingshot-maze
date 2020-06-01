const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player;

var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,
    obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,
    obstacle26,obstacle27,obstacle28,obstacle29,obstacle30,obstacle31,obstacle32,obstacle33,obstacle34,obstacle35,obstacle36,obstacle37,
    obstacle38,obstacle39,obstacle40,obstacle41,obstacle42,obstacle43,obstacle44,obstacle45,obstacle46,obstacle47,obstacle48;


var ground,groundL,groundR;

var slingShot;

var gameState = "ONSLING";

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1600,600);

  ground = new Ground(800,600,1600,20);

  player = new Player(800,400,30,30);

  obstacle1 = new Obstacle(1380,565,25,40);
  obstacle2 = new Obstacle(1405,565,25,40);
  obstacle3 = new Obstacle(1430,565,25,40);
  obstacle4 = new Obstacle(1455,565,25,40);
  obstacle5 = new Obstacle(1480,565,25,40);
 

  obstacle6 = new Obstacle(1405,525,25,40);
  obstacle7 = new Obstacle(1430,525,25,40);
  obstacle8 = new Obstacle(1455,525,25,40);

  obstacle9 = new Obstacle(1430,485,25,40);


  obstacle10 = new Obstacle(170,565,25,40);
  obstacle11 = new Obstacle(145,565,25,40);
  obstacle12 = new Obstacle(120,565,25,40);
  obstacle13 = new Obstacle(95,565,25,40);
  obstacle14 = new Obstacle(70,565,25,40); 

  obstacle15 = new Obstacle(145,525,25,40); 
  obstacle16 = new Obstacle(120,525,25,40);
  obstacle17 = new Obstacle(95,525,25,40);
  
  obstacle18 = new Obstacle(120,485,25,40);



  groundL = new Ground(300,270,300,10);

  obstacle19 = new Obstacle(250,253,25,35);
  obstacle20 = new Obstacle(275,253,25,35);
  obstacle21 = new Obstacle(300,253,25,35);
  obstacle22 = new Obstacle(325,253,25,35);
  obstacle23 = new Obstacle(350,253,25,35);

  obstacle24 = new Obstacle(262,195,25,35);
  obstacle25 = new Obstacle(287,195,25,35);
  obstacle26 = new Obstacle(312,195,25,35);
  obstacle27 = new Obstacle(337,195,25,35); 

  obstacle28 = new Obstacle(275,155,25,35);
  obstacle29 = new Obstacle(300,155,25,35);
  obstacle30 = new Obstacle(325,155,25,35);

  obstacle31 = new Obstacle(287,115,25,35);
  obstacle32 = new Obstacle(312,115,25,35);

  obstacle33 = new Obstacle(300,75,25,35);


  groundR = new Ground(1300,270,300,10);

  obstacle34 = new Obstacle(1350,253,25,35);
  obstacle35 = new Obstacle(1325,253,25,35);
  obstacle36 = new Obstacle(1300,253,25,35);
  obstacle37 = new Obstacle(1275,253,25,35);
  obstacle38 = new Obstacle(1250,253,25,35);

  obstacle39 = new Obstacle(1338,195,25,35);
  obstacle40 = new Obstacle(1313,195,25,35);
  obstacle41 = new Obstacle(1288,195,25,35);
  obstacle42 = new Obstacle(1263,195,25,35);

  obstacle43 = new Obstacle(1325,155,25,35);
  obstacle44 = new Obstacle(1300,155,25,35);
  obstacle45 = new Obstacle(1275,155,25,35);

  obstacle46 = new Obstacle(1313,115,25,35);
  obstacle47 = new Obstacle(1288,115,25,35);

  obstacle48 = new Obstacle(1300,75,25,35);

  

  slingShot = new SlingShot(player.body,{x:800,y:400});
  
}

function draw() {

  background(0,0,0);  

  Engine.update(engine);

  ground.display();

  player.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
  obstacle4.display();
  obstacle5.display();

  obstacle6.display();
  obstacle7.display();
  obstacle8.display();

  obstacle9.display();


  obstacle10.display();
  obstacle11.display();
  obstacle12.display();
  obstacle13.display();
  obstacle14.display();

  obstacle15.display();
  obstacle16.display();
  obstacle17.display();

  obstacle18.display();



  groundL.display();

  obstacle19.display();
  obstacle20.display();
  obstacle21.display();
  obstacle22.display();
  obstacle23.display();

  obstacle24.display();
  obstacle25.display();
  obstacle26.display();
  obstacle27.display();

  obstacle28.display();
  obstacle29.display();
  obstacle30.display();

  obstacle31.display();
  obstacle32.display();

  obstacle33.display();



  groundR.display();

  obstacle34.display();
  obstacle35.display();
  obstacle36.display();
  obstacle37.display();
  obstacle38.display();

  obstacle39.display();
  obstacle40.display();
  obstacle41.display();
  obstacle42.display();

  obstacle43.display();
  obstacle44.display();
  obstacle45.display();
  
  obstacle46.display();
  obstacle47.display();

  obstacle48.display();

}

function mouseDragged(){

  if(gameState === "ONSLING"){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY} );
  }
}

function mouseReleased(){

  slingShot.fly();
  gameState = "launch"
  
}

function keyPressed(){
  if(keyCode === 32){
    if(Math.abs(player.body.velocity.x) <2 && Math.abs(player.body.velocity.y) <2 ){
        Matter.Body.setPosition(player.body,{x:800 , y:400});
        slingShot.attach(player.body);
        gameState = "ONSLING";
    }
  }
}