let text = document.getElementById('text');
const button = document.getElementById('button');
const clear = document.getElementById('clear');

let counter = 0;


button.onclick = function() {
    counter += 1;
    text.textContent = counter;
}

clear.onclick = function() {
    text.textContent = 0;
}