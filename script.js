const inp = document.querySelector("input");
const btn = document.querySelector("button");
const copy = document.querySelector(".display img");

btn.addEventListener("click", ()=>{
    inp.value = "";
    inp.value += genpass();
})

copy.addEventListener("click", ()=>{
    inp.select();
    document.execCommand("copy");
})

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

const passwordArray = [uppercase, lowercase, numbers, special];

function genpass(){
    let password = "";
    for(let i=0; i<10; i++){
        let passtype = passwordArray[Math.floor(Math.random()*passwordArray.length)];
        password += passtype[Math.floor(Math.random()*passtype.length)];
    }
    return password;

}
console.log(genpass());