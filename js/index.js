import { imprimir_todos } from "./cargar-los-todos.js";

imprimir_todos();

function puente(){
    let mensaje = document.querySelector(".texto").value;
    nueva_tarea(mensaje);
}

function nueva_tarea (mensaje){
    data_todo_list.push(
        {
            id : "5",
            mensaje : mensaje,
            estado: true
        }
    );

    document.querySelector(".todo_list").innerHTML = "";
    imprimir_todos();

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".texto").value = "";
}

function puente1 (){
    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".texto").value = "";
}

function tachar (){
    
    document.querySelector(".todo_list").innerHTML = "";
    
}

document.querySelector(".ico").addEventListener("click", tachar)
document.querySelector(".cerrar").addEventListener("click",puente1);
document.querySelector(".btn-tarea").addEventListener("click",puente);