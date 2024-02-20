
let btn = document.querySelectorAll("button");
let storage = document.querySelector("#storage");
let inp = document.querySelector("input")


btn[0].addEventListener("click",()=>{
   if(storage.value==="localStorage")
   {
    localStorage.setItem("userName" , inp.value)
   }
   else{
    sessionStorage.setItem("userName",inp.value)
   }
})


btn[1].addEventListener("click",()=>{
    if(storage.value==="localStorage")
    {
   let ans =  localStorage.getItem("userName" );
   alert(`${ans} is the value`)
    }
    else{
let ans = sessionStorage.getItem("userName");
alert(`${ans} is the value`)
    }
 })

 
btn[2].addEventListener("click",()=>{
    if(storage.value==="localStorage")
    {
   let ans =  localStorage.removeItem("userName" );
   alert(`${ans} is the value`)
    }
    else{
let ans = sessionStorage.removeItem("userName");
alert(`${ans} is the value`)
    }
 })

 btn[3].addEventListener("click",()=>{
    if(storage.value==="localStorage")
    {
   let ans =  localStorage.clear("userName" );
   alert(`${ans} is the value`)
    }
    else{
let ans = sessionStorage.clear("userName");
alert(`${ans} is the value`)
    }
 })

//  session storage

localStorage.setItem(1,"sdf")
localStorage.setItem(8,"sdf")
localStorage.setItem(9,"sdf")


// backbutton
let back = document.getElementById("back");
  back.addEventListener("click", ()=>{
history.back();
  })