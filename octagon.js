class octagon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.octagon = loadImage("octagon.png");
      this.body = Bodies.circle(x, y,20, options);
      //this.width = 20;
      //this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.octagon,pos.x,pos.y,40,40);
     
    }
  };