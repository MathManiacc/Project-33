class Ground{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 1600, 8, {isStatic: true}); 
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(pos.x, pos.y, 1600, 8);
    }
}