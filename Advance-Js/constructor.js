class User{
    constructor(name,id){
        this.name=name;
        this.id=id;
        alert(`User is ${this.name} and id is ${this.id}`);
    }

    userdetail(email){
        this.email=email;
        alert(`User email is ${this.email}`)
    }
}

const user1=new User("Ali",20);
const user2=new User("Aliyan",21);
const user3=new User("Huzaifa",22);

user1.userdetail("ali@gmail.com");
user2.userdetail("aliyan@gmail.com");
user3.userdetail("huzaifa@gmail.com");