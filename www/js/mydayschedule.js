var mydayViewModelDetails;
var mydayframe3_seg1_check = "false";
var mydayframe3_task1_check = "false";
var mydayframe3_task2_check = "false";
var idleInterval;
var datetimeinterval;
var idleIntervaldatetimeweather;
var mydayglobalmenu_visible = 1;
var mydayexpand = 0;
var mydayglobalaccessentertainment_expand = 0;
var mydayglobalsurvey_expand = 0;
$(document).on("pagehide", "#mydayschedulePage", function (event) {
    if (mydayexpand == 1) {
        $('#mydayglobalmenumh_newsfeed').fadeOut();
        $('#mydayglobalmenumh_video').fadeOut();
        $('#mydayglobalmenumh_hospitalmap').fadeOut();
        $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
        $("#mydayglobalmenu_background").css("opacity", "0.6");
        mydayexpand = 0;
    }
    if (mydayglobalaccessentertainment_expand == 1) {
        $('#mydayglobalmenucg_shoppingmall').fadeOut();
        $('#mydayglobalmenucg_cafengift').fadeOut();
        $('#mydayglobalmenucg_restaurant').fadeOut();
        $('#mydayglobalmenu_cafe').css("background-color", "#156c8a");
        $("#mydayglobalmenu_background").css("opacity", "0.6");
        mydayglobalaccessentertainment_expand = 0;

    }
    if (mydayglobalsurvey_expand == 1) {
        $('#mydayglobalmenus_generalsurveys').fadeOut();
        $('#mydayglobalmenus_dailysurveys').fadeOut();
        $('#mydayglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
        $("#mydayglobalmenu_background").css("opacity", "0.6");
        mydayglobalsurvey_expand = 0;
    }
    clearTimeout(datetimeinterval);
    clearTimeout(idleInterval);
    clearTimeout(idleIntervaldatetimeweather);

    if (mydayglobalmenu_visible == 0) {
        $("#mydayglobalmenu").width('84px');
        $("#mydayglobalmenu").height('51px');
        $("#mydayglobalmenu").css('margin-top', '719px');
        $("#mydayglobalmenu").css('margin-left', '454px');
        $("#mydayglobalmenu_background").fadeOut();
        $('#mydayglobalmenu_mydaySchedule').fadeOut();
        $('#mydayglobalmenu_mycareteam').fadeOut();
        $('#mydayglobalmenu_myclinicalDashboard').fadeOut();
        $('#mydayglobalmenu_cafe').fadeOut();
        $('#mydayglobalmenu_myhospital').fadeOut();
        $('#mydayglobalmenu_mypatientsurveys').fadeOut();

        $('#mydayglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        mydayglobalmenu_visible = 1;
    }
});

$(document).on("pageinit", "#mydayschedulePage", function (event) {


    function mydayViewModel() {
        var self = this;
        self.mydaymedication_datadetails = ko.observableArray([
           { title: "", status: "", picture: "", activepicture: "", alarmpicture: "", servingsize: "", servingpercontainer: "", eachservingcontains: "", amountperserving: "", percentdailyvalue: "", ingredients: "" }
        ]);
        self.mydayvideo_data = ko.observableArray([
       { videoimage: "", videotitle: "", videoID: "", videoduration: "", videostatus: "" },
        { videoimage: "", videotitle: "", videoID: "", videoduration: "", videostatus: "" },
         { videoimage: "", videotitle: "", videoID: "", videoduration: "", videostatus: "" },
          { videoimage: "", videotitle: "", videoID: "", videoduration: "", videostatus: "" }
        ]);

        self.mydayschedulevideos_click = function () {

            sessionStorage.setItem("videoid", this.videoID);

            //$.mobile.changePage("#mydayschedulevideosPage");
        }


        self.mydaycomplete_Data = ko.observableArray([{
            "1": [{
                medication: [
                  { title: "Vitamin C", status: "active", picture: "/www/img/mydayschedule/My medication/Normal/1.png", activepicture: "/www/img/mydayschedule/My medication/Active/1.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/1.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 500 mg", icon2: "/www/img/mydayschedule/My medication/bfrBrkfst_icon.png", icon2text: "Before Breakfast", icon3: "/www/img/mydayschedule/My medication/alarm_pastDue_icon.png", icon3text: "7:30 AM past due", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" },
                  { title: "Dietary Supplement", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/2.png", activepicture: "/www/img/mydayschedule/My medication/Active/2.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/2.png", icon1: "/www/img/mydayschedule/My medication/tablet_icon.png", icon1text: "1 Capsule", icon2: "/www/img/mydayschedule/My medication/AfterDnnr_icon.png", icon2text: "After Dinner", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" },
                  { title: "Aceact", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/5.png", activepicture: "/www/img/mydayschedule/My medication/Active/5.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/5.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 250 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consumed_icon.png", icon3text: "1:00 PM consumed", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" },
                  { title: "Amaday", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/6.png", activepicture: "/www/img/mydayschedule/My medication/Active/6.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/6.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 10 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" },
                  { title: "Lipitor", status: "normal", picture: "/www/img/mydayschedule/My medication/Normal/3.png", activepicture: "/www/img/mydayschedule/My medication/Active/3.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/3.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 10 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consumed_icon.png", icon3text: "1:10 PM consumed", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" },
                  { title: "Tramadol Hydrochloride", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/4.png", activepicture: "/www/img/mydayschedule/My medication/Active/4.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/4.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 50 mg", icon2: "/www/img/mydayschedule/My medication/AfterDnnr_icon.png", icon2text: "After Dinner", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "1" }

                ],
                activity: [
                { task: "task1", title1: "Continously breath", title2: "1 - 2", title3: "hrs. / Day", status: "incomplete",picture:"" },
                { task: "task2", title1: "1", title2: "Physical Activity after surgery", title3: "You will have tasks each day to help gain strength. Complete your self-assessments to see how easy it is to track your progress and see results.", status: "",picture:"" },
                { task: "task3", title1: "Hand Movement exercises", title2: "5", title3: "times", status: "incomplete", picture: "/www/img/mydayschedule/Activity/round_1.png" },
                { task: "task4", title1: "Walk with staff assistance,", title2: "increase your frequency and distance.", title3: "", status: "incomplete", picture: "/www/img/mydayschedule/Activity/round_2.png" },
                { task: "task5", title1: "What to EAT and what not to?", title2: "", title3: "", status: "", picture: "/www/img/mydayschedule/Activity/round_3.png" },
                { task: "task6", title1: "Sit on chairs for all meals, elevate legs while sitting", title2: "", title3: "", status: "", picture: "/www/img/mydayschedule/Activity/round_4.png" }
                ],
                survey: [
                { survey: "survey1", title1: "Don't be heart broken", title2: "it's just a matter of time You will soon get better", title3: "", status: "" },
                { survey: "survey2", title1: "Rate  your Pain", title2: "Pain & Discomfort", title3: "After Surgery, some pain & anxiety are normal. Managing your pain is important. It will help you to recover more quickly. If your pain is under control, you can do what you need to do to get better(Such as coughing, deep breathing, walking etc). Your recovery may be delayed by toughing it out.", status: "" },
                ]

            }],
            "2": [{
                medication: [
                    { title: "Tramadol Hydrochloride", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/4.png", activepicture: "/www/img/mydayschedule/My medication/Active/4.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/4.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 50 mg", icon2: "/www/img/mydayschedule/My medication/AfterDnnr_icon.png", icon2text: "After Dinner", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" },

                  { title: "Vitamin C", status: "active", picture: "/www/img/mydayschedule/My medication/Normal/1.png", activepicture: "/www/img/mydayschedule/My medication/Active/1.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/1.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 500 mg", icon2: "/www/img/mydayschedule/My medication/bfrBrkfst_icon.png", icon2text: "Before Breakfast", icon3: "/www/img/mydayschedule/My medication/alarm_pastDue_icon.png", icon3text: "7:30 AM past due", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" },
                  { title: "Dietary Supplement", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/2.png", activepicture: "/www/img/mydayschedule/My medication/Active/2.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/2.png", icon1: "/www/img/mydayschedule/My medication/tablet_icon.png", icon1text: "1 Capsule", icon2: "/www/img/mydayschedule/My medication/AfterDnnr_icon.png", icon2text: "After Dinner", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" },
                  { title: "Aceact", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/5.png", activepicture: "/www/img/mydayschedule/My medication/Active/5.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/5.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 250 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consumed_icon.png", icon3text: "1:00 PM consumed", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" },
                  { title: "Amaday", status: "alarm", picture: "/www/img/mydayschedule/My medication/Normal/6.png", activepicture: "/www/img/mydayschedule/My medication/Active/6.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/6.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 10 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consume_icon.png", icon3text: "Consume", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" },
                  { title: "Lipitor", status: "normal", picture: "/www/img/mydayschedule/My medication/Normal/3.png", activepicture: "/www/img/mydayschedule/My medication/Active/3.png", alarmpicture: "/www/img/mydayschedule/My medication/Alarm/3.png", icon1: "/www/img/mydayschedule/My medication/capsule_icon.png", icon1text: "1 tablet 10 mg", icon2: "/www/img/mydayschedule/My medication/AfterLnch_icon.png", icon2text: "After Lunch", icon3: "/www/img/mydayschedule/My medication/Consumed_icon.png", icon3text: "1:10 PM consumed", servingsize: "1 tablet", servingpercontainer: "250", eachservingcontains: "Vitamin C", amountperserving: "250 mg", percentdailyvalue: "416%", ingredients: "Sorbital, Sodium Ascorbate, Ascorbic Acid, Natural Passion Fruit Flavor, Steoric Acid ( Vegetable ), Magnessium Steorate ( Vegetable ), Sucraclose", day: "2" }
                  
                ],
                activity: [
                { task: "task1", title1: "Continously breath", title2: "1 - 2", title3: "hrs. / Day", status: "incomplete",picture:"" },
                { task: "task2", title1: "2", title2: "Physical Activity after surgery", title3: "You will have tasks each day to help gain strength. Complete your self-assessments to see how easy it is to track your progress and see results.", status: "", picture: "" },
                { task: "task3", title1: "Leg Movement exercise", title2: "10", title3: "times", status: "incomplete", picture: "/www/img/mydayschedule/day2/round_1.png" },
                { task: "task4", title1: "Walk with staff assistance,", title2: "increase your frequency and distance.", title3: "", status: "incomplete", picture: "/www/img/mydayschedule/Activity/round_2.png" },
                { task: "task5", title1: "What to EAT and what not to?", title2: "", title3: "", status: "", picture: "/www/img/mydayschedule/Activity/round_3.png" },
                { task: "task6", title1: "Stand up for a while, elevate legs while standing", title2: "", title3: "", status: "", picture: "/www/img/mydayschedule/day2/round_4.png" }
                ],
                survey: [
                { survey: "survey1", title1: "My Doctor isn't listening", title2: "How can you help?", title3: "", status: "" },
                { survey: "survey2", title1: "How well does", title2: "your doctor listen?", title3: "After Surgery, some pain & anxiety are normal. Managing your pain is important. It will help you to recover more quickly. If your pain is under control, you can do what you need to do to get better(Such as coughing, deep breathing, walking etc). Your recovery may be delayed by toughing it out.", status: "" },
                ]

            }]
        }]);


        var increval = 0;
        self.index = ko.observable(1);
        self.goToNext = function () {
            if (increval == 0) {
                self.index(self.index() + 1);
                increval = increval + 1;
            }
        };
        self.goToPrev = function () {
            if (increval == 1) {
                self.index(self.index() - 1);
                increval = increval - 1;
            }
        }
        


       

        self.mydaymedicationclick = function () {
            $('#myday_blocker').fadeIn();
           

            mydayViewModelDetails.viewModel.mydaymedication_datadetails([
{ title: this.title, status: this.status, picture: this.picture, activepicture: this.activepicture, alarmpicture: this.alarmpicture, servingsize: this.servingsize, servingpercontainer: this.servingpercontainer, eachservingcontains: this.eachservingcontains, amountperserving: this.amountperserving, percentdailyvalue: this.percentdailyvalue, ingredients: this.ingredients }

            ]);
            $('#myday_remainingframe').animate({
                marginLeft: '433px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    $("#mydayframe2_animateclick").fadeIn('slow');
                    $("#myday_frame2details").fadeIn('slow');
                    $('#myday_blocker').fadeOut();
                }
            });

        }
    }

    mydayViewModelDetails = { viewModel: new mydayViewModel() };


    //Main Execution
    function initialize() {

        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#myday_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(mydayViewModelDetails.viewModel, element);
    }
    initialize();
});

$(document).on('pageshow', '#mydayschedulePage', function (data) {


    $("#mydayglobalmenu_myhospital").hover(
 function () {
     $('#mydayglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (mydayexpand == 0) {
         $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $('#mydayglobalmenu_myhospital').unbind().on('click', function () {
        if (mydayglobalaccessentertainment_expand == 1) {
            $('#mydayglobalmenucg_shoppingmall').fadeOut();
            $('#mydayglobalmenucg_cafengift').fadeOut();
            $('#mydayglobalmenucg_restaurant').fadeOut();
            $('#mydayglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalaccessentertainment_expand = 0;

        }
        if (mydayglobalsurvey_expand == 1) {
            $('#mydayglobalmenus_generalsurveys').fadeOut();
            $('#mydayglobalmenus_dailysurveys').fadeOut();
            $('#mydayglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalsurvey_expand = 0;
        }
        if (mydayexpand == 0) {
            $('#mydayglobalmenumh_newsfeed').fadeIn();
            $('#mydayglobalmenumh_video').fadeIn();
            $('#mydayglobalmenumh_hospitalmap').fadeIn();
            $('#mydayglobalmenu_myhospital').css("background-color", "#000000");
            $("#mydayglobalmenu_background").css("opacity", "0.8");
            mydayexpand = 1;
        }
        else if (mydayexpand == 1) {
            $('#mydayglobalmenumh_newsfeed').fadeOut();
            $('#mydayglobalmenumh_video').fadeOut();
            $('#mydayglobalmenumh_hospitalmap').fadeOut();
            $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayexpand = 0;

        }

    });


    $('#mydayglobalmenu_cafe').unbind().on('click', function () {
        if (mydayexpand == 1) {
            $('#mydayglobalmenumh_newsfeed').fadeOut();
            $('#mydayglobalmenumh_video').fadeOut();
            $('#mydayglobalmenumh_hospitalmap').fadeOut();
            $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayexpand = 0;
        }
        if (mydayglobalsurvey_expand == 1) {
            $('#mydayglobalmenus_generalsurveys').fadeOut();
            $('#mydayglobalmenus_dailysurveys').fadeOut();
            $('#mydayglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalsurvey_expand = 1;
        }
        if (mydayglobalaccessentertainment_expand == 0) {
            $('#mydayglobalmenucg_shoppingmall').fadeIn();
            $('#mydayglobalmenucg_cafengift').fadeIn();
            $('#mydayglobalmenucg_restaurant').fadeIn();
            $('#mydayglobalmenu_cafe').css("background-color", "#000000");
            $("#mydayglobalmenu_background").css("opacity", "0.8");
            mydayglobalaccessentertainment_expand = 1;
        }
        else if (mydayglobalaccessentertainment_expand == 1) {
            $('#mydayglobalmenucg_shoppingmall').fadeOut();
            $('#mydayglobalmenucg_cafengift').fadeOut();
            $('#mydayglobalmenucg_restaurant').fadeOut();
            $('#mydayglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalaccessentertainment_expand = 0;
        }
    });
    $('#mydayglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (mydayglobalaccessentertainment_expand == 1) {
            $('#mydayglobalmenucg_shoppingmall').fadeOut();
            $('#mydayglobalmenucg_cafengift').fadeOut();
            $('#mydayglobalmenucg_restaurant').fadeOut();
            $('#mydayglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalaccessentertainment_expand = 0;
        }

        if (mydayexpand == 1) {
            $('#mydayglobalmenumh_newsfeed').fadeOut();
            $('#mydayglobalmenumh_video').fadeOut();
            $('#mydayglobalmenumh_hospitalmap').fadeOut();
            $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayexpand = 0;
        }
        if (mydayglobalsurvey_expand == 0) {
            $('#mydayglobalmenus_generalsurveys').fadeIn();
            $('#mydayglobalmenus_dailysurveys').fadeIn();
            $('#mydayglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#mydayglobalmenu_background").css("opacity", "0.8");
            mydayglobalsurvey_expand = 1;
        }
        else if (mydayglobalsurvey_expand == 1) {
            $('#mydayglobalmenus_generalsurveys').fadeOut();
            $('#mydayglobalmenus_dailysurveys').fadeOut();
            $('#mydayglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mydayglobalmenu_background").css("opacity", "0.6");
            mydayglobalsurvey_expand = 0;
        }


    });

    var noofvids = "20";
    JSONP_video();
    function JSONP_video() {
        var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSQYKWQbR8c-TnqHalFUNyrC3_q2fRnOI&channelId=UCiOGpTDGVZmFisstfnGiEww&part=snippet%2cid&order=date&maxResults=" + noofvids;

        $.ajax({
            type: "GET",
            url: url,
            async: false,

            headers: { "Content-type": "application/json" }
        }).then(function complete(videoInfo) {
            //var videoobj = jQuery.parseJSON(videoInfo);
            mydayViewModelDetails.viewModel.mydayvideo_data([
       { videoimage: videoInfo.items[0].snippet.thumbnails.medium.url, videotitle: videoInfo.items[0].snippet.title, videoID: videoInfo.items[0].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
        { videoimage: videoInfo.items[1].snippet.thumbnails.medium.url, videotitle: videoInfo.items[1].snippet.title, videoID: videoInfo.items[1].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
         { videoimage: videoInfo.items[2].snippet.thumbnails.medium.url, videotitle: videoInfo.items[2].snippet.title, videoID: videoInfo.items[2].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
          { videoimage: videoInfo.items[3].snippet.thumbnails.medium.url, videotitle: videoInfo.items[3].snippet.title, videoID: videoInfo.items[3].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },

            { videoimage: videoInfo.items[4].snippet.thumbnails.medium.url, videotitle: videoInfo.items[4].snippet.title, videoID: videoInfo.items[4].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[5].snippet.thumbnails.medium.url, videotitle: videoInfo.items[5].snippet.title, videoID: videoInfo.items[5].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[6].snippet.thumbnails.medium.url, videotitle: videoInfo.items[6].snippet.title, videoID: videoInfo.items[6].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[7].snippet.thumbnails.medium.url, videotitle: videoInfo.items[7].snippet.title, videoID: videoInfo.items[7].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[8].snippet.thumbnails.medium.url, videotitle: videoInfo.items[8].snippet.title, videoID: videoInfo.items[8].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[9].snippet.thumbnails.medium.url, videotitle: videoInfo.items[9].snippet.title, videoID: videoInfo.items[9].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[10].snippet.thumbnails.medium.url, videotitle: videoInfo.items[10].snippet.title, videoID: videoInfo.items[10].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[11].snippet.thumbnails.medium.url, videotitle: videoInfo.items[11].snippet.title, videoID: videoInfo.items[11].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[12].snippet.thumbnails.medium.url, videotitle: videoInfo.items[12].snippet.title, videoID: videoInfo.items[12].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[13].snippet.thumbnails.medium.url, videotitle: videoInfo.items[13].snippet.title, videoID: videoInfo.items[13].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[14].snippet.thumbnails.medium.url, videotitle: videoInfo.items[14].snippet.title, videoID: videoInfo.items[14].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[15].snippet.thumbnails.medium.url, videotitle: videoInfo.items[15].snippet.title, videoID: videoInfo.items[15].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
    { videoimage: videoInfo.items[16].snippet.thumbnails.medium.url, videotitle: videoInfo.items[16].snippet.title, videoID: videoInfo.items[16].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
     { videoimage: videoInfo.items[17].snippet.thumbnails.medium.url, videotitle: videoInfo.items[17].snippet.title, videoID: videoInfo.items[17].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
      { videoimage: videoInfo.items[18].snippet.thumbnails.medium.url, videotitle: videoInfo.items[18].snippet.title, videoID: videoInfo.items[18].id.videoId, videoduration: "8:00", videostatus: "UnWatched" },
       { videoimage: videoInfo.items[19].snippet.thumbnails.medium.url, videotitle: videoInfo.items[19].snippet.title, videoID: videoInfo.items[19].id.videoId, videoduration: "8:00", videostatus: "UnWatched" }

            ]);

        });
    }

    $("#mydayglobalmenu_background").on('click', function () {
        if (mydayglobalmenu_visible == 0) {
            if (mydayexpand == 1) {
                $('#mydayglobalmenumh_newsfeed').fadeOut();
                $('#mydayglobalmenumh_video').fadeOut();
                $('#mydayglobalmenumh_hospitalmap').fadeOut();
                $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mydayglobalmenu_background").css("opacity", "0.6");
                mydayexpand = 0;

            }
            if (mydayglobalaccessentertainment_expand == 1) {
                $('#mydayglobalmenucg_shoppingmall').fadeOut();
                $('#mydayglobalmenucg_cafengift').fadeOut();
                $('#mydayglobalmenucg_restaurant').fadeOut();
                $('#mydayglobalmenu_cafe').css("background-color", "#156c8a");
                $("#mydayglobalmenu_background").css("opacity", "0.6");
                mydayglobalaccessentertainment_expand = 0;
            }

            if (mydayexpand == 1) {
                $('#mydayglobalmenumh_newsfeed').fadeOut();
                $('#mydayglobalmenumh_video').fadeOut();
                $('#mydayglobalmenumh_hospitalmap').fadeOut();
                $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mydayglobalmenu_background").css("opacity", "0.6");
                mydayexpand = 0;
            }
            $("#mydayglobalmenu").width('84px');
            $("#mydayglobalmenu").height('51px');
            $("#mydayglobalmenu").css('margin-top', '-50px');
            $("#mydayglobalmenu").css('margin-left', '454px');
            $("#mydayglobalmenu_background").fadeOut();
            $('#mydayglobalmenu_mydaySchedule').fadeOut();
            $('#mydayglobalmenu_mycareteam').fadeOut();
            $('#mydayglobalmenu_myclinicalDashboard').fadeOut();
            $('#mydayglobalmenu_cafe').fadeOut();
            $('#mydayglobalmenu_myhospital').fadeOut();
            $('#mydayglobalmenu_mypatientsurveys').fadeOut();

            $('#mydayglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            mydayglobalmenu_visible = 1;
        }
    });
    $("#mydayglobalmenu").unbind().on('click',function () {
        if (mydayglobalmenu_visible == 0) {
            if (mydayexpand == 1) {
                $('#mydayglobalmenumh_newsfeed').fadeOut();
                $('#mydayglobalmenumh_video').fadeOut();
                $('#mydayglobalmenumh_hospitalmap').fadeOut();
                $('#mydayglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mydayglobalmenu_background").css("opacity", "0.6");
                mydayexpand = 0;

            }
            $("#mydayglobalmenu").width('84px');
            $("#mydayglobalmenu").height('51px');
            $("#mydayglobalmenu").css('margin-top', '-50px');
            $("#mydayglobalmenu").css('margin-left', '454px');
            $("#mydayglobalmenu_background").fadeOut();
            $('#mydayglobalmenu_mydaySchedule').fadeOut();
            $('#mydayglobalmenu_mycareteam').fadeOut();
            $('#mydayglobalmenu_myclinicalDashboard').fadeOut();
            $('#mydayglobalmenu_cafe').fadeOut();
            $('#mydayglobalmenu_myhospital').fadeOut();
            $('#mydayglobalmenu_mypatientsurveys').fadeOut();

            $('#mydayglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            mydayglobalmenu_visible = 1;
        }
        else if (mydayglobalmenu_visible == 1) {
            $("#mydayglobalmenu").width('122px');
            $("#mydayglobalmenu").height('72px');
            $("#mydayglobalmenu").css('margin-top', '-72px');
            $("#mydayglobalmenu").css('margin-left', '435px');
            $("#mydayglobalmenu_background").fadeIn();

            $('#mydayglobalmenu_mydaySchedule').fadeIn();
            $('#mydayglobalmenu_mycareteam').fadeIn();
            $('#mydayglobalmenu_myclinicalDashboard').fadeIn();
            $('#mydayglobalmenu_cafe').fadeIn();
            $('#mydayglobalmenu_myhospital').fadeIn();
            $('#mydayglobalmenu_mypatientsurveys').fadeIn();
            $('#mydayglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            mydayglobalmenu_visible = 0;
        }
    });



    $("#mydayframe2_animateclick").on('click', function () {
        $('#myday_blocker').fadeIn();
        $("#mydayframe2_animateclick").fadeOut('slow');
        $("#myday_frame2details").fadeOut('slow', function () {
            $('#myday_remainingframe').animate({
                marginLeft: '0px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    $('#myday_blocker').fadeOut();
                }
            });
        });
    });
    $("#mydayframe3_seg1_check").on('click', function () {
        var progressvalue;
        progressvalue = $("#mydayseg3_loader").val();
        if (mydayframe3_seg1_check == "false") {

            $("#mydayframe3_seg1_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark.png')");
            mydayframe3_seg1_check = "true";



            progressvalue = parseInt(progressvalue) + 40;
            $('.dial')
    .val(progressvalue)
    .trigger('change');

        }
        else {
            $("#mydayframe3_seg1_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark_blank.png')");
            mydayframe3_seg1_check = "false";
            progressvalue = parseInt(progressvalue) - 40;
            $('.dial')
    .val(progressvalue)
    .trigger('change');
        }



    });


    $("#mydayframe3_task1_check").on('click', function () {
        var progressvalue;
        progressvalue = $("#mydayseg3_loader").val();
        if (mydayframe3_task1_check == "false") {
            $("#mydayframe3_task1_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark.png')");
            mydayframe3_task1_check = "true";

            progressvalue = parseInt(progressvalue) + 30;
            $('.dial')
    .val(progressvalue)
    .trigger('change');
        }
        else {
            $("#mydayframe3_task1_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark_blank.png')");
            mydayframe3_task1_check = "false";

            progressvalue = parseInt(progressvalue) - 30;
            $('.dial')
    .val(progressvalue)
    .trigger('change');
        }
    });
    $("#mydayframe3_task2_check").on('click', function () {
        var progressvalue;
        progressvalue = $("#mydayseg3_loader").val();
        if (mydayframe3_task2_check == "false") {
            $("#mydayframe3_task2_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark.png')");
            mydayframe3_task2_check = "true";
            progressvalue = parseInt(progressvalue) + 30;
            $('.dial')
    .val(progressvalue)
    .trigger('change');
        }
        else {
            $("#mydayframe3_task2_check").css("background-image", "url('/www/img/mydayschedule/Activity/TickMark_blank.png')");
            mydayframe3_task2_check = "false";
            progressvalue = parseInt(progressvalue) - 30;
            $('.dial')
    .val(progressvalue)
    .trigger('change');
        }
    });




    $("#mydayframe4seg2_nopain").on('click', function () {

        $("#mydayframe4seg2_nopain").css("background-image", "url('/www/img/mydayschedule/How do u feel/no-pain.png')");

        $("#mydayframe4seg2_severepain").css("background-image", "url('/www/img/mydayschedule/nonactive/SeverePain.png')");
        $("#mydayframe4seg2_moderate").css("background-image", "url('/www/img/mydayschedule/nonactive/Moderate.png')");

    });
    $("#mydayframe4seg2_moderate").on('click', function () {

        $("#mydayframe4seg2_moderate").css("background-image", "url('/www/img/mydayschedule/How do u feel/Moderate.png')");

        $("#mydayframe4seg2_nopain").css("background-image", "url('/www/img/mydayschedule/nonactive/no-pain.png')");
        $("#mydayframe4seg2_severepain").css("background-image", "url('/www/img/mydayschedule/nonactive/SeverePain.png')");

    });
    $("#mydayframe4seg2_severepain").on('click', function () {

        $("#mydayframe4seg2_severepain").css("background-image", "url('/www/img/mydayschedule/How do u feel/SeverePain.png')");

        $("#mydayframe4seg2_nopain").css("background-image", "url('/www/img/mydayschedule/nonactive/no-pain.png')");
        $("#mydayframe4seg2_moderate").css("background-image", "url('/www/img/mydayschedule/nonactive/Moderate.png')");
    });
    //Loader 1 dial value
    $(function () {
        $(".dial").knob(


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


        $('.dial').trigger(
        'configure',
    {

        "fgColor": "#ff567e",
        "skin": "tron",
        'width': 131,
        'height': 131,

    }
);
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


    //Calling the date and time function

    mydaytimerIncrement();
    //calling the date and time function
    getDateTime();
    function mydaytimerIncrement() {

        //calling the date and time function

        var resultContainer = document.getElementById('mydayweatherdetailsinfo');
        var weathericonholder = document.getElementById('mydayweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('mydaylocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#mydayweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
        idleIntervaldatetimeweather = setTimeout(mydaytimerIncrement, 1000);

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
        var datetimetext = document.getElementById("mydayresultContainertime");
        var dateformattext = document.getElementById("mydayresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }

    
});





