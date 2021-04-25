class wood{
    constructor(x,y,width,height,angle){
   
   var options={restitution :0.8,friction:1,density:1}
   
   this.width=width;
   this.height=height;
   this.body =Matter.Bodies.rectangle(x,y,width,height,options);
   Matter.Body.setAngle(this.body,angle)
   Matter.World.add(world,this.body)
    }
   display(){
       push ()
       rectMode(CENTER)
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       fill("brown")
       rect(0,0,this.width,this.height)
   pop ()
   
   
   
   }
   
   }
   