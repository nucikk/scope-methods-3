const divideArray = [12, 25, 3, 6, 8, 14, 7, 23];

//? map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი
const newDivision = divideArray.map(number =>
  number % 3 === 0 ? number / 3 : `${number} არ იყოფა სამზე`
);

console.log(newDivision);