function writeDomInBody(elementType, elementTextContent) {
    const hDom = document.createElement(elementType);
    hDom.textContent = elementTextContent;
    document.body.appendChild(hDom);
    // hDom.style.width = document.documentElement.clientWidth / 2 + "px";
    // hDom.style.height = document.documentElement.clientHeight/2 + 'px';
    // hDom.style.backgroundColor = 'red'
    return hDom;
}

function random(number = 1) {
    return Math.floor(Math.random() * number)
}

