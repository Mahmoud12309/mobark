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
        console.log(ewidth);
        nav.style.setProperty('--before-width', ewidth + "px");

        // تحديد الخصائص المخصصة بناءً على الفئة
        if (e.classList.contains("ts")) {

            nav.style.setProperty('--before-right', 0 + "px");

        } else if (e.classList.contains("seo")) {

            nav.style.setProperty('--before-right', 74 + "px");

        } else if (e.classList.contains("pr")) {

            nav.style.setProperty('--before-right', 280 + "px");

        } else if (e.classList.contains("yc")) {

            nav.style.setProperty('--before-right', 340+ "px");

        }
    });
});



// const bar = document.querySelector("header .bar");
// bar.addEventListener("click", () => {
//     nav.classList.add("active");
// });

// close.addEventListener("click", () => {
//     nav.classList.remove("active");
// });

// bar.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });
