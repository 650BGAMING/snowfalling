class Snowflake{

constructor(){
    let x = random(width);
    let y = random(height);
    this.pos = createSprite(300,200);
    this.vel = createSprite();
    this.acc = createSprite();
    this.image = loadImage("snow4.webp");
}

render(){
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
   // image(this.image,this.pos.x,this.pos.y,50,50);
    this.pos.addImage(this.image);
    this.pos.scale = 0.07;

}




}