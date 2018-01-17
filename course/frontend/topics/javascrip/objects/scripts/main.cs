// is_object


// Create object car

function Car(brand, model, color){
    this.brand = brand;
    this.modelo = model;
    this.color = color;
}
function toString(){
    return 'My ' + this.color + " " + this.brand + " " + this.modelo + " is great!";
}

var auto = new Car("Seat","Leon","Black");
auto.toString();

/// 17/01/18

function Person(firstName,lastName, age, gender, interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
Person.prototype.greeting = function(){
    return 'Hi! I am ' + this.firstName};
Person.prototype.farewell = function(){
    return this.firstName + " has left the building. Bye for now!"};
Person.prototype.bio = function(){
    var str = "";
    for(var i = 0; i < this.interests.length;i++){
        if(i == this.interests.length-2){
            str += this.interests[i] + " and ";
        }else{
            str += this.interests[i] + ', ';
        }
    }
    return this.firstName + " " + this.lastName + " is " + this.age + " years old. " + this.gender + " likes " + this.interests.join(',')};

var person1 = new Person('Jaime','Rubio',33,'Male',['skylab','correr'])
console.log('Funcion 1: ' + person1.greeting());
console.log('Funcion 2: ' + person1.farewell());
console.log('Funcion 3: ' + person1.bio());

// Student
function Student(firstName, lastName, age, gender, interests){
    Person.call(this,firstName, lastName, age, gender, interests);    
}
Stundent.prototype = new Person();
Student.prototype.greeting = function(){return 'Yo! I am ' + this.firstName};

var student1 = new Student("Pepe","Garcia",40,"Male", ['comer','beber']);
console.log('Funcion Student: ' + student1.greeting());
console.log('bio: ' + student1.bio());

// Teacher
function Teacher(firstName,lastName,age,gender,interests,subject){
    Person.call(this,firstName, lastName, age, gender, interests)    
    this.subject = subject;
}
Teacher.prototype = new Person();
Teacher.prototype.greeting = function(){
    var sr = "";
    if(this.gender === 'Female'){
        sr = "Mrs.";
    }else{
        sr = "Mr.";
    }
    return 'Hello. My name is ' + sr + " " + this.firstName };
var teacher1 = new Teacher("Lola","Perez",50,"Female",['lectura','pasear'],'Filosofia');
console.log('Funcion Teacher: ' + teacher1.greeting());

