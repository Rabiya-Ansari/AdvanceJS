class Person {
    constructor(n, a){
        this.name=n;
        this.age=a;
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
    greet(){
        alert("Greet Method")
    }
}

class  Student extends Person {
}

class Employe {

}

const Student1 =new Student("huzaifa" ,20)
Student1.greet()