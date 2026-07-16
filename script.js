const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const music = document.getElementById("music");

const title = document.getElementById("title");
const typing = document.getElementById("typing");

const popup = document.getElementById("popup");
const letterBtn = document.getElementById("letterBtn");
const closeBtn = document.getElementById("close");

const slides = document.querySelectorAll(".slide");

const message =
"I don't know if you'll ever realize it... but every smile of yours makes the world feel a little brighter. Thank you for being such a beautiful part of it. ❤️";

const heading =
"You Are Amazing ❤️";

let i = 0;
let slide = 0;

/* Start Website */

startBtn.onclick = () => {

music.play().catch(()=>{});

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},700);

typeTitle();

startHearts();

}

/* Type Heading */

function typeTitle(){

let n=0;

let x=setInterval(()=>{

title.innerHTML=heading.substring(0,n);

n++;

if(n>heading.length){

clearInterval(x);

typeText();

}

},90);

}

/* Type Message */

function typeText(){

let y=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(y);

}

},35);

}

/* Slideshow */

setInterval(()=>{

slides[slide].classList.remove("active");

slide++;

if(slide>=slides.length){

slide=0;

}

slides[slide].classList.add("active");

},4000);

/* Hearts */

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💕","💖","💗","💘"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},250);

}

/* Popup */

letterBtn.onclick=()=>{

popup.style.display="flex";

}

closeBtn.onclick=()=>{

popup.style.display="none";

}

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

}