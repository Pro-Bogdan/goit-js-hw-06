const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsCategotyEl = document.querySelector("#ingredients");

function addingredients(arrayItem, tagOnPage) {
  const listCategories = arrayItem.map((item) => {
    const itemList = document.createElement("li");
    itemList.textContent = item;
    itemList.classList.add("item");
    return itemList;
  });

  tagOnPage.append(...listCategories);
}

addingredients(ingredients, ingredientsCategotyEl);
