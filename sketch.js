
let ball;
let player;
let opponent;
let playerScore = 0;
let opponentScore = 0;

function setup() {
  createCanvas(2130, 1000);
  ball = new Ball();
  player = new Paddle(true,player1Img);
 // player.scale=3
  opponent = new Paddle(false,player2Img);
  table=createSprite(windowWidth/2,windowHeight/2+85,50,100);
  table.scale=2
  invisibleWall1=createSprite(880,550,10,200)
  
  invisibleWall2=createSprite(1260,550,10,200)
  
}

function preload()
{
  bgImg=loadImage("assets/rio 2016 1.jpg")
  tableImg=loadImage("assets/rio-table-tennis_table.png")
   player1Img=loadImage("assets/Table tennis racket.jpg")
   player2Img=loadImage("assets/table tennis racket 2.png")

}
function draw() {
  background(bgImg);
  invisibleWall1.visible=false
  invisibleWall2.visible=false
   
  ball.update();
  player.update();
  opponent.update();
  ball.display();
  player.display();
  opponent.display();
  table.addImage("table1",tableImg)
  //player.addImage("player1",player1Img)
  //opponent.addImage("player2",player2Img)
  checkCollision();
  displayScores();
  drawSprites();
}



function displayScores() {
  textSize(32);
  textAlign(CENTER);
  fill(0);
  text(playerScore + " - " + opponentScore, width / 2, 50);
}

function resetGame() {
  ball = new Ball();
  player = new Paddle(true,player1Img);
  opponent = new Paddle(false,player2Img);
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 15;
    this.xSpeed = 5;
    this.ySpeed = 5;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}

class Paddle {
  constructor(isPlayer,paddleImage) {
    this.width = 100;
    this.height = 100;
    this.isPlayer = isPlayer;
    this.x = width / 2 - this.width / 2;
    this.y = isPlayer ? height - this.height : 0;
    this.image = paddleImage;
  }

  update() {
    if (this.isPlayer) {
      this.x = mouseX - this.width / 2;
      this.x = constrain(this.x, 0, width - this.width);
    }
  }

  display() {
   if (this.image) {
      image(this.image, this.x, this.y, this.width, this.height);
   } else {
      fill(0);
      rect(this.x, this.y, this.width, this.height);
    }
  }
}