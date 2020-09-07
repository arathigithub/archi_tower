class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB = pointB;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
     
    fly(){
     this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
            console.log(this.chain)
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("blue")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}