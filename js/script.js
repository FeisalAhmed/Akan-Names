// Collect form data and assign to variables
function getDayOfWeek() {
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var male1 = document.getElementById("male1");
    var female1 = document.getElementById("female1");
    var yearString = year.toString();
    var centuryString = yearString.slice(0, 2);
    var century = parseInt(centuryString);

    var dayOfWeek = Math.trunc((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7);


    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (male1.checked == true) {
        switch (dayOfWeek) {
            case 0:
                alert("Your akan name is: " + maleNames[dayOfWeek]);
            case 1:
                alert("your akan name is: " + maleNames[dayOfWeek]);
            case 2:
                alert("Your akan name is: " + maleNames[dayOfWeek]);
            case 3:
                alert("Your akan name is: " + maleNames[dayOfWeek]);
            case 4:
                alert("Your akan name is: " + maleNmaes[dayOfWeek]);
            case 5:
                alert("Your akan name is: " + maleNmaes[dayOfWeek]);
            case 6:
                alert("Your akan name is: " + maleNmaes[dayOfWeek]);

        }
    }
    else if (female1.checked == true) {
        switch (dayOfWeek) {
            case 0:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 1:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 2:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 3:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 4:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 5:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
            case 6:
                alert("your akan name is: " + femaleNames[dayOfWeek]);
        }
    }
}

