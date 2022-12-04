// Search Recipes

let input = document.querySelector(".search-box");
const searchButton = document.querySelector("#search-button");
const recipeList = document.querySelector("#recipes");

searchButton.addEventListener("click", getRecipeList);

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

function getRecipeList() {
  let ingredientInputText = document.querySelector("#ingredient-input").value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientInputText}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
          <div class="recipe-card">
            <div class="recipe-img">
             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            </div>
            <h3 class="recipe-card-name">${meal.strMeal}</h3>
            <a href="recipes-specific.html?id=${meal.idMeal}">View Recipe</a>
          </div>
                `;
        });
      } else {
        html = `<p class="not-found">There is no meal with that ingredient in our database</p>`;
      }

      recipeList.innerHTML = html;
    });
}
