class Rope {
    constructor(bodyA,pointB){
     var options = {  
       bodyA: bodyA,
       pointB: pointB,
       stiffness: 1.2,
       length: 250
      }
     this.body = Constraint.create(options)
     this.pointB = pointB;
     World.add(world,this.body)
    }
    display(){
       var pointA = this.body.bodyA.position;
       var pointB = this.pointB;
       push();
       strokeWeight(3);
       stroke("red");
       line(pointB.x,pointB.y,pointA.x,pointA.y)
       pop();
    }
}