// Function to generate a greeting based on the time
const greeting1 = (time) => {
    if (time < 1200) {
        return "Good morning";
    } 
    else if (time >= 1200 && time < 1700) {
        return "Good afternoon";
    }
    else {
        return "Good evening";
    }    
};

// using the current time

const currentTime = new Date(); 
const hours = currentTime.getHours(); 
const minutes = currentTime.getMinutes(); 

const militaryTimeNow = hours * 100 + minutes;


console.log(greeting1(militaryTimeNow));


// using a custom time 
const customTime = new Date(2024, 1, 4, 24, 30)
const customHours = customTime.getHours();
const customMinutes = customTime.getMinutes();

const customTimeNow = customHours * 100 * customMinutes;

console.log(greeting1(customTimeNow));

