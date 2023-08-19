"use strict"
//! #TASK-1: შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
const numberOfArrays = [5, 25, 89, 120, 36];

//? მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
numberOfArrays.push('javascript', 'python'); //TODO: -- push დაამატებს ორ ელემენტს სტრინგის სახით ბოლოში 
console.log('Add two items end: ',numberOfArrays); //^ Add two items:  [ 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
numberOfArrays.splice(0,0,"html", "css");  //TODO: -- 
console.log('Add two items start: ',numberOfArrays); //^ Add two items start:  [ 'html', 'css', 5, 25, 89, 120, 36, 'javascript', 'python' ]

//? გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
console.log('Number of items:', numberOfArrays.length); //^ Number of items: 9

//? წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; 
numberOfArrays.shift(); //*remove the first
numberOfArrays.pop(); //*remove the last
console.log('Remove first and last items: ',numberOfArrays) //^ Remove first and last items:  [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

 //? დაბეჭდეთ მასივისი ახალი ელემენტები.
 let newnumberOfArrays = numberOfArrays.slice(5);
 console.log('new number of arrays: ',numberOfArrays)  //^ new number of arrays: [ 'css', 5, 25, 89, 120, 36, 'javascript' ]

 console.log('new number of arrays: ',numberOfArrays)  