const themebutton = document.querySelector("#theme-toggle");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themebutton.textContent = "Switch to Light Mode 𖤓 ";
} else {
    themebutton.textContent = "Switch to Dark Mode ⏾";
}

themebutton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themebutton.textContent = "Switch to Light Mode 𖤓";
        localStorage.setItem("theme", "dark");
    } else {
        themebutton.textContent = "Switch to Dark Mode ⏾";
        localStorage.setItem("theme", "light");
    }

});