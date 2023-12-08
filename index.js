var array = [11, 14, 3, 4, 5, 6, 7, 15, 16, 17, 8, 9, 10, 12, 13];
var color_array = ["red", "green", "blue", "yellow", "pink", "orange", "purple", "black", "white", "brown", "grey", "cyan", "magenta", "indigo", "violet"];
///array manipulation

var arrayinput = document.querySelector(".array");
arrayinput.innerHTML = array;

var body = document.querySelector("body");


var result = array.map((data, index) => { return data % 2 == 0; });
var newresu
function sort() {
    array.sort((a, b) => { return a - b; });
    arrayinput.innerHTML = array;
    var start = 0;
    var end = color_array.length - 1;
    var idx = Math.random() * (end - start) + start;
    var idx = Math.floor(idx);
    var color = color_array[idx];
    // arrayinput.style.backgroundColor = color;
    body.style.backgroundColor = color;
}


function addten(data) {
    return data + 10;
}
console.log(array);