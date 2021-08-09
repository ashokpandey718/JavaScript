// Q-1

function cToF(c){
   var f = (9 * c / 5) + 32;
    return f
}
var celsius1=parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML=cToF(celsius1);

var celsius1=parseFloat(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML=cToF(celsius1);

var celsius1=parseFloat(document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML=cToF(celsius1);

// Q-2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("best_students").innerHTML=classification.slice(-3);

// Q-3

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'starsbyme':function(){
        var total=this['1_stars_reviews'] +this['2_stars_reviews'] +this['3_stars_reviews'] +this['4_stars_reviews'] +this['5_stars_reviews'] 
        return total;
    }
}
// course_title
// main_category
// reviews_5_stars
document.getElementById("course_title").innerHTML=course.title;
document.getElementById("main_category").innerHTML=course.categories[0];
var per=(course['5_stars_reviews']/course.starsbyme())*100;
document.getElementById("reviews_5_stars").innerHTML=Math.round(per);


//Q-4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
var lastitem=shoppingList.slice(-1);
shoppingList.pop();
console.log(shoppingList.slice(-1));
shoppingList.unshift(lastitem);
console.log(shoppingList);

shoppingList.push('Cheese');
shoppingList.push('Eggs');
console.log(shoppingList);

