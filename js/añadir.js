import contactos from "./personajes.js"

let contactos2=''
const boton=document.getElementById('boton')
const boton3=document.getElementById('boton3')
const nombre3=document.getElementById('nombre')
const apellido=document.getElementById('apellido')
const numero=document.getElementById('numero')
const gustos=document.getElementById('gustos')
const foto=document.getElementById('foto')
const img=document.getElementById('image')

boton.addEventListener('click',boton2)
boton3.addEventListener('click',boton4)


contactos2=[... contactos]
function boton2(){
    contactos2.push({nombre:nombre3.value,apellido:apellido.value,
    numero:numero.value,gustos:gustos.value,foto:foto.value})
    localStorage.setItem('nombres',JSON.stringify(contactos2))
    img.src=foto.value
    nombre3.value=''
    apellido.value=''
    numero.value=''
    gustos.value=''
    foto.value=''
}
function boton4(){
    location.href='../index.html'
}