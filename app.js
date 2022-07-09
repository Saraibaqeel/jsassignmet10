//Q1
function date() {
    var date = new Date();
    document.write(date);

}
date();
//Q2
function concate() {
    var a = prompt("Enter First Name");
    var b = prompt("Enter First Name");
    document.write("Welcome" + " " + a + " " + b)

}
concate();
//Q3
function sum() {
    var a = +prompt("Enter 1st Number");
    var b = +prompt("Enter 2nd Number");
    return a + b;


}
alert(sum());
//Q4
function cal() {
    var a = +prompt("Enter Num1");
    var op = prompt("Enter Operation");
    var b = +prompt("Enter Num1");
    if (op === "+") {
        return a + b;
    }
    else if (op === "-") {
        return a - b;
    }
    else if (op === "*") {
        return a * b
    }
    else if (op === "/") {
        return a / b
    }

}
alert(cal());
//Q5
function square(a) {
    return a * a;
}
alert("Square Of Argument=" + square(3));
//Q6
function fact() {
    var fac = 1;
    var num = +prompt("Enter Number");
    for (var i = 1; i <= num; i++) {

        fac = fac * i;

    }
    alert("Factorial=" + fac);
}
fact();
//Q7
function count() {
    var a = +prompt("Enter Start Num");
    var b = +prompt("Enter End Num");
    for (var i = a; i <= b; i++) {
        document.write(i)
        document.write("<br>")
    }
}
count();
//Q8
function calculateHyp() {
    var base = +prompt("Enter Base");
    var per = +prompt("Enter Perpendicular");
    var hyp = base + per;
    function calculateSquare() {
        hyp = hyp * hyp;
    }
    calculateSquare();
    alert("Hypotneous=" + hyp);
}
calculateHyp();
//Q9(i)
function area(a, b) {
    return a * b
}
document.write("Area=" + area(2, 3));
//Q9(ii)
var va1 = 2;
var va2 = 3;
function area(a, b) {
    return a * b
}
document.write("Area=" + area(va1, va2));

//Q10
function palindrome() {


    var text = '';
    var userInput = prompt("Enter a string");

    for (var i = userInput.length - 1; i >= 0; i--) {
        text += userInput[i];
    }

    if (text === userInput) {
        alert("its palindrome");
    }
    else {
        alert("its not palindrome");
    }
}
palindrome();
//Q11
function titleCase() {
    var str = "the quick brown fox";
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1) + " ";
        document.write(str[i])
    }
}
//Q12
function findLongestWord(str) {

    var strSplit = str.split(' ');

    var longestWord = 0;

    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }

    return longestWord;
}

alert("Longest Word Has " + findLongestWord("The quick brown fox jumped over the lazy dog") + "Letters");
//Q13

function counter(string, character) {

    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {

            count++
        }
    }
    alert("Number Of occurrence" + count)
}
var string = prompt("Enter string");
var character = prompt("Enter Chartacter");
counter(string, character);
//Q14
function calcCircumference(radius) {
    var Circumference = 2 * Math.PI * radius;
    alert("Circumference Of Circle=" + Circumference);

}
var radius = +prompt("Enter Radius");

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("Area Of Circle=" + area);
}
calcCircumference(radius);
calcArea(radius);