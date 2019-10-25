var century, year, dayOfMonth, dayOfWeek, day;
//Get input
function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthDay").value);

    if (century == "") {
        alert("input correct century");
        return false;
    } else if (year == "") {
        alert("input correct year");
        return false;
    } else if (month == "") {
        alert("input correct month");
        return false;
    } else if (dayOfMonth == "") {
        alert("input correct dayOfMonth");
        return false;
    };
};
//Calculate func
function calculateDay() {
    getInput();
    dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
        dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
        return dayOfWeek;
    }
};
//main caller func
function checkDayOfWeek() {
    day = calculateDay();
    checkGender();
    console.log("The function runs");//Test chackDayOfWeek function
};
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//get selected radio button
function checkGender() {
    var gen = document.getElementsByName("rads");
    if (gen[0].checked == true) {
        var gender = "male";
    } else if (gen[1].checked == true) {
        var gender = "female";
    } else {
        console.log("pass");//Test the radio buttons
    }
    switch (gender) {
        case gender = "male":
            switch (day) {
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on sunday" + "Your Akan name is" + maleNAmes[1];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on monday" + "Your Akan names is" + maleNames[2];
                    break;
                case (2 || -2):
                    document.getElementById("result").innerHTML = "The day is on tuesday" + "Your Akan names is" + maleNames[3];
                    break;
                case (3 || -3):
                    document.getElementById("result").innerHTML = "The day is on wednesday" + "Your Akan names is" + maleNames[4];
                    break;
                case (4 || -4):
                    document.getElementById("result").innerHTML = "The day is on thursday" + "Your Akan names is" + maleNames[5];
                    break;
                case (5 || -5):
                    document.getElementById("result").innerHTML = "The day is on friday" + "Your Akan names is" + maleNames[6];
                    break;
                case (6 || -6):
                    document.getElementById("result").innerHTML = "The day is on saturday" + "Your Akan names is" + maleNames[7];
                    break;
                    default:
                    //console.log("pass");//test male case
            }
        break;
        case gender = "female":
            switch (day) {
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on sunday" + "Your Akan name is Akosua";
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on monday" + "Your Akan names is Adwoa";
                    break;
                case (2 || -2):
                    document.getElementById("result").innerHTML = "The day is on tuesday" + "Your Akan names is Abenaa";
                    break;
                case (3 || -3):
                    document.getElementById("result").innerHTML = "The day is on wednesday" + "Your Akan names is Akua";
                    break;
                case (4 || -4):
                    document.getElementById("result").innerHTML = "The day is on thursday" + "Your Akan names is Yaa";                    break;
                case (5 || -5):
                    document.getElementById("result").innerHTML = "The day is on friday" + "Your Akan names is Afua";
                    break;
                case (6 || -6):
                    document.getElementById("result").innerHTML = "The day is on saturday" + "Your Akan names is Ama";
                    break;
                    default:
                    //console.log("pass");//test female case
            }
        break;


    };