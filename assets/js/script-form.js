function calcular(){
    const inputCantidad = document.getElementById('input-cantidad').value;
    const inputColor    = document.getElementById('input-color').value;
    let total = (400000 * inputCantidad).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

    document.getElementById('total-precio').innerHTML = `Total: $ ${total}`;
    document.getElementById('cantidad').innerHTML = `Cantidad: ${inputCantidad}`;
    document.getElementById('circle').style.backgroundColor = inputColor;
}