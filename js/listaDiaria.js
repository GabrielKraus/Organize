class Item {
    constructor(nombre, hora, minutos) {
        this.id = Date.now();
        this.nombre = nombre;
        this.hora = hora;
        this.minutos = minutos;
    }
}

let items = []
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector(".add-button");
const horaInput = document.querySelector(".hora-input");
const minutoInputs = document.querySelector("minutos-input");
const colorRojo = document.getElementById('colorRojo');
const colorAmarillo = document.getElementById('colorAmarillo');
const colorVerde = document.getElementById('colorVerde');
const todoItemsList = document.querySelector('.todo-items');
addButton.addEventListener("click", agregarItem);

function agregarItem() {
    const todoInputValue = document.querySelector('.todo-input').value;
    const horaInputValue = document.querySelector(".hora-input").value;
    const minutoInputsValue = document.querySelector(".minutos-input").value;
    items.push(new Item(todoInputValue, horaInputValue, minutoInputsValue))
    agregarLocalStorage()
}
function borrarItem(numId) {
    index = itemsGuardados.findIndex(x=>x.id == numId)
    itemsGuardados.splice(index, 1)
    console.log(index)
    agregarLocalStorage()
}

function agregarLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
    itemsTotal = itemsGuardados.concat(items)
    localStorage.setItem('items', JSON.stringify(itemsTotal));
}




var itemsGuardados = JSON.parse(localStorage.getItem("items"));

for (el of itemsGuardados) {
    let item = document.createElement("li")
    item.className = `item`
    item.setAttribute("id", el.id);
    item.innerHTML = `<input class="checkbox" type="checkbox"><p class="horaminuto" >${el.hora}:${el.minutos}</p> <p class="elnombre">${el.nombre}</p><button class="delete-button" onclick="borrarItem(${el.id}); history.go(0);">X</button>`
    todoItemsList.append(item);
}








