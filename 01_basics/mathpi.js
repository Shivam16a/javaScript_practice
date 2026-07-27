const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI =5;
// console.log(Math.PI);

// console.log(descripter)

const shivam = {
    name : "shivam",
    Roll : 145,
    isAvalable : false,
    robo: function(){
        console.log("myshivam")
    }
}

console.log(Object.getOwnPropertyDescriptor(shivam,"name"))

Object.defineProperty(shivam,'name',{
    // writable:false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(shivam,"name"))

for (let [key,value] of Object.entries(shivam)) {
    if(typeof value !== 'function'){
        console.log(`${value} : ${key}`)
    }
}