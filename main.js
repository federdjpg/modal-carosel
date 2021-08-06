
document.addEventListener("DOMContentLoaded", function(){
    let imagenes = [
        {img:"/img/1.png"},
        {img:"/img/2.png"},
        {img:"/img/3.png"},
        {img:"/img/4.png"},
        {img:"/img/5.png"},
        {img:"/img/6.jpeg"},
        {img:"/img/7.png"},
        {img:"/img/8.png"}
    ]

    let contador = 0
    const contenedor = document.querySelector(".slideshow")
    const overlay = document.querySelector(".overlay")
    const galeria_imagenes = document.querySelector(".galeria img")
    const img_slideshow = document.querySelector(".slideshow img")

    contenedor.addEventListener("click", function(event){
        alert("entro1")
        let atras = contenedor.querySelector(".atras"),
         adelante = contenedor.querySelector(".adelante"),
         img = contendor.querySelector("img"),
         tgt = event.target

        if(tgt == atras){
            if(contador > 0){
                img.src = imagenes[contador - 1].img
                contador--
            }else{
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        }else if(tgt == adelante ) {
            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador++
            }else{
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener("click", event =>{
            const imagen_selecionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_selecionada].img
            contador = imagen_selecionada
            overlay.style.opacity = 1
            overlay.style.visibility =  "visible"
        })
    })

    document.querySelector(".dale").addEventListener("click", e=>{
        alert("me presionaste XP clase")
    })

    console.log("entraste bien verhga")
})
