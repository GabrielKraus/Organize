// if (localStorage.getItem("sueldo") == null) {
//     localStorage.setItem("sueldo", 0);
// }


fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((resp) => { return resp.json() })
    .then((data) => {
        let dolarBlueObj = Object.values(data[1])[0]
        let valorDelDolar = parseInt(dolarBlueObj.compra)
        agregarItemLocalStorage("valorDolar", valorDelDolar)

    }).catch()


function agregarItemAlDom(nuevoElemento, elementoDestino, valorAMostrar) {
    display = document.querySelector(elementoDestino)
    let valorPantalla = document.createElement(`${nuevoElemento}`)
    valorPantalla.innerHTML = `${valorAMostrar}`
    display.append(valorPantalla)
}
function agregarItemLocalStorage(nombreDelStorage, elementosParaGuardar) {
    localStorage.setItem(nombreDelStorage, JSON.stringify(elementosParaGuardar));
}

function rescatarItemDelStorage(item) {
    return JSON.parse(localStorage.getItem(item));
}



agregar = document.querySelector("#agregar").addEventListener("click", agregarSueldo)

let sueldo = ""

function agregarSueldo() {
    reset = document.querySelector("#sueldoDisplay")
    reset.innerHTML = `  `
    let sueldoInput = document.querySelector("#sueldoInput").value
    sueldo = sueldoInput
    agregarItemLocalStorage("sueldo", sueldoInput)

}



agregarItemAlDom("h2", "#sueldoDisplay", `$${rescatarItemDelStorage("sueldo")}`)


let gastoGananciaAgregar = document.getElementById("gastoGananciaAgregar").addEventListener("click", AgregarGastoOGanancia)

let conjuntoDeGastos = [];
function AgregarGastoOGanancia() {
    let gastoGananciaSelect = document.getElementById('gastoGananciaSelect');
    let gastoGananciaSelectValor = gastoGananciaSelect.options[gastoGananciaSelect.selectedIndex].value;
    let gastoGananciaValorNumeral = parseFloat(document.getElementById("gastoGananciaValorNumeral").value);
    let divisaSelect = document.getElementById('divisaSelect');
    let divisaSelectValor = divisaSelect.options[divisaSelect.selectedIndex].value;

    divisaSelectValor == "dolares" ? gastoGananciaValorNumeral = (gastoGananciaValorNumeral * parseFloat(rescatarItemDelStorage("valorDolar"))) : console.log("la moneda permanecera como pesos Argentinos")

    gastoGananciaSelectValor == "gasto" ? gastoGananciaValorNumeral = -Math.abs(gastoGananciaValorNumeral) : console.log("el monto sera considerado una ganancia")

    conjuntoDeGastos.push(gastoGananciaValorNumeral)
    agregarItemLocalStorage("gastos", conjuntoDeGastos)
}

let botonBorrarGastos = document.getElementById("borrarGastos").addEventListener("click", borrarGastos)

function borrarGastos() {
    localStorage.removeItem("gastos");
}





let gastosStorage = rescatarItemDelStorage("gastos")

for (i = 0; i < gastosStorage.length; i++) {
    conjuntoDeGastos.push(rescatarItemDelStorage("gastos")[i])
    agregarItemAlDom("h4", "#gastosYGananciasDisplay", `$${rescatarItemDelStorage("gastos")[i]}`);
}

let total = parseFloat(rescatarItemDelStorage("sueldo"))
for (i = 0; i < gastosStorage.length; i++) {


    total += rescatarItemDelStorage("gastos")[i]
}

agregarItemAlDom("h4", "#montoTotal", `$${total}`);












