class Obstacle{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.0,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255))
        rect(pos.x,pos.y,this.width,this.height);
    }
}