class Parent {
    constructor(name){
        console.log(`${name}`)
    }

    sayHello(){
        console.log("say Helloo")
    }

    info(){
        console.log("inforamtion")
    }
}

class child extends Parent {
    constructor(name,age){
        super(name);
        console.log(`${name},${age}`)
    }
    sayHello(){
        super.sayHello("Say hello");
        console.log("say hello")
    }

    info(){
        super.info("info")
        console.log("info")
    }
}


const a = new child("Ali" ,20)
a.sayHello();
a.info();
