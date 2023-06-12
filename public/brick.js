class Brick {
    constructor(x, y) {
        this.color = [12, 24, 35];
        this.w = 100;
        this.h = 100;
        this.x = x;
        this.y = y;
    
    }

    show() {
        rect(this.x, this.y, this.w, this.h)
    }
    delete(){
        this.w = 0
        this.h = 0
    }
}
