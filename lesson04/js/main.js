/**
 * 脚本业务程序部分
 */
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
let parent = createParent(); //创建父元素
createChild([5,8]); //创建5行8列的子元素
/**
 * 以下代码可以理解js中事件冒泡捕捉原理
 * 利用事件冒泡捕捉原理，直接设置父元素的点击事件监听，然后通过event.target去设置每一个子元素的背景
 *  */ 
parent.addEventListener('click', clickChangeBg); 

/**
 * 函数部分
 */


// 根据窗口大小创建一个窗口大小一半的父容器
function createParent() {
    let p = writeDomInBody('div', '')
    p.style.width = width / 2 + "px";
    p.style.height = height / 2 + 'px';
    p.style.backgroundColor = 'black';
    p.style.margin = 0 + 'px';
    return p
}

//根据行列二维数组在父容器里面创建16个等额区域
function createChild(rc) {
    let child;
    const childWidth = parent.offsetWidth / rc[1];
    const childHeight = parent.offsetHeight / rc[0];
    for (let i = 0; i < rc[0]; i++) {
        for (let j = 0; j < rc[1]; j++) {
            child = document.createElement('div');
            child.style.position='absolute';
            child.style.left = childWidth * j + 'px';
            child.style.top = childHeight * i + 'px';
            child.style.width = childWidth + 'px';
            child.style.height = childHeight + 'px';
            child.style.backgroundColor = genrateRandomBackgroundColor();
            parent.appendChild(child);
            console.log('i= ' + i + ' , j = ' + j);
        }
    }
}

//随机生成一个rgba的颜色字符串
function genrateRandomBackgroundColor() {
    return 'rgba(' + random(255) + ','
    + random(255) + ',' + random(255) +','+ 1 +')' 
}
//利用时间冒泡原理，直接在父控件上添加点击事件
function clickChangeBg(e) {
    //e.stopPropagation();//添加这句可以防止事件向上冒泡传递
    e.target.style.backgroundColor = genrateRandomBackgroundColor();
    console.log("11111");
}



