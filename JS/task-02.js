const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const selection = document.querySelector("#ingredients");

for (const item of ingredients) {
  item = document.createElement("li"); 
  item.classList.add('item');
  item.textContent = ingredients;
  return item; 
}
selection.prepend(item);
  
