class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:30
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA!==null){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(3)
        stroke("green");
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        }
    }
}