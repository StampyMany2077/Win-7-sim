setTimeout(() => {

document.getElementById("boot").classList.add("hidden");

document.getElementById("login").classList.remove("hidden");

},5000);

document.getElementById("loginButton").onclick=()=>{

document.getElementById("login").classList.add("hidden");

document.getElementById("desktop").classList.remove("hidden");

}
