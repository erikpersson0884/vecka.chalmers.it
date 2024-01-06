// Code for the color picker to change site color
const backgroundColorPicker = document.getElementById("backgroundColorPicker");
const contrastColorPicker = document.getElementById("contrastColorPicker");
const backgroundColorPreview = document.getElementById("backgroundColorPreview");
const contrastColorPreview = document.getElementById("contrastColorPreview");

const resetColorPickers = document.getElementById("resetColorPickers")

const backgroundColor = "#111317"
const contrastColor = "#be1313"


if (localStorage.getItem("backgroundColor")) {
    document.documentElement.style.setProperty("--background-color", localStorage.getItem("backgroundColor"));
}

if (localStorage.getItem("contrastColor")) {
    document.documentElement.style.setProperty("--contrast-color", localStorage.getItem("contrastColor"));
}



// Trigger the custom color pickers when the previews is clicked
backgroundColorPreview.addEventListener("click", function() {
    backgroundColorPicker.click(); // Trigger the custom color picker when the preview is clicked
});

contrastColorPreview.addEventListener("click", function() {
    contrastColorPicker.click(); // Trigger the custom color picker when the preview is clicked
});


backgroundColorPicker.addEventListener("input", () => {
    const selectedColor = backgroundColorPicker.value;
    document.documentElement.style.setProperty("--background-color", selectedColor);
    localStorage.setItem("backgroundColor", selectedColor);
});

contrastColorPicker.addEventListener("input", () => {
    const selectedColor = contrastColorPicker.value;
    document.documentElement.style.setProperty("--contrast-color", selectedColor);
    localStorage.setItem("contrastColor", selectedColor);
});

resetColorPickers.addEventListener("click", () => {
    resetColors();
});

function resetColors(){
    document.documentElement.style.setProperty("--background-color", backgroundColor);
    document.documentElement.style.setProperty("--contrast-color", contrastColor);
}
