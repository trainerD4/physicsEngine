class Player {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      stroke("green");
      strokeWeight(3);
      fill('red')
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
 
    };
  };
  