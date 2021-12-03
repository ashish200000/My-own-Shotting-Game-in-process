var plane,planeImage;
var bgimage,bg;
var diamond,diamondImage;
var star,starImage;
var obstacle,obstacleImage;
var score = 0

function preload(){
bgImage = loadImage("BackgroundImage.png")
planeImage = loadImage("plane.png")
starImage = loadImage("Starimage.png")
diamondImage = loadImage("diamondimage.png")
obstacleImage = loadImage("obstacle.png")
}
function setup() {
  createCanvas(1000, 800);
 /* bg = createSprite(200,200)
 bg.addImage("bgImages",bgImage)
 */
 plane = createSprite(500,750,20,20)
 plane.addImage("planes",planeImage)


}


function draw() {
  background(bgImage);

textSize(35)
text(score,205,150)
text("Score:",100,150)



if(keyDown("LEFT_ARROW")){
  plane.x = plane.x-4
}
if(keyDown("RIGHT_ARROW")){
  plane.x = plane.x+4
}
if(frameCount % 60 == 0){
  star = createSprite(Math.round(random(10,900)),50,20,20);
  star.addImage("stars",starImage)
  star.velocityY = 5
  star.scale = 0.3
}
if(frameCount % 95 == 0){
  obstacle= createSprite(Math.round(random(10,900)),50,20,20);
  obstacle.addImage("obstcel",obstacleImage)
  obstacle.velocityY = 5
  obstacle.scale = 0.6
}
if(frameCount % 60 == 0){
  star = createSprite(Math.round(random(10,900)),50,20,20);
  star.addImage("stars",starImage)
  star.velocityY = 5
  star.scale = 0.3
}
if(frameCount % 160 == 0){
  diamond = createSprite(Math.round(random(10,900)),50,20,20);
  diamond.addImage("diamonds",diamondImage)
  diamond.velocityY = 5
  diamond.scale = 0.06
}



  drawSprites();
}