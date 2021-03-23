/**
 * 猜数小游戏，运用了document API， 流程控制语句，循环语句，监听器
 * （猜数字游戏 -- 我刚才随机选定了一个100以内的自然数。看你能否在 10 次以内猜中它。每次我都会告诉你所猜的结果是高了还是低了。）
 */

//生成0-100的随机整数
let ramdomNumber = Math.floor(Math.random() * 100) + 1;
//通过Document Api获取对应的Element对象赋值给对应常量
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.gusessField');
//定义猜数计数器变量以及重新游戏的按钮变量
let guesssCount = 1;
let resetButton;
//用于检查用户输入猜数是否正确，以及显示对应的界面和对应变量属性赋值
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guesssCount === 1) {
        guesses.textContent = '上次猜的数：';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === ramdomNumber) {
        lastResult.textContent = '恭喜你！猜对了';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        if(guesssCount == 10) {
            lastResult.textContent = '!!! Game Over !!!';
            lowOrHi.textContent = '';
            setGameOver();
            return;
        }
        lastResult.textContent = '你猜错了！';
        if(userGuess < ramdomNumber) {
            lowOrHi.textContent = '你猜低了';
        } else {
            lowOrHi.textContent = '你猜高了';
        }
    }
    guessField.value='';
    guessField.focus();
    guesssCount++;
}

//游戏结束
function setGameOver() {
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton = writeDomInBody('button', '重新开始游戏');
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
//游戏重置
function resetGame() {
    guesssCount = 1;
    ramdomNumber = Math.floor(Math.random() * 100) +1;
    guessField.disabled=false;
    guessSubmit.disabled = false;
    let lables = document.querySelectorAll('.resultParas p');
    for(let i =0; i< lables.length;i++) {
        lables[i].textContent = '';
    }
    lastResult.style.backgroundColor='white';
    guessField.value='';
    guessField.focus();
    document.body.removeChild(resetButton);
}
//添加猜数确定按钮的点击事件监听
guessSubmit.addEventListener('click', checkGuess);