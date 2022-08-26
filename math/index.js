function sumNum(a, b, c){
    return a * b * c;
}

function theLoop(a, b, c){

    let total = 0

    for (let i = 0; i < b; i++){

        console.log(total)
        total = total + a
        total = total + (total * c * 0.01)
        console.log(total)
        

    }

    return total;
}



document.getElementById("butt").addEventListener("click", function(){
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = parseFloat(document.getElementById("num3").value);

    var s = theLoop(a, b, c);
    document.getElementById("output").innerText = s;
});