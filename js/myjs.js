$(document).ready(function () {
    
    var lat;
    var lon;
	 var celsius;
    var kelvin;
    var fahrenheit;
    var temperature;
    
    var location;
    var wind;
    var description;
   
    var icon;
    
    var timotheap = "c0f280df6d294bf9852c9b9bc0594c68";
         
    
	
	$.getJSON("http://ip-api.com/json", function(info){
		lat = info.lat;
		lon = info.lon;
		
		 var APPID = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + timotheap;
            
    
            $.getJSON(APPID, function (data) {
   
            location = data.name;
            icon = data.weather[0].icon;
                
            kelvin = data.main.temp;
            fahrenheit = (kelvin *(9/5)-459.67).toFixed(1);
            
            // fahr + " &#8457;"
            // celsius  + " &#8451;"
                
            celsius = (kelvin - 273.15).toFixed(1);
            
            wind = data.wind.speed;   
            description = data.weather[0].description;

            $('#location').html(location + ":  ");
          //  $('#wind').html(wind + " knots");
            $('#image').append('<img src="http://openweathermap.org/img/w/' + icon + '.png">' );
            $('#desc').html(description);
            $('#temperature').html(celsius);
                
            $('#temperature').on('click', function(){
                
            if($(this).text() === celsius) {
                $(this).text(fahrenheit);
            } else {
                $(this).text(celsius);
                }
                });
             
                                    


                               
                            });
	});
   
    
    
        
           

});