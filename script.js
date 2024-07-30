const inp = document.querySelector("input");
const btn = document.querySelector("button");
const copy = document.querySelector(".display img");
const length = document.querySelector(".pass-length input");

btn.addEventListener("click", ()=>{
    inp.value = "";
    if(length.value < 1){
        length.value = 5;
    }else if(length.value > 16){
        length.value = 16;
    }
    let passLength = length.value;
    inp.value += genpass(passLength);
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

function genpass(length){
    let password = "";
    for(let i=0; i<length; i++){
        let passtype = passwordArray[Math.floor(Math.random()*passwordArray.length)];
        password += passtype[Math.floor(Math.random()*passtype.length)];
    }
    return password;

}
console.log(genpass());