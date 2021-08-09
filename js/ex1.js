// Q-1
console.log("this is ex1.js");
// Q-2
var fName="Ashok";
var lName="Pandey";
var yearofBirth=1997;
var currentYear=2021;
var age=currentYear-yearofBirth;
document.getElementById("student_message").innerHTML="Hi, my name is "+ fName +" " + lName+", I'm " + age.toString()+" years old and I'm learning Javascript";
// Q-3
var num_1=parseInt(document.getElementById("num_1").innerHTML);
var num_2=parseInt(document.getElementById("num_2").innerHTML);
document.getElementById("result").innerHTML=((num_1+num_2)/2).toFixed(2);

// Q-4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
 if(phone1.length==9)
 {
    console.log("phone1 is valid")
 }
else{console.log("phone1 invalid")}

if(phone2.length==9)
 {
    console.log("phone2 is valid")
 }
else{console.log("phone2 invalid")}

if((phone3.toString()).length==9)
 {
    console.log("phone3 is valid")
 }
else{console.log("phone3 invalid")}

//Q-5
console.log(Math.pow(32,6));
console.log(32**6);



// Q-8
var url_1 =document.getElementById("url_1").innerHTML;
var urlCombine="https://";
document.getElementById("url_2").innerHTML=urlCombine +url_1 ;

document.getElementById("url_4").innerHTML=(document.getElementById("url_3").innerHTML).replace("https://","");



