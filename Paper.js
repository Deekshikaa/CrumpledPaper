class Paper{
	constructor(x,y,r){
		var options = {
			'restitution' : 0.3,
			'friction' : 0,
			'density' : 1.2,
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.paper=Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("paper.png");

		World.add(world, this.paper);

	}
	display(){
			var pos=this.paper.position;		
			push();
			translate(pos.x, pos.y+15);
            fill("white");
			imageMode(CENTER);
			image(this.image, 0,0, 2*this.r, 2*this.r);
			pop();
	}

}