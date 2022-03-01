console.log("cargado");
window.onload = function () {
    document.getElementById('boton').onclick = solve;
}
function solve(e)
{
    console.log("Hola");
    e.preventDefault();
}