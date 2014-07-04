var patientsurveysViewModelDetails;
var patientsurveysdatetimeinterval;
var idleIntervaldatetimeweather;
var patientsurveysglobalmenu_visible = 1;

var patientsurveysexpand = 0;
var patientsurveysglobalaccessentertainment_expand = 0;
var patientsurveysglobalsurvey_expand = 0;
$(document).on("pagehide", "#patientsurveys", function (event) {

    if (patientsurveysglobalmenu_visible == 0) {
        if (patientsurveysexpand == 1) {
            $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
            $('#patientsurveysglobalmenumh_video').fadeOut();
            $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (patientsurveysglobalaccessentertainment_expand == 1) {
            $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
            $('#patientsurveysglobalmenucg_cafengift').fadeOut();
            $('#patientsurveysglobalmenucg_restaurant').fadeOut();
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalaccessentertainment_expand = 0;

        }
        if (patientsurveysglobalsurvey_expand == 1) {
            $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
            $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalsurvey_expand = 0;
        }
        $("#patientsurveysglobalmenu").width('84px');
        $("#patientsurveysglobalmenu").height('51px');
        $("#patientsurveysglobalmenu").css('margin-top', '-46px');
        $("#patientsurveysglobalmenu").css('margin-left', '454px');
        $("#patientsurveysglobalmenu_background").fadeOut();
        $('#patientsurveysglobalmenu_mydaySchedule').fadeOut();
        $('#patientsurveysglobalmenu_mycareteam').fadeOut();
        $('#patientsurveysglobalmenu_myclinicalDashboard').fadeOut();
        $('#patientsurveysglobalmenu_cafe').fadeOut();
        $('#patientsurveysglobalmenu_myhospital').fadeOut();
        $('#patientsurveysglobalmenu_mypatientsurveys').fadeOut();

        $('#patientsurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        patientsurveysglobalmenu_visible = 1;

    }
    clearTimeout(patientsurveysdatetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);

});
$(document).on("pagebeforeshow", "#patientsurveys", function (event) {
   
        if (!(sessionStorage.getItem("category1progress") == null)) {
            patientsurveysViewModelDetails.viewModel.patientsurveys_data()[0].progressvalue(sessionStorage.getItem("category1progress"));
            $('.dial1')
    .val(patientsurveysViewModelDetails.viewModel.patientsurveys_data()[0].progressvalue())
    .trigger('change');
        }
    if (!(sessionStorage.getItem("category2progress") == null)) {
        patientsurveysViewModelDetails.viewModel.patientsurveys_data()[1].progressvalue(sessionStorage.getItem("category2progress"));
        $('.dial2')
    .val(patientsurveysViewModelDetails.viewModel.patientsurveys_data()[1].progressvalue())
    .trigger('change');
    }
    if (!(sessionStorage.getItem("category3progress") == null)) {
        patientsurveysViewModelDetails.viewModel.patientsurveys_data()[2].progressvalue(sessionStorage.getItem("category3progress"));
        $('.dial3')
    .val(patientsurveysViewModelDetails.viewModel.patientsurveys_data()[2].progressvalue())
    .trigger('change');
    }
    if (!(sessionStorage.getItem("category4progress") == null)) {
        patientsurveysViewModelDetails.viewModel.patientsurveys_data()[3].progressvalue(sessionStorage.getItem("category4progress"));
        $('.dial4')
    .val(patientsurveysViewModelDetails.viewModel.patientsurveys_data()[3].progressvalue())
    .trigger('change');
    }
    if (!(sessionStorage.getItem("category5progress") == null)) {
        patientsurveysViewModelDetails.viewModel.patientsurveys_data()[4].progressvalue(sessionStorage.getItem("category5progress"));
        $('.dial5')
    .val(patientsurveysViewModelDetails.viewModel.patientsurveys_data()[4].progressvalue())
    .trigger('change');
    }


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


    //Loader 3 dial value
    $(function () {
        $(".dial3").knob(


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


        $('.dial3').trigger(
        'configure',
    {

        "fgColor": "#ff567e",
        "skin": "tron",
        'width': 112,
        'height': 112,

    }
    );
    });

    //Loader 4 dial value
    $(function () {
        $(".dial4").knob(


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


        $('.dial4').trigger(
        'configure',
    {

        "fgColor": "#ff567e",
        "skin": "tron",
        'width': 112,
        'height': 112,

    }
    );
    });

    //Loader 5 dial value
    $(function () {
        $(".dial5").knob(


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


        $('.dial5').trigger(
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
$(document).on("pageinit", "#patientsurveys", function (event) {
    function patientSurveysViewModel() {
        var self = this;
        self.patientsurveys_data = ko.observableArray([
            { picture: "url('/www/img/patientsurveys/img_1.png')", title: "Health Plan Status", progressvalue: ko.observable("0"),category:"1" },
            { picture: "url('/www/img/patientsurveys/img_5.png')", title: "Hospital Infrastructure", progressvalue: ko.observable("0"), category: "2" },
            { picture: "url('/www/img/patientsurveys/img_2.png')", title: "Patient Satisfaction Survey", progressvalue: ko.observable("0"), category: "3" },
            { picture: "url('/www/img/patientsurveys/img_3.png')", title: "Care Givers Satisfaction Survey", progressvalue: ko.observable("0"), category: "4" },
            { picture: "url('/www/img/patientsurveys/img_4.png')", title: "Physical Health Survey", progressvalue: ko.observable("0"), category: "5" }
        ]);
        self.patientsurveyclick = function () {
            sessionStorage.setItem("category", this.category);
            $.mobile.pageContainer.pagecontainer("change", $("#patientsurvey_details"));
        }
    }
    
    patientsurveysViewModelDetails = { viewModel: new patientSurveysViewModel() };
    function initialize() {
        console.log("restaurant Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#patientsurveys_content')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(patientsurveysViewModelDetails.viewModel, element);

    }

    initialize();

});
$(document).on("pageshow", "#patientsurveys", function (event) {
    $("#patientsurveysglobalmenu_myhospital").hover(
  function () {
      $('#patientsurveysglobalmenu_myhospital').css("background-color", "#000000");
  }, function () {
      if (patientsurveysexpand == 0) {
          $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
      }
  }
);
    $("#patientsurveysglobalmenu_cafe").hover(
    function () {
        $('#patientsurveysglobalmenu_cafe').css("background-color", "#000000");
    }, function () {
        if (patientsurveysglobalaccessentertainment_expand == 0) {
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
        }
    }
    );

    $("#patientsurveysglobalmenu_mypatientsurveys").hover(
   function () {
       $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (patientsurveysglobalaccessentertainment_expand == 0) {
           $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#patientsurveysglobalmenu_myhospital').unbind().on('click', function () {
        if (patientsurveysglobalaccessentertainment_expand == 1) {
            $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
            $('#patientsurveysglobalmenucg_cafengift').fadeOut();
            $('#patientsurveysglobalmenucg_restaurant').fadeOut();
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalaccessentertainment_expand = 0;

        }
        if (patientsurveysglobalsurvey_expand == 1) {
            $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
            $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalsurvey_expand = 0;
        }
        if (patientsurveysexpand == 0) {
            $('#patientsurveysglobalmenumh_newsfeed').fadeIn();
            $('#patientsurveysglobalmenumh_video').fadeIn();
            $('#patientsurveysglobalmenumh_hospitalmap').fadeIn();
            $('#patientsurveysglobalmenu_myhospital').css("background-color", "#000000");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.8");
            patientsurveysexpand = 1;
        }
        else if (patientsurveysexpand == 1) {
            $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
            $('#patientsurveysglobalmenumh_video').fadeOut();
            $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysexpand = 0;
        }

    });
    $('#patientsurveysglobalmenu_cafe').unbind().on('click', function () {
        if (patientsurveysexpand == 1) {
            $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
            $('#patientsurveysglobalmenumh_video').fadeOut();
            $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysexpand = 0;
        }
        if (patientsurveysglobalsurvey_expand == 1) {
            $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
            $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalsurvey_expand = 0;
        }
        if (patientsurveysglobalaccessentertainment_expand == 0) {
            $('#patientsurveysglobalmenucg_shoppingmall').fadeIn();
            $('#patientsurveysglobalmenucg_cafengift').fadeIn();
            $('#patientsurveysglobalmenucg_restaurant').fadeIn();
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#000000");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.8");
            patientsurveysglobalaccessentertainment_expand = 1;
        }
        else if (patientsurveysglobalaccessentertainment_expand == 1) {
            $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
            $('#patientsurveysglobalmenucg_cafengift').fadeOut();
            $('#patientsurveysglobalmenucg_restaurant').fadeOut();
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalaccessentertainment_expand = 0;
        }
    });
    $('#patientsurveysglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (patientsurveysglobalaccessentertainment_expand == 1) {
            $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
            $('#patientsurveysglobalmenucg_cafengift').fadeOut();
            $('#patientsurveysglobalmenucg_restaurant').fadeOut();
            $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalaccessentertainment_expand = 0;
        }

        if (patientsurveysexpand == 1) {
            $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
            $('#patientsurveysglobalmenumh_video').fadeOut();
            $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysexpand = 0;
        }
        if (patientsurveysglobalsurvey_expand == 0) {
            $('#patientsurveysglobalmenus_generalsurveys').fadeIn();
            $('#patientsurveysglobalmenus_dailysurveys').fadeIn();
            $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.8");
            patientsurveysglobalsurvey_expand = 1;
        }
        else if (patientsurveysglobalsurvey_expand == 1) {
            $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
            $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
            patientsurveysglobalsurvey_expand = 0;
        }


    });

    $("#patientsurveysglobalmenu_background").on('click', function () {
        if (patientsurveysglobalmenu_visible == 0) {
            if (patientsurveysexpand == 1) {
                $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
                $('#patientsurveysglobalmenumh_video').fadeOut();
                $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
                $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                patientsurveysexpand = 0;
                // $("#patientsurveysglobalmenu_background").css("opacity", "0.8");
            }
            if (patientsurveysglobalaccessentertainment_expand == 1) {
                $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
                $('#patientsurveysglobalmenucg_cafengift').fadeOut();
                $('#patientsurveysglobalmenucg_restaurant').fadeOut();
                $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
                $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                patientsurveysglobalaccessentertainment_expand = 0;

            }
            if (patientsurveysglobalsurvey_expand == 1) {
                $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
                $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
                $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                patientsurveysglobalsurvey_expand = 0;
            }
            $("#patientsurveysglobalmenu").width('84px');
            $("#patientsurveysglobalmenu").height('51px');
            $("#patientsurveysglobalmenu").css('margin-top', '-46px');
            $("#patientsurveysglobalmenu").css('margin-left', '454px');
            $("#patientsurveysglobalmenu_background").fadeOut();
            $('#patientsurveysglobalmenu_mydaySchedule').fadeOut();
            $('#patientsurveysglobalmenu_mycareteam').fadeOut();
            $('#patientsurveysglobalmenu_myclinicalDashboard').fadeOut();
            $('#patientsurveysglobalmenu_cafe').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').fadeOut();

            $('#patientsurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            patientsurveysglobalmenu_visible = 1;

        }
    });
    $("#patientsurveysglobalmenu").unbind().on('click', function () {
        if (patientsurveysglobalmenu_visible == 0) {
            if (patientsurveysexpand == 1) {
                $('#patientsurveysglobalmenumh_newsfeed').fadeOut();
                $('#patientsurveysglobalmenumh_video').fadeOut();
                $('#patientsurveysglobalmenumh_hospitalmap').fadeOut();
                $('#patientsurveysglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                patientsurveysexpand = 0;
            }
            if (patientsurveysglobalaccessentertainment_expand == 1) {
                    $('#patientsurveysglobalmenucg_shoppingmall').fadeOut();
                    $('#patientsurveysglobalmenucg_cafengift').fadeOut();
                    $('#patientsurveysglobalmenucg_restaurant').fadeOut();
                    $('#patientsurveysglobalmenu_cafe').css("background-color", "#156c8a");
                    $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                    patientsurveysglobalaccessentertainment_expand = 0;

                }
                if (patientsurveysglobalsurvey_expand == 1) {
                    $('#patientsurveysglobalmenus_generalsurveys').fadeOut();
                    $('#patientsurveysglobalmenus_dailysurveys').fadeOut();
                    $('#patientsurveysglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                    $("#patientsurveysglobalmenu_background").css("opacity", "0.6");
                    patientsurveysglobalsurvey_expand = 0;
                }
            
            $("#patientsurveysglobalmenu").width('84px');
            $("#patientsurveysglobalmenu").height('51px');
            $("#patientsurveysglobalmenu").css('margin-top', '-46px');
            $("#patientsurveysglobalmenu").css('margin-left', '454px');
            $("#patientsurveysglobalmenu_background").fadeOut();
            $('#patientsurveysglobalmenu_mydaySchedule').fadeOut();
            $('#patientsurveysglobalmenu_mycareteam').fadeOut();
            $('#patientsurveysglobalmenu_myclinicalDashboard').fadeOut();
            $('#patientsurveysglobalmenu_cafe').fadeOut();
            $('#patientsurveysglobalmenu_myhospital').fadeOut();
            $('#patientsurveysglobalmenu_mypatientsurveys').fadeOut();

            $('#patientsurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            patientsurveysglobalmenu_visible = 1;
        }
        else if (patientsurveysglobalmenu_visible == 1) {
            $("#patientsurveysglobalmenu").width('122px');
            $("#patientsurveysglobalmenu").height('72px');
            $("#patientsurveysglobalmenu").css('margin-top', '-65px');
            $("#patientsurveysglobalmenu").css('margin-left', '435px');
            $("#patientsurveysglobalmenu_background").fadeIn();
            // $("#patientsurveysglobalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#patientsurveysglobalmenu_mydaySchedule').fadeIn();
            $('#patientsurveysglobalmenu_mycareteam').fadeIn();
            $('#patientsurveysglobalmenu_myclinicalDashboard').fadeIn();
            $('#patientsurveysglobalmenu_cafe').fadeIn();
            $('#patientsurveysglobalmenu_myhospital').fadeIn();
            $('#patientsurveysglobalmenu_mypatientsurveys').fadeIn();

            $('#patientsurveysglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            patientsurveysglobalmenu_visible = 0;
        }
    });
  
    //Calling the date and time function


    patientsurveystimerIncrement();
    getDateTime();
    function patientsurveystimerIncrement() {


        //calling the date and time function

        var resultContainer = document.getElementById('patientsurveysweatherdetailsinfo');
        var weathericonholder = document.getElementById('patientsurveysweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('patientsurveyslocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#patientsurveysweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(patientsurveystimerIncrement, 1000);
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
        var datetimetext = document.getElementById("patientsurveysresultContainertime");
        var dateformattext = document.getElementById("patientsurveysresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        patientsurveysdatetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
    
});





