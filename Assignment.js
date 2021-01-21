//Problem 1- convert Kilometer to Meter

function kilometerToMeter(Kilometer) {
    var result = Kilometer;

    // for positive input
    if (Kilometer >= 0) {
        result = Kilometer * 1000;
    }


    // for negative input
    else {
        result = "Distance can't be negative";

    }
    return result;
}
             // END




//Problem 2- budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var budgetForwatch = watch * 50;
    var budgetFormobile = mobile * 100;
    var budgetForlaptop = laptop * 500;
    var totalCost = budgetForwatch + budgetFormobile + budgetForlaptop;
    return totalCost;
}
               // END





//Problem 3- hOTEL COST

function hotelCost(NumberOfDays) {
    // less than 10 days
    if (NumberOfDays <= 10) {
        var result = NumberOfDays * 100;
    }

    // less than 20 days but more than 10 days
    else if (NumberOfDays > 10 && NumberOfDays <= 20) {
        var costofFirst10Days = 10 * 100;
        var costof10MoreDays = (NumberOfDays - 10) * 80;
        var result = costofFirst10Days + costof10MoreDays;
    }
    // more than 20 days

    else {
        var costofFirst10Days = 10 * 100;
        var costofSecondt10Days = 10 * 80;
        var costofLastMoreDays = (NumberOfDays - 20) * 50;
        var result = costofFirst10Days + costofSecondt10Days + costofLastMoreDays;
    }
    return result;
}
                    // END



 //Problem 4- megaFriend
function megaFriend(names){
    var LongestName = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length>LongestName.length){
            LongestName = element;
        }
    }
    return LongestName;  
}
                    // END