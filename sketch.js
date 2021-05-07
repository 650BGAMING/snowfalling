var backgroundImg;


function perload(){
  backgroundImg = loadImage("snow2.jpg");


}
function setup() {
  createCanvas(800,400);
  ground = createSprite(0,0,800,400);
  ground.addImage("snow3.jpg",backgroundImg);

}

function draw() {
  background(0); 

   snow.push(new Snowflake());
  
   for (flake of snow){
      flake.render();
    }



  drawSprites();
}