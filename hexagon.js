class Shot {

    constructor(x, y,width,height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)  
        this.width = width;
        this.height=height;
        this.image = loadImage("polygon1.png");    
        World.add(world, this.body);
        
      }
     display(){
      var pos = this.body.position;
      var angle = this.body.angle;
    // rect(100,100,50,50);
     push ();
     translate(pos.x,pos.y);
     rotate (angle);
      imageMode(CENTER)
      image(this.image,0,0,this.width+20,this.height+20);
     // rect (100,100,this.width,this.height);
       pop();


     }

  }