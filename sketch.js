const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,octagonobj,bg;
var box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,slingshotobj,score=0,backgroundImg;

function preload() {
  getbackground();
}

function setup() {
  createCanvas(1900,800);
  engine = Engine.create();
    world = engine.world;

  ground1 = new Ground(500,750,450,20)
  ground2 = new Ground(1000,550,300,20)

  box1 = new Box(345,705,40,70)
  box2 = new Box(390,705,40,70)
  box3 = new Box(435,705,40,70)
  box4 = new Box(480,705,40,70)
  box5 = new Box(525,705,40,70)
  box6 = new Box(570,705,40,70)
  box7 = new Box(615,705,40,70)
  box8 = new Box(390,630,40,70)
  box9 = new Box(435,630,40,70)
  box10 = new Box(480,630,40,70)
  box11 = new Box(525,630,40,70)
  box12 = new Box(570,630,40,70)
  box13 = new Box(435,555,40,70)
  box14 = new Box(480,555,40,70)
  box15 = new Box(525,555,40,70)
  box16 = new Box(480,480,40,70)

  box17 = new Box(900,500,40,70)
  box18 = new Box(945,500,40,70)
  box19 = new Box(990,500,40,70)
  box20 = new Box(1035,500,40,70)
  box21 = new Box(1080,500,40,70)

  box22 = new Box(945,425,40,70)
  box23 = new Box(990,425,40,70)
  box24 = new Box(1035,425,40,70)
  
  box25 = new Box(990,350,40,70)

  octagonobj=new octagon(150,500)

  slingshotobj = new Slingshot(octagonobj.body,{x:140,y:500});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);

}
  fill("yellow");
  textSize(20)
  text("score: "+score,700,40);
  Engine.update(engine);
  ground1.display();
  ground2.display();
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
  slingshotobj.display();
  octagonobj.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(octagonobj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshotobj.fly();
}
function keyPressed(){
  if (keyCode===32){
      slingshotobj.attach(octagonobj.body);
  }
}


async function getbackground(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  console.log(response);
  var responseJSON=await response.json();
  console.log(responseJSON)
  var dt=responseJSON.datetime;
  console.log(dt);
  var hour=dt.slice(11,13)
  console.log(hour)
  if(hour>=06 && hour<19){
      bg="light.jpg"
      
  }
  else{
      bg="dark.jpg"
  }
backgroundImg=loadImage(bg)
}
