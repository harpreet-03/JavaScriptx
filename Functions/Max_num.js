var arr = [1, 2, 3, 4, 5];
 
function MaxNum(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max;
}

var max_num = MaxNum(arr);
console.log("Maximum element in the array is: ", max_num)

