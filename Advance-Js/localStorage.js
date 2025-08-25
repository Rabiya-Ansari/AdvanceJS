// console.log("Dark mode");


// const body = document.body;
// const btn =document.getElementById("btn");
// const savedTheme = localStorage.getItem("theme")
// if(savedTheme){
//     body.classList.add(savedTheme);
// }

// else {
//     body.classListadd("light")
// }

// btn.addEventListener("click", ()=> {
//     if (body.classList.contains("light")) {
//         body.classList.replace("light","dark");
//         localStorage.setItem("theme","dark")
//     }

//     else{
//         body.classList.replace("dark","light")
//         localStorage.setItem("theme","light")
//     }
// })


const body = document.body;
const light =document.getElementById("light");
const dark =document.getElementById("dark")


const savedTheme=localStorage.getItem("theme");

if(savedTheme){
    body.classList.add(savedTheme);
}

else {
    body.classList.add("light")
}

dark.addEventListener("click", ()=> {
    if (body.classList.contains("light")) {
        body.classList.replace("light","dark");
        localStorage.setItem("theme","dark");
        light.classList.remove("iconHide")
        dark.classList.add("iconHide");
    }

    else{
        body.classList.replace("dark","light")
        localStorage.setItem("theme","light")
        dark.classList.remove("iconHide")
        light.classList.add("iconHide");
    }
})


light.addEventListener("click", ()=> {
    if (body.classList.contains("dark")) {
        body.classList.replace("dark","light");
        localStorage.setItem("theme","light");
        light.classList.remove("iconHide")
        dark.classList.add("iconHide");
    }

    else{
        body.classList.replace("light","dark")
        localStorage.setItem("theme","dark")
        dark.classList.remove("iconHide")
        light.classList.add("iconHide");
    }
})
