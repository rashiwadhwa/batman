class rainDrop{
    constructor(x,y){

this.body=Bodies.rectangle(x,y,10,10)
this.width=10
this.height=10
World.add(world,this.body)
    }

    updateY(){ 
        if(this.body.position.y > height)
        { 
            Matter.Body.setPosition(this.body, {x:random(0,1200), y:random(0,600)})
         } 
        }
    display() {
          var pos=this.body.position;
         var angle=this.body.angle;
          push (); 
         translate(pos.x,pos.y);
          rotate(angle);
          rectMode (CENTER);
          rect (0,0,this.width,this.height); 
           pop ();
         }
         }
