function countLetter(str, letter) {
  let count = 0;
  const target = letter.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === target) { count++; }
  }
  return count;
}

function getRow(firstRow, secondRow, letter = "a") {
  const count1 = countLetter(firstRow, letter);
  const count2 = countLetter(secondRow, letter);
  if (count1 > count2) return firstRow;
  else if (count2 > count1) return secondRow;
  else return `Обидва рядки мають однакову кількість літер "${letter}" (${count1}).`;
}

const firstRow = "Slow and steady wins the race";
const secondRow = "You can say that again";

//Завдання з зіркою
function runProgram() {
  const userFirstRow = prompt("Введіть перший рядок:", firstRow);
  if (userFirstRow === null) return;
  const userSecondRow = prompt("Введіть другий рядок:", secondRow);
  if (userSecondRow === null) return;
  const userLetter = prompt("Введіть літеру, яку потрібно порахувати:", "a");
  if (!userLetter) {
    alert("Ви не ввели літеру!");
    return;
  }

  const letterToSearch = userLetter.trim().charAt(0);
  const result = getRow(userFirstRow, userSecondRow, letterToSearch);
  alert(`Більше літер "${letterToSearch}" у рядку:\n\n${result}`);
}