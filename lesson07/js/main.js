function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
const clearClockInterval = setTimeout(function () {
    clearInterval(createClock); 
}, 10000);

let hello = async () => { return 'hello, Aaron Huang'; }
hello().then(message => alert(message));
console.log('test');
