// 获取button，canvas node对象
let btn = document.querySelector('button');
let canvas = document.querySelector('canvas');
// 获取canvas 2d渲染对象
var ctx = canvas.getContext('2d');
//获取宽高
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
// 将宽高复制给画布宽高
canvas.width = width;
canvas.height = height;
//定义点击按钮后随机在画布上画100个圆的函数
function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,10,10,0.3)';
        ctx.arc(random(width), random(height), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}
// 为button按钮设置点击事件监听
btn.addEventListener('click', draw);