let arr = [];
let b = +prompt("Встановіть довжину масива");

if (b === 0 || isNaN(+b)) {
  alert("Ви не вказали потрібну довжину масива");
}

for (let i = 0; i < b; i++) {
  if (b < 5) {
    alert("Ви вказали недостатню довжину масива ");
    break;
  }
  arr[i] = prompt("Ввести пять довільних значень");
  if (arr[i] === null) {
    alert("Ви не вказали потрібну кількість значень");
    break;
  }
}
console.log(arr.sort());
console.log(arr.splice(1, 3));
console.log(arr);
