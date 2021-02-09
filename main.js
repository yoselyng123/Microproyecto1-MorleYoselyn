var imagenes = ['img/C1.jpg', 'img/C2.jpg', 'img/C3.jpeg', 'img/C4.jpg', 'img/C.jpeg'];
var cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras')
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;

        if(tgt == atras){
            
            if (cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }

        }else if(tgt == adelante){

            if (cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }

        }

    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carrousel')
    carrousel(contenedor);
});