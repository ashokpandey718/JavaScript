
// # 1
var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

document.getElementById("shipments").onchange = function() {

    var selectedOption = document.getElementById("shipments").value;
    var leadTime = shipments[selectedOption].leadTime;
    var fee = shipments[selectedOption].fee;

    var orderDate = new Date();
    var deliveryDate = new Date( orderDate.getTime() + (86400000 * leadTime) );

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);


}


// # 2

var phones = {
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': 450,
        'currency': 'US$',
        'imageUrl': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKEvLtH_25ZA13blHCFeiIq0Y8C4JJhhg18P0r1pAslAzCtpB031RTACrg92EsfNfSUSKNgA&usqp=CAc"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': 869,
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': 519,
        'currency': 'US$',
        'imageUrl': "data:image/jpeg;base64,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"
    }
};

var radioItems = document.getElementsByName("product");

for (var a = 0; a < radioItems.length; a++) {

    radioItems[a].onchange = function() {
        
        for (var b = 0; b < radioItems.length; b++) {
            
            if (radioItems[b].checked) {
                var selectedRadio = radioItems[b].value;
                
                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + (phones[selectedRadio].price.toFixed(2)).toString();
                document.getElementById("phone_image").src = phones[selectedRadio].imageUrl;

            }

        }
        
    } 

}


// # 3

// stopwatch
// start_stop
// reset

var isRunning = false, 
startTime,
currentTime,
elapsedTime = 0,
clockInterval,
hours,
minutes,
seconds,
remainder,
formattedTime;

function add_leading_zero(number){
    if(number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

document.getElementById("start_stop").onclick = function() {

    if (!isRunning) {
        // start the clock
        isRunning = true;

        if (elapsedTime == 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }

        clockInterval = window.setInterval(function(){

            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            // per hour 3600000
            // per minute 60000
            // per second 1000
            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);

            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);

            formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);


            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10);

    } else {
        // stop the clock
        window.clearInterval(clockInterval);
        isRunning = false;

    }

}

document.getElementById("reset").onclick = function() {

    startTime = new Date().getTime();
    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }
}