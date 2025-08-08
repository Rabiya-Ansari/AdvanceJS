// class Aptech {
//     constructor(branch_name){
//         this.branch_name=branch_name;
//     }

//     aptechInfo() {
//       console.log(`Branch: ${this.branch_name}`);
//     }
// }

// class Department extends Aptech {
//     constructor(branch_name,dep_name) {
//         super(branch_name);
//         this.dep_name =dep_name;
//     }

//     departmentInfo(){
//         console.log(`Department: ${this.dep_name}`);
//     }
// }

// class Course extends Department{
//     constructor(branch_name,dep_name,course_name,duration){
//         super(branch_name,dep_name);
//         this.course_name = course_name;
//         this.duration = duration;
//     }
//     courseInfo(){
//         console.log(`Course:${this.course_name},Duration: ${this.duration}`);
//     }
// }

// class Student extends Course {
//     constructor (branch_name,dep_name,course_name,duration,student_name,id){
//         super(branch_name,dep_name,course_name,duration);
//         this.student_name = student_name;
//         this.id = id;
//     }
//     studentInfo(){
//         console.log(`Student: ${this.student_name},ID: ${this.id}`)
//     }
// }

// const student1 = new Student ("Aptech-SFC","Admission-department","Software Engineering","3 Year","Rabiya","1640841");

// student1.aptechInfo();
// student1.departmentInfo();
// student1.courseInfo();
// student1.studentInfo();

class Motor {
    constructor(Car_name,model,num,year,color,space){
        this.name = Car_name;
        this.model = model;
        this.num = num;
        this.year = year;
        this.color = color;
        this.space = space;
        console.log(`Car name ${this.name}, model ${this.model}`);
    }
   greet(){
        alert(`CarName ${this.name},Model:${this.model},Num:${this.num} ,Year:${this.year},Color:${this.color}, Sapce:${this.space}`)
    }
}

class Vehicle extends Motor {
    constructor(Car_name,model,num,year,color,space){
        super(Car_name,model)
        this.model = model;
        this.num = num;
        this.year = year;
        this.color = color;
        this.space = space;
        console.log(`Num:${this.num}, Year${this.year},Color:${this.color},Space:${this.space}`)
    }
   
}

const vehicle1 = new Vehicle ("Toyota", "Yaris","BZB-282",2020,"White",5)
vehicle1.greet();
