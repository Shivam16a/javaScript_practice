class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password.toUpperCase()}123`
    }
    set password(value) {
        this._password = value
    }
}

const shivam = new user("s@gmail.com", "abc")
// console.log(shivam.password)
// console.log(shivam.email)

// Old method to setter and getter

function User(email, password) {
    this._email = email
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email
        },
        set: function (value) {
            this._email = value
        }
    })
}

const myshivam = new User("shi@gmail.com", "abc123")
// console.log(myshivam.email)

const Myuser = {
    _email: 'sh@gmail.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const youshivam = Object.create(Myuser)
console.log(youshivam.email)