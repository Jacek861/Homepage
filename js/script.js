console.log("Hi!")

let button = document.querySelector(".body__button");
let bodystyle = document.querySelector(".body")
let button__Text = document.querySelector(".body__buttonText");
let articlebackground = document.querySelector(".article__background")

button.addEventListener("click", () => {
    articlebackground.classList.toggle("article__background--change");
    bodystyle.classList.toggle("bodydark");
    button__Text.innerText = bodystyle.classList.contains("bodydark") ? "Bright" : "Dark";
});

let aside__button = document.querySelector(".aside__button")
let unorderedList__item = document.querySelector(".unorderedList__item")

aside__button.addEventListener("click", () => {
    unorderedList__item.remove()
});

