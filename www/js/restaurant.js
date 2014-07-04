var restaurantexpanded = 0;
var datetimeinterval;
var idleIntervaldatetimeweather;
var restaurantcheckhour;
var restaurantViewModelDetails;
var restaurantexpand = 0;
var restaurantglobalmenu_visible = 1;
var restaurantglobalaccessentertainment_expand = 0;
var restaurantglobalsurvey_expand = 0;
$(document).on("pagehide", "#restaurantPage", function (event) {
    if (restaurantglobalmenu_visible == 0) {
        if (restaurantexpand == 1) {
            $('#restaurantglobalmenumh_newsfeed').fadeOut();
            $('#restaurantglobalmenumh_video').fadeOut();
            $('#restaurantglobalmenumh_hospitalmap').fadeOut();
            $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (restaurantglobalaccessentertainment_expand == 1) {
            $('#restaurantglobalmenucg_shoppingmall').fadeOut();
            $('#restaurantglobalmenucg_cafengift').fadeOut();
            $('#restaurantglobalmenucg_restaurant').fadeOut();
            $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalaccessentertainment_expand = 0;

        }
        if (restaurantglobalsurvey_expand == 1) {
            $('#restaurantglobalmenus_generalsurveys').fadeOut();
            $('#restaurantglobalmenus_dailysurveys').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalsurvey_expand = 0;
        }
        $("#restaurantglobalmenu").width('84px');
        $("#restaurantglobalmenu").height('51px');
        $("#restaurantglobalmenu").css('margin-top', '-46px');
        $("#restaurantglobalmenu").css('margin-left', '454px');
        $("#restaurantglobalmenu_background").fadeOut();
        $('#restaurantglobalmenu_mydaySchedule').fadeOut();
        $('#restaurantglobalmenu_mycareteam').fadeOut();
        $('#restaurantglobalmenu_myclinicalDashboard').fadeOut();
        $('#restaurantglobalmenu_cafe').fadeOut();
        $('#restaurantglobalmenu_myhospital').fadeOut();
        $('#restaurantglobalmenu_mypatientsurveys').fadeOut();

        $('#restaurantglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        restaurantglobalmenu_visible = 1;

    }
    if (restaurantexpanded == 1) {
        $('#restaurant_details').fadeOut('slow', function () {

            $('#restaurant_content').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {
                    restaurantexpanded = 0;
                }
            });

        });
    }

    clearTimeout(idleIntervaldatetimeweather);
    clearTimeout(datetimeinterval);
    clearTimeout(restaurantcheckhour);
});

$(document).on("pageinit", "#restaurantPage", function (event) {
    //knockout
    // Overall viewmodel for this screen, along with initial state
    function RestaurantViewModel() {


        var self = this;
        self.Restaurantdetail_data = ko.observableArray([
           { title: "", address: "", phone: "", website: "", displaytime: "", systemtime: "", opentime: "", closetime: "",map:"",link:"" }
        ]);
        self.restaurantdetails_close = function () {
            if (restaurantexpanded == 1) {
            $('#restaurant_details').fadeOut('slow', function () {
                
                    $('#restaurant_content').animate({
                        marginLeft: '0px'
                    }, {
                        duration: 800,
                        specialEasing: {
                            marginLeft: 'swing'
                        },

                        complete: function () {
                            restaurantexpanded = 0;
                        }
                    });
                
            });
            }
        }
        self.restaurantclick = function () {
            if (restaurantexpanded == 0) {
                var mapimage = "http://maps.googleapis.com/maps/api/staticmap?center=" + this.lat + ",%20" + this.long + "&zoom=13&size=410x196&maptype=roadmap&markers=color:blue%7Clabel:S%7C" + this.lat + ",%20" + this.long;
                
                var mapimagecss = "url( " + mapimage + ")";
                restaurantViewModelDetails.viewModel.Restaurantdetail_data([
                    { title: this.title, address: this.locationvalue, phone: this.phone, website: this.website, displaytime: this.displaytime, systemtime: this.systemtime, opentime: this.opentime, closetime: this.closetime,map:mapimagecss,link:this.link }

                ]);

                //Jquery UI - Moving the divs
                $('#restaurant_content').animate({
                    marginLeft: '572px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },

                    complete: function () {
                        $('#restaurant_details').fadeIn();
                        restaurantexpanded = 1;
                    }
                });
            }
        }

        self.Restaurant_data = ko.observableArray([
          { picture: "url(/www/img/restaurant/Around-Us-Restaurent-_macd.png)", title: "McDonald's", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "167 W. 14th St., New York City, NY 10023-2216", phone: "(512) 836-8943", website: "mcdonalds.com", link: "http://www.mcdonalds.com/us/en/home.html", opentime: "10:00", closetime: "22:00", displaytime: "Today 10:00 AM - 10:00PM", systemtime: "", lat: "40.7359025", long: "-73.9969135" },
            { picture: "url(/www/img/restaurant/Around-Us-Restaurent-_dq.png)", title: "DQ", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "240 E 58th Street, New York City, NY 10022 (Manhattan)", phone: "(512) 836-8943", website: "dairyqueen.com", link: "http://www.dairyqueen.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "", lat: "40.7368409", long: "-74.0305958" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_chilis.png)", title: "Chilis", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "60 E. 65th St., New York City, NY 10065 (Manhattan)", phone: "(512) 836-8943", website: "chilis.com", link: "http://www.chilis.com/EN/Pages/home.aspx", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "", lat: "40.7056308", long: "-73.9780035" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_applebees.png)", title: "Applebees", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "29 7th Avenue, New York City, NY", phone: "(512) 836-8943", website: "applebees.com", link: "http://www.applebees.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "", lat: "40.7609955", long: "-73.9740665" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_wendy.png)", title: "Wendy's", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "42 E 20th St, Frnt A, New York City, NY 10003-1300", phone: "(512) 836-8943", website: "wendys.com", link: "https://www.wendys.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "", lat: "40.7056308", long: "-73.9780035" }

        ]);

       
        
    }
    restaurantViewModelDetails = { viewModel: new RestaurantViewModel() };
    //Main Execution
    function initialize() {
        console.log("restaurant Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#restaurant_inner')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(restaurantViewModelDetails.viewModel,element);

    }

    initialize();
});

$(document).on('pageshow', "#restaurantPage", function (data) {
    $("#restaurantglobalmenu_myhospital").hover(
  function () {
     $('#restaurantglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (restaurantexpand == 0) {
         $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#restaurantglobalmenu_cafe").hover(
   function () {
       $('#restaurantglobalmenu_cafe').css("background-color", "#000000");
   }, function () {
       if (restaurantglobalaccessentertainment_expand == 0) {
           $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
       }
   }
   );

    $("#restaurantglobalmenu_mypatientsurveys").hover(
   function () {
       $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (restaurantglobalaccessentertainment_expand == 0) {
           $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#restaurantglobalmenu_myhospital').unbind().on('click', function () {
        if (restaurantglobalaccessentertainment_expand == 1) {
            $('#restaurantglobalmenucg_shoppingmall').fadeOut();
            $('#restaurantglobalmenucg_cafengift').fadeOut();
            $('#restaurantglobalmenucg_restaurant').fadeOut();
            $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalaccessentertainment_expand = 0;

        }
        if (restaurantglobalsurvey_expand == 1) {
            $('#restaurantglobalmenus_generalsurveys').fadeOut();
            $('#restaurantglobalmenus_dailysurveys').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalsurvey_expand = 0;
        }
        if (restaurantexpand == 0) {
            $('#restaurantglobalmenumh_newsfeed').fadeIn();
            $('#restaurantglobalmenumh_video').fadeIn();
            $('#restaurantglobalmenumh_hospitalmap').fadeIn();
            $('#restaurantglobalmenu_myhospital').css("background-color", "#000000");
            $("#restaurantglobalmenu_background").css("opacity", "0.8");
            restaurantexpand = 1;
        }
        else if (restaurantexpand == 1) {
            $('#restaurantglobalmenumh_newsfeed').fadeOut();
            $('#restaurantglobalmenumh_video').fadeOut();
            $('#restaurantglobalmenumh_hospitalmap').fadeOut();
            $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantexpand = 0;
        }

    });
    $('#restaurantglobalmenu_cafe').unbind().on('click', function () {
        if (restaurantexpand == 1) {
            $('#restaurantglobalmenumh_newsfeed').fadeOut();
            $('#restaurantglobalmenumh_video').fadeOut();
            $('#restaurantglobalmenumh_hospitalmap').fadeOut();
            $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantexpand = 0;
        }
        if (restaurantglobalsurvey_expand == 1) {
            $('#restaurantglobalmenus_generalsurveys').fadeOut();
            $('#restaurantglobalmenus_dailysurveys').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalsurvey_expand = 1;
        }
        if (restaurantglobalaccessentertainment_expand == 0) {
            $('#restaurantglobalmenucg_shoppingmall').fadeIn();
            $('#restaurantglobalmenucg_cafengift').fadeIn();
            $('#restaurantglobalmenucg_restaurant').fadeIn();
            $('#restaurantglobalmenu_cafe').css("background-color", "#000000");
            $("#restaurantglobalmenu_background").css("opacity", "0.8");
            restaurantglobalaccessentertainment_expand = 1;
        }
        else if (restaurantglobalaccessentertainment_expand == 1) {
            $('#restaurantglobalmenucg_shoppingmall').fadeOut();
            $('#restaurantglobalmenucg_cafengift').fadeOut();
            $('#restaurantglobalmenucg_restaurant').fadeOut();
            $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalaccessentertainment_expand = 0;
        }
    });
    $('#restaurantglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (restaurantglobalaccessentertainment_expand == 1) {
            $('#restaurantglobalmenucg_shoppingmall').fadeOut();
            $('#restaurantglobalmenucg_cafengift').fadeOut();
            $('#restaurantglobalmenucg_restaurant').fadeOut();
            $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalaccessentertainment_expand = 0;
        }

        if (restaurantexpand == 1) {
            $('#restaurantglobalmenumh_newsfeed').fadeOut();
            $('#restaurantglobalmenumh_video').fadeOut();
            $('#restaurantglobalmenumh_hospitalmap').fadeOut();
            $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantexpand = 0;
        }
        if (restaurantglobalsurvey_expand == 0) {
            $('#restaurantglobalmenus_generalsurveys').fadeIn();
            $('#restaurantglobalmenus_dailysurveys').fadeIn();
            $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#restaurantglobalmenu_background").css("opacity", "0.8");
            restaurantglobalsurvey_expand = 1;
        }
        else if (restaurantglobalsurvey_expand == 1) {
            $('#restaurantglobalmenus_generalsurveys').fadeOut();
            $('#restaurantglobalmenus_dailysurveys').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#restaurantglobalmenu_background").css("opacity", "0.6");
            restaurantglobalsurvey_expand = 0;
        }


    });

    $("#restaurantglobalmenu_background").unbind().on('click', function () {
        if (restaurantglobalmenu_visible == 0) {
            if (restaurantexpand == 1) {
                $('#restaurantglobalmenumh_shoppingmalls').fadeOut();
                $('#restaurantglobalmenumh_myhospital').fadeOut();
                $('#restaurantglobalmenumh_nearrestaurant').fadeOut();
                $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantexpand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (restaurantglobalsurvey_expand == 1) {
                $('#restaurantglobalmenus_generalsurveys').fadeOut();
                $('#restaurantglobalmenus_dailysurveys').fadeOut();
                $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantglobalsurvey_expand = 0;
            }
            if (restaurantglobalaccessentertainment_expand == 1) {
                $('#restaurantglobalmenucg_shoppingmall').fadeOut();
                $('#restaurantglobalmenucg_cafengift').fadeOut();
                $('#restaurantglobalmenucg_restaurant').fadeOut();
                $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantglobalaccessentertainment_expand = 0;
            }
            $("#restaurantglobalmenu").width('84px');
            $("#restaurantglobalmenu").height('51px');
            $("#restaurantglobalmenu").css('margin-top', '-46px');
            $("#restaurantglobalmenu").css('margin-left', '454px');
            $("#restaurantglobalmenu_background").fadeOut();
            $('#restaurantglobalmenu_mydaySchedule').fadeOut();
            $('#restaurantglobalmenu_mycareteam').fadeOut();
            $('#restaurantglobalmenu_myclinicalDashboard').fadeOut();
            $('#restaurantglobalmenu_cafe').fadeOut();
            $('#restaurantglobalmenu_myhospital').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').fadeOut();

            $('#restaurantglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            restaurantglobalmenu_visible = 1;

        }
    });
    $("#restaurantglobalmenu").unbind().on('click',function () {
        if (restaurantglobalmenu_visible == 0) {
            if (restaurantexpand == 1) {
                $('#restaurantglobalmenumh_shoppingmalls').fadeOut();
                $('#restaurantglobalmenumh_myhospital').fadeOut();
                $('#restaurantglobalmenumh_nearrestaurant').fadeOut();
                $('#restaurantglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantexpand = 0;

            }
            if (restaurantglobalaccessentertainment_expand == 1) {
                $('#restaurantglobalmenucg_shoppingmall').fadeOut();
                $('#restaurantglobalmenucg_cafengift').fadeOut();
                $('#restaurantglobalmenucg_restaurant').fadeOut();
                $('#restaurantglobalmenu_cafe').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantglobalaccessentertainment_expand = 0;
            }
            if (restaurantglobalsurvey_expand == 1) {
                $('#restaurantglobalmenus_generalsurveys').fadeOut();
                $('#restaurantglobalmenus_dailysurveys').fadeOut();
                $('#restaurantglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#restaurantglobalmenu_background").css("opacity", "0.6");
                restaurantglobalsurvey_expand = 0;
            }
            $("#restaurantglobalmenu").width('84px');
            $("#restaurantglobalmenu").height('51px');
            $("#restaurantglobalmenu").css('margin-top', '-46px');
            $("#restaurantglobalmenu").css('margin-left', '454px');
            $("#restaurantglobalmenu_background").fadeOut();
            $('#restaurantglobalmenu_mydaySchedule').fadeOut();
            $('#restaurantglobalmenu_mycareteam').fadeOut();
            $('#restaurantglobalmenu_myclinicalDashboard').fadeOut();
            $('#restaurantglobalmenu_cafe').fadeOut();
            $('#restaurantglobalmenu_myhospital').fadeOut();
            $('#restaurantglobalmenu_mypatientsurveys').fadeOut();

            $('#restaurantglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            restaurantglobalmenu_visible = 1;
        }
        else if (restaurantglobalmenu_visible == 1) {
            $("#restaurantglobalmenu").width('122px');
            $("#restaurantglobalmenu").height('72px');
            $("#restaurantglobalmenu").css('margin-top', '-65px');
            $("#restaurantglobalmenu").css('margin-left', '435px');
            $("#restaurantglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#restaurantglobalmenu_mydaySchedule').fadeIn();
            $('#restaurantglobalmenu_mycareteam').fadeIn();
            $('#restaurantglobalmenu_myclinicalDashboard').fadeIn();
            $('#restaurantglobalmenu_cafe').fadeIn();
            $('#restaurantglobalmenu_myhospital').fadeIn();
            $('#restaurantglobalmenu_mypatientsurveys').fadeIn();

            $('#restaurantglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            restaurantglobalmenu_visible = 0;
        }
    });

    //Check time and update system time
    function restaurantcheckHour() {
        var now = new Date();
        var hour = now.getHours();

        var secondsBeforeNextCheck = 3600 - now.getMinutes() * 60 - now.getSeconds() + 1;

        if (hour.toString().length == 1) {
            var hour = '0' + hour;
        }

       

        restaurantViewModelDetails.viewModel.Restaurant_data([
            { picture: "url(/www/img/restaurant/Around-Us-Restaurent-_macd.png)", title: "McDonald's", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "167 W. 14th St., New York City, NY 10023-2216", phone: "(512) 836-8943", website: "mcdonalds.com",link:"http://www.mcdonalds.com/us/en/home.html", opentime: "10:00", closetime: "22:00", displaytime: "Today 10:00 AM - 10:00PM", systemtime: ""+hour+"", lat: "40.7359025", long: "-73.9969135" },
            { picture: "url(/www/img/restaurant/Around-Us-Restaurent-_dq.png)", title: "DQ", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "240 E 58th Street, New York City, NY 10022 (Manhattan)", phone: "(512) 836-8943", website: "dairyqueen.com", link: "http://www.dairyqueen.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "" + hour + "", lat: "40.7368409", long: "-74.0305958" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_chilis.png)", title: "Chilis", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "60 E. 65th St., New York City, NY 10065 (Manhattan)", phone: "(512) 836-8943", website: "chilis.com", link: "http://www.chilis.com/EN/Pages/home.aspx", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "" + hour + "", lat: "40.7056308", long: "-73.9780035" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_applebees.png)", title: "Applebees", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "29 7th Avenue, New York City, NY", phone: "(512) 836-8943", website: "applebees.com", link: "http://www.applebees.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "" + hour + "", lat: "40.7609955", long: "-73.9740665" },
{ picture: "url(/www/img/restaurant/Around-Us-Restaurent-_wendy.png)", title: "Wendy's", star1: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star2: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star3: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star4: "url(/www/img/restaurant/new_screens_star icon_clicked.png)", star5: "url(/www/img/restaurant/new_screens_star icon_unclicked.png)", milesicon: "url(/www/img/restaurant/Around-Us-Restaurent-distance.png)", milesvalue: "0.70ml", locationicon: "url(/www/img/restaurant/Around-Us-Restaurent-address.png)", locationvalue: "42 E 20th St, Frnt A, New York City, NY 10003-1300", phone: "(512) 836-8943", website: "wendys.com", link: "https://www.wendys.com/", opentime: "10:00", closetime: "18:00", displaytime: "Today 10:00 AM - 6:00PM", systemtime: "" + hour + "", lat: "40.7056308", long: "-73.9780035" }
        ]);
        restaurantcheckhour=setTimeout(restaurantcheckHour, secondsBeforeNextCheck * 1000);
    }

    restaurantcheckHour();





    //Calling the date and time function

    restauranttimerIncrement();
    //calling the date and time function
    getDateTime();
    function restauranttimerIncrement() {

        var resultContainer = document.getElementById('restaurantweatherdetailsinfo');
        var weathericonholder = document.getElementById('restaurantweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('restaurantlocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#restaurantweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(restauranttimerIncrement, 1000);

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
        var datetimetext = document.getElementById("restaurantresultContainertime");
        var dateformattext = document.getElementById("restaurantresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
   
});