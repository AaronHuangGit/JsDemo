// body中插入游戏标题
const gameH = writeDomInBody('h2', '猜数字游戏');
// body中插入游戏说明
const gameP = writeDomInBody('p', '我刚才随机选定了一个100以内的自然数。看你能否在 10 次以内猜中它。每次我都会告诉你所猜的结果是高了还是低了。')
let myNumber = '500';
console.log(typeof myNumber);
myNumber = 500;
console.log(typeof myNumber);