const form = document.getElementById("form");
const inputField=document.getElementById("inputField");
const button = document.getElementById("mybtn");
const lists = document.getElementsByClassName("lists")[0];


let todoArr= [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const todo =new Todo(inputField.value);
    console.log(todo);

    todoArr =[...todoArr,todo];
    console.log(todoArr);
    UI.displayData();

    inputField.value="";
})

class Todo {
    constructor(name){
        this.name=name;
    }
}
class UI {
    static displayData(){
        let displayData = todoArr.map((d)=>{
            return`
            <div>${d.name}</div>
            `
        });

        lists.innerHTML =displayData.join("")
    }
}   







