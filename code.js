//Update
var t = localStorage.getItem('count');
document.getElementById('total').textContent = localStorage.getItem('count');

var m = localStorage.getItem('dark');
setInterval(set(), 0);

//Add
function add(){
    t++;
    localStorage.setItem('count', t)
    document.getElementById('total').textContent = localStorage.getItem('count');
}


//Reset
function reset(){
    t = 0;
    localStorage.setItem('count', t)
    document.getElementById('total').textContent = localStorage.getItem('count');
}


//Subtract
function subtract(){
    t--;
    localStorage.setItem('count', t)
    document.getElementById('total').textContent = localStorage.getItem('count');
}

//Change mode
function change(){
    checkBox = document.getElementById('mode');
    const buttons = document.querySelectorAll('button');

    if (checkBox.checked){
        localStorage.setItem('dark', 'true');
        m = localStorage.getItem('dark');
        
        document.getElementById('background').style.backgroundColor = 'black';
        document.getElementById('total').style.color = 'white';

        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = 'black';
            buttons[i].style.color = 'white';
            buttons[i].style.border = '2px solid white';
        }
        
    }else{
        localStorage.setItem('dark', 'false');
        m = localStorage.getItem('dark');

        document.getElementById('background').style.backgroundColor = 'white';
        document.getElementById('total').style.color = 'black';

        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = 'white';
            buttons[i].style.color = 'black';
            buttons[i].style.border = '2px solid black';
        }
    }
}

//Set mode
function set(){

    checkBox = document.getElementById('mode');
    const buttons = document.querySelectorAll('button');

    if (m == 'true'){

        document.getElementById("mode").checked = true;

        localStorage.setItem('dark', true);
        m = localStorage.getItem('dark');
        
        document.getElementById('background').style.backgroundColor = 'black';
        document.getElementById('total').style.color = 'white';

        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = 'black';
            buttons[i].style.color = 'white';
            buttons[i].style.border = '2px solid white';
        }
        
    }else{

        document.getElementById("mode").checked = false;

        localStorage.setItem('dark', false);
        m = localStorage.getItem('dark');

        document.getElementById('background').style.backgroundColor = 'white';
        document.getElementById('total').style.color = 'black';

        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.backgroundColor = 'white';
            buttons[i].style.color = 'black';
            buttons[i].style.border = '2px solid black';
        }
    }
}
