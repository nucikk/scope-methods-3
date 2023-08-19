//! #TASK-2: შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

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
console.log('number of elements is: ', fruitItemsArray.length) 