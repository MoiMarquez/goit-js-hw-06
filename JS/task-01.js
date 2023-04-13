const data = document.querySelectorAll(`.item`);

console.log(`Number of categories: + ${data.length}`);

for (const item of data) {
    console.log(`Category: ${item.querySelector(`h2`).textContent}`);
    console.log(`Category: ${item.querySelectorAll(`li`).length}`);
}
