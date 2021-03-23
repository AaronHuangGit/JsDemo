// let person = {
//     name: ['Huang', 'Ran'],
//     age: 30,
//     gender:'male',
//     interests:['music', 'skiing'],
//     bio: function() {
//         alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old, he likes ' +
//         this.interests[0]  + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//         alert('Hi, I\'m ' + this.name[0] + '.');
//     }
// };
// console.log(person.name[0]);
// console.log(person.age);
// console.log(person.gender);
// console.log(person);
// person.bio()
// person.greeting();


/**
 * 类的定义
 * @param {*} name 构建器参数
 * @param {*} age 构建器参数
 */
//类构建函数，这里主要做类属性定义
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//使用prototype获取原型对象，主要用来做类函数定义,这样分割属性和函数定义，分装在不同的代码块，代码更具可读性。
Person.prototype.greeting = function () {
    console.log('I \'m ' + this.name + ', my age is ' + this.age + '.');
}

//例子
let person = new Person('Huang Ran');
let person1 = Object.create(person);
let aaa = '111';
function doSomething() {

}

console.log(Person.prototype);
console.log(Object.prototype);
console.log(String.prototype);
person1.greeting();

/**
 * 类的继承
 */
function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.bio = function() {
    console.log('subject: ' + this.subject); 
}
console.log(Teacher.prototype);

let teacher = new Teacher('wang', '25', 'yiyun');
teacher.greeting();
teacher.bio();
console.log(teacher);
