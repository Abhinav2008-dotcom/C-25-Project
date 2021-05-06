class Paper {
    constructor(x,y,r){
        var options={
            density:1.2,
            restitution:0.3
        }
        this.r=r;
        this.body=Bodies.circle(x,y,(this.r-20)/2,options);
        World.add(world,this.body);
        this.image=loadImage("paper.png");
  }
  display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
      
  }
}