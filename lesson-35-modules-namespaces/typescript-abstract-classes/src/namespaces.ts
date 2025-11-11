namespace Shapes {
  const PI = Math.PI;

  export class Circle {
    // radius: number;
    constructor(public radius: number) {
      this.radius = radius;
    }

    getArea(): number {
      return PI * this.radius ** 2;
    }

    getPerimetr(): number {
      return 2 * PI * this.radius;
    }
  }

  export class Square {
    constructor(public side: number) {
      this.side = side;
    }

    getArea(): number {
      return this.side ** 2;
    }

    getPerimetr(): number {
      return 4 * this.side;
    }
  }
}

// const circle = new Shapes.Circle(10);
// console.log(circle.getArea());
namespace Geometry {
  export namespace TwoD {
    const PI = Math.PI;

    export class Circle {
      // radius: number;
      constructor(public radius: number) {
        this.radius = radius;
      }

      getArea(): number {
        return PI * this.radius ** 2;
      }

      getPerimetr(): number {
        return 2 * PI * this.radius;
      }
    }

    export class Square {
      constructor(public side: number) {
        this.side = side;
      }

      getArea(): number {
        return this.side ** 2;
      }

      getPerimetr(): number {
        return 4 * this.side;
      }
    }
  }

  export namespace ThreeD {
    export class Cube {
        constructor(public side: number) {
            this.side = side;
        }

        getVolume(): number {
            return this.side ** 3;
        }
    }
  }
}

const cube = new Geometry.ThreeD.Cube(10);
console.log(cube.getVolume());