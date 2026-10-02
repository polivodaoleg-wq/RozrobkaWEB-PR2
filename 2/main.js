function formattedPhone(phone) {
  if (typeof phone !== "string") return "Формат неправильний";
  let cleaned = phone.replace(/[\s\-\(\)]/g, "");

  //+80664567890
  if (cleaned.startsWith("+80") && cleaned.length === 12) {
    const op = cleaned.slice(3, 6);
    const p1 = cleaned.slice(6, 9);
    const p2 = cleaned.slice(9, 11);
    const p3 = cleaned.slice(11, 13);
    return `+8 (${op}) ${p1}-${p2}-${p3}`;
  }

  let digits = cleaned.startsWith("+") ? cleaned.slice(1) : cleaned;
  if (digits.startsWith("380") && digits.length === 12) { digits = digits.slice(2); } 
  else if (digits.startsWith("80") && digits.length === 11) { digits = digits.slice(1); }

  const isValid = /^0\d{9}$/.test(digits);
  if (!isValid) return "Формат функції неправильний";

  const op = digits.slice(0, 3);
  const p1 = digits.slice(3, 6);
  const p2 = digits.slice(6, 8);
  const p3 = digits.slice(8, 10);
  return `+38 (${op}) ${p1}-${p2}-${p3}`;
}

//Завдання з зіркою
function runProgram() {
  const userPhone = prompt('Введіть номер телефону:');
  if (userPhone === null) return;

  const result = formattedPhone(userPhone.trim());
  alert(`Результат:\n${result}`);
}