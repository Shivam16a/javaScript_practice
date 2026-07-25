function Setusername(username){
    this.username = username
}

function createuser(username,email,password){
    Setusername.call(this, username)
    this.email = email
    this.password = password
}

const codi = new createuser("shivam","shiv@gmail.com","1234");
console.log(codi);