// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});



// Scroll Reveal Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});


document.querySelectorAll(".card, .section").forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(50px)";
el.style.transition = "all 0.8s ease";

observer.observe(el);

});




// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 50){

header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

}else{

header.style.boxShadow = "none";

}

});




// Button Ripple Effect

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", function(e){

const ripple = document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(() => {
ripple.remove();
},600);

});

});




// Floating Particles Background (Gravity style)

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){

particles.push({

x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
radius: Math.random()*2,
speed: Math.random()*0.5

});

}


function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {

p.y += p.speed;

if(p.y > canvas.height){
p.y = 0;
}

ctx.beginPath();
ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.5)";
ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();
window.addEventListener("load",function(){

document.getElementById("loader").style.display="none";

});
const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="300px";
glow.style.height="300px";
glow.style.background="radial-gradient(circle, rgba(255,122,24,0.4) 0%, transparent 70%)";
glow.style.pointerEvents="none";
glow.style.borderRadius="50%";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", (e) => {

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 10;
const rotateY = (centerX - x) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0)";
});

});