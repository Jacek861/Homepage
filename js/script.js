{
    const Welcome = () => {
        console.log("Welcome!")
        Welcome()
    };

    const togglebackground = () => {
        const articlebackground = document.querySelector(".article__background")
        articlebackground.classList.toggle("article__background--change");
        const bodystyle = document.querySelector(".body")
        const button__Text = document.querySelector(".body__buttonText");
        bodystyle.classList.toggle("bodydark");
        button__Text.innerText = bodystyle.classList.contains("bodydark") ? "Bright" : "Dark";
    };

    const init = () => {
        const button = document.querySelector(".body__button");
        button.addEventListener("click", togglebackground);
    };
    init()
}

{
    const textRemove = () => {
        const asideItem = document.querySelector(".aside__item")
        asideItem.remove()
    };
    
    const init = () => {
        const asideButton = document.querySelector(".aside__button")
        asideButton.addEventListener("click", textRemove);
    };
    init()
}

