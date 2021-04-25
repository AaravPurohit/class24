class Box{
 constructor(x,y,width,height){

var options={restitution :0.8}

this.width=width;
this.height=height;
this.body =Matter.Bodies.rectangle(x,y,width,height,options);

Matter.World.add(world,this.body)
 }
display(){
    push ()
    rectMode(CENTER)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("cyan")
    rect(0,0,this.width,this.height)
pop ()



}

}





















