const inputText = document.querySelector("#inputText");
const outputBox = document.querySelector(".output");
const button = document.querySelector(".submit");

const url = (inputText) =>
  `https://api.funtranslations.com/translate/minion.json?text=${inputText}`;

button.addEventListener("click", () => {
  //   console.log(inputText.value);
  const current_url = url(inputText.value);
  translate(current_url);
});

async function translate(current_url) {
  const response = await fetch(current_url);
  //   console.log(response);
  if (response.ok) {
    const data = await response.json();
    const translatedText = data.contents.translated;
    outputBox.innerText = translatedText;
  } else {
    throw new error("something went wrong");
  }
}
