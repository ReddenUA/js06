
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayItem = [];
const listEl = document.querySelector("#ingredients");
for (let ingredient of ingredients)
{
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
 itemEl.classList.add("item");
  arrayItem.push(itemEl);  
}
 listEl.append(...arrayItem);