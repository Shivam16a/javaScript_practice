// iterations

// for loop

for (let index = 0; index <= 10; index++) {
    const element = index
    if (element == 5) {
        // console.log("5 is the best number");

    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);

    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

let muarr = ["shivam", "aman", "rahul"]
// console.log(muarr.length);

for (let index = 0; index < muarr.length; index++) {
    const element = muarr[index];
    // console.log(element)
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of index is ${index}`); 
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        continue;
    }
    // console.log(`value of index is ${index}`); 
}

// ============== while and do while =================

let index = 0;

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myarr = ["motu", "patlu"]

let arr = 0;
while (arr < myarr.length) {
    // console.log(`Value is ${myarr[arr]}`);
    arr = arr + 1;
}


let score = 11;

do {
    // console.log(`score is ${score}`);
    score++;
} while (score <= 10);


// ============= for of ===============

const arra = [1, 2, 3, 4, 5]

for (const num of arra) {
    // console.log(num);
}

const greetings = "hello world!"

for (const gret of greetings) {
    // console.log(`Each character is ${gret}`);

}

// ============== map =============

const map = new Map()

map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    gem1: 'bubbol short',
    game2: 'car game'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }

for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program = ["js", "c++", "py", "java"]

for (const key in program) {
    //    console.log(program[key])
}

for (const key in map) {
    // console.log(key);

}

// ============= for each ==============

const coding = ["js", "java", "py", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);

// })

// coding.forEach((item)=>{
//     console.log(item);

// })

// function printme(item) {
//     console.log(item);

// }

// coding.forEach(printme)

coding.forEach((item,index, arr)=>{
    // console.log(item,index, arr);
})

const mynumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = mynumber.filter((num)=>{
//     return num>4
// })

const newNums = []

mynumber.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums);


// const Onums = mynumber.map((num)=>{return num+10})

const Onums = mynumber
        .map((num)=> num * 10)
        .map((num)=> num+1)
        .filter((num)=>num>=40)
// console.log(Onums);

// ========== reduce ===================

const jnums = [1,2,3]

const gnums = jnums.reduce((acc,curn)=>{
    console.log(`acc:${acc} and crun value: ${curn}`)
    return acc+curn
},0)

console.log(gnums);