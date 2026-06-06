// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)

let str1 = "shivam "
let str2 = "kumar"

let str3 = str1 + str2

// console.log(str3)

// ==============memory===========

// stack(primitive) , heap(non-primitive)

let name  = "shivam"
let anothername = name;
anothername = "Kumar";

// console.log(anothername);

// =========array=========

// const myarray = [1,2,3,4,5]

// myarray.push(6)

// console.log(myarray);

// const newpush = myarray;
// newpush.pop()

// newpush.slice(9);

// newpush.findIndex();

// console.log(newpush);


const myarray = [1,2,3,4];
// console.log(myarray);

const june = myarray.slice(2);
// console.log(june);

const july = myarray.splice(1,3)
// console.log(july);


// ============= Object ===============

const user  = {}
user.id = "231"
user.name = "shivam"
user.isLoggedIn = false

// console.log(user)

const obj1 = {1:"a",2:"b"}
const boj2 = {3:"c",4:"d"}

// const obj3 = {obj1,boj2}
// const obj3 = Object.assign({},obj1,boj2);

const obj3 = {...obj1, ...boj2}

// console.log(obj3)

console.log(user)

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("islogn"));

