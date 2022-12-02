const recipeContainer = document.querySelector(".recipe-info");
const messageContainer = document.querySelector(".error");
const loader = document.querySelector(".loader");

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
const idMeal = params.get("id");
console.log(params);

const newUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal;

async function getRecipe() {
  try {
    const response = await fetch(newUrl);
    const recipeDetails = await response.json();
    console.log(recipeDetails);
    recipeContainer.innerHTML = "";

    document.title = `${recipeDetails.meals[0].strMeal} | GOOD MOOD FOOD`;
    recipeContainer.innerHTML += `
    <h1 class="recipe-name">${recipeDetails.meals[0].strMeal}</h1>
    <div class="meal-img-specific">
      <img src="${recipeDetails.meals[0].strMealThumb}" alt="food" />
    </div>
    <div class="ingredients-container">
      <h2>Ingredients:</h2>
     <div class="mesurements">
      <p class="measure">${recipeDetails.meals[0].strMeasure1}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure2}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure3}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure4}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure5}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure6}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure7}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure8}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure9}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure10}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure11}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure12}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure13}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure14}</p>
      <p class="measure">${recipeDetails.meals[0].strMeasure15}</p>
     </div>
     <div class="ingredients">
      <p class="ingredient">${recipeDetails.meals[0].strIngredient1}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient2}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient3}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient4}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient5}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient6}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient7}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient8}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient9}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient10}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient11}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient12}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient13}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient14}</p>
      <p class="ingredient">${recipeDetails.meals[0].strIngredient15}</p>
     </div>
    </div>
    <div class="instructions-container">
      <h3>Instructions:</h3>
      <p class="recipe-instructions">${recipeDetails.meals[0].strInstructions}</p>
    </div>
    `;
  } catch (error) {
    console.log("error occurred", error);
    loader.style.display = "none";
    messageContainer.innerHTML = "An error occurred";
  }
}

getRecipe();
