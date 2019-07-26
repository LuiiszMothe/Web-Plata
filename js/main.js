// variables header

var nav = document.getElementById('nav');
var menu = document.getElementById('enlaces');
var abrir_menu = document.getElementById('open');
var botones = document.getElementsByClassName('btn-header');
var cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    
    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition ='1s';
        menu.style.top = '80px';
        abrir_menu.style.color = '#000000';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition ='1s';
        menu.style.top = '90px';
        abrir_menu.style.color = '#000000';
    }
}


function apertura(){
    if(cerrado){
        menu.style.width = '100vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}


window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});


window.addEventListener('loader', function(){
    menus();
});


window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
      }
    });



abrir_menu.addEventListener('click', function(){
    apertura();
});

window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let quitar = document.getElementById('hamburguesa');
        if (e.target !== quitar && e.target !== abrir_menu){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado= quitar;
        }
    }
});

// loder

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});


//---- fin de loader-----------









