class Paddle{
    constructor(x,y){
        this.x = x
        this.y = y
        this.w = 300
        this.h = 50
        this.xSpeed = 5

        
    }
    show(){
        rect(this.x,this.y,this.w,this.h)
    
    }
    move(movement) {
        this.x = this.x + (this.xSpeed * movement)
    }
    }


