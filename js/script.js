const bar = document.querySelector("header .bar");
const nav = document.querySelector("header nav");
const close = document.querySelector("header nav .close");

bar.onclick = () => {
    nav.classList.add("active");
}

close.onclick = () => {
    nav.classList.remove("active");
}

const work = document.querySelector(".work-gallery"),
    works = document.querySelector(".work-gallery .works"),
    arroleft = document.querySelector(".work-gallery .arro-left"),
    arroright = document.querySelector(".work-gallery .arro-right"),
    works_ = document.querySelectorAll(".work-gallery .works img");

arroright.onclick = () => {
    var width_work = work.clientWidth; // قيمة العرض الحالي للعنصر work
    var marginLeft = parseFloat(getComputedStyle(works).marginLeft); // الحصول على الحاشية اليسرى الحالية للعنصر works
    marginLeft -= width_work; // تحريك works إلى اليمين بعرض العنصر work
    works.style.marginLeft = marginLeft + "px"; // تعيين الحاشية اليسرى الجديدة بالوحدة (px)
    console.log("الحاشية اليسرى الجديدة: " + marginLeft + "px"); // تسجيل الحاشية اليسرى الجديدة
    if (Math.abs(marginLeft) >= 1158) { // استخدم القيمة الموجبة للتحقق
        marginLeft = 0;
        works.style.marginLeft = marginLeft + "px"; // تعيين الحاشية اليسرى الجديدة بالوحدة (px)
    }
}

arroleft.onclick = () => {
    var width_work = work.clientWidth; // قيمة العرض الحالي للعنصر work
    var marginLeft = parseFloat(getComputedStyle(works).marginLeft); // الحصول على الحاشية اليسرى الحالية للعنصر works
    marginLeft += width_work; // تحريك works إلى اليمين بعرض العنصر work
    if (Math.abs(marginLeft) >= 753.01) { // استخدم Math.abs() للقياس بدون النقاط العائمة
        marginLeft = -772; // تعيين القيمة المطلوبة إذا تجاوزت القيمة المحددة
    }
    works.style.marginLeft = marginLeft + "px"; // تعيين الحاشية اليسرى الجديدة بالوحدة (px)
    console.log(marginLeft + "px"); // تسجيل الحاشية اليسرى الجديدة
}




