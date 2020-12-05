//extends helps to create a child class
class Bird extends Baseclass{
    constructor(x, y) {
      //super() will transfer all the properties of parent class to child class
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
    }

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      //override the display function
      super.display();
    }
   }