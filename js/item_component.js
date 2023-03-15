export function  item_component(numero_tarea){

    let  item= `
    <div class="todo_item">
        <span class="ico">☑️</span>
            <p>
                ${data_todo_list[numero_tarea].mensaje}
            </p>
        <span class="ico2">X</span>
    </div>`;

    return item;

}