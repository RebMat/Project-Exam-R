// Search Recipes

const searchButton = document.querySelector("#search-button");
const recipeList = document.querySelector("#recipes");

searchButton.addEventListener("click", getRecipeList);

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
            <div class="meal-img">
             <img src="${meal.strMealThumb}" alt="food" />
            </div>
            <h3 class="recipe-name">${meal.strMeal}</h3>
            <a href="recipes-specific.html?id=${meal.idMeal}">View Recipe</a>
          </div>
                `;
        });
      } else {
        html = "There is no meal with that ingredient in our database.";
      }

      recipeList.innerHTML = html;
    });
}
