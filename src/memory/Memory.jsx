
function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

let users = [];

export {User, users};