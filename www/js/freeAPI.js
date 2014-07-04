var _FreeApiBaseURL = 'http://api.worldweatheronline.com/free/v1/';
/*
    Please change the FreeAPIKey to your own. 
    These keys have been provided for testing only.
    If you don't have one, then register now: http://developer.worldweatheronline.com/member/register    
*/
var _FreeApiKey = 'r52edsaq3ck5n5dh8wh3b3ux';
var locationvalue;
// -------------------------------------------
function JSONP_location(input) {
    var url = 'http://www.geoplugin.net/extras/location.gp?lat=' + input.lat + '&long=' + input.long + '&format=json';
    var locationInfo;
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        
        headers: { "Content-type": "application/json" }
    }).then(function complete(locationInfo) {
        var locationobj = jQuery.parseJSON(locationInfo);
        locationvalue = locationobj.geoplugin_place;
        
    });
}
function JSONP_LocalWeather(input) {
    var url = _FreeApiBaseURL + 'weather.ashx?q=' + input.query + '&format=' + input.format + '&extra=' + input.extra + '&num_of_days=' + input.num_of_days + '&date=' + input.date + '&fx=' + input.fx + '&cc=' + input.cc + '&includelocation=' + input.includelocation + '&show_comments=' + input.show_comments + '&key=' + _FreeApiKey;
   // var forecastInfo;

     jsonP(url, input.callback);
    //var resultContainer = document.getElementById('resultContainer');
    //var weathericonholder = document.getElementById('weather_icon');
    //WinJS.xhr({
    //    type: "GET",
    //    url: url,
    //    headers: { "Content-type": "application/json" }
    //}).then(function complete(data) {
    //    var weatherData = data.responseText;
    //    forecastInfo = JSON.parse(weatherData);
    //    var area = forecastInfo.data.nearest_area[0].areaName[0].value;
    //    var temp = forecastInfo.data.current_condition[0].temp_F + "°F";
    //    var cloudcover;
    //    var weather_icon = forecastInfo.data.current_condition[0].weatherIconUrl[0].value;
    //   // weathericonholder.src = weather_icon;
    //    if (forecastInfo.data.current_condition[0].cloudcover == '0')
    //    { cloudcover = "Clear";}
    //    else if (forecastInfo.data.current_condition[0].cloudcover > '0' && forecastInfo.data.current_condition[0].cloudcover<='10')
    //    { cloudcover = "Very Clear";}
    //    else if (forecastInfo.data.current_condition[0].cloudcover > '10' && forecastInfo.data.current_condition[0].cloudcover<='20')
    //    { cloudcover = "Fair"; }
    //    else if (forecastInfo.data.current_condition[0].cloudcover > '21' && forecastInfo.data.current_condition[0].cloudcover <= '50')
    //    { cloudcover = "Partly Clear"; }
    //    else if (forecastInfo.data.current_condition[0].cloudcover > '51' && forecastInfo.data.current_condition[0].cloudcover <= '70')
    //    { cloudcover = "Mostly Cloudy"; }
    //    else if (forecastInfo.data.current_condition[0].cloudcover > '90' && forecastInfo.data.current_condition[0].cloudcover <= '100')
    //    { cloudcover = "Cloudy"; }
    //    var applicationData = Windows.Storage.ApplicationData.current;
    //    var localSettings = applicationData.localSettings;
    //    localSettings.values["resultContainer"] = area + ", " + cloudcover + ", " + temp;
    //    localSettings.values["weathericonholder"] = weather_icon;
    //    //resultContainer.innerHTML = 
    //}, function error(data) {
    //    (new Windows.UI.Popups.MessageDialog("Failed.", "Error retreiving weather details")).showAsync().done();
    //}).then(function () { return forecastInfo; });
   
   // jsonP(url, input.callback);
}

function JSONP_SearchLocation(input) {
    var url = _FreeApiBaseURL + "search.ashx?q=" + input.query + "&format=" + input.format + "&timezone=" + input.timezone + "&popular=" + input.popular + "&num_of_results=" + input.num_of_results + "&key=" + _FreeApiKey;

    jsonP(url, input.callback);
}

function JSONP_TimeZone(input) {
    var url = _FreeApiBaseURL + "tz.ashx?q=" + input.query + "&format=" + input.format + "&key=" + _FreeApiKey;

    jsonP(url, input.callback);
}

function JSONP_MarineWeather(input) {
    var url = _FreeApiBaseURL + "marine.ashx?q=" + input.query + "&format=" + input.format + "&fx=" + input.fx + "&key=" + _FreeApiKey;

    jsonP(url, input.callback);
}

// -------------------------------------------

// Helper Method
function jsonP(url, callback) {
    var forecastInfo;
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        jsonpCallback: callback,
        headers: { "Content-type": "application/json" }
    }).then(function complete(forecastInfo) {
        var area = locationvalue;
            var temp = forecastInfo.data.current_condition[0].temp_F + "°F";
            var cloudcover;
            var weather_icon = forecastInfo.data.current_condition[0].weatherIconUrl[0].value;
           // weathericonholder.src = weather_icon;
            if (forecastInfo.data.current_condition[0].weatherCode =="395")
            { cloudcover = "Moderate or heavy snow"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "392")
            { cloudcover = "Patchy light snow"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "389")
            { cloudcover = "Moderate or heavy rain"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "386")
            { cloudcover = "Patchy light rain"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "377")
            { cloudcover = "Moderate or heavy showers of ice pellets"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "374")
            { cloudcover = "Light showers of ice pellets"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "371")
            { cloudcover = "Moderate or heavy snow showers"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "368")
            { cloudcover = "Light snow showers"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "365")
            { cloudcover = "Moderate or heavy sleet showers"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "362")
            { cloudcover = "Light sleet showers"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "359")
            { cloudcover = "Torrential rain shower"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "356")
            { cloudcover = "Moderate or heavy rain shower"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "353")
            { cloudcover = "Light rain shower"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "350")
            { cloudcover = "Ice pellets"; }
            else if (forecastInfo.data.current_condition[0].weatherCode == "338")
            { cloudcover = "Heavy snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "335")
        { cloudcover = "Patchy heavy snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "332")
        { cloudcover = "Moderate snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "329")
        { cloudcover = "Patchy moderate snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "326")
        { cloudcover = "Light snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "323")
        { cloudcover = "Patchy light snow"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "320")
        { cloudcover = "Moderate or heavy sleet"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "317")
        { cloudcover = "Light sleet"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "314")
        { cloudcover = "Moderate or Heavy freezing rain"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "311")
        { cloudcover = "Light freezing rain"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "308")
        { cloudcover = "Heavy rain"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "305")
        { cloudcover = "Heavy rain at times"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "302")
        { cloudcover = "Moderate rain"; }
        else if (forecastInfo.data.current_condition[0].weatherCode == "299")
        { cloudcover = "Moderate rain at times"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "296")
        { cloudcover = "Light rain"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "293")
        { cloudcover = "Patchy light rain"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "284")
        { cloudcover = "Heavy freezing drizzle"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "281")
        { cloudcover = "Freezing drizzle"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "266")
        { cloudcover = "Light drizzle"; }
        
        else if (forecastInfo.data.current_condition[0].weatherCode == "263")
        { cloudcover = "Patchy light drizzle"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "260")
        { cloudcover = "Freezing fog"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "248")
        { cloudcover = "Fog"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "230")
        { cloudcover = "Blizzard"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "227")
        { cloudcover = "Blowing snow"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "200")
        { cloudcover = "Thundery outbreaks in nearby"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "185")
        { cloudcover = "Patchy freezing drizzle nearby"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "182")
        { cloudcover = "Patchy sleet nearby"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "179")
        { cloudcover = "Patchy snow nearby"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "176")
        { cloudcover = "Patchy rain nearby"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "143")
        { cloudcover = "Mist"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "122")
        { cloudcover = "Overcast"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "119")
        { cloudcover = "Cloudy"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "116")
        { cloudcover = "Partly Cloudy"; }

        else if (forecastInfo.data.current_condition[0].weatherCode == "113")
        { cloudcover = "Clear/Sunny"; }

        //html5 session local
            window.localStorage.setItem("resultContainer", temp + ", "+cloudcover);
            window.localStorage.setItem("weathericonholder", weather_icon);
            window.localStorage.setItem("locationinfo",area);
        //Winjs session local data
            //var applicationData = Windows.Storage.ApplicationData.current;
            //var localSettings = applicationData.localSettings;
            //localSettings.values["resultContainer"] = area + ", " + cloudcover + ", " + temp;
            //localSettings.values["weathericonholder"] = weather_icon;
            //resultContainer.innerHTML = 
       
    });


    //$.ajax({
    //    type: 'GET',
    //    url: url,
    //    async: false,
    //    contentType: "application/json",
    //    jsonpCallback: callback,
    //    dataType: 'jsonp',
    //    success: function (json) {
    //        console.dir('success');
    //        console.log('success');
    //    },
    //    error: function (e) {
    //        console.log(e.message);
    //    }
   // });
}

