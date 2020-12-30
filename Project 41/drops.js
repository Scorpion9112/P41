class Drops{
    constructor(x,y){
  var options={
    frictionAir:0.01,
    density:1,
    restitution:.4,
    friction:.1
  }
  this.body=Bodies.circle(x,y,20,options)
  World.add(world,this.body)
}
display(){
    fill("blue")
    push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipse(0,0,10,10)
pop()
if(this.body.position.y>height){
    Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
     }
}
}
