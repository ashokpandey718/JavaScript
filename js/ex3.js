// Q-1

// document.getElementById("convert").onclick=function(){
//     var c= document.getElementById("temp_celsius").value;
//    var f = (9 * c / 5) + 32;
//     document.getElementById("temp_fahr").innerHTML=f;
// };


//Q-2

// for (var l=2022;l<=2050;l=l+4){
//      var ul=document.getElementById("anos_copa");
//      var li=document.createElement("li");
//      li.appendChild(document.createTextNode(l));
//      ul.appendChild(li);
//  }




// Q-3

  //  document.getElementById("calculate").onclick=function(){
//     var g1=document.getElementById("grade1").value;
//     var g2=document.getElementById("grade2").value;
//     var abs=document.getElementById("absences").value;
//     if(g1!="" && g2!="" && abs!=""){
//     var avg=(g1+g2)/2;
//     var pre=(20-abs)/20;
//     var finalResult;
//     if(avg <6.5 && pre<0.7)
//     {
//         finalResult="Failed because of grade and less presence too"
//     }
//     else if(avg<6.6){
//         finalResult="Failed because of grade"

//     }
//     else if(pre<0.7){
//         finalResult="Failed because of  less presence too"

//     }
//     else{
//         finalResult="Approved"

//     }
// document.getElementById("result").innerHTML=finalResult
// }
// else("All Boxs Must be filled");
// }





// Q-4

// var sales = [

//     {
//         'student': 'Jason Gomes',
//         'date': '10/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Carlos Blue',
//         'date': '10/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Martin Heyes',
//         'date': '11/06/2018',
//         'amount': 39.99,
//         'refundRequested': '13/06/2018'
        
//     },

//     {
//         'student': 'Isabella Hopkins',
//         'date': '11/06/2018',
//         'amount': 29.99,
//         'refundRequested': null
        
//     },

//     {
//         'student': 'Andrew Walt',
//         'date': '12/06/2018',
//         'amount': 34.99,
//         'refundRequested': null
        
//     }

// ];



// var totalSale=0;
// for (a in sales)
// {
//     if(sales[a].refundRequested==null)
//     {
//      var line="<tr>";
//       line += "<td>"+ sales[a].student  +"</td>"   
//       line += "<td>"+ sales[a].date  +"</td>" 
//       line += "<td>"+ sales[a].amount  +"</td>" 
//     line+="</tr>";
//     document.getElementById("course_sales").innerHTML +=line;
//     totalSale=totalSale+sales[a].amount;
//     }
//     else{}
// }
// document.getElementById("total_sold").innerHTML=totalSale;
