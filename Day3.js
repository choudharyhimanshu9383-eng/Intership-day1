//Section A: Objects & Methods (1–10)
//Q1. Ek student object banao jisme name, age, city store h
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(student);
//Q2. Upar wale object ka name print karo.
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(student.name);
//Q3. Object me greet() method add karo.
const student = {
    name: "Ram",

    greet() {
        console.log("Hello I am " + this.name);
    }
};

student.greet();
//Q4. Object me isAdult() method banao.
const student = {
    age: 20,

    isAdult() {
        return this.age >= 18;
    }
};

console.log(student.isAdult());
//Q5. Object ki sabhi keys print karo.
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(Object.keys(student));
//Q6. Object ki sabhi values print karo.
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log(Object.values(student));
//Q7. Check karo ki email property hai ya nahi.
const student = {
    name: "Ram",
    age: 20
};

console.log("email" in student);
//Q8. Object me dynamically property add karo.
const student = {
    name: "Ram"
};

student.course = "MERN";

console.log(student);
//Q9. Object se age property delete karo.
const student = {
    name: "Ram",
    age: 20
};

delete student.age;

console.log(student);
//Q10. Ek object ka clone banao.
const student = {
    name: "Ram",
    age: 20
};

const clone = { ...student };

console.log(clone);
//Section B: this Keyword (11–15)
//1. showName() method ho aur this.name print kare.
const user={
    name:"ram",
showName(){
    console.log(this.name);

}
};
user.showName();
//2.. Uppercase print karo.
const user =
{
    name:"Ram",
    show(){
        console.log(this.name.toUpperCase());
    }
};
user.show();
//Q13. deposit() aur withdraw()
const account = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);
//Q14. Predict Output
const user = {
    name: "Ram",

    show() {
        console.log(this.name);
    }
};

user.show();


//Q15. Predict Output
const user = {
    name: "Ram",

    show: () => {
        console.log(this.name);
    }
};

user.show();



//Section C: Constructor Functions (16–20)
//Q16. Student constructor function banao.
function Student(name, age) {
    this.name = name;
    this.age = age;
}
//Q17. 3 student objects create karo.
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1, s2, s3);
//Q18. Constructor me greet() method add karo.
function Student(name) {
    this.name = name;

    this.greet = function () {
        console.log("Hello " + this.name);
    };
}

const s1 = new Student("Ram");

s1.greet();
//Q19. Predict Output
function User(name) {
    this.name = name;
}

const u1 = new User("Ram");

console.log(u1.name);


//Q20. Car constructor function banao.
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const c1 = new Car("BMW", 5000000);

console.log(c1);
//Section D: Prototype (21–28)
//Q21. Prototype me greet() add karo.
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log("Hello " + this.name);
};

const s1 = new Student("Ram");

s1.greet();
//Q22. Check karo
function Student() {}

const obj = new Student();

console.log(obj.__proto__ === Student.prototype);

//Q23. Prototype me isAdult() add karo.
function Student(age) {
    this.age = age;
}

Student.prototype.isAdult = function () {
    return this.age >= 18;
};

const s1 = new Student(20);

console.log(s1.isAdult());
//Q24. Predict Output
function User(){}

User.prototype.sayHi = function(){
    console.log("Hi");
}

const u1 = new User();

u1.sayHi();


//Q25. Prototype me course property add karo.
function User(){}

User.prototype.course = "MERN";

const u1 = new User();

console.log(u1.course);


//Q26. Output kya hoga?
u1.hasOwnProperty("course")





//Q27. Output kya hoga?
"course" in u1

Output

true

//Reason: in operator prototype bhi check karta hai.

//Q28. Prototype Chain
const arr = [];

//Chain:

/*arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null*/
//Section E: Object.create() (29–32)
///Q29. Animal object banao.
const animal = {
    eat() {
        console.log("Eating");
    }
};
//Q30. Dog object create karo.
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();
//Q31. Dog me bark() method add karo.
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking");
};

dog.bark();
//Q32. Predict Output
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();

//Section F: Classes (33–36)
//Q33. Student class banao.
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Q34. greet() method add karo.
class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const s1 = new Student("Ram");

s1.greet();
//Q35. isAdult() method add karo.
class Student {
    constructor(age) {
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const s1 = new Student(20);

console.log(s1.isAdult());
//Q36. 3 objects create karo.
class Student {
    constructor(name) {
        this.name = name;
    }
}

const s1 = new Student("Ram");
const s2 = new Student("Shyam");
const s3 = new Student("Mohan");

console.log(s1, s2, s3);
//Section G: Inheritance (37–40)
//Q37. Animal class banao.
class Animal {
    eat() {
        console.log("Eating");
    }
}
//Q38. Dog class banao jo Animal ko inherit kare.
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {}
//Q39. Dog class me bark() method add karo.
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
//// day 4
console.log("a");
try{
    console.log("user.name");

}catch{
    comsole.log("handled succesfully")

}
console.log("b")