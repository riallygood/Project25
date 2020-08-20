class Ground {
    constructor(){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.5,
            density:1.2
    
        };
        this.body = Bodies.rectangle(width/2, 650, width, 10, options);
        World.add(world, this.body);
    }

    display(){
        rect(width/2, 650, width, 10);
       
    }
    
}