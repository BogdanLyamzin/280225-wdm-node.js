class Car {
    brand: string;
    model: string;
    private _year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this._year = year;
    }

    getAge(): number {
        const date: Date = new Date();
        return date.getFullYear() - this._year;
    }

    setAge(newAge: unknown): boolean {
        if(typeof newAge !== "number") {
            throw new Error("Age must be number");
        }
        const date: Date = new Date();
        const newYear: number = date.getFullYear() - newAge;
        this._year = newYear;
        return true;
    }
    
    getInfo(): string {
        return `${this.brand} ${this.model} ${this._year}`;
    }

    get fullName() {
        return `${this.brand} ${this.model}`
    }
}

const car = new Car("Tesla", "Model S", 2019);
// console.log(car);
// console.log(car.getAge());
// console.log(car.getInfo());
console.log(car.fullName);

class BankAccount {
    accountNumber: string;
    balance: number = 0;

    constructor(accountNumber: string, balance?: number) {
        this.accountNumber = accountNumber;
        if(balance) {
            this.balance = balance;
        }
    }

    isMoney(value: unknown): boolean {
        if(typeof value !== "number") {
            throw new Error("money must be number");
        }
        if(Number.isNaN(value)) {
            throw new Error("money cannot be NaN");
        }
        if(!Number.isFinite(value)) {
            throw new Error("money cannot be Infinity");
        }
        if(value < 0) {
            throw new Error("You can't deposit/withdraw less then 0");
        }
        return true;
    }

    getBalance():number {
        return this.balance;
    }

    deposit(amount: number): void {
        this.isMoney(amount);
        this.balance += amount;
    }

    withdraw(amount: number): boolean {
        this.isMoney(amount);
        if(this.balance < amount) {
            return false;
        }
        this.balance -= amount;
        return true;
    }
}

const bankAccount = new BankAccount("124324143", 1000);


