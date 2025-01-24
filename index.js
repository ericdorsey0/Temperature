function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32); 
}
function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);

    let discription = "";

    if(celsius < 0) {
        discription = "very cold";
    }
    else if(celsius < 20){
        discription = "cold";
    }
    else if(celsius < 30){
        discription = "warm";
    }
    else if (celsius < 40){
        discription = "hot";
    }
    else {
    discription = "very hot";}

   return ` ${fahrenheit}°F is ${celsius}°C. That is ${discription}.`
}


    

const fahrenheit = prompt("provide a temperature in °F");
const discription = describeTemperature(fahrenheit);
alert(discription);