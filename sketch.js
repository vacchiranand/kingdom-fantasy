var boy;
var girl;
var villain;
var king;
var queen;
var ground;

function setup(){
    createCanvas(windowWidth,windowHeight);
    backGround = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    boy = createSprite(130,200,20,20);
    girl = createSprite(230,330,20,20);
    villian = createSprite(350,100,20,20);
    king = createSprite(150,250,20,20);
    queen = createSprite(100,300,20,20);
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,100);
}

function draw(){
background(255);
drawSprites();
backGround.velocityX = -5;
if(backGround.x < 0){
    backGround.x = backGround.width/2;
}

}


