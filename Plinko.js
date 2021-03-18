class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			
			
			//strokeWeight(4);
			fill(128,128,128)
			circle(pos.x,pos.y,2*this.r);
			pop()
			
	}

}
