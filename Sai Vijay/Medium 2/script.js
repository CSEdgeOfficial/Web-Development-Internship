let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerText == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (e.target.innerText == '=') {
            try {
                string = eval(string.replace('÷', '/').replace('x', '*'));
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else {
            string += e.target.innerText;
            input.value = string;
        }
    })
});
