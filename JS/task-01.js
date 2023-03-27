console.log(document.querySelectorAll(".item").length);
const list = document.querySelectorAll(".item > h2").forEach(list => {
    console.log('Category: ' + list.textContent);
    console.log(list.children.length);
});
const elist = document.querySelectorAll(".item > ul").forEach(list => {
    console.log('Category: ' + elist.textContent);
    console.log(elist.length);
});
