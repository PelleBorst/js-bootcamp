var size = 8;

//create empy string
var grid = "";


//write a for loop, for the vertical rows
for (var vertical = 0; vertical < size; vertical++){

    //write a for loop, for the horizontal rows
    for (var horizontal = 0; horizontal < size; horizontal++){
        if ((vertical+horizontal) % 2 == 0){
            //if it's an even number, write a space
            grid += " ";

            }else {
                //if it's an uneven number, write an hash
                grid += "#;"
            }
        }
    //display a new line after each row
    grid += "\n";
    }

console.log(grid);
