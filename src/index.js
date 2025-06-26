function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "498fo852408af0c6dcft31f4a6d0b82b";
  let context =
    "You are a recipe expert and love to write a short and easy recipe. Your mission is to generate a simple recipe in basic HTML for busy people, include the ingredients and seperate each line with a <br/>. Make sure to follow the user instructions. include title on top. Sign the recipe with `SheCodes AI`inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">
         ⌛ Generating recipe about ${instructionsInput.value}
        </div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
