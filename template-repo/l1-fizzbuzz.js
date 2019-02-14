for (var list = 1; list <= 100; list++){
    var leeg = " "
    if(list % 3 == 0 && list % 5 == 0){
        leeg += "FizzBuzz";

    } else if (list % 3 == 0){
        leeg += "Fizz";

    } else if (list % 5 == 0){
        leeg += "Buzz";

    } else {
        leeg = list;
    }

    console.log(leeg);

}
