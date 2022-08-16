function sumNum(a, b, c){
    return a * b * c;
}

function theLoop(a, b, c){
    for (let i = 0; i < a; i++){
/*         I have to loop "a" amount of times
        I have to add "b" to a total per loop (total = b++ maybe)
        I have to multiply total by "c" per loop (not sure if this should happen before or after adding "b")
 */    
    }
}



document.getElementById("butt").addEventListener("click", function(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);

    var s = sumNum(a, b, c);
    document.getElementById("output").innerText = s;
});