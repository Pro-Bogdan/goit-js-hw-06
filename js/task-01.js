const categoriesEl = document.querySelector("#categories");

function getQuantityCategories(tagMenu) {
  let sumCategories = 0;
  [...tagMenu.children].forEach((child) => {
    child.classList.contains("item") ? (sumCategories += 1) : sumCategories;
  });
  console.log(`Number of categories: ${sumCategories}`);
}

function getCategories(tagMenu) {
  [...tagMenu.children].forEach((child) => {
    console.log(`Category: ${child.firstElementChild.textContent}`);
    console.log(`Elements: ${child.lastElementChild.children.length}`);
  });
}

getQuantityCategories(categoriesEl);
getCategories(categoriesEl);
