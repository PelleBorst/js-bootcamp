 function range(start, end){
    var range = [];

    for (let i = start; i <= end, i++)
        range.push(i);

    returm range;
}




function sum(array) {
    var total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
  }
  return total;
}


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
