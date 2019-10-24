var century, year, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
    century=parseInt(document.getElementById("century").value);
    year =parseInt(document.getElementById("year").value);
    month =parseInt(document.getElementById("month").value);
    dayOfMonth =parseInt(document.getElementById("monthDay").value);

    if(century == ""){
        alert("input correct century");
        return false;
    }else if(year == ""){
        alert("input correct year");
        return false;
    }else if(month == ""){
        alert("input correct month");
        return false;
    }else if(dayOfMonth == ""){
        alert("input correct dayOfMonth");
        return false;
    };
};
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
 };
 