class Umbrella{
    constructor(x,y){
  var options={
    isStatic:true,
    frictionAir:0.01,
    density:1,
    friction:.1
  }
  this.body=Bodies.circle(x,y,110,options)
  World.add(world,this.body)
}
display(){
fill("white")
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipse(0,0,385,200)
pop()
}
}