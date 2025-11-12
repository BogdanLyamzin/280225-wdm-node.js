type WorkMode = "office" | "hybrid" | "remote";

abstract class Employee {
  name: string;
  lastName: string;
  sallaryPerHour: number;
  abstract workMode: WorkMode;

  static companyName: string = "ITCareerHub";
  static workModeList: WorkMode[] = ["office", "hybrid", "remote"];

  static calcSallarySum = (employees: Employee[]) => {
    return employees.reduce(
      (acum: number, employee: Employee): number =>
        acum + employee.calcSallary(),
      0,
    );
  };

  constructor(name: string, lastName: string, sallaryPerHour: number) {
    this.name = name;
    this.lastName = lastName;
    this.sallaryPerHour = sallaryPerHour;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  isFiniteNumber(value: unknown): boolean {
    if (typeof value !== "number") {
      throw new Error("price must be number");
    }
    if (Number.isNaN(value)) {
      throw new Error("price cannot be NaN");
    }
    if (!Number.isFinite(value)) {
      throw new Error("price cannot be Infinity");
    }
    return true;
  }

  abstract calcSallary(): number;
}

class FullTimeEmployee extends Employee {
  protected _probation = true;
  protected _workTerm = 0;
  workMode: WorkMode = "office";

  constructor(name: string, lastName: string, sallaryPerHour: number) {
    super(name, lastName, sallaryPerHour);
  }

  getProbation(): boolean {
    return this._probation;
  }

  getWorkTerm(): number {
    return this._workTerm;
  }

  addWorkTerm(value: number): void {
    this.isFiniteNumber(value);
    if (value < 0) {
      throw new Error("work term can't be less then 0");
    }
    this._workTerm += value;
    if (this._workTerm > 6) {
      this._probation = false;
    }
  }

  calcSallary(): number {
    const workYears = Math.floor(this._workTerm / 12);
    const multiplier = 1 + workYears / 10;
    return this.sallaryPerHour * 8 * 22 * multiplier;
  }
}

class PartTimeEmployee extends Employee {
  protected _workHours = 0;
  workMode: WorkMode = "hybrid";

  constructor(name: string, lastName: string, sallaryPerHour: number, workMode?: WorkMode) {
    super(name, lastName, sallaryPerHour);
    if(workMode) {
        this.workMode = workMode;
    }
  }

  setWorkMode(newWorkTime: WorkMode) {
    if(Employee.workModeList.includes(newWorkTime)) {
        this.workMode = newWorkTime;
    }
  }

  getWorkHours(): number {
    return this._workHours;
  }

  setWorkHours(value: number): void {
    this.isFiniteNumber(value);
    if (value < 0) {
      throw new Error("Work hours can't be less then 0");
    }
    this._workHours = value;
  }

  calcSallary(): number {
    return this._workHours * this.sallaryPerHour;
  }
}

const fullTimeEmployee = new FullTimeEmployee("Bohdan", "Liamzin", 50);
// console.log(fullTimeEmployee);
// fullTimeEmployee.addWorkTerm(20);
// console.log(fullTimeEmployee);
// console.log(fullTimeEmployee.calcSallary());
const partTimeEmployee = new PartTimeEmployee("Nastya", "AnaCot", 60);
partTimeEmployee.setWorkHours(80);
console.log(partTimeEmployee.calcSallary());
