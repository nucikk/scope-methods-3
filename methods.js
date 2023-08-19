"use strict"
//! #TASK-1:  ---------------------------  შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
const numberOfArrays = [5, 25, 89, 120, 36];

//? მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
numberOfArrays.push('javascript', 'python'); //TODO: -- push დაამატებს ორ ელემენტს სტრინგის სახით ბოლოში 
console.log('Add two items end: ', numberOfArrays); //^ Add two items:  [ 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
numberOfArrays.splice(0, 0, "html", "css");  
console.log('Add two items start: ', numberOfArrays); //^ Add two items start:  [ 'html', 'css', 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log('Number of items:', numberOfArrays.length); //^ Number of items: 9

//? წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; 
numberOfArrays.shift(); //*remove the first
numberOfArrays.pop(); //*remove the last
console.log('Remove first and last items: ', numberOfArrays) //^ Remove first and last items:  [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

//? დაბეჭდეთ მასივისი ახალი ელემენტები.
console.log('new number of arrays: ', numberOfArrays); //^ new number of arrays: [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

//*The second option way (slice methods)
let newnumberOfArrays = numberOfArrays.slice(5);
console.log('new number of arrays is (slice methods): ', numberOfArrays)  //^ new number of arrays (slice methods): [ 'css', 5, 25, 89, 120, 36, 'javascript' ]


//! #TASK-2:  --------------------------- შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

const fruitItemsArray = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

//? გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
console.log('fruitItemsArray ელემენტების რაოდენობა არის: ', fruitItemsArray.length); //^ fruitItemsArray ელემენტების რაოდენობა არის:  3

//? მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
fruitItemsArray.push('ვაშლი', 'ანანასი');
console.log('Add two items end: ',fruitItemsArray ) //^ Add two items end:  [ 'ფორთოხალი', 'ბანანი', 'მსხალი', 'ვაშლი', 'ანანასი']

//? მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
fruitItemsArray.unshift('საზამთრო');
console.log("Add start item: ", fruitItemsArray); //^ add start item: [ 'საზამთრო', 'ფორთოხალი', 'ბანანი', 'მსხალი', 'ვაშლი', 'ანანასი' ]

//? გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log('fruitItemsArray ელემენტების რაოდენობა არის: ', fruitItemsArray.length); //^ fruitItemsArray ელემენტების რაოდენობა არის:  6

//? მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
fruitItemsArray.splice(2,0, 'მანგო')
console.log('add mango third element: ',fruitItemsArray); //^ add mango third element:['საზამთრო','ფორთოხალი','მანგო','ბანანი','მსხალი','ვაშლი','ანანასი']

//? წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; 
fruitItemsArray.shift();
fruitItemsArray.pop();
console.log('fruitItemsArray Remove first and last items: ', fruitItemsArray) //^ fruitItemsArray Remove first and last items:  [ 'ფორთოხალი', 'მანგო', 'ბანანი', 'მსხალი', 'ვაშლი' ]

//? გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;
console.log('number of elements is: ', fruitItemsArray.length) //^ number of elements is:  5

