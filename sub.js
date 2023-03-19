class Car{
    constructor(x,y,width,height) {
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
        this.ctrl = new Controls()
        this.speed = 0
        this.maxSpeed =3
        this.acceleration = 0.2
        this.friction = 0.05
        this.angle = 0
    }

    update(){
        if(this.ctrl.forward){
            this.speed += this.acceleration
            
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed
        }
        if(this.ctrl.bottom){
            this.speed -= this.acceleration
        }
        if(this.speed <-this.maxSpeed/2){
            this.speed = -this.maxSpeed/2
        }
        if(this.speed >= 0){
            this.speed -= this.friction
        }
        if(this.speed <0){
            this.speed += this.friction
        }
        if(this.speed != 0){
            let flip = this.speed > 0 ? 1 : -1
            if(this.ctrl.left){
                
                this.angle += 0.06*flip
                
                
            }
            if(this.ctrl.right){
                this.angle -= 0.06*flip
            }
        }
        this.x -= Math.sin(this.angle)*this.speed
        this.y -= Math.cos(this.angle)*this.speed
    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)
        ctx.beginPath()
        ctx.rect(
            -this.width/2,
            -this.height/2,
            
            this.width,
            this.height
        )
        ctx.fill()
        ctx.restore()
    }
}