const user = {
    username: "shivam",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function (){
        // console.log("User details from database");
        console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promissOne = new Promise()

// "new" is constructor

function User(username,logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    return this
}

const userOne = new User("shivam",12,true);
const userTwo = new User("Aman",6,false);
console.log(userTwo.constructor);
// console.log(userOne);

// new-> create new empty Object 
// call constructor function
// inject argument