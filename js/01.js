const para = document.querySelector("p");//selecciona la etiqueta p

para.addEventListener("click", actualizarNombre);//agrega un evento click a la etiqueta p para que 
//ejecute la funcion actualizarNombre

function actualizarNombre() {
  let nombre = prompt("Ingrese nuevo nombre: ");
  para.textContent = "Judador 1: " + nombre;//la propiedad textContent cambia el texto de la etiqueta p
}