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

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this);
