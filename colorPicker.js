// Code for the color picker to change site color

const weekNumberText = document.getElementById("weekHeader");
const backgroundColorPicker = document.getElementById("backgroundColorPicker");
const contrastColorPicker = document.getElementById("contrastColorPicker");
const backgroundColorPreview = document.getElementById("backgroundColorPreview");
const contrastColorPreview = document.getElementById("contrastColorPreview");

const resetColorPickers = document.getElementById("resetColorPickers")

const rootStyle = document.documentElement.style;


const standardBackgroundColor = "#000";
const standardContrastColor = "#09cdda"





function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    
    localStorage.setItem("backgroundColor", color);
}

function setContrastColor(color) {
    contrastColorPreview.style.backgroundColor = color;
    document.body.style.color = color;
    localStorage.setItem("contrastColor", color);
}


if (localStorage.getItem("backgroundColor")) {
    const color = localStorage.getItem("backgroundColor");
    setBackgroundColor(color);
}

if (localStorage.getItem("contrastColor")) {
    const color = localStorage.getItem("contrastColor");
    setContrastColor(color);
}



// Trigger the custom color pickers when the previews is clicked
backgroundColorPreview.addEventListener("click", function() {
    backgroundColorPicker.click();
});

contrastColorPreview.addEventListener("click", function() {
    contrastColorPicker.click();
});

// When a new color is selected, update the color picker and the preview
backgroundColorPicker.addEventListener("input", () => {
    const selectedColor = backgroundColorPicker.value;
    setBackgroundColor(selectedColor);
});

contrastColorPicker.addEventListener("input", () => {
    const selectedColor = contrastColorPicker.value;
    setContrastColor(selectedColor);
});

// When the reset button is clicked, reset the colors to the standard colors
resetColorPickers.addEventListener("click", () => {
    resetColors();
});

function resetColors(){
    setBackgroundColor(standardBackgroundColor);
    setContrastColor(standardContrastColor);
    backgroundColorPicker.value = standardBackgroundColor;
    contrastColorPicker.value = standardContrastColor;
}
