
// Challenges! 
    // For each of these challenges use the ideas from this file. Use the "fat arrow functions" 
    // ()=>{} and the ES6 style class defintion.
    
    // Define a class that describes weather data it should take three parameters:
    // temp, date (use new Date() to make a date object), and description (eg cloudy, rainy etc.)
    class Weather {
    	constructor(temp, description) {
    		this.temp = temp;
    		this.description = description;
    		this.date = new Date()

    	}
    	getWeather() {
    		return `It is ${this.temp} degrees on ${this.date} and ${this.description}`;
    	}
    }
    const rainy = new Weather("53", "Rainy");
    console.log(rainy.getWeather());
    
    // Make an array of three weather Objects each with some different values.
    const sunny = new Weather("75", "Sunny");
    const cloudy = new Weather("45", "Cloudy");
    var forecast = [rainy, sunny, cloudy];
    console.log(forecast);
    // Use reduce to calculate the average temp for all objects.
    var temperature = 0;
    var sum_temp = 0;
    var avg_temp = 0.0;
    for (i=0;i<forecast.length;i++) {
        temperature = forecast[i].temp;
        console.log(temperature);
        sum_temp += Number(temperature);
        console.log(sum_temp)
    }
    avg_temp = parseFloat(sum_temp/forecast.length).toFixed(2);
    console.log(avg_temp);


    // Use Map to return an array of strings that contain a full description of the weather.
    var des = ""
    for (i=0;i<forecast.length;i++) {
        des = `${forecast[i].date} ${forecast[i].description} ${forecast[i].temp} degrees`;
        console.log(des);
    }

    // For example: "03-23-2016 Cloudy 56 degrees" where the info comes from each of the weather objects. 