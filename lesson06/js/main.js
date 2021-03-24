const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'); //创建一个允许画布绘制的2D图形区域变量
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
//生成一个min和max之间的一个随机整数
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成一个RGB随机颜色
function randomColor() {
    return 'rgb(' +
        randomMinMax(0, 255) + ',' +
        randomMinMax(0, 255) + ',' +
        randomMinMax(0, 255) + ')';
}

//定义小球类
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//绘制小球
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

//使小球动起来
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

//碰撞后修改对应小球的颜色
Ball.prototype.collisionDetect = function () {
    for (let i = 0; i < balls.length; i++) {
        if (this !== balls[i]) {
            const dx = this.x - balls[i].x;
            const dy = this.y - balls[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.size + balls[i].size) {
                balls[i].color = this.color = randomColor();
            }
        }
    }
}

//生成所有小球
let balls = [];
while (balls.length < 50) {
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

//绘制并执行动画
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}

loop()