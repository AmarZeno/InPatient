var cafedetailviewexpand = "false";
var idleInterval;
var datetimeinterval;
var idleIntervaldatetimeweather;
var cafeglobalmenu_visible = 1;
var animationtriggered = "false";
var cafengiftshopclicked = "false";
var cafeexpand = 0;
var cafeglobalaccessentertainment_expand = 0;
var cafeglobalsurvey_expand = 0;
$(document).on("pagehide", "#cafeandgiftshopPage", function (event) {

    if (cafeexpand == 1) {
        $('#cafeglobalmenumh_newsfeed').fadeOut();
        $('#cafeglobalmenumh_video').fadeOut();
        $('#cafeglobalmenumh_hospitalmap').fadeOut();
        $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
        $("#cafeglobalmenu_background").css("opacity", "0.6");
        cafeexpand = 0;
    }
    if (cafeglobalaccessentertainment_expand == 1) {
        $('#cafeglobalmenucg_shoppingmall').fadeOut();
        $('#cafeglobalmenucg_cafengift').fadeOut();
        $('#cafeglobalmenucg_restaurant').fadeOut();
        $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
        $("#cafeglobalmenu_background").css("opacity", "0.6");
        cafeglobalaccessentertainment_expand = 0;

    }
    if (cafeglobalsurvey_expand == 1) {
        $('#cafeglobalmenus_generalsurveys').fadeOut();
        $('#cafeglobalmenus_dailysurveys').fadeOut();
        $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
        $("#cafeglobalmenu_background").css("opacity", "0.6");
        cafeglobalsurvey_expand = 0;

    }

    if (animationtriggered == "false") {
        $("#scrollcontent_button").fadeOut("slow");
        $("#cafeandgiftshop_detailview").fadeOut("fast", function () {
            //Jquery UI - Moving the divs
            $('#cafeandgift_container').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                }
            });
        });
    }
    clearTimeout(datetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);
    clearTimeout(idleInterval);
    if (cafedetailviewexpand == "true") { 
        $("#cafeandgiftshop_detailview").fadeOut("slow", function () {
            //Jquery UI - Moving the divs
            $('#cafeandgift_container').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    $("#scrollcontent_button").fadeOut("slow");
                }
            });
        });

    
    }

    if (cafeglobalmenu_visible == 0) {
        $("#cafeglobalmenu").width('84px');
        $("#cafeglobalmenu").height('51px');
        $("#cafeglobalmenu").css('margin-top', '719px');
        $("#cafeglobalmenu").css('margin-left', '454px');
        $("#cafeglobalmenu_background").fadeOut();
        $('#cafeglobalmenu_mydaySchedule').fadeOut();
        $('#cafeglobalmenu_mycareteam').fadeOut();
        $('#cafeglobalmenu_myclinicalDashboard').fadeOut();
        $('#cafeglobalmenu_cafe').fadeOut();
        $('#cafeglobalmenu_myhospital').fadeOut();
        $('#cafeglobalmenu_mypatientsurveys').fadeOut();

        $('#cafeglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        cafeglobalmenu_visible = 1;
    }
});
$(document).on("pageinit", "#cafeandgiftshopPage", function (event) {
    var cafeframe1_Datatemp = [{ bigpicture: "", title: "", duration: "", durationtext: "", time: "", description: "" }];
    var cafeframe2_Datatemp = [{ smallpicture: "", phonepic: "", phone: "", durationpic: "", duration: "" + ' ' + "", time: "", addresspic: "", address: "" }];
     //knockout
    // Overall viewmodel for this home screen, along with initial state
    function HomeViewModel() {
        var self = this;
        self.CafeandGiftshop_data = ko.observableArray([
       { title: "The Window Cafe", bigpicture: "img/cafeandgiftshop/coffee1_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_1.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_1.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-525-6430", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: sessionStorage.getItem("hour") },
       { title: "Clements Coffee", bigpicture: "img/cafeandgiftshop/coffee2_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_2.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_2.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-546-2376", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: sessionStorage.getItem("hour") },
       { title: "Brew Lab", bigpicture: "img/cafeandgiftshop/coffee3_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_3.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_3.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-435-9255", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Hospital main lobby, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: sessionStorage.getItem("hour") },
       { title: "Fuchsia", bigpicture: "img/cafeandgiftshop/flower_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/flower.png", pictureclosed: "img/cafeandgiftshop/closed/flower.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-890-3296", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Hospital main lobby, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: sessionStorage.getItem("hour") },
       { title: "A place in space", bigpicture: "img/cafeandgiftshop/book_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/book.png", pictureclosed: "img/cafeandgiftshop/closed/book.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-265-9356", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 2, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: sessionStorage.getItem("hour") },
       { title: "Cards", bigpicture: "img/cafeandgiftshop/card_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/card.png", pictureclosed: "img/cafeandgiftshop/closed/card.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-912-2093", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 3, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: sessionStorage.getItem("hour") },

       { title: "Chocolarts", bigpicture: "img/cafeandgiftshop/candy_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/candy.png", pictureclosed: "img/cafeandgiftshop/closed/candy.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-287-0912", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: sessionStorage.getItem("hour") },

       { title: "Ceramicas ARSE", bigpicture: "img/cafeandgiftshop/pottery_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/pottery.png", pictureclosed: "img/cafeandgiftshop/closed/pottery.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-143-1234", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Zayed Tower, Main Level/Arcade, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "10" },
       { title: "Mr. Toys.com", bigpicture: "img/cafeandgiftshop/toy_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/toy.png", pictureclosed: "img/cafeandgiftshop/closed/toy.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-854-9876", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: sessionStorage.getItem("hour") },
        ]);
       
        self.cafemenu_data = [
    { title: "The Window Cafe", category: "FOOD", text: "Desert shots" },
    { title: "The Window Cafe", category: "FOOD", text: "Small eats" },
    { title: "The Window Cafe", category: "FOOD", text: "Big eats" },
    { title: "The Window Cafe", category: "FOOD", text: "Sweet treats" },
    { title: "The Window Cafe", category: "FOOD", text: "Sundaes" },
    { title: "The Window Cafe", category: "FOOD", text: "Cake Away" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Hot Coffee" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Cold Coffee" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Hoteas" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Frosteas" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Chocoholicas" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Frappe" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Fruiteazers" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "Quenchers" },
    { title: "The Window Cafe", category: "BEVERAGES", text: "International Coffee" },
    { title: "The Window Cafe", category: "OTHERS", text: "Combo Deals" },
    { title: "The Window Cafe", category: "OTHERS", text: "The Lounge" },
    { title: "The Window Cafe", category: "OTHERS", text: "Whats New" },
    { title: "The Window Cafe", category: "OTHERS", text: "Catering Service" },
    { title: "Clements Coffee", text: "Ice cream", picture: "images/60banana.png" },
    { title: "Brew Lab", text: "Frozen custard", picture: "images/60banana.png" },
    { title: "Fuchsia", text: "Sherbet", picture: "images/60orange.png" },
    { title: "A place in space", text: "Sherbet", picture: "images/60orange.png" },
    { title: "Cards", text: "Ice cream", picture: "images/60vanilla.png" },
    { title: "Chocolarts", text: "Frozen custard", picture: "images/60vanilla.png" },
    { title: "Ceramicas ARSE", text: "Gelato", picture: "images/60mint.png" },
    { title: "Mr. Toys.com", text: "Sorbet", picture: "images/60strawberry.png" }
        ];
        
    
        self.cafeclick = function () {
            $("#cafeandgiftshop_blocker").fadeIn();
            if (cafengiftshopclicked == "false") {
                cafengiftshopclicked = "true";
                animationtriggered = "true";

                myHomeViewModelDetails.viewModel.cafeframe1_Data([{ bigpicture: this.bigpicture, title: this.title, duration: this.duration, durationtext: this.durationtext, time: this.time, description: this.description }]);

                myHomeViewModelDetails.viewModel.cafeframe2_Data([{ smallpicture: this.smallpicture, phonepic: this.phonepic, phone: this.phone, durationpic: this.durationpic, duration: this.duration + ' ' + this.durationtext, time: this.time, addresspic: this.addresspic, address: this.address }]);


                //Jquery UI - Moving the divs
                $('#cafeandgift_container').animate({
                    marginLeft: '1120px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },

                    complete: function () {
                        cafedetailviewexpand = "true";
                        $("#cafeandgiftshop_detailview").fadeIn("slow");
                        $("#scrollcontent_button").fadeIn("slow");
                        animationtriggered = "false";
                        $("#cafeandgiftshop_blocker").fadeOut();
                    }
                });

                if (this.title == "The Window Cafe") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Cafe Menu";
                    cafemenufood_title.innerHTML = "FOOD";
                    cafemenubeverages_title.innerHTML = "BEVERAGES";


                }
                if (this.title == "Clements Coffee") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Cafe Menu";
                    cafemenufood_title.innerHTML = "FOOD";
                    cafemenubeverages_title.innerHTML = "BEVERAGES";


                }
                if (this.title == "Brew Lab") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Cafe Menu";
                    cafemenufood_title.innerHTML = "FOOD";
                    cafemenubeverages_title.innerHTML = "BEVERAGES";


                }


                if (this.title == "Fuchsia") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Gift Items";
                    cafemenufood_title.innerHTML = "FLOWERS";
                    cafemenubeverages_title.innerHTML = "GIFTS";


                }
                if (this.title == "A place in space") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Cafe Menu";
                    cafemenufood_title.innerHTML = "FOOD";
                    cafemenubeverages_title.innerHTML = "BEVERAGES";

                }
                if (this.title == "Cards") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Gift Items";
                    cafemenufood_title.innerHTML = "FLOWERS";
                    cafemenubeverages_title.innerHTML = "GIFTS";


                }
                if (this.title == "Chocolarts") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Gift Items";
                    cafemenufood_title.innerHTML = "FLOWERS";
                    cafemenubeverages_title.innerHTML = "GIFTS";


                }
                if (this.title == "Ceramicas ARSE") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Gift Items";
                    cafemenufood_title.innerHTML = "FLOWERS";
                    cafemenubeverages_title.innerHTML = "GIFTS";


                }
                if (this.title == "Mr. Toys.com") {
                    var cafemenu_title = document.getElementById('cafemenu_title');
                    var cafemenufood_title = document.getElementById('cafemenufood_title');
                    var cafemenubeverages_title = document.getElementById('cafemenubeverages_title');

                    cafemenu_title.innerHTML = "Gift Items";
                    cafemenufood_title.innerHTML = "FLOWERS";
                    cafemenubeverages_title.innerHTML = "GIFTS";


                }
                cafengiftshopclicked = "false";
            }
        }

        
        //homeviewmodeldetails

        self.cafeframe1_Data = ko.observableArray(cafeframe1_Datatemp);
        self.cafeframe2_Data = ko.observableArray(cafeframe2_Datatemp);
       
        self.cafemenu_data = [
{ title: "The Window Cafe", category: "FOOD", text: "Desert shots" },
{ title: "The Window Cafe", category: "FOOD", text: "Small eats" },
{ title: "The Window Cafe", category: "FOOD", text: "Big eats" },
{ title: "The Window Cafe", category: "FOOD", text: "Sweet treats" },
{ title: "The Window Cafe", category: "FOOD", text: "Sundaes" },
{ title: "The Window Cafe", category: "FOOD", text: "Cake Away" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Hot Coffee" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Cold Coffee" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Hoteas" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Frosteas" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Chocoholicas" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Frappe" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Fruiteazers" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "Quenchers" },
{ title: "The Window Cafe", category: "BEVERAGES", text: "International Coffee" },
{ title: "The Window Cafe", category: "OTHERS", text: "Combo Deals" },
{ title: "The Window Cafe", category: "OTHERS", text: "The Lounge" },
{ title: "The Window Cafe", category: "OTHERS", text: "Whats New" },
{ title: "The Window Cafe", category: "OTHERS", text: "Catering Service" },
{ title: "Clements Coffee", text: "Ice cream", picture: "images/60banana.png" },
{ title: "Brew Lab", text: "Frozen custard", picture: "images/60banana.png" },
{ title: "Fuchsia", text: "Sherbet", picture: "images/60orange.png" },
{ title: "A place in space", text: "Sherbet", picture: "images/60orange.png" },
{ title: "Cards", text: "Ice cream", picture: "images/60vanilla.png" },
{ title: "Chocolarts", text: "Frozen custard", picture: "images/60vanilla.png" },
{ title: "Ceramicas ARSE", text: "Gelato", picture: "images/60mint.png" },
{ title: "Mr. Toys.com", text: "Sorbet", picture: "images/60strawberry.png" }
        ];

        self.windowcafefood_data = [
{ text: "Desert shots", cal:"300kcal 5gm fat" },
{ text: "Small eats", cal: "230kcal 5gm fat" },
{ text: "Big eats", cal: "460kcal 5gm fat" },
{ text: "Sweet treats", cal: "200kcal 5gm fat" },
{ text: "Sundaes", cal: "100kcal 5gm fat" },
{ text: "Cake Away", cal: "500kcal 5gm fat" }

        ];

        self.windowcafebeverages_data = [

{ text: "Hot Coffee", cal: "300kcal 5gm fat" },
{ text: "Cold Coffee", cal: "400kcal 5gm fat" },
{ text: "Hoteas", cal: "100kcal 5gm fat" },
{ text: "Frosteas", cal: "300kcal 5gm fat" },
{ text: "Chocoholicas", cal: "230kcal 5gm fat" },
{ text: "Frappe", cal: "460kcal 5gm fat" },
{ text: "Fruiteazers", cal: "200kcal 5gm fat" },
{ text: "Quenchers", cal: "100kcal 5gm fat" },
{ text: "International Coffee", cal: "500kcal 5gm fat" }
        ];
        self.windowcafeothers_data = [

{ text: "Combo Deals" },
{ text: "The Lounge" },
{ text: "Whats New" },
{ text: "Catering Service" },

        ];
    }
   


    //Main Execution
    function initialize() {

        

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#cafeandgiftHost')[0];
        //apply the binding again 
        ko.applyBindings(myHomeViewModelDetails.viewModel,element);

        
    }
    
    
   

    var myHomeViewModelDetails = { viewModel: new HomeViewModel() };
    //call knockout
    initialize();


    function checkHour() {
        var now = new Date();
        var hour = now.getHours();

        var secondsBeforeNextCheck = 3600 - now.getMinutes() * 60 - now.getSeconds() + 1;
      
        if (hour.toString().length == 1) {
            var hour = '0' + hour;
        }

        myHomeViewModelDetails.viewModel.CafeandGiftshop_data([
                { title: "The Window Cafe", bigpicture: "img/cafeandgiftshop/coffee1_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_1.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_1.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-525-6430", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: "" + hour + "" },
       { title: "Clements Coffee", bigpicture: "img/cafeandgiftshop/coffee2_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_2.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_2.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-546-2376", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: "" + hour + "" },
       { title: "Brew Lab", bigpicture: "img/cafeandgiftshop/coffee3_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/coffee_3.png", pictureclosed: "img/cafeandgiftshop/closed/coffee_3.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-435-9255", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "24", durationtextinitial: "24 hrs Open", durationtext: "hrs Open", time: "", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Hospital main lobby, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "cafe", hour: "" + hour + "" },
       { title: "Fuchsia", bigpicture: "img/cafeandgiftshop/flower_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/flower.png", pictureclosed: "img/cafeandgiftshop/closed/flower.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-890-3296", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Hospital main lobby, Level 1, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },
       { title: "A place in space", bigpicture: "img/cafeandgiftshop/book_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/book.png", pictureclosed: "img/cafeandgiftshop/closed/book.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-265-9356", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 2, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },
       { title: "Cards", bigpicture: "img/cafeandgiftshop/card_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/card.png", pictureclosed: "img/cafeandgiftshop/closed/card.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-912-2093", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Outpatient Center, Level 3, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },

       { title: "Chocolarts", bigpicture: "img/cafeandgiftshop/chocolate_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/candy.png", pictureclosed: "img/cafeandgiftshop/closed/candy.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-287-0912", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },

       { title: "Ceramicas ARSE", bigpicture: "img/cafeandgiftshop/pottery_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/pottery.png", pictureclosed: "img/cafeandgiftshop/closed/pottery.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-143-1234", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Zayed Tower, Main Level/Arcade, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },
       { title: "Mr. Toys.com", bigpicture: "img/cafeandgiftshop/toy_big.png", smallpicture: "img/cafeandgiftshop/round.png", picture: "img/cafeandgiftshop/toy.png", pictureclosed: "img/cafeandgiftshop/closed/toy.png", phonepic: "img/cafeandgiftshop/icon_1.png", phone: "+1-510-854-9876", durationpic: "img/cafeandgiftshop/icon_2.png", duration: "", durationtextinitial: "24 hrs Open", durationtext: "", time: "9:00 am - 6:00 pm", addresspic: "img/cafeandgiftshop/icon_3.png", address: "Nelson Harvey Building, Salinas", pincode: "CA 93905", description: "The window cafe is one of the biggest coffee restaurant chains in the USA offering best coffee and tea with all kind of International flavors. For more details about coffee", type: "giftshop", hour: "" + hour + "" },

        ]);
        setTimeout(checkHour, secondsBeforeNextCheck * 1000);
    }

    checkHour();
});

$(document).on('pageshow', '#cafeandgiftshopPage', function (data) {
   
    $("#cafeglobalmenu_myhospital").hover(
 function () {
     $('#cafeglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (cafeexpand == 0) {
         $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#cafeglobalmenu_cafe").hover(
    function () {
        $('#cafeglobalmenu_cafe').css("background-color", "#000000");
    }, function () {
        if (cafeglobalaccessentertainment_expand == 0) {
            $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
        }
    }
    );

    $("#cafeglobalmenu_mypatientsurveys").hover(
   function () {
       $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (cafeglobalaccessentertainment_expand == 0) {
           $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#cafeglobalmenu_myhospital').unbind().on('click', function () {
        if (cafeglobalaccessentertainment_expand == 1) {
            $('#cafeglobalmenucg_shoppingmall').fadeOut();
            $('#cafeglobalmenucg_cafengift').fadeOut();
            $('#cafeglobalmenucg_restaurant').fadeOut();
            $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalaccessentertainment_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (cafeglobalsurvey_expand == 1) {
            $('#cafeglobalmenus_generalsurveys').fadeOut();
            $('#cafeglobalmenus_dailysurveys').fadeOut();
            $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalsurvey_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (cafeexpand == 0) {
           
            $('#cafeglobalmenumh_newsfeed').fadeIn();
            $('#cafeglobalmenumh_video').fadeIn();
            $('#cafeglobalmenumh_hospitalmap').fadeIn();
            $('#cafeglobalmenu_myhospital').css("background-color", "#000000");
            $("#cafeglobalmenu_background").css("opacity", "0.8");
            cafeexpand = 1;
        }
        else if (cafeexpand == 1) {
           
            $('#cafeglobalmenumh_newsfeed').fadeOut();
            $('#cafeglobalmenumh_video').fadeOut();
            $('#cafeglobalmenumh_hospitalmap').fadeOut();
            $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeexpand = 0;

        }

    });
    $('#cafeglobalmenu_cafe').unbind().on('click', function () {
        if (cafeexpand == 1) {
            $('#cafeglobalmenumh_newsfeed').fadeOut();
            $('#cafeglobalmenumh_video').fadeOut();
            $('#cafeglobalmenumh_hospitalmap').fadeOut();

            $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeexpand = 0;
        }
        if (cafeglobalsurvey_expand == 1) {
            $('#cafeglobalmenus_generalsurveys').fadeOut();
            $('#cafeglobalmenus_dailysurveys').fadeOut();
            $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalsurvey_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (cafeglobalaccessentertainment_expand == 0) {
            $('#cafeglobalmenucg_shoppingmall').fadeIn();
            $('#cafeglobalmenucg_cafengift').fadeIn();
            $('#cafeglobalmenucg_restaurant').fadeIn();
            $('#cafeglobalmenu_cafe').css("background-color", "#000000");
            $("#cafeglobalmenu_background").css("opacity", "0.8");
            cafeglobalaccessentertainment_expand = 1;
            // $("#globalmenu_background").css("opacity", "0.8");
        } else if (cafeglobalaccessentertainment_expand == 1) {
            $('#cafeglobalmenucg_shoppingmall').fadeOut();
            $('#cafeglobalmenucg_cafengift').fadeOut();
            $('#cafeglobalmenucg_restaurant').fadeOut();
            $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalaccessentertainment_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
    });
    $('#cafeglobalmenu_mypatientsurveys').unbind().on('click', function() {
        
        if (cafeexpand == 1) {
            $('#cafeglobalmenumh_newsfeed').fadeOut();
            $('#cafeglobalmenumh_video').fadeOut();
            $('#cafeglobalmenumh_hospitalmap').fadeOut();

            $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeexpand = 0;
        }
       
        if (cafeglobalaccessentertainment_expand == 1) {
            $('#cafeglobalmenucg_shoppingmall').fadeOut();
            $('#cafeglobalmenucg_cafengift').fadeOut();
            $('#cafeglobalmenucg_restaurant').fadeOut();
            $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalaccessentertainment_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (cafeglobalsurvey_expand == 1) {
            $('#cafeglobalmenus_generalsurveys').fadeOut();
            $('#cafeglobalmenus_dailysurveys').fadeOut();
            $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#cafeglobalmenu_background").css("opacity", "0.6");
            cafeglobalsurvey_expand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        } else if(cafeglobalsurvey_expand == 0)
        {
            $('#cafeglobalmenus_generalsurveys').fadeIn();
            $('#cafeglobalmenus_dailysurveys').fadeIn();
            $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#cafeglobalmenu_background").css("opacity", "0.8");
            cafeglobalsurvey_expand = 1;
            // $("#globalmenu_background").css("opacity", "0.8");
        }

    });
    $("#cafeglobalmenu_background").on('click', function () {
        if (cafeglobalmenu_visible == 0) {
            if (cafeglobalsurvey_expand == 1) {
                $('#cafeglobalmenus_generalsurveys').fadeOut();
                $('#cafeglobalmenus_dailysurveys').fadeOut();
                $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeglobalsurvey_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (cafeglobalaccessentertainment_expand == 1) {
                $('#cafeglobalmenucg_shoppingmall').fadeOut();
                $('#cafeglobalmenucg_cafengift').fadeOut();
                $('#cafeglobalmenucg_restaurant').fadeOut();
                $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeglobalaccessentertainment_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (cafeexpand == 1) {
                $('#cafeglobalmenumh_newsfeed').fadeOut();
                $('#cafeglobalmenumh_video').fadeOut();
                $('#cafeglobalmenumh_hospitalmap').fadeOut();
                $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeexpand = 0;
            }
            $("#cafeglobalmenu").width('84px');
            $("#cafeglobalmenu").height('51px');
            $("#cafeglobalmenu").css('margin-top', '719px');
            $("#cafeglobalmenu").css('margin-left', '454px');
            $("#cafeglobalmenu_background").fadeOut();
            $('#cafeglobalmenu_mydaySchedule').fadeOut();
            $('#cafeglobalmenu_mycareteam').fadeOut();
            $('#cafeglobalmenu_myclinicalDashboard').fadeOut();
            $('#cafeglobalmenu_cafe').fadeOut();
            $('#cafeglobalmenu_myhospital').fadeOut();
            $('#cafeglobalmenu_mypatientsurveys').fadeOut();

            $('#cafeglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            cafeglobalmenu_visible = 1;
        }
    });
    $("#cafeglobalmenu").unbind().on('click',function () {
        if (cafeglobalmenu_visible == 0) {
            if (cafeglobalsurvey_expand == 1) {
                $('#cafeglobalmenus_generalsurveys').fadeOut();
                $('#cafeglobalmenus_dailysurveys').fadeOut();
                $('#cafeglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeglobalsurvey_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (cafeglobalaccessentertainment_expand == 1) {
                $('#cafeglobalmenucg_shoppingmall').fadeOut();
                $('#cafeglobalmenucg_cafengift').fadeOut();
                $('#cafeglobalmenucg_restaurant').fadeOut();
                $('#cafeglobalmenu_cafe').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeglobalaccessentertainment_expand = 0;
                // $("#globalmenu_background").css("opacity", "0.8");
            }
            if (cafeexpand == 1) {
                $('#cafeglobalmenumh_newsfeed').fadeOut();
                $('#cafeglobalmenumh_video').fadeOut();
                $('#cafeglobalmenumh_hospitalmap').fadeOut();
                $('#cafeglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#cafeglobalmenu_background").css("opacity", "0.6");
                cafeexpand = 0;
            }
            $("#cafeglobalmenu").width('84px');
            $("#cafeglobalmenu").height('51px');
            $("#cafeglobalmenu").css('margin-top', '719px');
            $("#cafeglobalmenu").css('margin-left', '454px');
            $("#cafeglobalmenu_background").fadeOut();
            $('#cafeglobalmenu_mydaySchedule').fadeOut();
            $('#cafeglobalmenu_mycareteam').fadeOut();
            $('#cafeglobalmenu_myclinicalDashboard').fadeOut();
            $('#cafeglobalmenu_cafe').fadeOut();
            $('#cafeglobalmenu_myhospital').fadeOut();
            $('#cafeglobalmenu_mypatientsurveys').fadeOut();
            $('#cafeglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            cafeglobalmenu_visible = 1;
        }
        else if (cafeglobalmenu_visible == 1) {
            $("#cafeglobalmenu").width('122px');
            $("#cafeglobalmenu").height('72px');
            $("#cafeglobalmenu").css('margin-top', '699px');
            $("#cafeglobalmenu").css('margin-left', '435px');
            $("#cafeglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#cafeglobalmenu_mydaySchedule').fadeIn();
            $('#cafeglobalmenu_mycareteam').fadeIn();
            $('#cafeglobalmenu_myclinicalDashboard').fadeIn();
            $('#cafeglobalmenu_cafe').fadeIn();
            $('#cafeglobalmenu_myhospital').fadeIn();
            $('#cafeglobalmenu_mypatientsurveys').fadeIn();

            $('#cafeglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            cafeglobalmenu_visible = 0;
        }
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
               
                clearTimeout(idleInterval);
                //navigate here

                idleTime = 0;
                $.mobile.pageContainer.pagecontainer("change", $("#loginPage"));
            }
            idleInterval = setTimeout(timerIncrement, 1000);
        });
    }





    
    console.log("Debuuging here");
    console.log("Current:" + $.mobile.navigate.history.getActive().url);
    console.log("Stack: (active index = " + $.mobile.navigate.history.activeIndex + " -previous index: " + $.mobile.navigate.history.previousIndex + " )");
    $.each($.mobile.navigate.history.stack, function (index, val) {
        console.log(index + "-" + val.url);
    });

    console.log("Page show event of cafeandgiftshoppage");
    //$('#cafe_backbutton').on("click", function () {
    //    clearTimeout(datetimeinterval);
    //    clearTimeout(idleInterval);
    //    window.history.back();
    //});
    $("#scrollcontent_button").on("click", function () {
        scrollbuttonhandler();
    });

    //alert(window.location.href);


    function scrollbuttonhandler() {

        if (animationtriggered == "false")
            {
        $("#scrollcontent_button").fadeOut("slow");
        $("#cafeandgiftshop_detailview").fadeOut("fast", function () {
            //Jquery UI - Moving the divs
            $('#cafeandgift_container').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    
                }
            });
        });

        }
        
    }
   // $('#back_button').click(function () {
        //location.replace("index.html#homePage");
        // navigator.app.backHistory();
        //history.back();
        //$.mobile.back();
      //  $.mobile.pageContainer.pagecontainer("change", "#homePage");
        // $.mobile.pageContainer.pagecontainer("change", $("#homePage"), { changeHash: true });
        //$.mobile.navigate("#homePage");
        // history.go(1);
   // })
    //$.mobile.changePage({
    //    url: '../home/home.html',
    //    reverse: true
    //});

    //Calling the date and time function
    
    cafetimerIncrement();
    //calling the date and time function
    getDateTime();
    function cafetimerIncrement() {
            
        var resultContainer = document.getElementById('cafeweatherdetailsinfo');
        var weathericonholder = document.getElementById('cafeweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('cafelocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#cafeweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
            idleIntervaldatetimeweather = setTimeout(cafetimerIncrement, 1000);
          
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
        var datetimetext = document.getElementById("caferesultContainertime");
        var dateformattext = document.getElementById("caferesultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval= setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
});