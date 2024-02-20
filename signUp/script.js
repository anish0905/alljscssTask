let name1=document.querySelector("#name")
let email=document.querySelector("#email")
let pass=document.querySelector("#pass")
let cpass=document.querySelector("#cpass")
let nameError=document.querySelector(".nameError")
let emailError=document.querySelector(".emailError")
let passError=document.querySelector(".passError")
let cpassError=document.querySelector(".cpassError")
let submit=document.querySelector("#submit")
let form=document.querySelector("form")

submit.addEventListener("click",(e)=>{
e.preventDefault()   
let nVal=name1.value
let eVal=email.value
let pVal=pass.value
let cpVal=cpass.value
let asciFc=nVal.charCodeAt(nVal[0])
nameError.innerText=""
let nameReturnVal=evaluateName(nVal)
let emailReturnVal=evaluateEmail(eVal)
let passReturnVal=evaluatePassword(pVal)
let cpassReturnVal;
if(passReturnVal)
{
cpassReturnVal=evaluateConfirmPass(pVal,cpVal)
}
if(nameReturnVal && emailReturnVal && passReturnVal && cpassReturnVal)
{
setTimeout(()=>{
// window.open("https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART")
window.open("http://127.0.0.1:5500/index.html")
},2000)

}

})


function evaluateName(str)
{
let asciFc=str.charCodeAt(str[0])

if(!((asciFc>=65 && asciFc<=90) ||(asciFc>=97 && asciFc<=122)  ) )
{

console.log("1st char invalid");
nameError.innerText="1st char invalid"
return false
}

else if(str.length<3)
{
console.log("istrid name length");
nameError.innerText="invalid name length"
return false

}
for(let i=0;i<str.length;i++)
{
let sAsciVal=str.charCodeAt(str[i])
if(!(sAsciVal>=65 && sAsciVal<=90) ||(sAsciVal>=97 && sAsciVal<=122) )
{
console.log("invalid name it may include other a-z A-Z");
   nameError.innerText="invalid name it may include other a-z A-Z"
return false;

}
} 
nameError.innerText="valid name"
return true
}


function evaluateEmail(x)
{
let str=x

if(!str.includes("@"))
{
// console.log("include @ ");
emailError.innerText="include @ "
return false
}
else if(!(str.endsWith(".com")||str.endsWith(".in")))
{
// console.log("include .com or .in at the last");
emailError.innerText="include .com or .in at the last"
return false;
}
emailError.innerText="valid email"
return true
}


function evaluatePassword(y)
{
let str=y
let uc=0;
let lc=0;
let sc=0;
let nc=0
let valid=true

if(str.length<8)
{
console.log("length should be min 8 char");
passError.innerText="length should be min 8 char"
valid=false
return valid
}

for(let i of str)
{
let asci=i.charCodeAt(0)
if(asci>=65 && asci<=90)
{
uc++
}
else if(asci>=97 && asci<=122)
{
lc++
}
else if(asci >=48 && asci<=57)
{
nc++
}
else{
sc++
}
}
console.log( `uc--${uc}
    lc--${lc}
    nc--${nc}
    sc--${sc}`);

if(uc<1)
{
// console.log("include min 1 uc");
valid=false
passError.innerText="include min 1 uc"
return valid
}
else if(lc<1)
{
// console.log("include min 1 lc");/
passError.innerText="include min 1 lc"
valid=false
return valid

}
else if(nc<1)
{
// console.log("include min 1 nc");

passError.innerText="include min 1 nc"
valid=false
return valid



}
else if(sc<1){
// console.log("include min 1 sc");
passError.innerText="include min 1 sc"
valid=false
return valid


}
else{
console.log("valid password");
passError.innerText="valid password"
valid=true
return valid

}

}


function evaluateConfirmPass(p,cp)
{
if(p!==cp)
{
cpassError.innerText="password and confirm pass is not matching"
return false
}
cpassError.innerText="password and confirm pass is matching"
return true
}
