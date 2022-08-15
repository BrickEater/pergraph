function sumNum(a, b, c){
    return a * b * c;
}



document.getElementById("butt").addEventListener("click", function(){
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);

    var s = sumNum(a, b, c);
    document.getElementById("output").innerText = s;
});