var dailysurveydetailsViewModelDetails;
var dailysurveysdatetimeinterval;
var idleIntervaldatetimeweather;
var dailysurveysexpand = 0;
var dailysurveysglobalaccessentertainment_expand = 0;
var dailysurveysglobalsurvey_expand = 0;
var dailysurveysglobalmenu_visible = 1;
$(document).on("pagehide", "#dailysurveys_page", function (event) {
    clearTimeout(dailysurveysdatetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);
    if (dailysurveysglobalmenu_visible == 0) {
        if (dailysurveysexpand == 1) {
            $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
            $('#dailysurveysglobalmenumh_video').fadeOut();
            $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (dailysurveysglobalaccessentertainment_expand == 1) {
            $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
            $('#dailysurveysglobalmenucg_cafengift').fadeOut();
            $('#dailysurveysglobalmenucg_restaurant').fadeOut();
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalaccessentertainment_expand = 0;

        }
        if (dailysurveysglobalsurvey_expand == 1) {
            $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
            $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalsurvey_expand = 0;
        }
        $("#dailysurveysglobalmenu").width('84px');
        $("#dailysurveysglobalmenu").height('51px');
        $("#dailysurveysglobalmenu").css('margin-top', '86px');
        $("#dailysurveysglobalmenu").css('margin-left', '454px');
        $("#dailysurveysglobalmenu_background").fadeOut();
        $('#dailysurveysglobalmenu_mydaySchedule').fadeOut();
        $('#dailysurveysglobalmenu_mycareteam').fadeOut();
        $('#dailysurveysglobalmenu_myclinicalDashboard').fadeOut();
        $('#dailysurveysglobalmenu_cafe').fadeOut();
        $('#dailysurveysglobalmenu_myhospital').fadeOut();
        $('#dailysurveysglobalmenu_mypatientsurveys').fadeOut();
        $('#dailysurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        dailysurveysglobalmenu_visible = 1;
    }
});
$(document).on("pagebeforeshow", "#dailysurveys_page", function (event) {

    //Loader 1 dial value
    $(function () {
        $(".dial1").knob(
        {
            change: function (value) {

            },
            release: function (value) {

                console.log("release : " + value);
            },
            cancel: function () {
                console.log("cancel : ", this);
            },
            draw: function () {

            }
        }

            );


        $('.dial1').trigger(
        'configure',
    {

        "fgColor": "#ff567e",
        "skin": "tron",
        'width': 112,
        'height': 112,

    }
    );
    });

    //Loader 2 dial value
    $(function () {
        $(".dial2").knob(


        {
            change: function (value) {

            },
            release: function (value) {

                console.log("release : " + value);
            },
            cancel: function () {
                console.log("cancel : ", this);
            },
            draw: function () {

            }
        }

            );


        $('.dial2').trigger(
        'configure',
    {

        "fgColor": "#ff567e",
        "skin": "tron",
        'width': 112,
        'height': 112,

    }
    );
    });
});
$(document).on("pageinit", "#dailysurveys_page", function (event) {

    function DailySurveyViewModel() {


        var self = this;

        self.MyDaySchedule =ko.observableArray( [
             { title: "Survey 1", picture: "url('/www/img/dailysurveys/Survey_Daily_circle.png')" },
            { title: "Survey 2", picture: "url('/www/img/dailysurveys/Survey_Daily_circle.png')" }
        ]);
    }
    dailysurveydetailsViewModelDetails = { viewModel: new DailySurveyViewModel() };
    function initialize() {
        console.log("restaurant Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#dailysurveys_maindiv')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(dailysurveydetailsViewModelDetails.viewModel, element);

    }

    initialize();
});
$(document).on('pageshow', "#dailysurveys_page", function (event) {


    $("#dailysurveysglobalmenu_myhospital").hover(
 function () {
     $('#dailysurveysglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (dailysurveysexpand == 0) {
         $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#dailysurveysglobalmenu_cafe").hover(
    function () {
        $('#dailysurveysglobalmenu_cafe').css("background-color", "#000000");
    }, function () {
        if (dailysurveysglobalaccessentertainment_expand == 0) {
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
        }
    }
    );

    $("#dailysurveysglobalmenu_mypatientsurveys").hover(
   function () {
       $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (dailysurveysglobalaccessentertainment_expand == 0) {
           $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#dailysurveysglobalmenu_myhospital').unbind().on('click', function () {
        if (dailysurveysglobalaccessentertainment_expand == 1) {
            $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
            $('#dailysurveysglobalmenucg_cafengift').fadeOut();
            $('#dailysurveysglobalmenucg_restaurant').fadeOut();
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalaccessentertainment_expand = 0;

        }
        if (dailysurveysglobalsurvey_expand == 1) {
            $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
            $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalsurvey_expand = 0;
        }
        if (dailysurveysexpand == 0) {
            $('#dailysurveysglobalmenumh_newsfeed').fadeIn();
            $('#dailysurveysglobalmenumh_video').fadeIn();
            $('#dailysurveysglobalmenumh_hospitalmap').fadeIn();
            $('#dailysurveysglobalmenu_myhospital').css("background-color", "#000000");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.8");
            dailysurveysexpand = 1;
        }
        else if (dailysurveysexpand == 1) {
            $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
            $('#dailysurveysglobalmenumh_video').fadeOut();
            $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysexpand = 0;
        }

    });
    $('#dailysurveysglobalmenu_cafe').unbind().on('click', function () {
        if (dailysurveysexpand == 1) {
            $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
            $('#dailysurveysglobalmenumh_video').fadeOut();
            $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysexpand = 0;
        }
        if (dailysurveysglobalsurvey_expand == 1) {
            $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
            $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalsurvey_expand = 0;
        }
        if (dailysurveysglobalaccessentertainment_expand == 0) {
            $('#dailysurveysglobalmenucg_shoppingmall').fadeIn();
            $('#dailysurveysglobalmenucg_cafengift').fadeIn();
            $('#dailysurveysglobalmenucg_restaurant').fadeIn();
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#000000");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.8");
            dailysurveysglobalaccessentertainment_expand = 1;
        }
        else if (dailysurveysglobalaccessentertainment_expand == 1) {
            $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
            $('#dailysurveysglobalmenucg_cafengift').fadeOut();
            $('#dailysurveysglobalmenucg_restaurant').fadeOut();
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalaccessentertainment_expand = 0;
        }
    });
    $('#dailysurveysglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (dailysurveysglobalaccessentertainment_expand == 1) {
            $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
            $('#dailysurveysglobalmenucg_cafengift').fadeOut();
            $('#dailysurveysglobalmenucg_restaurant').fadeOut();
            $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalaccessentertainment_expand = 0;
        }

        if (dailysurveysexpand == 1) {
            $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
            $('#dailysurveysglobalmenumh_video').fadeOut();
            $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysexpand = 0;
        }
        if (dailysurveysglobalsurvey_expand == 0) {
            $('#dailysurveysglobalmenus_generalsurveys').fadeIn();
            $('#dailysurveysglobalmenus_dailysurveys').fadeIn();
            $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.8");
            dailysurveysglobalsurvey_expand = 1;
        }
        else if (dailysurveysglobalsurvey_expand == 1) {
            $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
            $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
            dailysurveysglobalsurvey_expand = 0;
        }


    });

    $("#dailysurveysglobalmenu_background").on('click', function () {
        if (dailysurveysglobalmenu_visible == 0) {
            if (dailysurveysexpand == 1) {
                $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
                $('#dailysurveysglobalmenumh_video').fadeOut();
                $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
                $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysexpand = 0;
                // $("#dailysurveysglobalmenu_background").css("opacity", "0.8");
            }
            if (dailysurveysglobalaccessentertainment_expand == 1) {
                $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
                $('#dailysurveysglobalmenucg_cafengift').fadeOut();
                $('#dailysurveysglobalmenucg_restaurant').fadeOut();
                $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysglobalaccessentertainment_expand = 0;

            }
            if (dailysurveysglobalsurvey_expand == 1) {
                $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
                $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
                $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysglobalsurvey_expand = 0;
            }
            $("#dailysurveysglobalmenu").width('84px');
            $("#dailysurveysglobalmenu").height('51px');
            $("#dailysurveysglobalmenu").css('margin-top', '86px');
            $("#dailysurveysglobalmenu").css('margin-left', '454px');
            $("#dailysurveysglobalmenu_background").fadeOut();
            $('#dailysurveysglobalmenu_mydaySchedule').fadeOut();
            $('#dailysurveysglobalmenu_mycareteam').fadeOut();
            $('#dailysurveysglobalmenu_myclinicalDashboard').fadeOut();
            $('#dailysurveysglobalmenu_cafe').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').fadeOut();

            $('#dailysurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            dailysurveysglobalmenu_visible = 1;

        }
    });
    $("#dailysurveysglobalmenu").unbind().on('click', function () {
        if (dailysurveysglobalmenu_visible == 0) {
            if (dailysurveysexpand == 1) {
                $('#dailysurveysglobalmenumh_newsfeed').fadeOut();
                $('#dailysurveysglobalmenumh_video').fadeOut();
                $('#dailysurveysglobalmenumh_hospitalmap').fadeOut();
                $('#dailysurveysglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysexpand = 0;
            }
            if (dailysurveysglobalaccessentertainment_expand == 1) {
                $('#dailysurveysglobalmenucg_shoppingmall').fadeOut();
                $('#dailysurveysglobalmenucg_cafengift').fadeOut();
                $('#dailysurveysglobalmenucg_restaurant').fadeOut();
                $('#dailysurveysglobalmenu_cafe').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysglobalaccessentertainment_expand = 0;

            }
            if (dailysurveysglobalsurvey_expand == 1) {
                $('#dailysurveysglobalmenus_generalsurveys').fadeOut();
                $('#dailysurveysglobalmenus_dailysurveys').fadeOut();
                $('#dailysurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#dailysurveysglobalmenu_background").css("opacity", "0.6");
                dailysurveysglobalsurvey_expand = 0;
            }

            $("#dailysurveysglobalmenu").width('84px');
            $("#dailysurveysglobalmenu").height('51px');
            $("#dailysurveysglobalmenu").css('margin-top', '86px');
            $("#dailysurveysglobalmenu").css('margin-left', '454px');
            $("#dailysurveysglobalmenu_background").fadeOut();
            $('#dailysurveysglobalmenu_mydaySchedule').fadeOut();
            $('#dailysurveysglobalmenu_mycareteam').fadeOut();
            $('#dailysurveysglobalmenu_myclinicalDashboard').fadeOut();
            $('#dailysurveysglobalmenu_cafe').fadeOut();
            $('#dailysurveysglobalmenu_myhospital').fadeOut();
            $('#dailysurveysglobalmenu_mypatientsurveys').fadeOut();

            $('#dailysurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            dailysurveysglobalmenu_visible = 1;
        }
        else if (dailysurveysglobalmenu_visible == 1) {
            $("#dailysurveysglobalmenu").width('122px');
            $("#dailysurveysglobalmenu").height('72px');
            $("#dailysurveysglobalmenu").css('margin-top', '66px');
            $("#dailysurveysglobalmenu").css('margin-left', '435px');
            $("#dailysurveysglobalmenu_background").fadeIn();
            // $("#dailysurveysglobalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#dailysurveysglobalmenu_mydaySchedule').fadeIn();
            $('#dailysurveysglobalmenu_mycareteam').fadeIn();
            $('#dailysurveysglobalmenu_myclinicalDashboard').fadeIn();
            $('#dailysurveysglobalmenu_cafe').fadeIn();
            $('#dailysurveysglobalmenu_myhospital').fadeIn();
            $('#dailysurveysglobalmenu_mypatientsurveys').fadeIn();
            $('#dailysurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            dailysurveysglobalmenu_visible = 0;
        }
    });

    dailysurveystimerIncrement();
    getDateTime();
    function dailysurveystimerIncrement() {


        //calling the date and time function

        var resultContainer = document.getElementById('dailysurveysweatherdetailsinfo');
        var weathericonholder = document.getElementById('dailysurveysweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('dailysurveyslocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#dailysurveysweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(dailysurveystimerIncrement, 1000);
    }





    //Function for date and time
    function getDateTime() {

        var median = "AM";
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var day = now.getDay();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var secondsBeforeNextCheck = 60 - now.getMinutes() * 60 - now.getSeconds() + 1;
        if (month.toString().length == 1) {
            var month = '0' + month;
            if (month == 1) {
                month = "January";
            } else if (month == 2)
            { month = "February"; }
            else if (month == 3)
            { month = "March"; }
            else if (month == 4)
            { month = "April"; }
            else if (month == 5)
            { month = "May"; }
            else if (month == 6)
            { month = "June"; }
            else if (month == 7)
            { month = "July"; }
            else if (month == 8)
            { month = "August"; }
            else if (month == 9)
            { month = "September"; }
            else if (month == 10)
            { month = "October"; }
            else if (month == 11)
            { month = "November"; }
            else if (month == 12)
            { month = "December"; }
        }
        if (day.toString().length == 1) {
            var day = '0' + day;
            if (day == 0)
            { day = "Sunday"; }
            else if (day == 1) {
                day = "Monday";
            }
            else if (day == 2) {
                day = "Tuesday";
            }
            else if (day == 3) {
                day = "Wednesday";
            }
            else if (day == 4) {
                day = "Thursday";
            }
            else if (day == 5) {
                day = "Friday";
            }
            else if (day == 6) {
                day = "Saturday";
            }
        }
        if (hour.toString().length == 1) {
            var hour = '0' + hour;
        }
        if (hour.toString() > 12) {
            var hour = hour - 12;
            median = "PM";
        }
        else {
            median = "AM";
        }
        if (minute.toString().length == 1) {
            var minute = '0' + minute;
        }
        if (second.toString().length == 1) {
            var second = '0' + second;
        }
        //var dateTime = day + ', ' + month + ' ' + date + ', ' + year + ' ' + hour + ':' + minute + ' ' + median;
        var dateTime = day + ', ' + hour + ':' + minute + ' ' + median;
        var dateformat = month + ' ' + date;
        //Comments on timer
        var datetimetext = document.getElementById("dailysurveysresultContainertime");
        var dateformattext = document.getElementById("dailysurveysresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        dailysurveysdatetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }

});