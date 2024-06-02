const customPicker = document.querySelectorAll(".custom-picker");
const colorPicker = document.querySelectorAll(".color-picker");

customPicker.forEach((item) => {
    item.addEventListener("click", () => {
        item.querySelector(".color-picker").click();
    });
});

colorPicker.forEach((item) => {
    item.addEventListener("change", (e) => {
        color = e.target.value;
        span = item.parentElement.querySelector("span");
        input = item.parentElement.querySelector("input[type=text]");
        span.style.backgroundColor = color;
        input.value = color;
    });
});

const customDropdown = document.querySelectorAll(".custom-dropdown");

customDropdown.forEach((item) => {
    options = item.querySelectorAll(".option");
    options.forEach((option) => {
        option.addEventListener("click", ()=> {
            allOption = option.parentElement.querySelectorAll(".option");
            allOption.forEach((item)=> {
                item.classList.remove("active");
            });
            option.classList.add("active");
            item.querySelector(".selected").innerHTML = option.innerHTML;
        });
    });
});

const range= document.querySelector(".custom-slider input");
const tooltip= document.querySelector(".custom-slider span");

setValue=() => {
    const newValue= Number(((range.value - range.min)*100) / (range.max-range.min));
    const newPosition = 16 - newValue * 0.32;
    tooltip.innerHTML=range.value+ "X" +range.value;
    tooltip.style.left= `calc(${newValue}% + (${newPosition}px))`;
};

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);
