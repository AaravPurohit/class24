class Ground{
constructor(x,y,width,height)
{
var a ={
    isStatic:true,
  }

this.width=width
this.height=height
this.body =Matter.Bodies.rectangle(x,y,width,height,a);
Matter.World.add(world,this.body)
}
display(){
    push ()
    rectMode(CENTER)
    fill("limegreen")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
pop ()







}
}