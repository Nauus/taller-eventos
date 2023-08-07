function showAlert() {

    event.stopPropagation();
    
    alert("hola!"); 
}

const div = document.getElementById('container');


div.addEventListener('click', function() {
    alert("hola! soy el div");
});