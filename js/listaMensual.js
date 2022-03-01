class Item {
    constructor(id, nombre, dia, diaNombre) {
        this.id = id;
        this.nombre = nombre;
        this.dia = dia;
        this.diaNombre = diaNombre;
    }
}

let items = []
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector(".add-button");
const diaInput = document.querySelector(".dia-input");
const diaNombre = document.querySelector(".diaNombre-input");
const colorRojo = document.getElementById('colorRojo');
const colorAmarillo = document.getElementById('colorAmarillo');
const colorVerde = document.getElementById('colorVerde');
const todoItemsList = document.querySelector('.todo-items');
addButton.addEventListener("click", agregarItem);

function agregarItem() {
    const todoInputValue = document.querySelector('.todo-input').value;
    const diaInput = document.querySelector(".dia-input").value;
    const diaNombre = document.querySelector(".diaNombre-input").value;
    const idValue = Date.now();
    items.push(new Item(idValue, todoInputValue, diaInput, diaNombre))

    let item = document.createElement("li")
    item.className = `item`
    item.setAttribute("id", idValue);
    item.innerHTML = `<input class="checkbox" type="checkbox"><p class="horaminuto horaminutoDia" >${diaInput}</p><p class="horaminuto" >${diaNombre}</p> <p class="elnombre">${todoInputValue}</p><button class="delete-button" onclick="borrarItem(${idValue}); history.go(0);">X</button>`
    todoItemsList.append(item);

    Toastify({
        text: "Nueva Meta mensual Agregada!",
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
    index = itemsGuardados.findIndex(x=>x.id == numId)
    itemsGuardados.splice(index, 1)
    console.log(index)
    agregarLocalStorage()
}

function agregarLocalStorage() {
    localStorage.setItem('itemsMensuales', JSON.stringify(items));
    itemsTotal = itemsGuardados.concat(items)
    localStorage.setItem('itemsMensuales', JSON.stringify(itemsTotal));
}




var itemsGuardados = JSON.parse(localStorage.getItem("itemsMensuales"));

for (el of itemsGuardados) {
    let item = document.createElement("li")
    item.className = `item`
    item.setAttribute("id", el.id);
    item.innerHTML = `<input class="checkbox" type="checkbox"><p class="horaminuto horaminutoDia" >${el.dia}</p><p class="horaminuto" >${el.diaNombre}</p> <p class="elnombre">${el.nombre}</p><button class="delete-button" onclick="borrarItem(${el.id}); history.go(0);">X</button>`
    todoItemsList.append(item);
}