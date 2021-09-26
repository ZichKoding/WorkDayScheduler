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


// Determining and displaying the day of the week in the header.
function displayDay() {
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

        case 0:
            $("#currentDay").text("Sunday");
            break;

        default:
            $("#currentDay").text("Wonder What Day It Is?!..... Me too...");
    }
};

// loop through the body container and applying the correct background to the schedule hours
function textBackChange() {
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
}

// load data from localStorage
function loadingData() {
    if (localStorage.length > 0){
        for (let i = 0; i < localStorage.length; i++) {
            for (let key in hourTextArea) {
                let textVal = hourTextArea[key];
                let localItem = localStorage.getItem(textVal);
                if (localItem) {
                    localItem = localItem.replace('"', ``);
                    localItem = localItem.replace('"', '');
                    $(key).text(localItem);
                }
            }
        }
    } else {
        console.log("It seems you've never been here before.......... mwhahaha")
    }
};

// Save button logic
$("#nineAM").click(function () {
    localStorage.setItem(9, JSON.stringify($("#hourNine").val()));
});

$("#tenAM").click(function () {
    localStorage.setItem(10, JSON.stringify($("#hourTen").val()));
});

$("#elevenAM").click(function () {
    localStorage.setItem(11, JSON.stringify($("#hourEleven").val()));
});

$("#twelvePM").click(function () {
    localStorage.setItem(12, JSON.stringify($("#hourTwelve").val()));
});

$("#onePM").click(function () {
    localStorage.setItem(13, JSON.stringify($("#hourOne").val()));
});

$("#twoPM").click(function () {
    localStorage.setItem(14, JSON.stringify($("#hourTwo").val()));
});

$("#threePM").click(function () {
    localStorage.setItem(15, JSON.stringify($("#hourThree").val()));
});

$("#fourPM").click(function () {
    localStorage.setItem(16, JSON.stringify($("#hourFour").val()));
});

$("#fivePM").click(function () {
    localStorage.setItem(17, JSON.stringify($("#hourFive").val()));
});

loadingData();
// interval loop to make sure everything is keeping updated every second.
setInterval(() => {
    displayDay();
    textBackChange();
}, 300);

setInterval(() => {
    loadingData();
}, 30 * 1000);