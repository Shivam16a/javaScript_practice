// if

// <,>,<=,>=, == , != , ===, !==

const score = 200

if (score > 100) {
    // const power = "fly"
    // var power = "fly"
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);

// const balance = 1000

// if(balance>500) console.log("text"),console.log("test2");

// if (balance < 500) {
//     console.log("less then");
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 900){
//     console.log("less then 900");
// }else{
//     console.log("less then 1200");
// }

const loggedin = true
const creaditcard = true

const googleloggedin = false
const emailloggedin = true

if( loggedin && creaditcard){
    console.log("Allow to buy course");
}

if(googleloggedin || emailloggedin){
    console.log("user logged in");
}