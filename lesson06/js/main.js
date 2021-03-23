const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //创建一个允许画布绘制的2D图形区域变量
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//生成一个min和max之间的一个随机整数
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return 'rgb(' +
        randomMinMax(0, 255) + ',' +
        randomMinMax(0, 255) + ',' +
        randomMinMax(0, 255) + ')';
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
}
let balls = [];
while (balls.length < 25) {
    let size = randomMinMax(10, 20);
    let ball = new Ball(
        randomMinMax(0 + size, width - size),
        randomMinMax(0 + size, height - size),
        randomMinMax(-7, 7),
        randomMinMax(-7, 7),
        randomColor(),
        size
    )
    balls.push(ball);
}
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < balls.length; i++) {

    }
}

function loop01() {
    
}