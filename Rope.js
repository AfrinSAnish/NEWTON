  class Rope{
    constructor(BodyA,BodyB,offsetX,offsetY){

        
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA:BodyA,
            bodyB:BodyB,
            pointB:{x: this.offsetX, y:this.offsetY},
        }
       // this.rope = Constraint.create(options)
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
    strokeWeight(4)
    var pointA=this.rope.bodyA.position
    var pointB=this.rope.bodyB.position

    var Anchor1X= pointA.x;
    var Anchor1Y= pointA.y;

    var Anchor2X=pointB.x + this.offsetX;
    var Anchor2Y= pointB.y + this.offsetY;
    
    strokeWeight(2);
    stroke(255,255,255);

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}