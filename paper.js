class Paper{
    
    
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        };
        this.r = 70 ;
        this.body = Bodies.circle(100,615,this.r,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,2*this.r,2*this.r);
        pop();
    }
    
}

