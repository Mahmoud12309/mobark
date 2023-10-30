const nav = document.querySelector("header nav");
const li = document.querySelectorAll("header nav ul li a");

li.forEach(e => {
    e.addEventListener("click", () => {
        // إزالة الفئة "active" من العنصر الحالي
        const activeElement = document.querySelector("header nav ul li a.active");
        if (activeElement) {
            activeElement.classList.remove("active");
        }

        // إضافة الفئة "active" إلى العنصر الذي تم النقر عليه
        e.classList.add("active");
        nav.classList.add("active");

        let ewidth = e.offsetWidth;

        nav.style.setProperty('--before-width', ewidth + "px");

        // تحديد الخصائص المخصصة بناءً على الفئة
        if (e.classList.contains("ts")) {

            nav.style.setProperty('--before-right', 0 + "px");

        } else if (e.classList.contains("seo")) {

            nav.style.setProperty('--before-right', 74 + "px");

        } else if (e.classList.contains("pr")) {

            nav.style.setProperty('--before-right', 280 + "px");

        } else if (e.classList.contains("yc")) {

            nav.style.setProperty('--before-right', 340 + "px");

        }
    });
});



const bar = document.querySelector("header .bar");
const close = document.querySelector("header .x");
bar.addEventListener("click", () => {
    nav.classList.add("active");
});

close.addEventListener("click", () => {
    nav.classList.remove("active");
});


let honeffect = document.querySelector(".landing .container .text h1 .text-h1");
var texthone = "(عون-Aoun) ";
let i = 0;
let im = texthone.length - 1;
let writing = true; // تتحقق من حالة الكتابة أو الحذف

window.addEventListener("load", () => {
    let set = setInterval(() => {
        if (writing) {
            honeffect.textContent += texthone[i];
            i++;
            if (i > im) {
                writing = false;
                i = im;
            }
        } else {
            honeffect.textContent = honeffect.textContent.slice(0, -1);
            i--;
            if (i < 0) {
                writing = true;
                i = 0;
            }
        }
    }, 250);
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
