class Bird extends baseclass{
    constructor(x, y) {
      super(x, y, 50, 50);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("sprites/bird.png");
      
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display();
     
    };
  };
  