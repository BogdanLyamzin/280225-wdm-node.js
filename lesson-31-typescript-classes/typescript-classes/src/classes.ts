/*
1. Абстракция - вы описываете только те свойства и методы, 
которые нужны для решения задачи. Например для объекта Накладная:
- получатель;
- отправитель;
- содержимое;
- подпись (электронная);
- дата выдачи;
- дата приема.
2. Инкапсуляция - объект предоставляе интерфейс взаимодействия (свойства и методы),
для работы со своим содержимым. По простому - хотите что-то от объекта - 
используйте его публичные свойства и методы, не лезьте внутрь.
Накладная.setDate()
3. Наследование - если нам нужны свойства и методы одного класса для другого,
мы создаем класс на основании существующего, а не создаем с нуля новый.
4. Полиморфизм - методы объектов могут вести себя по разному в зависимости
от контекста (у дочерних классов методы с тем же названием
 могут работать не так, как у родителя)
*/
// Принципы SOLID

class Product {
  public name: string;
  public description: string;
  private _price: number;
  protected _status: string = "inStock";

  constructor(name: string, description: string, price: number, status?: string) {
    // this = {}
    this.name = name;
    this.description = description;
    this._price = price;
    if(status) {
        this._status = status;
    }
    // this.__proto__ = Product;
    // return this;
  }

  calcDelivery(distance: number): number {
    return distance * 0.1;
  }

  isPrice(value: unknown): boolean {
    if (typeof value !== "number") {
      throw new Error("price must be number");
    }
    if (Number.isNaN(value)) {
      throw new Error("price cannot be NaN");
    }
    if (!Number.isFinite(value)) {
      throw new Error("price cannot be Infinity");
    }
    if (value < 0) {
      throw new Error("Price can't be less then 0");
    }
    return true;
  }

  get status(): string {
    return this._status;
  }

  set status(newStatus: string) {
    if(newStatus !== "inStock" || newStatus !== "sale" || newStatus !== "hidden") {
        throw new Error("status can be only inStock, sale or hidden");
    }
    this._status = newStatus;
  }

  getPrice(): number {
    return this._price;
  }

  setPrice(newPrice: number): boolean {
    this.isPrice(newPrice);
    this._price = newPrice;
    return true;
  }
}

const product1 = new Product("Lenovo X120S", "Тонкий и легкий ноутбук", 1200);
// console.log(product1.name);
// product1._price = 1000;
// console.log(product1._price);
// product1.status = "hidden";

class Phone extends Product {
    protected _memorySize: number = 256;

    constructor(name: string, description: string, price: number, memorySize: number) {
        super(name, description, price);
        this._memorySize = memorySize;
    }

    calcDelivery(distance: number): number {
        return super.calcDelivery(distance) + this.getPrice() * 0.01;
    }
}

const phone = new Phone("iPhone Air 17", "Самый тонкий телефон в мире", 1000, 256);
console.log(phone.calcDelivery(100))