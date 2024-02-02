const buttons = document.querySelectorAll(".openText");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const span = button.parentElement.nextElementSibling;
        span.classList.toggle("disabeled");
        button.classList.toggle("rotate");
    });
});
