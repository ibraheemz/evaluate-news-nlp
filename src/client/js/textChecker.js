function checkForText(inputText) {
  console.log("::: Running checkForText :::", inputText);
  if (inputText.length < 15) {
    alert("text must be at least 15 characters");
    return false;
  } else {
    return true;
  }
}

export { checkForText };
