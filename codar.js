           const generatbutton = document.querySelector(".botao") 
           
           function generat() {
            const min = Math.ceil(document.querySelector(".valor1").value)
            const max =  Math.fround(document.querySelector(".valor2").value)
           
           const resultado= Math.floor(Math.random() * (max - min + 1)) + min;

          alert(resultado)
}   
           
           generatbutton.addEventListener("click",generat )