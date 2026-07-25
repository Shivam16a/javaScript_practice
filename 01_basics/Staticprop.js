class User {
    constructor(username) {
        this.username = username
    }

    picme() {
        console.log(`Username : ${this.username}`);
    }

    createId() {
        return `123`
    }
}

const shivam = new User("shivam")

console.log(shivam.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","i@gmail.com")
console.log(iphone.createId())