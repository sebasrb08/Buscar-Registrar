import contactos from "./personajes.js" 
const select=document.getElementById('criterio')
const img=document.getElementById('img')
const nombres2=document.getElementById('nombres')
const agregar=document.getElementById('agregar')
agregar.addEventListener('click',agregar2)
nombres2.addEventListener('click',nombres3)
let indice=''
const Buscar=document.getElementById('buscar')
Buscar.addEventListener('click',buscar)
function buscar(){
    if(contactos.find(contac=>contac.nombre==nombres2.value)){
        indice=contactos.findIndex(contac=>contac.nombre==nombres2.value)
        if(select.value=='todo'){
            display.innerText+=`Nombre:${contactos[indice].nombre}
            Apellido:${contactos[indice].apellido}
            Numero:${contactos[indice].numero}
            gustos:${contactos[indice].gustos}`
            img.src=contactos[indice].foto
            
        }
        else if(select.value=='0'){
            display.innerText=`Apellido:${contactos[indice].apellido}`
        }
        else if(select.value=='1'){
            display.innerText=`Numero:${contactos[indice].numero}`
        }
        else if(select.value=='2'){
            display.innerText=`Gustos:${contactos[indice].gustos}`
        }
        
    }else{
        alert('nombre equivocado')
    }
}
function nombres3(){
    display.innerText=''
    nombres2.value=''
    img.src="./imagenes/person2.svg"
}
function agregar2(){
    location.href="./index2.html"
}