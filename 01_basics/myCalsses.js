// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encyrptPassword(){
//         return `${this.password}abc`
//     }


//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const shivam = new User("shivam","shivam@gmail.com","1234");
// console.log(shivam.encyrptPassword());
// console.log(shivam.changeUsername());

// behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encyrptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const myshivam = new User("shivam","sh@gmail.com","1234");
console.log(myshivam.changeUsername());
console.log(myshivam.encyrptPassword());