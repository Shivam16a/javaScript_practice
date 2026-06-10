// iterations

// for loop

for (let index = 0; index <= 10; index++) {
    const element = index
    if(element == 5){
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

let muarr = ["shivam","aman","rahul"]
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
    if(index == 5){
        // console.log(`detected 5`);
        continue;
    }
    // console.log(`value of index is ${index}`); 
}

// ============== while and do while =================

let index = 0;

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index+2;
}

let myarr = ["motu", "patlu"]

let arr = 0;
while(arr<myarr.length){
    // console.log(`Value is ${myarr[arr]}`);
    arr = arr+1;
}


let score = 11;

do {
    // console.log(`score is ${score}`);
    score++;
} while (score<=10);