 let arrays = [[1, 2, 3], [4, 5], [6]];

let flat = arrays.reduce(function(array1, array2){
    return array1.concat(array2);
})

console.log(flat);
