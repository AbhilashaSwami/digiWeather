$(function()
{
    var $input;
    var $output;
 
    $('#btn').on('click',function()
    {
        $input=$('#input').val();
        $('#input').val('');
        $output=$('#weather');
        $output.empty();
        getDisplay($input);
    });

    function getDisplay(name)
    {
        var cityName=name;

        $output.empty();
        $.ajax
        ({
            type:'GET',
            url:'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=8c7f8f1de1b06ab3eff2c6af2eefcdf4',
            success: function(data)
            {    
                if(data.Error)
                {
                    $output.append("<div>No Data found</div>");
                }
                
               else
               {
                console.log(data);
                var date= new Date();

                  $output.append("<div id=output><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+date+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")
                
                function addDays(theDate, days)
                 {
                     return new Date(theDate.getTime() + days*24*60*60*1000);
                 }

                var newDate = addDays(new Date(), 1);
             
                $output.append("<div id=output1><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+newDate+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")

                var newDate1= addDays(new Date(), 2);

                  $output.append("<div id=output2><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+newDate1+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")

                var newDate2 = addDays(new Date(), 3);

                  $output.append("<div id=output3><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+newDate2+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")

                var newDate3 = addDays(new Date(), 4);

                  $output.append("<div id=output4><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+newDate3+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")

                var newDate4 = addDays(new Date(), 5);

                  $output.append("<div id=output5><br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+newDate4+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" </div>")

               }

           }
       })
    }

});
       