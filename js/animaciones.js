
window.addEventListener('load', function(){

    
    var tiempo = setInterval(function(){
    
        
        
        var flecha_bajar = document.getElementById("flecha_bajar");
        var cambiar = true;
        if(flecha_bajar.style.opacity == "0.5"){
            flecha_bajar.style.opacity = "0.3";
            flecha_bajar.style.transition = "1s";
        }else{
            flecha_bajar.style.opacity = "0.5";
            flecha_bajar.style.transition = "1s";
        }
        
    }, 500);
    
    return tiempo;
    
});