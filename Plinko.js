class Plinko {
  constructor(x,y,radius) {
    var options = { 
      isStatic: true,
      restitution:0.6,
      density:0.5,

    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse( 0, 0, this.radius*2, this.radius*2);
      pop();
    }
}