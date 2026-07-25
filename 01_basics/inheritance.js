class User{
    constructor(username){
        this.username = username
    }

    picme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const shivam = new Teacher("shivam","shivam@gmail.com","123");
shivam.addCourses()
shivam.picme()

const myshivam = new User("Aman");
myshivam.picme()

console.log(shivam instanceof User)