function display(val) {
    document.getElementById('text-val').value = document.getElementById('text-val').value + val;
}
function del() {
    document.getElementById('text-val').value = "";
}

function Calculate() {
    let x = document.getElementById('text-val').value;
    let y = eval(x);
    document.getElementById('text-val').value = y;
}