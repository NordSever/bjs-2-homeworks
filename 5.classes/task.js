'use strict'

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state = this.state * 1.5;
  }

  set state(newState) {
    if(newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let foundBook = null;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {
        foundBook = this.books[i];
        break;
      }
    }
    return foundBook;
  }

  giveBookByName(bookName) {
    let foundBookByName = null;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
        foundBookByName = this.books[i];
        this.books.splice(i, 1);
        break;
      }
    }
    return foundBookByName;
  }
}

const myLibrary = new Library('Областная библиотека');
myLibrary.addBook(
  new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    1919,
    1008
  )
);

myLibrary.addBook(
  new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
  )
);
myLibrary.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
myLibrary.addBook(new Magazine('Мурзилка', 1924, 60));

let foundBookByDate = myLibrary.findBookBy('releaseDate', 1919);

let favoriteBook = myLibrary.giveBookByName('Пикник на обочине');
favoriteBook.state = 50;
favoriteBook.fix();
myLibrary.addBook(favoriteBook);

console.log(foundBookByDate);
console.log(myLibrary.books);

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, theme) {
    if (mark < 2 || mark > 5) {
      return;
    }
    
    if (!(theme in this.marks)) {
      this.marks[theme] = [];
    }
    return this.marks[theme].push(mark);
  }

  getAverageBySubject(theme) {
    if (!(theme in this.marks)) {
      return 0;
    }

    let sum = this.marks[theme].reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0)

    return sum / this.marks[theme].length;
  }

  getAverage() {
    let arrayKeysMarks = Object.keys(this.marks);
    let sumAllMarks = 0;

    for (let i = 0; i < arrayKeysMarks.length; i++ ) {
      sumAllMarks += this.getAverageBySubject([arrayKeysMarks[i]]);
    }

    return arrayKeysMarks.length === 0 ? 0 : sumAllMarks / arrayKeysMarks.length;
  }
}  