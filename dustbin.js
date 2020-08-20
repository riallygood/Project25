class Dustbin{
    
    
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:1.2
    
        };
        this.w = 200;
        this.h = 200;
        this.side1 = Bodies.rectangle(width*3/4+100 , 595 , 20 , 200, {isStatic:true}); 
        this.side2 = Bodies.rectangle(width*3/4-100, 595 , 20, 200, {isStatic:true}); 
        this.boxBottom = Bodies.rectangle(width*3/4 , 635 , 200 , 20, {isStatic:true});
        this.image = loadImage("dustbingreen.png"); 
        World.add(world, this.side1);
        World.add(world, this.side2);
        World.add(world, this.boxBottom); 
    }

    display(){
        stroke("grey");
        var pos =this.boxBottom.position;
        var angle = this.boxBottom.angle;
        push();
        translate(pos.x, pos.y-100);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        
        pop();
        
    }
    
}