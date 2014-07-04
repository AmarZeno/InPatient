var healthnewsViewModelDetails;
var healthnewsdatetimeinterval;
var idleIntervaldatetimeweather;
var healthnewsglobalmenu_visible = 1;
var myhospitalexpand = 0;
var healthnewsexpand = 0;
var healthnewsglobalaccessentertainment_expand = 0;
var healthnewsglobalsurvey_expand = 0;
$(document).on("pagehide", "#healthnewsPage", function (event) {
    if (healthnewsglobalmenu_visible == 0) {
        if (healthnewsexpand == 1) {
            $('#healthnewsglobalmenumh_newsfeed').fadeOut();
            $('#healthnewsglobalmenumh_video').fadeOut();
            $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
            $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (healthnewsglobalaccessentertainment_expand == 1) {
            $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
            $('#healthnewsglobalmenucg_cafengift').fadeOut();
            $('#healthnewsglobalmenucg_restaurant').fadeOut();
            $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalaccessentertainment_expand = 0;

        }
        if (healthnewsglobalsurvey_expand == 1) {
            $('#healthnewsglobalmenus_generalsurveys').fadeOut();
            $('#healthnewsglobalmenus_dailysurveys').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalsurvey_expand = 0;
        }
        $("#healthnewsglobalmenu").width('84px');
        $("#healthnewsglobalmenu").height('51px');
        $("#healthnewsglobalmenu").css('margin-top', '-46px');
        $("#healthnewsglobalmenu").css('margin-left', '454px');
        $("#healthnewsglobalmenu_background").fadeOut();
        $('#healthnewsglobalmenu_mydaySchedule').fadeOut();
        $('#healthnewsglobalmenu_mycareteam').fadeOut();
        $('#healthnewsglobalmenu_myclinicalDashboard').fadeOut();
        $('#healthnewsglobalmenu_cafe').fadeOut();
        $('#healthnewsglobalmenu_myhospital').fadeOut();
        $('#healthnewsglobalmenu_mypatientsurveys').fadeOut();

        $('#healthnewsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        healthnewsglobalmenu_visible = 1;

    }

    clearTimeout(healthnewsdatetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);



});

$(document).on("pageinit", "#healthnewsPage", function (event) {
//Event for pulling rss feeds
    var rssdataarr = [];
    var rssurl="http://www.flagstaffmedicalcenter.com/NewsAndEvents/?Output=RSS";
    $.get(rssurl, function (data) {
        var $xml = $(data);
        $xml.find("item").each(function () {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    pubDate: $this.find("pubDate").text(),
                    description:$this.find("description").text()
                }
            rssdataarr.push(item);
            //Do something with item here...
        });
        healthnewsViewModelDetails.viewModel.healthnews_data(rssdataarr);
        $('#healthnews_loader').fadeOut();
        $('#healthnews_listview').fadeIn();
    });


    function healthNewsViewModel() {
        var self = this;
        self.healthnews_data = ko.observableArray([
            { title: "", description: "", link: "", pubDate: "" }
      ]);
    }

    healthnewsViewModelDetails = { viewModel: new healthNewsViewModel() };
        function initialize() {
            console.log("restaurant Knockout activated");
            // Activates knockout.js

            // get the DOM element
            var element = $('#healthnews_maindiv')[0];
            //call clean node, kind of unbind

            //  ko.cleanNode(element);

            //apply the binding again 
            ko.applyBindings(healthnewsViewModelDetails.viewModel, element);

        }

        initialize();
    
});

$(document).on('pageshow', "#healthnewsPage", function (data) {
    
    $("#healthnewsglobalmenu_myhospital").hover(
  function () {
      $('#healthnewsglobalmenu_myhospital').css("background-color", "#000000");
  }, function () {
      if (myhospitalexpand == 0) {
          $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
      }
  }
);
    $("#healthnewsglobalmenu_cafe").hover(
      function () {
          $('#healthnewsglobalmenu_cafe').css("background-color", "#000000");
      }, function () {
          if (healthnewsglobalaccessentertainment_expand == 0) {
              $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
          }
      }
      );

    $("#healthnewsglobalmenu_mypatientsurveys").hover(
   function () {
       $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (healthnewsglobalaccessentertainment_expand == 0) {
           $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#healthnewsglobalmenu_myhospital').unbind().on('click', function () {
        if (healthnewsglobalaccessentertainment_expand == 1) {
            $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
            $('#healthnewsglobalmenucg_cafengift').fadeOut();
            $('#healthnewsglobalmenucg_restaurant').fadeOut();
            $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalaccessentertainment_expand = 0;

        }
        if (healthnewsglobalsurvey_expand == 1) {
            $('#healthnewsglobalmenus_generalsurveys').fadeOut();
            $('#healthnewsglobalmenus_dailysurveys').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalsurvey_expand = 0;
        }
        if (healthnewsexpand == 0) {
            $('#healthnewsglobalmenumh_newsfeed').fadeIn();
            $('#healthnewsglobalmenumh_video').fadeIn();
            $('#healthnewsglobalmenumh_hospitalmap').fadeIn();
            $('#healthnewsglobalmenu_myhospital').css("background-color", "#000000");
            $("#healthnewsglobalmenu_background").css("opacity", "0.8");
            healthnewsexpand = 1;
        }
        else if (healthnewsexpand == 1) {
            $('#healthnewsglobalmenumh_newsfeed').fadeOut();
            $('#healthnewsglobalmenumh_video').fadeOut();
            $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
            $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsexpand = 0;
        }

    });
    $('#healthnewsglobalmenu_cafe').unbind().on('click', function () {
        if (healthnewsexpand == 1) {
            $('#healthnewsglobalmenumh_newsfeed').fadeOut();
            $('#healthnewsglobalmenumh_video').fadeOut();
            $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
            $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsexpand = 0;
        }
        if (healthnewsglobalsurvey_expand == 1) {
            $('#healthnewsglobalmenus_generalsurveys').fadeOut();
            $('#healthnewsglobalmenus_dailysurveys').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalsurvey_expand = 1;
        }
        if (healthnewsglobalaccessentertainment_expand == 0) {
            $('#healthnewsglobalmenucg_shoppingmall').fadeIn();
            $('#healthnewsglobalmenucg_cafengift').fadeIn();
            $('#healthnewsglobalmenucg_restaurant').fadeIn();
            $('#healthnewsglobalmenu_cafe').css("background-color", "#000000");
            $("#healthnewsglobalmenu_background").css("opacity", "0.8");
            healthnewsglobalaccessentertainment_expand = 1;
        }
        else if (healthnewsglobalaccessentertainment_expand == 1) {
            $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
            $('#healthnewsglobalmenucg_cafengift').fadeOut();
            $('#healthnewsglobalmenucg_restaurant').fadeOut();
            $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalaccessentertainment_expand = 0;
        }
    });
    $('#healthnewsglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (healthnewsglobalaccessentertainment_expand == 1) {
            $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
            $('#healthnewsglobalmenucg_cafengift').fadeOut();
            $('#healthnewsglobalmenucg_restaurant').fadeOut();
            $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalaccessentertainment_expand = 0;
        }

        if (healthnewsexpand == 1) {
            $('#healthnewsglobalmenumh_newsfeed').fadeOut();
            $('#healthnewsglobalmenumh_video').fadeOut();
            $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
            $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsexpand = 0;
        }
        if (healthnewsglobalsurvey_expand == 0) {
            $('#healthnewsglobalmenus_generalsurveys').fadeIn();
            $('#healthnewsglobalmenus_dailysurveys').fadeIn();
            $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#healthnewsglobalmenu_background").css("opacity", "0.8");
            healthnewsglobalsurvey_expand = 1;
        }
        else if (healthnewsglobalsurvey_expand == 1) {
            $('#healthnewsglobalmenus_generalsurveys').fadeOut();
            $('#healthnewsglobalmenus_dailysurveys').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#healthnewsglobalmenu_background").css("opacity", "0.6");
            healthnewsglobalsurvey_expand = 0;
        }


    });

    $("#healthnewsglobalmenu_background").on('click', function () {
        if (healthnewsglobalmenu_visible == 0) {
            if (healthnewsexpand == 1) {
                $('#healthnewsglobalmenumh_newsfeed').fadeOut();
                $('#healthnewsglobalmenumh_video').fadeOut();
                $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
                $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                myhospitalexpand = 0;
                // $("#healthnewsglobalmenu_background").css("opacity", "0.8");
            }
            if (healthnewsglobalsurvey_expand == 1) {
                $('#healthnewsglobalmenus_generalsurveys').fadeOut();
                $('#healthnewsglobalmenus_dailysurveys').fadeOut();
                $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                healthnewsglobalsurvey_expand = 0;
            }
            if (healthnewsglobalaccessentertainment_expand == 1) {
                $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
                $('#healthnewsglobalmenucg_cafengift').fadeOut();
                $('#healthnewsglobalmenucg_restaurant').fadeOut();
                $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                healthnewsglobalaccessentertainment_expand = 0;
            }
            $("#healthnewsglobalmenu").width('84px');
            $("#healthnewsglobalmenu").height('51px');
            $("#healthnewsglobalmenu").css('margin-top', '-46px');
            $("#healthnewsglobalmenu").css('margin-left', '454px');
            $("#healthnewsglobalmenu_background").fadeOut();
            $('#healthnewsglobalmenu_mydaySchedule').fadeOut();
            $('#healthnewsglobalmenu_mycareteam').fadeOut();
            $('#healthnewsglobalmenu_myclinicalDashboard').fadeOut();
            $('#healthnewsglobalmenu_cafe').fadeOut();
            $('#healthnewsglobalmenu_myhospital').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').fadeOut();

            $('#healthnewsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            healthnewsglobalmenu_visible = 1;

        }
    });
    $("#healthnewsglobalmenu").unbind().on('click', function () {
        if (healthnewsglobalmenu_visible == 0) {
            if (myhospitalexpand == 1) {
                $('#healthnewsglobalmenumh_newsfeed').fadeOut();
                $('#healthnewsglobalmenumh_video').fadeOut();
                $('#healthnewsglobalmenumh_hospitalmap').fadeOut();
                $('#healthnewsglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                myhospitalexpand = 0;

            }
            if (healthnewsglobalsurvey_expand == 1) {
                $('#healthnewsglobalmenus_generalsurveys').fadeOut();
                $('#healthnewsglobalmenus_dailysurveys').fadeOut();
                $('#healthnewsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                healthnewsglobalsurvey_expand = 0;
            }
            if (healthnewsglobalaccessentertainment_expand == 1) {
                $('#healthnewsglobalmenucg_shoppingmall').fadeOut();
                $('#healthnewsglobalmenucg_cafengift').fadeOut();
                $('#healthnewsglobalmenucg_restaurant').fadeOut();
                $('#healthnewsglobalmenu_cafe').css("background-color", "#156c8a");
                $("#healthnewsglobalmenu_background").css("opacity", "0.6");
                healthnewsglobalaccessentertainment_expand = 0;
            }
            $("#healthnewsglobalmenu").width('84px');
            $("#healthnewsglobalmenu").height('51px');
            $("#healthnewsglobalmenu").css('margin-top', '-46px');
            $("#healthnewsglobalmenu").css('margin-left', '454px');
            $("#healthnewsglobalmenu_background").fadeOut();
            $('#healthnewsglobalmenu_mydaySchedule').fadeOut();
            $('#healthnewsglobalmenu_mycareteam').fadeOut();
            $('#healthnewsglobalmenu_myclinicalDashboard').fadeOut();
            $('#healthnewsglobalmenu_cafe').fadeOut();
            $('#healthnewsglobalmenu_myhospital').fadeOut();
            $('#healthnewsglobalmenu_mypatientsurveys').fadeOut();

            $('#healthnewsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            healthnewsglobalmenu_visible = 1;
        }
        else if (healthnewsglobalmenu_visible == 1) {
            $("#healthnewsglobalmenu").width('122px');
            $("#healthnewsglobalmenu").height('72px');
            $("#healthnewsglobalmenu").css('margin-top', '-65px');
            $("#healthnewsglobalmenu").css('margin-left', '435px');
            $("#healthnewsglobalmenu_background").fadeIn();
            // $("#healthnewsglobalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#healthnewsglobalmenu_mydaySchedule').fadeIn();
            $('#healthnewsglobalmenu_mycareteam').fadeIn();
            $('#healthnewsglobalmenu_myclinicalDashboard').fadeIn();
            $('#healthnewsglobalmenu_cafe').fadeIn();
            $('#healthnewsglobalmenu_myhospital').fadeIn();
            $('#healthnewsglobalmenu_mypatientsurveys').fadeIn();

            $('#healthnewsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            healthnewsglobalmenu_visible = 0;
        }
    });


    //Calling the date and time function


    hometimerIncrement();
    getDateTime();
    function hometimerIncrement() {


        //calling the date and time function

        var resultContainer = document.getElementById('healthnewsweatherdetailsinfo');
        var weathericonholder = document.getElementById('healthnewsweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('healthnewslocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#healthnewsweather_icon').css("background-image", weathericonholdercss);
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
        var dateTime = day + ', ' + hour + ':' + minute + ' ' + median;
        var dateformat = month + ' ' + date;
        //Comments on timer
        var datetimetext = document.getElementById("healthnewsresultContainertime");
        var dateformattext = document.getElementById("healthnewsresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        healthnewsdatetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
});