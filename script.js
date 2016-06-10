
var wordsToChange = ["Hey I just met you", "and this is crazy", "so here's my number", "and call me maybe!"];
var speedOfTyping = 100;
var asd = "";
var qwe = 0;

function writeInput(element, index, arr, delay) {
    var message = arr[qwe];
    if (qwe < arr.length) {
        if (index < message.length) {
            asd += message[index++];
            $(element).attr("placeholder", asd);
            setTimeout(function () {
                writeInput(element, index, arr, delay);
            }, delay);
        } else {
           setTimeout(function(){
            $(element).attr("placeholder", "");   
                asd = "";
                message = arr[qwe++];
                index = 0;
                writeInput(element, index, arr, delay);  
               }, 1000)
        }
    } else {
        qwe = 0;
        asd = "";
        index = 0;
        writeInput(element, index, arr, delay);
    }
};

setTimeout(function () {
    writeInput("#textChange", 0, wordsToChange, speedOfTyping);
}, 3500);
