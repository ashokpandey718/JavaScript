// Q-1

// $.ajax({
//     url : " https://restcountries.eu/rest/v2/all",
//     type: "GET",
//     dataType: "json",
//     success: function(data){
//         //getCounty(data);
//         putOption(data);
//         if(localStorage.country){
//             $("#countries").val(localStorage.country);
            
//         }
        
          
//     },
//     error: function(){
//         console.log("Error in the request");
//     }  
// });

// function putOption(data){
//     for (j in data){
//     $('#countries').append($('<option>').val(data[j].name).text(data[j].name));
//     }
// }


// $('#countries').change(function(){
//     var selectedItem=$('#countries').val();
//     localStorage.removeItem['country'];
//     localStorage.setItem('country',selectedItem);

// })



// Q-2

// var courses = '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title": "Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]';

// function average_reviews(data) {

//     var courses = JSON.parse(data);
    
//     for (var a = 0; a < courses.length; a++) {
//         var reviews = courses[a].reviews;

//         try {
//             if(reviews.length == 0) {
//                 throw "No reviews";
//             } else if (reviews.length < 5) {
//                 throw "Not enough reviews yet";
//             }

//             var sumReviews = 0;

//             for (var b = 0; b < reviews.length; b++) {
//                 sumReviews += reviews[b];
//             }

//             var averageReviews = sumReviews / reviews.length;
//             courses[a].averageRating = averageReviews.toFixed(1);

//         } catch(err) {
//             courses[a].averageRating = err;
//         }
//     }

//     return JSON.stringify(courses);

// }

// console.log( average_reviews(courses) );





// function get_holidays(countryCode, countryName) {

//     var previousYear = new Date().getFullYear() - 1;
    
//     $("#selectedCountry").text("");
//     $("#previousYear").text("");
//     $("#holidayList").html("");

//     $.ajax({
//         url : "https://holidayapi.com/v1/holidays?pretty&key=" + "67530ba6-3f7b-496e-98b9-30bda6337407" + "&country=" + countryCode +"&year=" + previousYear,
//         type: "GET",
//         dataType: "json",
//         success: function(data){
//             var holidays = data.holidays;

//             $("#selectedCountry").text(countryName);
//             $("#previousYear").text(previousYear);

//             $("#holidayList").html("");

//             for (var a = 0; a < holidays.length; a++) {

//                 if (holidays[a].public) {
//                     var listItem = "<li>";
//                     listItem += holidays[a].date + " - " + holidays[a].name;
//                     listItem += "</li>";

//                     $("#holidayList").append(listItem);
//                 }

//             }

//         },
//         error: function(){
//             console.log("Error in the request");
//         }  
//     });
// }
