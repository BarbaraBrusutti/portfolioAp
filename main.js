/* controlar si presiona un boton
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener("keyup", (e) => {
    logMessage(` key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter") {
        document.getElementById("edit-acercade").style.display="none"
    }
});*/

// Crea un nuevo elemento de imagen.
var img = document.createElement('imgDW');
// Establece la ubicación de la imagen.
img.src = 'ruta/a/mi/imagen.jpg';
// Agrega la imagen al documento.
document.body.appendChild(img);