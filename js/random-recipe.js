const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const recipeContainer = document.querySelector(".recipe-container");
const messageContainer = document.querySelector(".error");
const loader = document.querySelector(".loader");

async function getRandomRecipe() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);

    recipeContainer.innerHTML = "";

    recipeContainer.innerHTML += `
    <h2 class="receip-headline">Check out this ${getResults.meals[0].strArea} recipe:</h2>
    <div class="recipe-card">
      <div class="recipe-img">
       <img src="${getResults.meals[0].strMealThumb}" alt="food" />
      </div>
      <h3 class="recipe-name">${getResults.meals[0].strMeal}</h3>
      <a href="recipes-specific.html?id=${getResults.meals[0].idMeal}">View Recipe</a>
    </div>
    `;
    console.log(getResults.meals[0].idMeal);
  } catch (error) {
    console.log("error occurred", error);
    loader.style.display = "none";
    messageContainer.innerHTML = "An error occurred";
  }
}

getRandomRecipe();
