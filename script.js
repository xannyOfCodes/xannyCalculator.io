const calcContainer = document.querySelector(".mainConatiner");

document.addEventListener("DOMContentLoaded", () => {
    const allButtons = document.querySelectorAll("button");

    allButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
});