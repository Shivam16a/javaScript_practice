// ============ functions ==============

function username() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// username()

function addTwonumbers(number1,number2){
    console.log(number1+number2)
}

addTwonumbers(1,4)


// =================== scope ================

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
console.log(c)

function add(num){
    return num+1
}

add()

const addTwo = function(num){
    return num+2
}


addTwo();

// ================== this ==============

const user = {
  username :"shivam",
  price:999,
  welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
  }
}

// user.welcomeMessage()

// user.username = "abcd"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this)
// }

// chai()

// const chai = function(){
//     let username = "shivam"
//     console.log(this.username)
// }


const chai = ()=>{
    let username = "shivam"
    console.log(this)
}


// chai()

// const addTwo2 = (num1, num2)=>{
//     return num1 + num2
// }

// const addTwo2  = (num1,num2)=> num1 +num2

// const addTwo2 = (num1, num2)=> (num1+num2)

// const addTwo2 = (num1,num2)=>({username:"shivam"})

// console.log(addTwo2(3,4));

// ============ IIFE ===========

(function chai(){
    console.log(`hii shivam`)
})();

((name)=>{
    console.log(`hello shivam ${name}`)
})('bhi')