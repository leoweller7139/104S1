var sentence="Cohort 6 ";



sentence=sentence.concat(" " , " is the best cohort ever");
console.log(sentence);
sentence=sentence.replace('best','worst');
console.log(sentence);

//var x;
//x="Leo"

//console.warn("Warning....")
//console.error("Error....")

var num1=parseInt(prompt("Number 1: "));
var num2=parseInt(prompt("Number 2: "));
var sum=num1+num2;
var minus=num1-num2;
var mult=num1*num2;
var divid=num1/num2;

//console.log(num1+num2);
//console.log(num1-num2);
//console.log(num1*num2);
//console.log(num1/num2);

var name = prompt("Please type your name? ");
console.log(name);
//document.getElementById('division').innerHTML=`<h2> Welcome ${name} </h2> <br> <br> ${num1} --- ${num2}`;
document.getElementById('division').innerHTML=`<h2> Welcome ${name} </h2> <br> <br> ${num1} <br>       ${num2} <br> ${sum} <br> ${minus} <br> ${mult} <br> ${divid}`;

for(var i=0;i<10;i++){
    console.log("hello JS ");
    
}

//var n=email.includes("@");

if(num1>num2){
    console.log("The Largest Number is Number 1");
}
else if(num1==num2){
    console.log("The numbers are equal");
}
else{
    console.log("The Largest Number is Number 2");
}

let students = ['Angelo','Josh','Leo','Sandie','Victor','Matt','Debbie'];

for(var j=0; j<students.length;j++)
{
    alert(students[j]);
}