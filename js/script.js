const bar = document.querySelector("header .bar");
const nav = document.querySelector("header nav");
const close = document.querySelector("header nav .close");

bar.onclick = () => {
    nav.classList.add("active");
}

close.onclick = () => {
    nav.classList.remove("active");
}
