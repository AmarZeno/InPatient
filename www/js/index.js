

document.addEventListener("deviceready", function () {
    console.log("Subscribing...");

    //Call GetGPS function
    getGPS();

    document.getElementById('signin').addEventListener('click', loginauth, false);

    




    //Login authentication function
    function loginauth() {
        var patientpin = $("#pintext").val();
        var patientpassword = $("#passwordtext").val();
        if (patientpin == "dell" && patientpassword == "dell") {
            // $.mobile.changePage("#homePage");
            $.mobile.pageContainer.pagecontainer("change", $("#homePage"));

            //$.mobile.pageContainer.pagecontainer("change", $("#homePage"), {  changeHash: false });
            //$.mobile.navigate("www/home/home.html");
            //  $.mobile.navigate("www/sample/sample.html");
        }
        else {
            document.getElementById('errormsg').innerHTML = "Please enter a valid ID and Password";
        }
    }

    //----Phonegap GPS------
    function getGPS() {
       // navigator.geolocation.getCurrentPosition(geolocationSuccess,geolocationError);
                                         navigator.geolocation.watchPosition(geolocationSuccess,
                                                                                   geolocationError,
                                                                                   { enableHighAccuracy: true });
    }

    // onSuccess Geolocation 
    function geolocationSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        //Call the weather function
        GetLocalWeather(latitude, longitude);
    }

    // onError Callback receives a PositionError object
    //
    function geolocationError(error) {
        console.log('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
        //navigator.notification.alert("gps error");
        //alert('code: ' + error.code + '\n' +
        //      'message: ' + error.message + '\n');
    }



    //------------ LOCAL WEATHER ----------------
    function GetLocalWeather(latitude, longitude) {
        var localWeatherInput = {
            query: latitude + "," + longitude,
            lat: latitude,
            long: longitude,
            format: 'JSON',
            num_of_days: '2',
            date: '',
            fx: '',
            cc: '',
            includelocation: 'yes',
            show_comments: '',
            callback: 'LocalWeatherCallback'
        };
        JSONP_location(localWeatherInput);
        JSONP_LocalWeather(localWeatherInput);
    }

    function LocalWeatherCallback(localWeather) {
        alert(localWeather);
        output = "<br/> Cloud Cover: " + localWeather.data.current_condition[0].cloudcover;
        //output += "<br/> Humidity: " + localWeather.data.current_condition[0].humidity;
        //output += "<br/> Temp C: " + localWeather.data.current_condition[0].temp_C;
        //output += "<br/> Visibility: " + localWeather.data.current_condition[0].weatherDesc[0].value;
        //output += "<br/> Observation Time: " + localWeather.data.current_condition[0].observation_time;
        //output += "<br/> Pressue: " + localWeather.data.current_condition[0].pressure;
        //var resultContainer = document.getElementById("resultContainer");
        //resultContainer.empty();
        //resultContainer.html(output);
    }
});

$(document).on('pageshow', '#loginPage', function (data) {
    //On Session expiration. -Simple setting
    
    var value = sessionStorage.getItem("sessionExpired");
    if (!value) {
        // No data
    }
    else {
        //has value
        document.getElementById('errormsg').innerHTML = value;
        sessionStorage.removeItem("sessionExpired");

    }

});



