function sumNum(a, b, c){
    return a * b * c;
}

function theLoop(a, b, c){
    for (let i = 0; i < b; i++){
/*         I have to loop "a" amount of times
        I have to add "b" to a total per loop (total = b++ maybe)
        I have to multiply total by "c" per loop (not sure if this should happen before or after adding "b")
 */
        var total
        console.log(i)
        console.log(a + (a * (c * 0.01)))
        console.log(total)
        total = total + total
        console.log(total)


/*         I suspect that I need to put "i" into my logic so that a variable grows after each iteration. Something like total = a * (i + 1).
 */    }
}



document.getElementById("butt").addEventListener("click", function(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);

    var s = theLoop(a, b, c);
    document.getElementById("output").innerText = s;
});