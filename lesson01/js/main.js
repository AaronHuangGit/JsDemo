function myFunction() {
    var x = document.getElementById("demo");
    x.innerHTML = "Hello JavaScript";
}
const params = document.querySelector('p');
params.addEventListener('click', updateName);
function updateName() {
    let name = prompt('HuangRan');
    params.textContent = name;
}

function addParagraghInBody() {
    let para = document.createElement('p');
    para.textContent = '点击了按钮';
    document.body.appendChild(para);
}
const button = document.querySelectorAll('button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', addParagraghInBody);
}
// document.addEventListener('DOMContentLoaded', addButtonClickListener);