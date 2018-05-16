const enabledButton = idButton =>
  document.getElementById(idButton).removeAttribute("disabled");

const generateNum = () => Math.random();

const setValHTML = (idVal, generateVal) => {
  document.getElementById(idVal).innerHTML = generateVal;
};

const getValHTML = idVal => {
  let x = document.getElementById(idVal).innerHTML;
  let y = parseFloat(x);
  return y;
};

const startButtonClick = () => {
  let x = generateNum();
  let initialRand2 = "Please select your guess";
  let initialResult = "";
  enabledButton("Bigger");
  enabledButton("Smaller");
  setValHTML("startRand", x);
  setValHTML("predictRand", initialRand2);
  setValHTML("result", initialResult);
};

const compareValue = (firstVal, secondVal) => {
  if (firstVal > secondVal) {
    return 0;
  } else if (firstVal <= secondVal) {
    return 1;
  }
};

const resultBool = (compareVal, buttonVal) => {
  if (compareVal === buttonVal) {
    return true;
  }
  return false;
};

const showResult = (compareVal, buttonVal, secondVal) => {
  if (compareVal === buttonVal) {
    document.getElementById("result").innerHTML = "You guess RIGHT";
    document.getElementById("result").setAttribute("style", "color:green");
    setValHTML("predictRand", secondVal);
  } else {
    document.getElementById("result").innerHTML = "You guess WRONG";
    document.getElementById("result").setAttribute("style", "color:red");
    setValHTML("predictRand", secondVal);
  }
};

const buttonValById = id => {
  if (id === "Bigger") {
    return 1;
  } else if (id === "Smaller") {
    return 0;
  }
};

const guessCheckButton = id => {
  let firstVal = getValHTML("startRand");
  let secondVal = generateNum();
  let buttonVal = buttonValById(id);
  let compareVal = compareValue(firstVal, secondVal);
  showResult(compareVal, buttonVal, secondVal);
};

//console.log gaboleh ada
//comment gaboleh ada kecuali buat ngejelasin yg gabisa dijelasin code
