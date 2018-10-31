//create an empty array called balls
let balls = [];

function setup() {
  createCanvas(800, 400);
}

function draw(){
	background(220);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
        balls[i].moveBall();
        balls[i].mitosis();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
    let  b = new Ball(0, 100,2);
    balls.push(b);
    console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,direction){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.direction = direction;

	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);

		    ellipse(this.x,this.y,20,20);

	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.direction;
		this.y = this.y+.5;
	}
  mitosis(){
      if (this.x>=400){
        stroke(0);

      ellipse(this.x+10,this.y,20,20);
      this.direction = random(-2,2);

    }
  }

}
