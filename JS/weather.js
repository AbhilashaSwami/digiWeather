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
                var date=new Date();
                $output.append("<br> <br>Location: "+data.name+
                    "<br>Latitude: "+data.coord.lat+"<br>" + 
                    "Longitude: "+data.coord.lon+" <br>Date: "+date+" <h2>"+data.weather[0].main+"</h2>"
                    +data.weather[0].description+
                    "<br><br>Temperature: "+data.main.temp+
                    "F<br>Min. Temp: " +"" +data.main.temp_min+
                    " F<br>Max. Temp: "+data.main.temp_max+" F<br>Pressure: "+data.main.pressure+" ")

               }

           }
       })
    }

});
       