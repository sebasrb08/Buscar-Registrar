import contactos from "./personajes.js" 
const select=document.getElementById('criterio')
const img=document.getElementById('img')
let fotos=document.querySelector('.fotos')
const nombres2=document.getElementById('nombres')
const agregar=document.getElementById('agregar')
agregar.addEventListener('click',agregar2)
nombres2.addEventListener('click',nombres3)
let indice=''
const Buscar=document.getElementById('buscar')
Buscar.addEventListener('click',buscar)

for(let i=0;i<contactos.length;i++){
    let imagenes= document.createElement('img')
    imagenes.src=contactos[i].foto
    fotos.append(imagenes)
   

}


function buscar(){
    if(contactos.find(contac=>contac.nombre.toUpperCase()==nombres2.value || contac.nombre.toLowerCase()==nombres2.value || contac.nombre==nombres2.value )){
        indice=contactos.findIndex(contac=>contac.nombre.toUpperCase()==nombres2.value || contac.nombre.toLowerCase()==nombres2.value || contac.nombre==nombres2.value)
        if(select.value=='todo'){
            display.innerText+=`Nombre:${contactos[indice].nombre}
            Apellido:${contactos[indice].apellido}
            Numero:${contactos[indice].numero}
            gustos:${contactos[indice].gustos}`
            img.src=contactos[indice].foto
            
        }
        else if(select.value=='0'){
            display.innerText=`Apellido:${contactos[indice].apellido}`
            img.src=contactos[indice].foto
        }
        else if(select.value=='1'){
            display.innerText=`Numero:${contactos[indice].numero}`
            img.src=contactos[indice].foto
        }
        else if(select.value=='2'){
            display.innerText=`Gustos:${contactos[indice].gustos}`
            img.src=contactos[indice].foto
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
    location.href="./html/index2.html"
}

