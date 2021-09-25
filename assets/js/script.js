// variables 
let dayOfWeek = moment().day();
let hourOfDay = moment().hour();

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

