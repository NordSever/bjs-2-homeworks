function parseCount(strNumber) {
  let resultParse = Number.parseFloat(strNumber);
  if (Number.isNaN(resultParse)) {
    throw new Error('Невалидное значение');
  }
    return resultParse;
}

function validateCount(strNumber2) {
  try {
    return parseCount(strNumber2);
  } catch(err){
    return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    if(b + c < a || a + c < b || a + b < c) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = 0.5 * (this.a + this.b + this.c);
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      }
  }
}      
    

