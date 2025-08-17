class Parent {
    constructor(name){
        this.name = name;
        console.log(`Parent name is ${Parent.Capatalize(this.name)}`)

    }

    intro(){
        console.log("Parent Introduction")
    }

    static Capatalize(name){
        return name.charAt(0).toUpperCase() +name.substr(1,6);

    }
}

const p = new Parent ("Rabiya");
Parent.Capatalize
p.intro


