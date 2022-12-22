function cambia(){
    
    var x = document.getElementById('bombilla');
    

    
    
    if (x.style.backgroundColor === 'black')
    {
    x.style.backgroundColor = 'yellow';
    document.getElementById('doblecolumna').style.backgroundColor = 'red';
    }
    
    
    else
    {x.style.backgroundColor = 'black';
     
     document.getElementById('doblecolumna').style.backgroundColor = 'yellow';
    
    
    }

    
}

