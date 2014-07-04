var datetimeinterval;
var bgChangeInterval;
var idleInterval;
var idleIntervaldatetimeweather;
var globalmenu_visible = 1;
var myhospitalexpand = 0;
var globalaccessentertainment_expand = 0;
var globalsurvey_expand = 0;
$(document).on("pagehide", "#homePage", function (event) {

    clearTimeout(datetimeinterval);
    clearTimeout(bgChangeInterval);
    clearTimeout(idleInterval);
    clearTimeout(idleIntervaldatetimeweather);
    if (globalmenu_visible == 0) {
        if (myhospitalexpand == 1) {
            $('#globalmenumh_newsfeed').fadeOut();
            $('#globalmenumh_video').fadeOut();
            $('#globalmenumh_hospitalmap').fadeOut();
            $('#globalmenu_myhospital').css("background-color", "#156c8a");
            $("#globalmenu_background").css("opacity", "0.6");
            myhospitalexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (globalaccessentertainment_expand == 1) {
            $('#globalmenucg_shoppingmall').fadeOut();
            $('#globalmenucg_cafengift').fadeOut();
            $('#globalmenucg_restaurant').fadeOut();
            $('#globalmenu_cafe').css("background-color", "#156c8a");
            $("#globalmenu_background").css("opacity", "0.6");
            globalaccessentertainment_expand = 0;
            
        }
        if (globalsurvey_expand == 1) {
            $('#globalmenus_generalsurveys').fadeOut();
            $('#globalmenus_dailysurveys').fadeOut();
            $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#globalmenu_background").css("opacity", "0.6");
            globalsurvey_expand = 0;
        
        }
        $("#globalmenu").width('84px');
        $("#globalmenu").height('51px');
        $("#globalmenu").css('margin-top', '-46px');
        $("#globalmenu").css('margin-left', '454px');
        $("#globalmenu_background").fadeOut();
        $('#globalmenu_mydaySchedule').fadeOut();
        $('#globalmenu_mycareteam').fadeOut();
        $('#globalmenu_myclinicalDashboard').fadeOut();
        $('#globalmenu_cafe').fadeOut();
        $('#globalmenu_myhospital').fadeOut();
        $('#globalmenu_mypatientsurveys').fadeOut();

        $('#globalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        globalmenu_visible = 1;
    }
});

$(document).on("pageinit", "#homePage", function (event) {
    //calling the knockout initialization function
    initialize();//calling the knockout initialization function


    //knockout
    // Overall viewmodel for this screen, along with initial state
    function HomeViewModel() {


        var self = this;

        self.MyDaySchedule = [
            { picture: "img/home/MyDaySchedule_video.png" },
            { day: "1", title: "Physical Activity after surgery", text: "you will have tasks each day to help gain strength. Complete self-assessments...", picture: "img/home/b_1.png" },
            { title: "How are you feeling today?", picture: "img/home/b_3.png" },
            { hours: "2", hourstext: "Hours Left for Medicine", picture: "img/home/b_3.png" }
        ];

        self.MyCareTeam = [
            { title: "Care Team", description: "One stop access to find better care for you..", picture: "img/home/g1.png" },
            { title: "Communicate with nursing staff and other clinicians", picture: "img/home/g2.png" },
            { picture: "img/home/chat_notification.png", title: "1" }
        ];

        self.MyClinicalDashboard = [
            { title: "Keep track of your body perfomance. This will help you to understand your own body more...", picture: "img/home/p1.png" },
            { title: "120/86", subtext: "Normal BP", picture: "img/home/p2.png" }
        ];

        self.AccessEntertainmentServices = [
            { title: "Cafe and gift shops", subtext: "The store has a wide selection of merchandise including baby clothes, balloons, books for adults, children, chocolates, fresh flowers, plants, greeting cards, magazines, pottery, stuffed animals and toys.", picture: "img/home/hub_cafeandgiftshop.png" },
            { title: "Shopping Mall Around Us", subtext: "", picture: "img/home/hub_shoppingmall.png" },
            { title: "Restaurant Around Us", subtext: "", picture: "img/home/hub_restaurant.png" }
        ];

        self.MyHospital = [
            { title: "News Feed", subtext: "", picture: "img/home/IP RSS icon.png" },
            { picture: "img/home/MyHospital_v2.png" },
            { title: "Hospital Map", picture: "img/home/IP map icon.png" }
        ];

        self.MyPatientSurveys = [
            { title: "Surveys", subtext: "Patients can take the survey anytime during the stay. This would capture generic feedback about promptness of service, cleanliness of facility, quality of care, etc.", picture: "img/home/hub_survey_general.png" },
            { title: "Daily Survey", subtext: "", picture: "url('/www/img/home/hub_survey_daily.png')" }
        ];
    }



    //Main Execution
    function initialize() {
        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#homePage')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(new HomeViewModel(), element);

    }
});

$(document).on('pageshow', '#homePage', function (data) {

 $("#globalmenu_myhospital").hover(
  function () {
      $('#globalmenu_myhospital').css("background-color", "#000000");
  }, function () {
      if (myhospitalexpand == 0) {
          $('#globalmenu_myhospital').css("background-color", "#156c8a");
      }
  }
);
 $("#globalmenu_cafe").hover(
function () {
    $('#globalmenu_cafe').css("background-color", "#000000");
}, function () {
    if (globalaccessentertainment_expand == 0) {
        $('#globalmenu_cafe').css("background-color", "#156c8a");
    }
}
);
 
 $("#globalmenu_mypatientsurveys").hover(
function () {
    $('#globalmenu_mypatientsurveys').css("background-color", "#000000");
}, function () {
    if (globalaccessentertainment_expand == 0) {
        $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
    }
}
);
 $('#globalmenu_myhospital').unbind().on('click', function () {
     if (globalaccessentertainment_expand == 1) {
         $('#globalmenucg_shoppingmall').fadeOut();
         $('#globalmenucg_cafengift').fadeOut();
         $('#globalmenucg_restaurant').fadeOut();
         $('#globalmenu_cafe').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         globalaccessentertainment_expand = 0;
         // $("#globalmenu_background").css("opacity", "0.8");
     }
     if (globalsurvey_expand == 1) {
         $('#globalmenus_generalsurveys').fadeOut();
         $('#globalmenus_dailysurveys').fadeOut();
         $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         globalsurvey_expand = 0;
         // $("#globalmenu_background").css("opacity", "0.8");
     }
        if (myhospitalexpand == 0) {
            $('#globalmenumh_newsfeed').fadeIn();
            $('#globalmenumh_video').fadeIn();
            $('#globalmenumh_hospitalmap').fadeIn();
            $('#globalmenu_myhospital').css("background-color", "#000000");
            $("#globalmenu_background").css("opacity", "0.8");
            myhospitalexpand = 1;
        }
       else if (myhospitalexpand == 1) {
            $('#globalmenumh_newsfeed').fadeOut();
            $('#globalmenumh_video').fadeOut();
            $('#globalmenumh_hospitalmap').fadeOut();
            $('#globalmenu_myhospital').css("background-color", "#156c8a");
            $("#globalmenu_background").css("opacity", "0.6");
            myhospitalexpand = 0;
       }
    });
 $('#globalmenu_cafe').unbind().on('click', function () {
     if (myhospitalexpand == 1) {
         $('#globalmenumh_newsfeed').fadeOut();
         $('#globalmenumh_video').fadeOut();
         $('#globalmenumh_hospitalmap').fadeOut();
         $('#globalmenu_myhospital').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         myhospitalexpand = 0;
     }
     if (globalsurvey_expand == 1) {
         $('#globalmenus_generalsurveys').fadeOut();
         $('#globalmenus_dailysurveys').fadeOut();
         $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         globalsurvey_expand = 0;
         // $("#globalmenu_background").css("opacity", "0.8");
     }
        if (globalaccessentertainment_expand == 0) {
            $('#globalmenucg_shoppingmall').fadeIn();
            $('#globalmenucg_cafengift').fadeIn();
            $('#globalmenucg_restaurant').fadeIn();
            $('#globalmenu_cafe').css("background-color", "#000000");
            $("#globalmenu_background").css("opacity", "0.8");
            globalaccessentertainment_expand = 1;
            // $("#globalmenu_background").css("opacity", "0.8");
        } else if (globalaccessentertainment_expand == 1) {
            $('#globalmenucg_shoppingmall').fadeOut();
            $('#globalmenucg_cafengift').fadeOut();
            $('#globalmenucg_restaurant').fadeOut();
            $('#globalmenu_cafe').css("background-color", "#156c8a");
            $("#globalmenu_background").css("opacity", "0.6");
            globalaccessentertainment_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
 });
 $('#globalmenu_mypatientsurveys').unbind().on('click', function () {
     if (myhospitalexpand == 1) {
         $('#globalmenumh_newsfeed').fadeOut();
         $('#globalmenumh_video').fadeOut();
         $('#globalmenumh_hospitalmap').fadeOut();
         $('#globalmenu_myhospital').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         myhospitalexpand = 0;

     }
     if (globalaccessentertainment_expand == 1) {
         $('#globalmenucg_shoppingmall').fadeOut();
         $('#globalmenucg_cafengift').fadeOut();
         $('#globalmenucg_restaurant').fadeOut();
         $('#globalmenu_cafe').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         globalaccessentertainment_expand = 0;
         // $("#globalmenu_background").css("opacity", "0.8");
     }
     if (globalsurvey_expand == 0) {
         $('#globalmenus_generalsurveys').fadeIn();
         $('#globalmenus_dailysurveys').fadeIn();
         
         $('#globalmenu_mypatientsurveys').css("background-color", "#000000");
         $("#globalmenu_background").css("opacity", "0.8");
         globalsurvey_expand = 1;
         // $("#globalmenu_background").css("opacity", "0.8");
     } else if (globalsurvey_expand == 1) {
         $('#globalmenus_generalsurveys').fadeOut();
         $('#globalmenus_dailysurveys').fadeOut();
         
         $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
         $("#globalmenu_background").css("opacity", "0.6");
         globalsurvey_expand = 0;
         // $("#globalmenu_background").css("opacity", "0.8");
     }
 });
    $("#globalmenu_background").on('click', function () {
        if (globalmenu_visible == 0) {
            if (myhospitalexpand == 1) {
                $('#globalmenumh_newsfeed').fadeOut();
                $('#globalmenumh_video').fadeOut();
                $('#globalmenumh_hospitalmap').fadeOut();
                $('#globalmenu_myhospital').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                myhospitalexpand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (globalaccessentertainment_expand == 1) {
                $('#globalmenucg_shoppingmall').fadeOut();
                $('#globalmenucg_cafengift').fadeOut();
                $('#globalmenucg_restaurant').fadeOut();
                $('#globalmenu_cafe').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                globalaccessentertainment_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (globalsurvey_expand == 1) {
                $('#globalmenus_generalsurveys').fadeOut();
                $('#globalmenus_dailysurveys').fadeOut();

                $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                globalsurvey_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            $("#globalmenu").width('84px');
            $("#globalmenu").height('51px');
            $("#globalmenu").css('margin-top', '-46px');
            $("#globalmenu").css('margin-left', '454px');
            $("#globalmenu_background").fadeOut();
            $('#globalmenu_mydaySchedule').fadeOut();
            $('#globalmenu_mycareteam').fadeOut();
            $('#globalmenu_myclinicalDashboard').fadeOut();
            $('#globalmenu_cafe').fadeOut();
            $('#globalmenu_myhospital').fadeOut();
            $('#globalmenu_mypatientsurveys').fadeOut();

            $('#globalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            globalmenu_visible = 1;

        }
    });
    $("#globalmenu").unbind().on('click',function () {
        if (globalmenu_visible == 0) {
            if (myhospitalexpand == 1) {
                $('#globalmenumh_newsfeed').fadeOut();
                $('#globalmenumh_videos').fadeOut();
                $('#globalmenumh_hospitalmap').fadeOut();
                $('#globalmenu_myhospital').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                myhospitalexpand = 0;
            }
            if (globalaccessentertainment_expand == 1) {
                $('#globalmenucg_shoppingmall').fadeOut();
                $('#globalmenucg_cafengift').fadeOut();
                $('#globalmenucg_restaurant').fadeOut();
                $('#globalmenu_cafe').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                globalaccessentertainment_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (globalsurvey_expand == 1) {
                $('#globalmenus_generalsurveys').fadeOut();
                $('#globalmenus_dailysurveys').fadeOut();

                $('#globalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#globalmenu_background").css("opacity", "0.6");
                globalsurvey_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            $("#globalmenu").width('84px');
            $("#globalmenu").height('51px');
            $("#globalmenu").css('margin-top', '-46px');
            $("#globalmenu").css('margin-left', '454px');
            $("#globalmenu_background").fadeOut();
            $('#globalmenu_mydaySchedule').fadeOut();
            $('#globalmenu_mycareteam').fadeOut();
            $('#globalmenu_myclinicalDashboard').fadeOut();
            $('#globalmenu_cafe').fadeOut();
            $('#globalmenu_myhospital').fadeOut();
            $('#globalmenu_mypatientsurveys').fadeOut();

            $('#globalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            globalmenu_visible = 1;
        }
        else if (globalmenu_visible == 1) {
            $("#globalmenu").width('122px');
            $("#globalmenu").height('72px');
            $("#globalmenu").css('margin-top', '-65px');
            $("#globalmenu").css('margin-left', '435px');
            $("#globalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#globalmenu_mydaySchedule').fadeIn();
            $('#globalmenu_mycareteam').fadeIn();
            $('#globalmenu_myclinicalDashboard').fadeIn();
            $('#globalmenu_cafe').fadeIn();
            $('#globalmenu_myhospital').fadeIn();
            $('#globalmenu_mypatientsurveys').fadeIn();

            $('#globalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            globalmenu_visible = 0;
        }
    });

    console.log("Debuuging here");
    console.log("Current:" + $.mobile.navigate.history.getActive().url);
    console.log("Stack: (active index = " + $.mobile.navigate.history.activeIndex + " -previous index: " + $.mobile.navigate.history.previousIndex + " )");
    $.each($.mobile.navigate.history.stack, function (index, val) {
        console.log(index + "-" + val.url);
    });

    //Call the page expiration
    gettimerexpiryvalue();

    //Timeout function for session expiration

    var idleTime = 0;
    var inactiveduration = 0;
    function gettimerexpiryvalue() {
        $.get('../inactivetimerduration.txt', function (data) {
            inactiveduration = data;
        }).then(function timerIncrement() {

            idleTime = idleTime + 1;
            if (idleTime > inactiveduration) { //1 minute

                //Comments on timeout
                sessionStorage.setItem("sessionExpired", "Your session has expired. Please login again");

                //navigate back
                clearTimeout(datetimeinterval);
                clearTimeout(bgChangeInterval);
                clearTimeout(idleInterval);
                //navigate here

                idleTime = 0;
                window.history.back();
            }
            idleInterval = setTimeout(timerIncrement, 1000);
        });
    }

    //zero the idle timer on mouse movement.
    $(this).on('mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove click', function () { idleTime = 0; })


    //Background images change for the hub

    var bg_img1 = "img/home/bg_1.jpg";
    var bg_img2 = "img/home/bg_2.jpg";
    var bg_img3 = "img/home/bg_3.jpg";
    var bg_img4 = "img/home/bg_4.jpg";
    var bg_img5 = "img/home/bg_5.jpg";


    var bgvalue = 0;
    changeBackground();
    function changeBackground() {
        if (bgvalue == 0) {

            bgvalue = bgvalue + 1;
        }
        else if (bgvalue == 1) {
            $(".changesrc").stop().fadeOut(400, function () {
                this.src = bg_img2;
                this.onload = function () {           // make sure img is loaded
                    $(this).fadeIn(400);             // fadeIn
                };
            });
            bgvalue = bgvalue + 1;
        }
        else if (bgvalue == 2) {
            $(".changesrc").stop().fadeOut(400, function () {
                this.src = bg_img3;
                this.onload = function () {           // make sure img is loaded
                    $(this).fadeIn(400);             // fadeIn
                };
            });
            bgvalue = bgvalue + 1;
        }
        else if (bgvalue == 3) {
            $(".changesrc").stop().fadeOut(400, function () {
                this.src = bg_img4;
                this.onload = function () {           // make sure img is loaded
                    $(this).fadeIn(400);             // fadeIn
                };
            });
            bgvalue = bgvalue + 1;
        }
        else if (bgvalue == 4) {
            $(".changesrc").stop().fadeOut(400, function () {
                this.src = bg_img5;
                this.onload = function () {           // make sure img is loaded
                    $(this).fadeIn(400);             // fadeIn
                };
            });
            bgvalue = bgvalue + 1;
        }
        else if (bgvalue >= 5) {

            bgvalue = 1;
            $(".changesrc").stop().fadeOut(400, function () {
                this.src = bg_img1;
                this.onload = function () {           // make sure img is loaded
                    $(this).fadeIn(400);             // fadeIn
                };
            });
        }

        bgChangeInterval = setTimeout(changeBackground, 15000);

    }

    // alert(window.location.href);
    console.log("Page show event of homepage");


    //Calling the date and time function
    hometimerIncrement();
    getDateTime();
    function hometimerIncrement() {

        //calling the date and time function
        var resultContainer = document.getElementById('weatherdetailsinfo');
        var weathericonholder = document.getElementById('weather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('locationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#weather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(hometimerIncrement, 1000);
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
        var dateTime =day + ', '+ hour + ':' + minute + ' ' + median;
        var dateformat = month + ' ' + date;
        //Comments on timer
        var datetimetext = document.getElementById("resultContainertime");
        var dateformattext = document.getElementById("resultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }


});

