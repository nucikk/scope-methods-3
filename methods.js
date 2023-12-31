"use strict"
//! #TASK-1:  ---------------------------  შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
const numberOfArrays = [5, 25, 89, 120, 36];

//? მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
numberOfArrays.push('javascript', 'python'); //TODO: -- push დაამატებს ორ ელემენტს სტრინგის სახით ბოლოში 
console.log('Add two items end: ', numberOfArrays); //^output: Add two items:  [ 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
numberOfArrays.splice(0, 0, "html", "css");  
console.log('Add two items start: ', numberOfArrays); //^output: Add two items start:  [ 'html', 'css', 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log('Number of items:', numberOfArrays.length); //^output: Number of items: 9

//? წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; 
numberOfArrays.shift(); //*remove the first
numberOfArrays.pop(); //*remove the last
console.log('Remove first and last items: ', numberOfArrays) //^output: Remove first and last items:  [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

//? დაბეჭდეთ მასივისი ახალი ელემენტები.
console.log('new number of arrays: ', numberOfArrays); //^output: new number of arrays: [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

//*The second option way (slice methods)
let newnumberOfArrays = numberOfArrays.slice(5);
console.log('new number of arrays is (slice methods): ', numberOfArrays)  //^output: new number of arrays (slice methods): [ 'css', 5, 25, 89, 120, 36, 'javascript' ]


//! #TASK-2:  --------------------------- შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

const fruitItemsArray = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

//? გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
console.log('fruitItemsArray ელემენტების რაოდენობა არის: ', fruitItemsArray.length); //^ fruitItemsArray ელემენტების რაოდენობა არის:  3

//? მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
fruitItemsArray.push('ვაშლი', 'ანანასი');
console.log('Add two items end: ',fruitItemsArray ) //^output: Add two items end:  [ 'ფორთოხალი', 'ბანანი', 'მსხალი', 'ვაშლი', 'ანანასი']

//? მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
fruitItemsArray.unshift('საზამთრო');
console.log("Add start item: ", fruitItemsArray); //^output: add start item: [ 'საზამთრო', 'ფორთოხალი', 'ბანანი', 'მსხალი', 'ვაშლი', 'ანანასი' ]

//? გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log('fruitItemsArray ელემენტების რაოდენობა არის: ', fruitItemsArray.length); //^ output: fruitItemsArray ელემენტების რაოდენობა არის:  6

//? მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
fruitItemsArray.splice(2,0, 'მანგო')
console.log('add mango third element: ',fruitItemsArray); //^output: add mango third element:['საზამთრო','ფორთოხალი','მანგო','ბანანი','მსხალი','ვაშლი','ანანასი']

//? წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; 
fruitItemsArray.shift();
fruitItemsArray.pop();
console.log('fruitItemsArray Remove first and last items: ', fruitItemsArray) //^output: fruitItemsArray Remove first and last items:  [ 'ფორთოხალი', 'მანგო', 'ბანანი', 'მსხალი', 'ვაშლი' ]

//? გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
console.log('number of elements is: ', fruitItemsArray.length) //^ output: number of elements is:  5


//! #TASK-3:  --------------------------- მოცემულია მასივი let array =[1, 2, 3, 4, 5]. 
const addAlphaArray = [1, 2, 3, 4, 5];

addAlphaArray.splice(3, 0, 'a', 'b', 'c'); //? Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5]
console.log('Add three letters of alphabet: ', addAlphaArray); //^output: Add three letters of alphabet:  [ 1,   2,   3, 'a', 'b', 'c', 4, 5 ]


//! #TASK-4:  ---------------------------  დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა ორი რიცხვი(ნებისმიერი ჩაწერეთ) და რომელიც შეასრულებს შემდეგ ლოგიკას:

function measureNumber(num1, num2) {
    console.log(
        num1 > num2 ? `${num1} is the largest` :     //? თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest;
        num1 < num2 ? `${num2} is the largest` :     //? თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest;
        'error'                                      //? ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error; 
    );
}

measureNumber(31, 8); //^ output: 31 is the largest
measureNumber(8, 22); //^ output: 22 is the largest
measureNumber('not a number') //^ output: error


//! #TASK-5:  ---------------------------  მოცემულია მასივი: let array = [12, 25, 3, 6, 8, 14, 7, 23];
const divideArray = [12, 25, 3, 6, 8, 14, 7, 23];

//? map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი
const newDivision = divideArray.map(number =>
  number % 3 === 0 ? number / 3 : `${number} არ იყოფა სამზე`
);

console.log(newDivision);  //^ output: [ 4, '25 არ იყოფა სამზე', 1, 2, '8 არ იყოფა სამზე', '14 არ იყოფა სამზე', '7 არ იყოფა სამზე', '23 არ იყოფა სამზე']

//! #TASK-6:  ---------------------------   მოცემულია მასივი: Let array=[2,15,10,24];
const removeNumArray = [2,15,10,24];
removeNumArray.splice(2,1)  //? წაშალეთ ამ მასივიდან რიცხვი 10;

console.log('array after removing 10: ',removeNumArray); //^ output: array after removing 10:  [ 2, 15, 24 ]