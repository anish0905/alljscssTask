

let myDate =  document.querySelector("#date");
    
setInterval(()=>{
 let currDate = new Date();
  console.log(currDate)
 let h = currDate.getHours();
 let m = currDate.getMinutes();
 let s = currDate.getSeconds();

let hms = `${h}:${m}:${s}`;
myDate.innerHTML=hms;
},1000);

// image
let myBtn =document.querySelectorAll("button");
let myImg = document.querySelector("img");

let image=[
    {
        img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20"
    },
    {
        img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
    },
    {
        img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20"
    },
    {
        img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7258d330df72ecde.jpg?q=20"
    },
    {
        img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
    },
    {
img:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/977fcd33f4fd525f.jpg?q=20"
    }


]

function changeContent(index) {
    myImg.src = image[index].img;
}

let num = 0;

myBtn[0].addEventListener("click", () => {
    num--;
    if (num < 0) {
        num = image.length - 1;
    }
    changeContent(num);
});

myBtn[1].addEventListener("click", () => {
    num++;
    if (num >= image.length) {
        num = 0;
    }
    changeContent(num);
});

setInterval(() => {
    changeContent(num);
    num++;
    if (num >= image.length) {
        num = 0;
    }
}, 1000);

changeContent(num);




// counDown

// var countDownDate = new Date("feb 20, 2024 15:37:25").getTime();






let counts=document.querySelectorAll(".countDown")

// console.log(counts);







function countDown(offerStart,ele) {

    var now = new Date().getTime();
  
    var distance = offerStart - now;
  
    
  
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//    console.log(ele);
    ele.innerHTML =  hours + "hr "  + minutes + "min " + seconds + "sec ";
  
  }

let offer1=new Date(19,2,2024).getTime()
let offer2=new Date(20,2,2024).getTime()
let offer3=new Date(22,2,2024).getTime()


setInterval(()=>{
    countDown(offer2,counts[2])
},1000)




// Drodown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
myFunction()