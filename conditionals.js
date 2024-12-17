//Write a program that checks if a number is even or odd

const isEven = (num) => {
    if (num % 2 === 0) {
        return 'even'
    } else
     {
        return 'odd'
    }
}

console.log(isEven(200))

//Write a program that greets the user based on the time of day. 
//Display good morning, good afternnon or good evening based on the time of day when you run the code.

const greeting = (time) => {
    if (time < 1200) {
        return "Good Morning";
    } 
    else if (time >= 1200 && time < 1700) {
        return "Good afternoon"

    }
    else {
        return "good evening"
    }    
}

console.log(greeting(600))
