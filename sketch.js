var starImg,bgImg;
var star, starBody;
var fairy_sound ;
//create variable for fairy sprite and fairyImg
var fairy, fairy_ani, fairyBody ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairy_ani = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairy_sound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 650);

	//write code to play fairyVoice sound
    fairy_sound.play();
	//create fairy sprite and add animation for fairy
    fairy = createSprite(200,500);
    fairy.addAnimation("fairy",fairy_ani);
	fairy.scale =0.2 ;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	fairyBody = Bodies.circle(200,500,5);
	World.add(world, starBody, fairyBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x= starBody.position.x 
  star.y= starBody.position.y 
  fairy.x= fairyBody.position.x
  fairy.y= fairyBody.position.y
  console.log(star.y);

  //write code to stop star in the hand of fairy
  if( star.position.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === RIGHT_ARROW) {
		fairyBody.position.x = fairyBody.position.x + 20; 
	}
	if (keyCode === LEFT_ARROW) {
		fairyBody.position.x = fairyBody.position.x - 20; 
	}
}
