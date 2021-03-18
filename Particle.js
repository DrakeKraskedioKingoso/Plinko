class Particle {
    constructor(x, y, r){
        var options ={
            restitution:0.4
        }
        this.scored = false
        this.r=r;
        this.body = Bodies.circle(x, y, this.r, options)
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body)
        
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        
        circle(0, 0, 2*this.r)
        pop()
    }

    score(){
        if(this.body.position.y>500&&this.scored === false){
            if(this.body.position.x>0&&this.body.position.x<width/6){
                score+=500
                this.scored = true
            }
            else if(this.body.position.x>width/6&&this.body.position.x<2*width/6){
                score+=400
                this.scored = true
            }
            else if(this.body.position.x>2*width/6&&this.body.position.x<3*width/6){
                score+=300
                this.scored = true
            }
            else if(this.body.position.x>3*width/6&&this.body.position.x<4*width/6){
                score+=300
                this.scored = true
            }
            else if(this.body.position.x>4*width/6&&this.body.position.x<5*width/6){
                score+=400
                this.scored = true
            }
            else if(this.body.position.x>5*width/6&&this.body.position.x<width){
                score+=500
                this.scored = true
            }
        }
        
        
    }
}