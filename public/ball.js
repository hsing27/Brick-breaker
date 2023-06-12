class Ball {
    constructor(x, y) {
        this.color = (115, 115, 155);
        this.radius = 50;
        this.y = 0;
        this.x = 0;


        this.xspeed = 1
        this.yspeed = 2
    }

    show() {
        ellipse(this.x, this.y, this.radius)
    }
    move() {
        this.x += this.xspeed
        this.y += this.yspeed
    }

}