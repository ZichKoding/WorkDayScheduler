// variables 
let dayOfWeek = moment().day();
let hourOfDay = moment().hour();
let hourTextArea = {
    "#hourNine": 9,
    "#hourTen": 10, 
    "#hourEleven": 11, 
    "#hourTwelve": 12, 
    "#hourOne": 13, 
    "#hourTwo": 14, 
    "#hourThree": 15, 
    "#hourFour": 16, 
    "#hourFive": 17,
};

console.log(hourOfDay);


// Determining and displaying the day of the week in the header.
switch(dayOfWeek){
    case 1:
        $("#currentDay").text("Monday");
        break;

    case 2:
        $("#currentDay").text("Tuesday");
        break;

    case 3:
        $("#currentDay").text("Wednesday");
        break;

    case 4:
        $("#currentDay").text("Thursday");
        break;
    
    case 5:
        $("#currentDay").text("Friday");
        break;

    case 6:
        $("#currentDay").text("Saturday");
        break;

    case 7:
        $("#currentDay").text("Sunday");
        break;

    default:
        $("#currentDay").text("Wonder What Day It Is?!..... Me too...");
}

// loop through the body container and applying the correct background to the schedule hours
for (let key in hourTextArea) {
    let hourVal = hourTextArea[key];
    
    // setting current hour block red.
    if (hourOfDay === hourVal) {
        $(key).addClass("present");
    } 
    else if (hourOfDay > hourVal) {
        $(key).addClass("past");
    }
    else {
        $(key).addClass("future");
    }
}