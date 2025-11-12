class Admin {
    username: string;
    email: string;
    private _password: string;
    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this._password = password;
    }

    checkPassword(value: string): boolean {
        return this._password === value;
    }
}

export default Admin;