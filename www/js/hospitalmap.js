var hospitalmapglobalmenu_visible = 1;
var datetimeinterval;
var idleIntervaldatetimeweather;
var hospitalmapexpand = 0;
var hospitalmapglobalsurvey_expand = 0;
var hospitalmapglobalaccessentertainment_expand = 0;
$(document).on('pagehide', '#hospitalmapPage', function (data) {

    if (hospitalmapexpand == 1) {
        $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
        $('#hospitalmapglobalmenumh_video').fadeOut();
        $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
        $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
        $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
        hospitalmapexpand = 0;

    }
    if (hospitalmapglobalsurvey_expand == 1) {
        $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
        $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
        $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
        $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
        hospitalmapglobalsurvey_expand = 1;
    }
    if (hospitalmapglobalaccessentertainment_expand == 0) {
        $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
        $('#hospitalmapglobalmenucg_cafengift').fadeOut();
        $('#hospitalmapglobalmenucg_restaurant').fadeOut();
        $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
        $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
        hospitalmapglobalaccessentertainment_expand = 1;
    }
    clearTimeout(datetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);
});

$(document).on('pageshow', '#hospitalmapPage', function (data) {
    $("#hospitalmapglobalmenu_myhospital").hover(
 function () {
     $('#hospitalmapglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (hospitalmapexpand == 0) {
         $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $('#hospitalmapglobalmenu_myhospital').unbind().on('click', function () {
        if (hospitalmapglobalsurvey_expand == 1) {
            $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
            $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
            $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalsurvey_expand = 1;
        }
        if (hospitalmapglobalaccessentertainment_expand == 1) {
            $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
            $('#hospitalmapglobalmenucg_cafengift').fadeOut();
            $('#hospitalmapglobalmenucg_restaurant').fadeOut();
            $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalaccessentertainment_expand = 0;
        }
        if (hospitalmapexpand == 0) {
            $('#hospitalmapglobalmenumh_newsfeed').fadeIn();
            $('#hospitalmapglobalmenumh_video').fadeIn();
            $('#hospitalmapglobalmenumh_hospitalmap').fadeIn();
            $('#hospitalmapglobalmenu_myhospital').css("background-color", "#000000");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.8");
            hospitalmapexpand = 1;
        }
        else if (hospitalmapexpand == 1) {
            $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
            $('#hospitalmapglobalmenumh_video').fadeOut();
            $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
            $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapexpand = 0;
        }

    });
    $('#hospitalmapglobalmenu_cafe').unbind().on('click', function() {
        if (hospitalmapexpand == 1) {
            $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
            $('#hospitalmapglobalmenumh_video').fadeOut();
            $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
            $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapexpand = 0;
        }
        if (hospitalmapglobalsurvey_expand == 1) {
            $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
            $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
            $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalsurvey_expand = 1;
        }
        if (hospitalmapglobalaccessentertainment_expand == 0) {
            $('#hospitalmapglobalmenucg_shoppingmall').fadeIn();
            $('#hospitalmapglobalmenucg_cafengift').fadeIn();
            $('#hospitalmapglobalmenucg_restaurant').fadeIn();
            $('#hospitalmapglobalmenu_cafe').css("background-color", "#000000");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.8");
            hospitalmapglobalaccessentertainment_expand = 1;
        }
        else if (hospitalmapglobalaccessentertainment_expand == 1) {
            $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
            $('#hospitalmapglobalmenucg_cafengift').fadeOut();
            $('#hospitalmapglobalmenucg_restaurant').fadeOut();
            $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalaccessentertainment_expand = 0;
        }
    });

    $('#hospitalmapglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (hospitalmapglobalaccessentertainment_expand == 1) {
            $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
            $('#hospitalmapglobalmenucg_cafengift').fadeOut();
            $('#hospitalmapglobalmenucg_restaurant').fadeOut();
            $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalaccessentertainment_expand = 0;
        }

        if (hospitalmapexpand == 1) {
            $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
            $('#hospitalmapglobalmenumh_video').fadeOut();
            $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
            $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapexpand = 0;
        }
        if (hospitalmapglobalsurvey_expand == 0) {
            $('#hospitalmapglobalmenus_generalsurveys').fadeIn();
            $('#hospitalmapglobalmenus_dailysurveys').fadeIn();
            $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.8");
            hospitalmapglobalsurvey_expand = 1;
        }
        else if (hospitalmapglobalsurvey_expand == 1) {
            $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
            $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
            $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
            hospitalmapglobalsurvey_expand = 0;
        }


    });
    $("#hospitalmapglobalmenu_background").on('click', function () {
        if (hospitalmapglobalmenu_visible == 0) {
            if (hospitalmapglobalsurvey_expand == 1) {
                $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
                $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
                $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapglobalsurvey_expand = 1;
            }
            if (hospitalmapglobalaccessentertainment_expand == 1) {
                $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
                $('#hospitalmapglobalmenucg_cafengift').fadeOut();
                $('#hospitalmapglobalmenucg_restaurant').fadeOut();
                $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapglobalaccessentertainment_expand = 0;
            }
            if (hospitalmapexpand == 1) {
                $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
                $('#hospitalmapglobalmenumh_video').fadeOut();
                $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
                $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapexpand = 0;

            }
            $("#hospitalmapglobalmenu").width('84px');
            $("#hospitalmapglobalmenu").height('51px');
            $("#hospitalmapglobalmenu").css('margin-top', '-46px');
            $("#hospitalmapglobalmenu").css('margin-left', '454px');
            $("#hospitalmapglobalmenu_background").fadeOut();
            $('#hospitalmapglobalmenu_mydaySchedule').fadeOut();
            $('#hospitalmapglobalmenu_mycareteam').fadeOut();
            $('#hospitalmapglobalmenu_myclinicalDashboard').fadeOut();
            $('#hospitalmapglobalmenu_cafe').fadeOut();
            $('#hospitalmapglobalmenu_myhospital').fadeOut();
            $('#hospitalmapglobalmenu_mypatientsurveys').fadeOut();

            $('#hospitalmapglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            hospitalmapglobalmenu_visible = 1;
        }
    });
    $("#hospitalmapglobalmenu").unbind().on('click',function () {
        if (hospitalmapglobalmenu_visible == 0) {
            if (hospitalmapexpand == 1) {
                $('#hospitalmapglobalmenumh_newsfeed').fadeOut();
                $('#hospitalmapglobalmenumh_video').fadeOut();
                $('#hospitalmapglobalmenumh_hospitalmap').fadeOut();
                $('#hospitalmapglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapexpand = 0;
            }
            if (hospitalmapglobalsurvey_expand == 1) {
                $('#hospitalmapglobalmenus_generalsurveys').fadeOut();
                $('#hospitalmapglobalmenus_dailysurveys').fadeOut();
                $('#hospitalmapglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapglobalsurvey_expand = 1;
            }
            if (hospitalmapglobalaccessentertainment_expand == 1) {
                $('#hospitalmapglobalmenucg_shoppingmall').fadeOut();
                $('#hospitalmapglobalmenucg_cafengift').fadeOut();
                $('#hospitalmapglobalmenucg_restaurant').fadeOut();
                $('#hospitalmapglobalmenu_cafe').css("background-color", "#156c8a");
                $("#hospitalmapglobalmenu_background").css("opacity", "0.6");
                hospitalmapglobalaccessentertainment_expand = 0;
            }
            $("#hospitalmapglobalmenu").width('84px');
            $("#hospitalmapglobalmenu").height('51px');
            $("#hospitalmapglobalmenu").css('margin-top', '-46px');
            $("#hospitalmapglobalmenu").css('margin-left', '454px');
            $("#hospitalmapglobalmenu_background").fadeOut();
            $('#hospitalmapglobalmenu_mydaySchedule').fadeOut();
            $('#hospitalmapglobalmenu_mycareteam').fadeOut();
            $('#hospitalmapglobalmenu_myclinicalDashboard').fadeOut();
            $('#hospitalmapglobalmenu_cafe').fadeOut();
            $('#hospitalmapglobalmenu_myhospital').fadeOut();
            $('#hospitalmapglobalmenu_mypatientsurveys').fadeOut();
            $('#hospitalmapglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            hospitalmapglobalmenu_visible = 1;
        }
        else if (hospitalmapglobalmenu_visible == 1) {
            $("#hospitalmapglobalmenu").width('122px');
            $("#hospitalmapglobalmenu").height('72px');
            $("#hospitalmapglobalmenu").css('margin-top', '-67px');
            $("#hospitalmapglobalmenu").css('margin-left', '435px');
            $("#hospitalmapglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#hospitalmapglobalmenu_mydaySchedule').fadeIn();
            $('#hospitalmapglobalmenu_mycareteam').fadeIn();
            $('#hospitalmapglobalmenu_myclinicalDashboard').fadeIn();
            $('#hospitalmapglobalmenu_cafe').fadeIn();
            $('#hospitalmapglobalmenu_myhospital').fadeIn();
            $('#hospitalmapglobalmenu_mypatientsurveys').fadeIn();

            $('#hospitalmapglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            hospitalmapglobalmenu_visible = 0;
        }
    });

    //Calling the date and time function

    mycareteamChattimerIncrement();
    //calling the date and time function
    getDateTime();
    function mycareteamChattimerIncrement() {



        var resultContainer = document.getElementById('hospitalmapweatherdetailsinfo');
        var weathericonholder = document.getElementById('hospitalmapweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('hospitalmaplocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#hospitalmapweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");

        idleIntervaldatetimeweather = setTimeout(mycareteamChattimerIncrement, 1000);
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
        var datetimetext = document.getElementById("hospitalmapresultContainertime");
        var dateformattext = document.getElementById("hospitalmapresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
});