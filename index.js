import { nanoid} from "nanoid";

let btn = document.querySelector("#btn");
let senha = document.querySelector("#senha");


btn.addEventListener("click",(event)=>{
    event.preventDefault();
    senha.innerHTML = nanoid();
})