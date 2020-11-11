// Generator Functions

function getRandomUpper() {
  // Returning a random uppercase letter using the CharCode method from the String object
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower() {
  // Returning a random lowercase letter using the CharCode method from the String object
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomNumber() {
  // Returning a random number as a string using the CharCode method from the String object
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // Or
  (Math.floor(Math.random() * 10)).toString();
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  // Returning a random symbol from a string of symbol characters
  return symbols[(Math.floor(Math.random() * symbols.length))];
  // Or
  /*
  const randomIndex = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol
  */
}
console.log(getRandomSymbol());

// Object storing all the generator functions
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  // A single console log can be used to display multiple values in the console
  console.log(upper, lower, number, symbol, length);

  // Create a generated password variable
  let generatePassword = ``;

  // True values can be added to each other (Ex: True + True equals 2.) False is equal to zero (Ex: false + true equals 1.) 
    const typesCount = upper + lower + number + symbol;
    console.log(typesCount);

    // if user has no types (Uppercase letter, Numners, etc.) selected generated password is set to an empty string
    if (typesCount === 0){
      return '';
    }

    // Array storing with true/false values for the checkboxes
    let typesArr = [
      [`upper`, upper],
      [`lower`, lower],
      [`number`, number],
      [`symbol`, symbol]
    ];

    // Filtering out any unchecked options (Uppercase Letters, Numbers, etc.)
    // The filter method creates a new array with all elements/items that pass the test/condition in the function
    typesArr = typesArr.filter(
      // Checking if the value for each item is true or false. Removing the item from the array if it is false.
      function (item){
        console.log(`===========`);
        console.log(item[1]);
        console.log(`===========`);
        return item[1];
      }
    );
    console.log(typesArr);

  // loop that runs each generator function for all checked options. (Loop will run for an amount by the length set)
  for (i = 0; i < length; i+= typesCount){
    //  Function runs for each item in the typesArr
    typesArr.forEach(
      function (type){
        console.log(type);
        const funcName = type[0];
        // Runs each selected function from the randomFunc object and adds that character to the generatedPassword variable
        generatedPassword += randomFunc[funcName]();
      }
    );
  }
  console.log(generatedPassword);

  // Removing extra characters in generatedPassword
  generatedPassword = generatedPassword.slice(0, length);


  // Returns the value of generatedPassword from the function
  return generatedPassword
}
// generatePassword(true, true, true, false, 20);

// Event Listener foe when the "Generate Password" button is clicked
generateEl.addEventListener('click', () => {
  // Number input returns a string data type. So parseInt is ised to convert the string data type to a number
  const length = parseInt(lengthEl.value);
  console.log(typeof length);
  // Chaecking if the following types types/options are selected/checked and setting the true or false values to the respective variables
  const hasUpper = uppercaseEl.checking;
  const hasLower = lowercaseEl.checking;
  const hasNumber = numbersEl.checking;
  const hasSymbol = symbolsEl.checking;

  console.log(length, hasUpper, hasLower, hasNumber, hasSymbol);
  
  // generatePassword function takes the true/false values determined by the checkboxes as well as the number from the number input as arguements and returns a string (A.K.A. The generated password) which is set as the innerText value for the result element/span
  resultEl.innerText =generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});




