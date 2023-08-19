function measureNumber(num1, num2) {
    console.log(
        num1 > num2 ? `${num1} is the largest` :     //? თუ პირველი რიცხვი მეტია მეორეზე დაიბეჭდოს - num1 is the largest;
        num1 < num2 ? `${num2} is the largest` :     //? თუ მეორე რიცხვი მეტია პირველზე - დაიბეჭდოს num2 is the largest;
        'error'                                      //? ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - error; 
    );
}

measureNumber(31, 8);
measureNumber(8, 22);
measureNumber('not a number')