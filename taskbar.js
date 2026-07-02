setInterval(()=>{

clock.innerHTML=new Date().toLocaleTimeString([],{

hour:'2-digit',

minute:'2-digit'

});

},1000);
