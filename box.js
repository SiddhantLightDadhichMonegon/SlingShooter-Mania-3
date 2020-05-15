class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.Visiblity = this.Visiblity - 5;

       if(this.body.speed < 7){
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0, this.width, this.height);
        pop();
       }
       else{
          World.remove(world, this.body);
          // push();
          
          // tint(255,this.Visiblity);
          // rect(this.body.position.x, this.body.position.y, this.width, this.height);
          // pop();
        }
       
    }
  }

