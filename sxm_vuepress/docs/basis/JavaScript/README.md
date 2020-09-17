---
tags:
 - javascript
---
## javascript 总结
### 1.var、function、let、const命令的区别
- 使用var声明的变量，其作用域为该语句所在函数内，且存在变量提升现象
- 使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升
- 使用const声明的是常亮，在后面出现的代码中不能再修改该常量的栈内存所在的值和地址
- 使用function声明的函数，其作用域为该语句所在的函数内，且存在函数提升现象

- var

``` javascript
//1 a.变量提升
//var a = undefined 变量提升
console.log(a)//undefined
var a = 123

//b.作用域
function f(){
    var a = 123
    console.log(a)// =>123
}
console.log(a)// => a is not defind

for(var i = 0; i < 10; i ++){}
console.log(i) // => 10
```
- let

``` javascript
//a. 变量不提升
console.log(a) // => a is not defined
let a = 123

//b.作用域为所在代码块内
for(let i = 0; i < 10; i ++){}
console.log(i) // => i is not defined
```
- const

```javascript
//a. 不能修改的是栈内存在的值和地址
const a = 10
a = 20 //=> Assignment to constant variable

//但是一下的赋值确是合法的
const a ={
    b:20
}
a.b = 30
console.log(a.b) // => 30
```
- function

```javascript
//a.函数提升
fn()// => 123
function fn(){
    return 123
}

//b.作用域
function fn(){
    function fn1(){
        return 123456
    }
    fn1() // => 123456
}
fn1() // => fn1 is not defined
```
面试题：
```javascript
// 我们整理下它的执行顺序
var getName = nudefined
function Foo() {
    getName = function(){
        console.log("1");
    };
    return this;
}
function getName(){
    console.log("5");
}
Foo.getName = function() {
    console.log("2");
};

Foo.prototype.getName = function(){
    console.log("3");
};
getName = function() {
    console.log("4");
}

Foo.getName(); // 2 
/*
函数也是对象, Foo.getName 相当于给 Foo这个对象添加了一个静态方法 getName,我们调用的其实是这个静态方法,并不是调用的我们实例化的 getName
 */

getName(); // 4  
/*
按照上面的执行顺序,其实这个就很好理解了,因为 `getName = function() { console.log("4"); }` 是最后一个赋值, 执行的应该是这个函数
 */

Foo().getName(); // 1  
/*
    这里为什么是 1 而不是我们想象的 3 呢?
    问题就是出在 调用的是 Foo(); 并没有使用 new 这个关键字,所以那时候返回的 this 指向的并不是 Foo, 而是 window;
    至于为什么不用 new 返回的 this 不指向 Foo, 这个随便去哪查一下就好, 就不在这介绍了
 */

getName(); // 1
/*
    这里为什么也是1 呢?  
    其实原因就是 上面我们调用了 `Foo().getName();` 这个方法引起的, 因为我们执行了 Foo 函数, 触发了
    getName = function(){
        console.log("1");
    }
    这段代码, 而且并没有在Foo里面声明  getName 变量, 于是就一直往上查找, 找到外部的 getName 变量 并赋值给它.
    所以这里调用 getName() 方法时, 它的值已经变成
    getName = function(){
        console.log("1");
    } 了
 */

new Foo.getName(); // 2
/*这个时候还是没有实例化, 调用的还是它的静态方法*/

new Foo().getName(); // 3
/*因为实例化了,所以调的是原型上的方法*/
```

### 2.==与===的区别
- 相同点：
 两个运算符都允许任意类型的操作数，如果操作数相等，返回true,否则返回false

- 不同点：
==：运算符称作相等，用来检测两个操作数是否相等，这里的相等定义的非常宽松，可以允许进行类型转换
===：用来检测两个操作数是否严格相等，不会进行类型转换

- ==转换规则
    - 首先看双等号前后有没有NaN,如果存在NaN,一律返回false。
    - 再看双等号前后有没有布尔，有布尔就将布尔转换为数字。(false是0，true是1)
    - 接着看双等号前后有没有字符串，有三种情况：
        a.对方是对象，对象使用toString()或者valueOf()进行转换
        b.对方是数字，字符串转换数字；
        c.对方是字符串，直接比较；
        d.其他返回false
    - 如果是数字，对方是对象，对象取valueOf()或者toString()进行比较，其他一律返回false
    - null,undefined不会进行类型转换，但他们俩相等

```javascript
//不同类型，相同值
var a =1
var b = '1'
console.log(a == b) // => true
console.log(a === b) // => false

//对象和字符串
console.log([1,2,3] == '1,2,3') // => true 因为[1,2,3]调用了toString()方法进行了转换

//对象和布尔
console.log([] == true) // => false []转换为字符串'',然后转换为数字0，true转换为1

//对象和数字
console.log(['1'] == 1) // => true []转换为字符串'1'
console.log(2 == {valueOf:function(){return 2}}) // => true 调用了valueOf()方法进行转换

//null,undefined不会进行类型转化，但他们两相等
console.log(null == 1) // => false
console.log(null == 0) // => false
console.log(undefined == 1) // => false
console.log(undefined == 0) // => false
console.log(undefined == false) // => false
console.log(null == false) // => false
console.log(undefined == null) // => true
console.log(undefined === null) // => false

//NaN 跟任何东西都不相等(包括自己)
console.log(NaN == NaN) // => false
console.log(NaN === NaN) // => false
```

### 3.toSting和valueOf
所有对象继承了这两个转换方法
toSting:返回一个反映这个对象的字符串
valueOf:返回它相应的原始值

- toString
```javascript
    var arr = [1,2,3]
    var obj = {
        a:1,
        b:2
    }
    console.log(arr.toString()) // =>1,2,3
    console.log(obj.toSting()) // => [object Object]
    //那我们修改一下它原型上的toSting方法
    Array.prototype.toSting = function(){return 123}
    Object.prototype.toSting = function(){return 456}
    console.log(arr.toSting()) // => 123
    console.log(obj.toSting()) // => 456

    // 我们看下其余类型转换出来的结果， 基本都是转换成了字符串
    console.log((new Date).toString()) // => Mon Feb 05 2018 17:45:47 GMT+0800 (中国标准时间)
    console.log(/\d+/g.toString()) // => "/\d+/g"
    console.log((new RegExp('asdad', 'ig')).toString()) // => "/asdad/gi"
    console.log(true.toString()) // => "true"
    console.log(false.toString()) // => "false"
    console.log(function(){console.log(1)}.toString()) // => "function (){console.log(1)}"
    console.log(Math.random().toString()) // => "0.2609205380591437"
```

- valueOf
```javascript
var arr = [1,2,3]
var obj = {
    a: 1,
    b: 2
}
console.log(arr.valueOf()) // => [1, 2, 3]
console.log(obj.valueOf()) // => {a: 1, b: 2}
// 证明valueOf返回的是自身的原始值
// 同样我们修改下 valueOf 方法

Array.prototype.valueOf = function(){ return 123 }
Object.prototype.valueOf = function(){ return 456 }
console.log(arr.valueOf()) // => 123
console.log(obj.valueOf()) // => 456

// valueOf转化出来的基本都是原始值，复杂数据类型Object返回都是本身，除了Date 返回的是时间戳
console.log((new Date).valueOf()) // => 1517824550394  //返回的并不是字符串的世界时间了，而是时间戳
console.log(/\d+/g.valueOf()) // => 456  当我们不设置时valueOf时，正常返回的正则表式本身：/\d+/g，只是我们设置了 Object.prototype.valueOf 所以返回的时：456
console.log(Math.valueOf()) // => 456 同上
console.log(function(){console.log(1)}.valueOf()) // => 456 同上
```
### 4.判断是否为数组
Array.isArray()
```javascript
let arr = [];
Array.isArray(arr)
```
instanceof
```javascript
let arr = [];
arr instanceof Array
```
### 5.二维数组
```javascript
let arr = [1,[2,3],4,[5,6]]
//1.普通循环
function flatten (org){
    let newArray = [];
    for(let i=0;i<org.lenght;i++){
        let item = org[i]
        if(Array.isArray(item)){
            newArray = newArray.concat(flatten(item))
        }else{
            newArray.puah(item)
        }
        return newArray
    }
}
flatten(arr)
//2.Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
let newArray = arr.flat()
//3.toString()
let newArray = arr.toString().split(',').map(item =>Number(item))
//4.reduce
function fn(arr){
    return arr.reduce((res,next)=>{
        return res.concat(next)
    },[])
}
```
### 6.判断字符串出现最多的次数
```javascript
let str = 'aassffigbdldddddd';
//1.循环
let obj = {};
for(i=0;i<str.lenght;i++){
    if(obj[str[i]]){
        obj[str[i]]+=1
    }else{
        obj[str[i]] = 1
    }
}
let maxStr='';
for(let k in obj){
    if{maxStr < obj[k]}{
        maxStr = obj[k]
    }
}
//2.reduce
let map = str.split('').reduce((t,v) =>{
    t[v] = t[v] ? ++ t[v] : 1
    return t
},{})
```
### 7.数组去重
```javascript
//1.indexOf
let arr = [1,2,3,3,2,4,5,6,6,1]
function fn(arr){
    let newArray = [];
    for(let i = 0;i<arr.lenght;i++){
        if(newArray.indexOf(arr[i]) === -1){
            nawArray.push(arr[i])
        }
    }
    return newArray
}
fn(arr)
//2.new Set()
let newArray = [...new Set(arr)]
```
