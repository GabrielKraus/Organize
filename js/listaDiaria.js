class Item {
    constructor(id, nombre, hora, minutos) {
        this.id = id;
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
addButton.addEventListener("click", ()=>{
    agregarItem()
    console.log("holas")
});

function agregarItem() {
    const todoInputValue = document.querySelector('.todo-input').value;
    const horaInputValue = document.querySelector(".hora-input").value;
    const minutoInputsValue = document.querySelector(".minutos-input").value;
    const idValue = Date.now()
    items.push(new Item(idValue,todoInputValue, horaInputValue, minutoInputsValue))

        let item = document.createElement("li")
        item.className = `item`
        item.setAttribute("id", idValue);
        item.innerHTML = `<input class="checkbox" type="checkbox"><p class="horaminuto" >${horaInputValue}:${minutoInputsValue}</p> <p class="elnombre">${todoInputValue}</p><button class="delete-button" onclick="borrarItem(${idValue}); history.go(0);">X</button>`
        todoItemsList.append(item);

        Toastify({
            text: "Nueva Meta diaria Agregada!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
        }).showToast();

    agregarLocalStorage()
    
}
function borrarItem(numId) {
    index = itemsGuardados.findIndex(x => x.id == numId)
    itemsGuardados.splice(index, 1)
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










