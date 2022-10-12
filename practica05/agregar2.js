function leer(){
    return document.getElementById("todo").value
}

//var todo = document.getElementById("todo").value



function agregar(){
    nodo=document.createElement("li")
    //texto = document.createTextNode("hola")
    texto =document.createTextNode(leer())
    //console.log(texto)
    nodo.appendChild(texto)
    nodo.setAttribute("id",leer())
    document.getElementById("lista").appendChild(nodo)
}

function buscarId(){
   // var start="texto"
   // listaTodo=document.getElementsByTagName("li")
   if(document.getElementById((leer())) ==null)
   alert("mamaste")
    else alert("existe")
    }

function buscarfor(){
    listaTodo=document.getElementsByTagName("li")
    for (let i = 0; i < listaTodo.length; i++) {
        const tarea = listaTodo[i];
        if(leer()==tarea.textContent)
        alert("ya existe")   
        else alert ("mamaste")     
    }
}

function buscarOf() {
   listaTodo=document.getElementsByTagName("li")

    for (const tarea of listaTodo) {
        if(leer()==tarea.textContent)
        alert("ya existe")   
        else alert ("mamaste")     
        
    }
}

function buscar(){
   listaTodo=document.getElementsByTagName("li")
    for (const tarea in listaTodo) {
        if (Object.hasOwnProperty.call(listaTodo, tarea)) 
            if(leer()==listaTodo[tarea].childNodes[0])
            console.log("existe")}
           else {
            console.log("No existe")

        
    }
}
 