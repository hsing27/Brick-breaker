/** to do 
 * brick breaker game 
 *     needs: 
 *  moveable paddle
 *  score?
 *  ball
 * 
 * 
 * 
 */


let bricks = []
let ball = new Ball(50, 70)

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    ball.show()
    for (let i = 0; i < 10; i++) {
        bricks.push(new Brick(i * 70, 65))
    }
    console.log(ball)
}


// const isHitBoundaryHorizontal = () => {
//     return (this.x > this.boundaryX - this.w || this.x < 0)
// }

// const isHitBoundaryVertical = () => {
//     return (this.y > this.boundaryY - this.h || this.y < 0)
// }

const isBallHitBrick = (ball, brick,minDistance) =>{

    if (dist(ball.x, ball.y, brick.x + brick.w/2, brick.y + brick.h/2)<minDistance){return true } else return false

}

function draw() {
    background(0)
    ball.show()
    ball.move()
    
    bricks.forEach(brick => {
        // console.log(brick.x)
        if ( isBallHitBrick(ball, brick,50)){
         console.log("hit")
            brick.delete()
        }
        brick.show()})
        


}
