// alert("welcome in js first")
// console.log("hello from the console line Sir")



// document.getElementById("click-me").onclick=function(){
//     window.console.log("You Click Me")
// }

// document.getElementById("hover-me").onmouseover=function(){
//     window.console.log("Move the cursor over here")
// }

// document.getElementById("leave-me").onmouseleave=function(){
//     window.console.log("Move the cursor out  of here")
// }



// document.onkeypress=function(event){
//     if(event.keyCode==65){
//         alert("you pressed A form your keyboard")
//     }

// }

// document.getElementById("color_button").onclick=function(){
//     this.style.backgroundColor="purple"
//     this.style.transform="translateX(150px)";
// }


// var cssOnText=document.getElementById("color_button")
// cssOnText.onclick=function(){
//     this.style.backgroundColor="purple"
//     this.style.transform="translateX(150px)";
// }


// var nameClass=document.getElementsByClassName("example");
// for(a=0;a<nameClass.length;a++)
// {
//  console.log(nameClass[a].innerHTML);
//  }



// var car = {
//     'Year': 2018,
//     'Model': 'Evoke',
//     'Manufacturer': 'Land Rover',
//     'FuelType': 'Diesel'

// }
// for (var i in car){
//     console.log(i +"::"+ car[i]);
// }


// var colorFont=document.getElementsByClassName("example")
// for(var a=0;a<colorFont.length;a++){
//     colorFont[a].style.color="orange";
//     colorFont[a].style["font-weight"]="bold";
// }


// window.onmouseover=function(event){
//  console.log(event.pageY);
//  }

// var orderDate=new Date("2020-03-26");
// var deliveryDate=new Date("2020-04-02")

// console.log((deliveryDate-orderDate)/86400000);
// console.log(timeNow.getDate());
// console.log(timeNow.getDay())
// console.log(timeNow.getFullYear())
// console.log(timeNow.getMonth())
// console.log(timeNow.getHours())
// console.log(timeNow.getMinutes())
// console.log(timeNow.getSeconds())
// console.log(timeNow.getMilliseconds())
// console.log(timeNow.getTime()/86400000)
// document.getElementById("delivery_time").innerHTML=(deliveryDate-orderDate)/86400000;


// function sec(a){
//  if (a < 10){
//      var r= ('0'+ a.toString());
//     return r;
//     }
//  else{return a}
// }


// varinter=window.setInterval(function(){
//     var currentYear=new Date();
//     document.getElementById("hours").innerHTML=(currentYear.getHours());
//     document.getElementById("minutes").innerHTML=currentYear.getMinutes();
//     document.getElementById("seconds").innerHTML=sec(currentYear.getSeconds());;

// },1000)


// $(document).ready(function(){
//     console.log("Hello Sir Welcome In jQuery");
// })

// $("#fullName").keyup(function(){
//     if($("#fullName").val()=="")
//     {
//         $("#submit").hide();       
//     }
//     else{
//     $("#submit").show();}
// })


// $("#hide-button").click(function(){
//     $(this).hide(4000, function(){

//     });
//     $("#hidden-text").show();
// })


// $("#toggle-tab").click(function(){
//     $("#tab-content").slideToggle(5000);
//     $("#toggle-tab").toggleClass("flip");
// })



// function myName() {
//     var nameCollections = { "Name": "Ashok" };
//     return nameCollections.Name;
//     // console.log(nameCollections.Name);
// }

// function get_user(call,callme){

//     window.setTimeout(function(){
//         var u = {
//             'name': 'Ashok'
//         };
//         console.log(u,)
//         callme(u,"HIII")
//         call(u,"HELLO");

//     }, 1000);

// }
//  function greetinUser(name,near){
//      console.log("Hi Mr/Mrs  "+ name.name +"  How Are You From child  "+near);

//  }
//  function userCast(name,cast){
//      console.log(name.name + cast+"From User Cast");
//  }
// get_user(greetinUser,userCast)



// try{
// function getUser(){
//     window.setTimeout(function(){
//         var uName={'name':'Ashok'};
//         // console.log(uName.name)
//         return uName;
//     },2000)
// }

// function greetingUser(user){
//  console.log("Hello  "+user.name);
// }

// var u=getUser();
// greetingUser(u);
// }
// catch(e){
//     console.log(e);
// }
// finally{
//  console.log("From Finall Block")
// }
// console.log("Statement After The Error ");




// var emp={
//     "name":"Ashok",
//     "empId":"1242"
// };
// for (var j in emp){
//     console.log(j);
// }

// var empJson=JSON.stringify(emp);

// var onceObj=JSON.parse(empJson);

// console.log("Object File emp",emp);
// console.log("Converted object into json empJson",empJson);
// console.log("Converted json into Object again onceObj",onceObj);

// var empName=["ashok","prakash","deepa","pooja","lado","rama"]
//  var empJson=JSON.stringify(empName);
//  var onceObj=JSON.parse(empJson);

//  console.log(typeof(empName));
//  console.log(typeof(empJson));
//  console.log(typeof(onceObj));



// window.localStorage.setItem('age','25');
// // console.log(localStorage.name);
// window.localStorage.removeItem('name');
// localStorage.removeItem('age');


// window.sessionStorage.setItem('name','Ashok Pandey here All')


// $('#submit-name').click(function () {
//     if($('#name-user').val()!="")
//     {
//     var name = $('#name-user').val();
//     window.localStorage.setItem('user', name);
//     window.location.reload();
    
// }  
//     else{
//         alert("Enter User Please");
//     }
//       })

// if (localStorage.user!="") {

//     $('#name-field').hide();
//     $("#welcome-text").text('Hi ' + localStorage['user'] + ' How Are You?');
//     $("#not-me").text("Not " + localStorage['user'] + " ?");
//     $('#welcome-area').show()
//     $("#not-me").click(function () {
//         localStorage.removeItem("user");
//         $("#welcome-area").hide();
//         $('#name-field').show();
    
//     })

// }



// var httpCon=new XMLHttpRequest();
// var responseObj;
// httpCon.onreadystatechange=function(){
//     if (this.readyState == 4 && this.status == 200) {
//      responseObj=JSON.parse(httpCon.responseText);
//      console.log("Q :"+responseObj.results[0].question);
//     console.log("A :"+responseObj.results[0].correct_answer);


//     }    }
 
// httpCon.open("GET", "https://opentdb.com/api.php?amount=1");
// httpCon.send();





// $.ajax({
//     url : " https://restcountries.eu/rest/v2/all",
//     type: "GET",
//     dataType: "json",
//     success: function(data){
//         console.log(data);
        
//     },
//     error: function(){
//         console.log("Error in the request");
//     }  
// });