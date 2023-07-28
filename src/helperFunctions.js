const humanizeCategory = camelCaseText => {
  const characterArray = camelCaseText.split("");
  const humanizedArray = [];

  for (let i = 0; i < characterArray.length; i++) {
    if (i === 0) {
      humanizedArray.push(characterArray[i].toUpperCase());
    } else if (characterArray[i] === characterArray[i].toLowerCase()) {
      humanizedArray.push(characterArray[i]);
    } else {
      humanizedArray.push(" ");
      humanizedArray.push(characterArray[i]);
    }
  }

  return (humanizedArray.join(""));
}

export default humanizeCategory;

