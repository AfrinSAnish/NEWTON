class Bob{
    constructor(x,y,r){
   var options={
       'restitution':0.3,
       'isStatic':false,
       'friction':0.5,
       'density':1.2
   }
   this.x=x;
   this.y=y;
   this.r=r;
   this.body=Bodies.circle(this.x,this.y,this.r/2,options);
   World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(RADIUS);
        fill("pink")
        circle(0,0,70,70)
        pop()
    }
}