console.log("one");

console.log("two");

console.log("three");

function doThis() {
    let e = document.getElementById("one-button");
    console.log(e);
    if (e.getAttribute("aria-expanded") == "false") {
        e.setAttribute("aria-expanded", "true");
    } else e.setAttribute("aria-expanded", "false");
}