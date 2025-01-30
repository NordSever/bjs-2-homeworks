function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}
let student1 = new Student('Ivan', 'male', 19);
let student2 = new Student('Peter', 'male', 20);
let student3 = new Student('Kate', 'female', 18);
    
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if('marks' in this) {
         this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (!('marks' in this) || !this.marks.length) { 
        return 0;
    }
    
    let sumMarks = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sumMarks += this.marks[i]; 
    }
    return sumMarks / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
