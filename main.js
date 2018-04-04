const numbers = Array.from(new Array(101),(x,i) => i);
// Write a program that prints the numbers from 1 to 100. 
for(let i = 0; i < numbers.length; i ++) {
    const currentNumber = numbers[i];
// But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number 
    if(currentNumber % 5 === 0) {
        console.log("Chicken");
// and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
    } if (currentNumber % 7 === 0) {
        console.log("Monkey");
// For numbers which are multiples of both five and seven print "ChickenMonkey".
    } if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey");
        } else if (currentNumber % 5 != 0 && currentNumber % 7 != 0) {   
            console.log(currentNumber);
        }
}

