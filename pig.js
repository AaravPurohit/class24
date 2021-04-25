class Pig{

    constructor(x,y,width,height){

var b ={restitution:0.8,density:1,friction:0.4}

this.width=width
this.height=width
this.body=Matter.Bodies.rectangle(x,y,width,height,b)

Matter.World.add(world,this.body)
    }

display(){
push()
rectMode(CENTER)
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("lightpink")
rect(0,0,this.width,this.height)
pop ()
}
}


































