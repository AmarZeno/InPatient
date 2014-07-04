var shoppingmallexpanded = 0;
var datetimeinterval;
var idleIntervaldatetimeweather;
var shoppingmallcheckhour;
var shoppingmallViewModelDetails;
var shoppingmallexpand = 0;
var shoppingmallglobalmenu_visible = 1;
var shoppingmallglobalaccessentertainment_expand = 0;
var shoppingmallglobalsurvey_expand = 0;
$(document).on("pagehide", "#shoppingmallPage", function (event) {

    if (shoppingmallglobalmenu_visible == 0) {
        if (shoppingmallexpand == 1) {
            $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
            $('#shoppingmallglobalmenumh_video').fadeOut();
            $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (shoppingmallglobalaccessentertainment_expand == 1) {
            $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
            $('#shoppingmallglobalmenucg_cafengift').fadeOut();
            $('#shoppingmallglobalmenucg_restaurant').fadeOut();
            $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalaccessentertainment_expand = 0;

        }
        if (shoppingmallglobalsurvey_expand == 1) {
            $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
            $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalsurvey_expand = 0;
        }
        $("#shoppingmallglobalmenu").width('84px');
        $("#shoppingmallglobalmenu").height('51px');
        $("#shoppingmallglobalmenu").css('margin-top', '-46px');
        $("#shoppingmallglobalmenu").css('margin-left', '454px');
        $("#shoppingmallglobalmenu_background").fadeOut();
        $('#shoppingmallglobalmenu_mydaySchedule').fadeOut();
        $('#shoppingmallglobalmenu_mycareteam').fadeOut();
        $('#shoppingmallglobalmenu_myclinicalDashboard').fadeOut();
        $('#shoppingmallglobalmenu_cafe').fadeOut();
        $('#shoppingmallglobalmenu_myhospital').fadeOut();
        $('#shoppingmallglobalmenu_mypatientsurveys').fadeOut();

        $('#shoppingmallglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        shoppingmallglobalmenu_visible = 1;

    }
    if (shoppingmallexpanded == 1) {
        $('#shoppingmall_details').fadeOut('slow', function () {

            $('#shoppingmall_content').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {
                    shoppingmallexpanded = 0;
                }
            });

        });
    }

    clearTimeout(idleIntervaldatetimeweather);
    clearTimeout(datetimeinterval);
    clearTimeout(shoppingmallcheckhour);
});

$(document).on("pageinit", "#shoppingmallPage", function (event) {
    //knockout
    // Overall viewmodel for this screen, along with initial state
    function shoppingmallViewModel() {


        var self = this;
        self.shoppingmalldetail_data = ko.observableArray([
           { title: "", address: "", phone: "", website: "", displaytime: "", systemtime: "", opentime: "", closetime: "" ,map:"",link:""}
        ]);
        self.shoppingmalldetails_close = function () {
            if (shoppingmallexpanded == 1) {
            $('#shoppingmall_details').fadeOut('slow', function () {
                
                    $('#shoppingmall_content').animate({
                        marginLeft: '0px'
                    }, {
                        duration: 800,
                        specialEasing: {
                            marginLeft: 'swing'
                        },

                        complete: function () {
                            shoppingmallexpanded = 0;
                        }
                    });
                
            });
            }
        }
        self.shoppingmallclick = function () {
            if (shoppingmallexpanded == 0) {
                var a = this.closetime;
                var b = this.opentime;
                var c=this.systemtime;
                var mapimage="http://maps.googleapis.com/maps/api/staticmap?center="+this.lat+",%20"+this.long+"&zoom=13&size=410x196&maptype=roadmap&markers=color:blue%7Clabel:S%7C"+this.lat+",%20"+this.long;

                var mapimagecss = "url( " + mapimage + ")";
                shoppingmallViewModelDetails.viewModel.shoppingmalldetail_data([
                    { title: this.title, address: this.locationvalue, phone: this.phone, website: this.website, displaytime: this.displaytime, systemtime: this.systemtime, opentime: this.opentime, closetime: this.closetime,map:mapimagecss,link:this.link }

                ]);

                //Jquery UI - Moving the divs
                $('#shoppingmall_content').animate({
                    marginLeft: '572px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },

                    complete: function () {
                        $('#shoppingmall_details').fadeIn();
                        shoppingmallexpanded = 1;
                    }
                });
            }
        }

        self.shoppingmall_data = ko.observableArray([
            { picture: "url('/www/img/shoppingmall/Around US_Shopping_Manhattan Mall.png')", title: "Manhattan Mall", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "100 W. Broadway at 33rd New York , NY 10001", phone: "212-465-0500", website: "manhattanmallny.com", link: "http://www.manhattanmallny.com/index.aspx", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "", lat: "40.833553", long: "-74.00734" },
            { picture: "url('/www/img/shoppingmall/Around US_Shopping_Saks Fifth Avenue.png')", title: "Queens Center Mall", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "90-15 Queens Blvd Elmhurst, NY 11373", phone: "(718) 592-3900", website: "shopqueenscenter.com", link: "http://www.shopqueenscenter.com/", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "", lat: "40.734202", long: "-73.869766" },
            { picture: "url('/www/img/shoppingmall/Around US_Shopping_Limelight Shops.png')", title: "International Shopping Center", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "1221 Avenue of the Americas New York, NY, United States", phone: "+1 646-728-3800", website: "icsc.org", link: "http://www.icsc.org/", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "", lat: "40.7593339", long: "-74.0163508" },

        ]);

       
        
    }
    shoppingmallViewModelDetails = { viewModel: new shoppingmallViewModel() };
    //Main Execution
    function initialize() {
        console.log("shoppingmall Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#shoppingmall_inner')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(shoppingmallViewModelDetails.viewModel,element);

    }

    initialize();
});

$(document).on('pageshow', "#shoppingmallPage", function (data) {
    $("#shoppingmallglobalmenu_myhospital").hover(
 function () {
     $('#shoppingmallglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (shoppingmallexpand == 0) {
         $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#shoppingmallglobalmenu_cafe").hover(
      function () {
          $('#shoppingmallglobalmenu_cafe').css("background-color", "#000000");
      }, function () {
          if (shoppingmallglobalaccessentertainment_expand == 0) {
              $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
          }
      }
      );

    $("#shoppingmallglobalmenu_mypatientsurveys").hover(
   function () {
       $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (shoppingmallglobalaccessentertainment_expand == 0) {
           $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#shoppingmallglobalmenu_myhospital').unbind().on('click', function () {
        if (shoppingmallglobalaccessentertainment_expand == 1) {
            $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
            $('#shoppingmallglobalmenucg_cafengift').fadeOut();
            $('#shoppingmallglobalmenucg_restaurant').fadeOut();
            $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalaccessentertainment_expand = 0;

        }
        if (shoppingmallglobalsurvey_expand == 1) {
            $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
            $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalsurvey_expand = 0;
        }
        if (shoppingmallexpand == 0) {
            $('#shoppingmallglobalmenumh_newsfeed').fadeIn();
            $('#shoppingmallglobalmenumh_video').fadeIn();
            $('#shoppingmallglobalmenumh_hospitalmap').fadeIn();
            $('#shoppingmallglobalmenu_myhospital').css("background-color", "#000000");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.8");
            shoppingmallexpand = 1;
        }
        else if (shoppingmallexpand == 1) {
            $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
            $('#shoppingmallglobalmenumh_video').fadeOut();
            $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallexpand = 0;
        }

    });
    $('#shoppingmallglobalmenu_cafe').unbind().on('click', function () {
        if (shoppingmallexpand == 1) {
            $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
            $('#shoppingmallglobalmenumh_video').fadeOut();
            $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallexpand = 0;
        }
        if (shoppingmallglobalsurvey_expand == 1) {
            $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
            $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalsurvey_expand = 1;
        }
        if (shoppingmallglobalaccessentertainment_expand == 0) {
            $('#shoppingmallglobalmenucg_shoppingmall').fadeIn();
            $('#shoppingmallglobalmenucg_cafengift').fadeIn();
            $('#shoppingmallglobalmenucg_restaurant').fadeIn();
            $('#shoppingmallglobalmenu_cafe').css("background-color", "#000000");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.8");
            shoppingmallglobalaccessentertainment_expand = 1;
        }
        else if (shoppingmallglobalaccessentertainment_expand == 1) {
            $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
            $('#shoppingmallglobalmenucg_cafengift').fadeOut();
            $('#shoppingmallglobalmenucg_restaurant').fadeOut();
            $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalaccessentertainment_expand = 0;
        }
    });
    $('#shoppingmallglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (shoppingmallglobalaccessentertainment_expand == 1) {
            $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
            $('#shoppingmallglobalmenucg_cafengift').fadeOut();
            $('#shoppingmallglobalmenucg_restaurant').fadeOut();
            $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalaccessentertainment_expand = 0;
        }

        if (shoppingmallexpand == 1) {
            $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
            $('#shoppingmallglobalmenumh_video').fadeOut();
            $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallexpand = 0;
        }
        if (shoppingmallglobalsurvey_expand == 0) {
            $('#shoppingmallglobalmenus_generalsurveys').fadeIn();
            $('#shoppingmallglobalmenus_dailysurveys').fadeIn();
            $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.8");
            shoppingmallglobalsurvey_expand = 1;
        }
        else if (shoppingmallglobalsurvey_expand == 1) {
            $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
            $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
            shoppingmallglobalsurvey_expand = 0;
        }


    });
    $("#shoppingmallglobalmenu_background").on('click', function () {
        if (shoppingmallglobalmenu_visible == 0) {
            if (shoppingmallexpand == 1) {
                $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
                $('#shoppingmallglobalmenumh_video').fadeOut();
                $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
                $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallexpand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (shoppingmallglobalsurvey_expand == 1) {
                $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
                $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
                $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallglobalsurvey_expand = 0;
            }
            if (shoppingmallglobalaccessentertainment_expand == 1) {
                $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
                $('#shoppingmallglobalmenucg_cafengift').fadeOut();
                $('#shoppingmallglobalmenucg_restaurant').fadeOut();
                $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallglobalaccessentertainment_expand = 0;
            }
            $("#shoppingmallglobalmenu").width('84px');
            $("#shoppingmallglobalmenu").height('51px');
            $("#shoppingmallglobalmenu").css('margin-top', '-46px');
            $("#shoppingmallglobalmenu").css('margin-left', '454px');
            $("#shoppingmallglobalmenu_background").fadeOut();
            $('#shoppingmallglobalmenu_mydaySchedule').fadeOut();
            $('#shoppingmallglobalmenu_mycareteam').fadeOut();
            $('#shoppingmallglobalmenu_myclinicalDashboard').fadeOut();
            $('#shoppingmallglobalmenu_cafe').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').fadeOut();

            $('#shoppingmallglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            shoppingmallglobalmenu_visible = 1;

        }
    });
    $("#shoppingmallglobalmenu").unbind().on('click',function () {
        if (shoppingmallglobalmenu_visible == 0) {
            if (shoppingmallexpand == 1) {
                $('#shoppingmallglobalmenumh_newsfeed').fadeOut();
                $('#shoppingmallglobalmenumh_video').fadeOut();
                $('#shoppingmallglobalmenumh_hospitalmap').fadeOut();
                $('#shoppingmallglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallexpand = 0;

            }
            if (shoppingmallglobalsurvey_expand == 1) {
                $('#shoppingmallglobalmenus_generalsurveys').fadeOut();
                $('#shoppingmallglobalmenus_dailysurveys').fadeOut();
                $('#shoppingmallglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallglobalsurvey_expand = 0;
            }
            if (shoppingmallglobalaccessentertainment_expand == 1) {
                $('#shoppingmallglobalmenucg_shoppingmall').fadeOut();
                $('#shoppingmallglobalmenucg_cafengift').fadeOut();
                $('#shoppingmallglobalmenucg_restaurant').fadeOut();
                $('#shoppingmallglobalmenu_cafe').css("background-color", "#156c8a");
                $("#shoppingmallglobalmenu_background").css("opacity", "0.6");
                shoppingmallglobalaccessentertainment_expand = 0;
            }
            $("#shoppingmallglobalmenu").width('84px');
            $("#shoppingmallglobalmenu").height('51px');
            $("#shoppingmallglobalmenu").css('margin-top', '-46px');
            $("#shoppingmallglobalmenu").css('margin-left', '454px');
            $("#shoppingmallglobalmenu_background").fadeOut();
            $('#shoppingmallglobalmenu_mydaySchedule').fadeOut();
            $('#shoppingmallglobalmenu_mycareteam').fadeOut();
            $('#shoppingmallglobalmenu_myclinicalDashboard').fadeOut();
            $('#shoppingmallglobalmenu_cafe').fadeOut();
            $('#shoppingmallglobalmenu_myhospital').fadeOut();
            $('#shoppingmallglobalmenu_mypatientsurveys').fadeOut();

            $('#shoppingmallglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            shoppingmallglobalmenu_visible = 1;
        }
        else if (shoppingmallglobalmenu_visible == 1) {
            $("#shoppingmallglobalmenu").width('122px');
            $("#shoppingmallglobalmenu").height('72px');
            $("#shoppingmallglobalmenu").css('margin-top', '-65px');
            $("#shoppingmallglobalmenu").css('margin-left', '435px');
            $("#shoppingmallglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#shoppingmallglobalmenu_mydaySchedule').fadeIn();
            $('#shoppingmallglobalmenu_mycareteam').fadeIn();
            $('#shoppingmallglobalmenu_myclinicalDashboard').fadeIn();
            $('#shoppingmallglobalmenu_cafe').fadeIn();
            $('#shoppingmallglobalmenu_myhospital').fadeIn();
            $('#shoppingmallglobalmenu_mypatientsurveys').fadeIn();

            $('#shoppingmallglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            shoppingmallglobalmenu_visible = 0;
        }
    });


    //Check time and update system time
    function shoppingmallcheckHour() {
        var now = new Date();
        var hour = now.getHours();

        var secondsBeforeNextCheck = 3600 - now.getMinutes() * 60 - now.getSeconds() + 1;

        if (hour.toString().length == 1) {
            var hour = '0' + hour;
        }

       

        shoppingmallViewModelDetails.viewModel.shoppingmall_data([
       { picture: "url('/www/img/shoppingmall/Around US_Shopping_Manhattan Mall.png')", title: "Manhattan Mall", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "100 W. Broadway at 33rd New York , NY 10001", phone: "212-465-0500", website: "manhattanmallny.com", link: "http://www.manhattanmallny.com/index.aspx", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: ""+hour+"", lat: "40.833553", long: "-74.00734" },
            { picture: "url('/www/img/shoppingmall/Around US_Shopping_Saks Fifth Avenue.png')", title: "Queens Center Mall", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "90-15 Queens Blvd Elmhurst, NY 11373", phone: "(718) 592-3900", website: "shopqueenscenter.com", link: "http://www.shopqueenscenter.com/", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "" + hour + "", lat: "40.734202", long: "-73.869766" },
            { picture: "url('/www/img/shoppingmall/Around US_Shopping_Limelight Shops.png')", title: "International Shopping Center", star1: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star2: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star3: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star4: "url(/www/img/shoppingmall/new_screens_star icon_clicked.png)", star5: "url(/www/img/shoppingmall/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/shoppingmall/Around-Us-Restaurent-address.png)", locationvalue: "1221 Avenue of the Americas New York, NY, United States", phone: "+1 646-728-3800", website: "icsc.org", link: "http://www.icsc.org/", opentime: "10", closetime: "22", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "" + hour + "", lat: "40.7593339", long: "-74.0163508" },
        ]);
        shoppingmallcheckhour=setTimeout(shoppingmallcheckHour, secondsBeforeNextCheck * 1000);
    }

    shoppingmallcheckHour();





    //Calling the date and time function

    shoppingmalltimerIncrement();
    //calling the date and time function
    getDateTime();
    function shoppingmalltimerIncrement() {

        var resultContainer = document.getElementById('shoppingmallweatherdetailsinfo');
        var weathericonholder = document.getElementById('shoppingmallweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('shoppingmalllocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#shoppingmallweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(shoppingmalltimerIncrement, 1000);

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
        var datetimetext = document.getElementById("shoppingmallresultContainertime");
        var dateformattext = document.getElementById("shoppingmallresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
   
});