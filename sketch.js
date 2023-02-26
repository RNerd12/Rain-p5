var drops = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<1000;i++){
    drops[i] = new drop();
  }
}

function draw() {
  background(0,0,0);
  for(var i=0;i<1000;i++){
    drops[i].fall();
    drops[i].show();
  }
}

function drop(){
  this.x = random(-400,1280);
  this.y = random(-100,-700);
  this.len = 20;
  this.speed = 5;
  this.wind = 5;
  this.fall = function(){
      this.y += this.speed;
      this.x += this.wind;
      this.speed += 0.2;
      if(this.y > height){
        this.x = random(-400,1280);
        this.y = random(-100,-700);
        this.speed = 5;
        this.wind = 5
      }
  }
  this.show = function(){
      strokeWeight(1);
      stroke(255);
      line(this.x,this.y,this.x+5,this.y+this.len);
  }
}
