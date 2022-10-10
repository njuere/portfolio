let menu = document.getElementById('menu')
let close = document.getElementById('close')
let right = document.getElementById('right')


menu.addEventListener('click', function(){
    right.style.display = 'block'
    menu.style.display = 'none'
    close.style.display= 'block'
});
    
close.addEventListener('click', function(){
    right.style.display = 'none'
    menu.style.display = 'block'
    close.style.display = 'none'
});