function sumNum(a, b, c){
    return a * b * c;
}

function theLoop(a, b, c){

    let total = 0

    for (let i = 0; i < b; i++){

        console.log(total)
        total = total + (a + (a * (c * 0.01))) * (i + 1);
        console.log(total)
        console.log(i)
        return total;

/*         I'm still stuck on this for loop, I'm not sure how to get it to continue sum from the previous iteration.
 */
    }
}



document.getElementById("butt").addEventListener("click", function(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);

    var s = theLoop(a, b, c);
    document.getElementById("output").innerText = s;
});