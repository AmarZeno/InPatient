var patientsurveydetailsViewModelDetails;
var nanobar;
var patientsurveydetailsglobalmenu_visible = 1;

var patientsurveydetailsdatetimeinterval;
var idleIntervaldatetimeweather;
var patientsurveydetailsglobalmenu_visible = 1;
var patientsurveydetailsexpand = 0;
var patientsurveydetailsglobalaccessentertainment_expand = 0;
var patientsurveydetailsglobalsurvey_expand = 0;
$(document).on("pagehide", "#patientsurvey_details", function (event) {
    clearTimeout(idleIntervaldatetimeweather);
    clearTimeout(patientsurveydetailsdatetimeinterval);
    if (patientsurveydetailsglobalmenu_visible == 0) {
        if (patientsurveydetailsexpand == 1) {
            $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
            $('#patientsurveydetailsglobalmenumh_video').fadeOut();
            $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
            $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
            patientsurveydetailsexpand = 0;
            // $("#globalmenu_background").css("opacity", "0.8");
        }
        if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
            $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
            $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
            $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
            $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
            $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
            patientsurveydetailsglobalaccessentertainment_expand = 0;

        }
        if (patientsurveydetailsglobalsurvey_expand == 1) {
            $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
            $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
            $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
            patientsurveydetailsglobalsurvey_expand = 0;
        }
        $("#patientsurveydetailsglobalmenu").width('84px');
        $("#patientsurveydetailsglobalmenu").height('51px');
        $("#patientsurveydetailsglobalmenu").css('margin-top', '720px');
        $("#patientsurveydetailsglobalmenu").css('margin-left', '454px');
        $("#patientsurveydetailsglobalmenu_background").fadeOut();
        $('#patientsurveydetailsglobalmenu_mydaySchedule').fadeOut();
        $('#patientsurveydetailsglobalmenu_mycareteam').fadeOut();
        $('#patientsurveydetailsglobalmenu_myclinicalDashboard').fadeOut();
        $('#patientsurveydetailsglobalmenu_cafe').fadeOut();
        $('#patientsurveydetailsglobalmenu_myhospital').fadeOut();
        $('#patientsurveydetailsglobalmenu_mypatientsurveys').fadeOut();

        $('#patientsurveydetailsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        patientsurveydetailsglobalmenu_visible = 1;

    }
});
$(document).on("pagebeforeshow", "#patientsurvey_details", function (event) {
    $('#mynano').remove();
    var options = {
        bg: '#ed5c26',

        // leave target blank for global nanobar
        target: document.getElementById('patientsurveydetails_progressbar'),

        // id for new nanobar
        id: 'mynano'
    };
    nanobar = new Nanobar(options);
    nanobar.go(0);
    
});
$(document).on("pageinit", "#patientsurvey_details", function (event) {
    //Progress Bar
    var options = {
        bg: '#ed5c26',

        // leave target blank for global nanobar
        target: document.getElementById('patientsurveydetails_progressbar'),

        // id for new nanobar
        id: 'mynano'
    };
    nanobar = new Nanobar(options);
    nanobar.go(0);
    //End of progress


    function patientSurveyDetailsViewModel() {
        var self = this;
        
        self.categoryindex = ko.observable(sessionStorage.getItem("category"));
        self.questionindex = ko.observable(1);
        
        self.nextquestion = function () {
          var answer1= patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check();
          var answer2 = patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check();
          var answer3 = patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check();
          var answer4 = patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check();
            if (answer1 == "yes" || answer2 == "yes" || answer3 == "yes" || answer4 == "yes") {
                if (self.questionindex() <= 10) {
                    self.questionindex(self.questionindex() + 1);

                    var checkprogress = self.questionindex() * 10;

                    //increase the progress bar by syncing with past value. Prevent additional increment
                    if (checkprogress > patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].progressvalue()) {
                        patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].progressvalue(patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].progressvalue() + 10);

                        nanobar.go(patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].progressvalue());
                    }
                    //Save the progress values of each categories for accessibility to the previous pages
                    sessionStorage.setItem("category1progress", patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][1].progressvalue());
                    sessionStorage.setItem("category2progress", patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][2].progressvalue());
                    sessionStorage.setItem("category3progress", patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][3].progressvalue());
                    sessionStorage.setItem("category4progress", patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][4].progressvalue());
                    sessionStorage.setItem("category5progress", patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][5].progressvalue());
                    
                }
            }
        }
        self.happysmileyclick=function() {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bgopacity("0.3");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bgopacity("1");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bgopacity("1");
        }
        self.sadsmileyclick=function() {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bgopacity("1");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bgopacity("0.3");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bgopacity("1");

        }
        self.normalsmileyclick=function() {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bgopacity("1");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bgopacity("1");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bgopacity("0.3");

        }
        self.radio1click= function() {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bg("url('/www/img/patientsurveys/new_screens_survey_Redio_checked.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
           
        }
        self.radio2click = function () {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bg("url('/www/img/patientsurveys/new_screens_survey_Redio_checked.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
        }
        self.radio3click = function () {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bg("url('/www/img/patientsurveys/new_screens_survey_Redio_checked.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
        }
        self.radio4click = function () {
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3check("no");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4check("yes");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer1bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer2bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer3bg("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')");
            patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][self.categoryindex()].qmeta[self.questionindex()].answer4bg("url('/www/img/patientsurveys/new_screens_survey_Redio_checked.png')");
        }
        self.patientsurveydetails_data = ko.observableArray([{
            "1":
                {
                    title: "Health Plan Survey",
                    progressvalue:ko.observable(0),
                    picture: "url('/www/img/patientsurveys/new_screens_survey_image_1.png')",
                    qmeta: {
                        "1": { questionno: "01", question: "Do you have a health plan?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"),answer1bgopacity:ko.observable("1"),answer2bgopacity:ko.observable("1"),answer3bgopacity:ko.observable("1")},
                        "2": { questionno: "02", question: "In the last 12 months, did you try to get any kind of care, tests, or treatment hrough your health plan?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "3": { questionno: "03", question: "How often was it easy to get the care, tests or treatment you needed through your health plan?", answertype: "radio", answer1: "Never", answer2: "Sometimes", answer3: "Usually", answer4: "Always", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "4": { questionno: "04", question: "Did you try to get information or help from your health plan’s customer care?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "5": { questionno: "05", question: "In the last 12 months how often did the health’s plan customer service give you the information or help you needed?", answertype: "radio", answer1: "Never", answer2: "Sometimes", answer3: "Usually", answer4: "Always", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "6": { questionno: "06", question: "Did the health plan’s customer service staff treat you with courtesy and respect?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "7": { questionno: "07", question: "Did the  health plan give you any forms to fill out?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "8": { questionno: "08", question: "Are the health plan forms easy to fill?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "9": { questionno: "09", question: "Are you satisfied with the health plan you have?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable(""), answer2check: ko.observable(""), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "10": { questionno: "10", question: "Rate your health plan", answertype: "radio", answer1: "1", answer2: "2", answer3: "3", answer4: "4", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "11": { questionno: "Survey Complete", question: "Thank you for taking part in the survey", answertype: "", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: "", answer2check: "", answer3check: "", answer4check:"", answer: "", answer1bg: "", answer2bg: "", answer3bg: "", answer4bg: "", answer1bgopacity: "", answer2bgopacity: "", answer3bgopacity: "" }
                  
                    }
                }
            ,
            "2":
                {
                    title: "Hospital Infrastructure",
                    progressvalue: ko.observable(0),
                    picture: "url('/www/img/patientsurveys/new_screens_survey_image_5.png')",
                    qmeta: {
                        "1": { questionno: "01", question: "Are you satisfied with the cleanliness and hygiene of the hospital?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "2": { questionno: "02", question: "During the stay at the hospital , you were comfortable and satisfactorily looked after?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "3": { questionno: "03", question: "During the stay how often your room and bathroom were kept clean?", answertype: "radio", answer1: "Never", answer2: "Sometimes", answer3: "Usually", answer4: "Always", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "4": { questionno: "04", question: "Were the check ups done regularly?", answertype: "radio", answer1: "Never", answer2: "Sometimes", answer3: "Usually", answer4: "Always", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "5": { questionno: "05", question: "Are you satisfied  with tests performed by the hospital?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "6": { questionno: "06", question: "Evaluate the professional proficiency?", answertype: "radio", answer1: "1", answer2: "2", answer3: "3", answer4: "4", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "7": { questionno: "07", question: "Are you satisfied with the hospital adequate staff resources?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "8": { questionno: "08", question: "Were the documentation of the patient prepared accurately and completely?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "9": { questionno: "09", question: "Are you satisfied with the services of the hospital?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable(""), answer2check: ko.observable(""), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "10": { questionno: "10", question: "Would you recommend the hospital to your family and friends?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "11": { questionno: "Survey Complete", question: "Thank you for taking part in the survey", answertype: "", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: "", answer2check: "", answer3check: "", answer4check: "", answer: "", answer1bg: "", answer2bg: "", answer3bg: "", answer4bg: "", answer1bgopacity: "", answer2bgopacity: "", answer3bgopacity: "" }
                    }
                }
            ,
            "3":
                {
                    title: "Patient Satisfaction",
                    progressvalue: ko.observable(0),
                    picture: "url('/www/img/patientsurveys/new_screens_survey_image_3.png')",
                    qmeta: {
                        "1": { questionno: "01", question: "Ease of making appointments for checkups?", answertype: "radio", answer1: "Very Easy", answer2: "Moderate", answer3: "Not at all Easy", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "2": { questionno: "02", question: "Ease of contacting you doctor and speaking to him directly?", answertype: "radio", answer1: "Very Easy", answer2: "Moderate", answer3: "Not at all Easy", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "3": { questionno: "03", question: "Ease in obtaining follow up information and care?", answertype: "radio", answer1: "Very Easy", answer2: "Moderate", answer3: "Not at all Easy", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "4": { questionno: "04", question: "Are you satisfied  with the way the doctor involves other doctor and caregivers in your care when needed?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "5": { questionno: "05", question: "How caring is the doctor?", answertype: "radio", answer1: "Very Caring", answer2: "Moderate", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "6": { questionno: "06", question: "How caring is the medical staff?", answertype: "radio", answer1: "Very Caring", answer2: "Moderate", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "7": { questionno: "07", question: "Would you recommend your doctor to your family or friends?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "8": { questionno: "08", question: "Satisfied with  the hospital office and hygiene?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "9": { questionno: "09", question: "Was the staff courteous, polite, friendly and helpful during your stay?", answertype: "radio", answer1: "Very much", answer2: "Moderate", answer3: "Not at all", answer4: "", answer1check: ko.observable(""), answer2check: ko.observable(""), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "10": { questionno: "10", question: "Are you satisfied with the service provided by the hospital?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "11": { questionno: "Survey Complete", question: "Thank you for taking part in the survey", answertype: "", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: "", answer2check: "", answer3check: "", answer4check: "", answer: "", answer1bg: "", answer2bg: "", answer3bg: "", answer4bg: "", answer1bgopacity: "", answer2bgopacity: "", answer3bgopacity: "" }
                    }
                }
            ,
            "4":
                {
                    title: "Caregiver Satisfaction",
                    progressvalue: ko.observable(0),
                    picture: "url('/www/img/patientsurveys/new_screens_survey_image_4.png')",
                    qmeta: {
                        "1": { questionno: "01", question: "Is the caregiver able to understand your problem?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "2": { questionno: "02", question: "How friendly is the caregiver?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "3": { questionno: "03", question: "Are they courteous and polite?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "4": { questionno: "04", question: "How knowledgeable is the caregivers?", answertype: "radio", answer1: "Very Much", answer2: "Moderately", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "5": { questionno: "05", question: "How easy to get the caregiver any help?", answertype: "radio", answer1: "Very Much", answer2: "Moderately", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "6": { questionno: "06", question: "How responsive are the caregivers of the hospital?", answertype: "radio", answer1: "Very Much", answer2: "Moderately", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "7": { questionno: "07", question: "How well does the caregiver explain to take your medicines?", answertype: "radio", answer1: "Very Much", answer2: "Moderately", answer3: "Not at all", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "8": { questionno: "08", question: "Does your caregiver listen to you?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "9": { questionno: "09", question: "Are they able to help you in case of emergency?", answertype: "radio", answer1: "Very Much", answer2: "Moderately", answer3: "Not at all", answer4: "", answer1check: ko.observable(""), answer2check: ko.observable(""), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "10": { questionno: "10", question: "Are you satisfied with the efficiency of caregiver?", answertype: "smiley", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "11": { questionno: "Survey Complete", question: "Thank you for taking part in the survey", answertype: "", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: "", answer2check: "", answer3check: "", answer4check: "", answer: "", answer1bg: "", answer2bg: "", answer3bg: "", answer4bg: "", answer1bgopacity: "", answer2bgopacity: "", answer3bgopacity: "" }
                    }
                }
            ,
            "5":
                {
                    title: "Physical Health",
                    progressvalue: ko.observable(0),
                    picture: "url('/www/img/patientsurveys/new_screens_survey_image_2.png')",
                    qmeta: {
                        "1": { questionno: "01", question: "In General how will you rate your overall health?", answertype: "radio", answer1: "Excellent", answer2: "Good", answer3: "Fair", answer4: "Poor", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "2": { questionno: "02", question: "Rate your overall mental or emotional health?", answertype: "radio", answer1: "Excellent", answer2: "Good", answer3: "Fair", answer4: "Poor", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "3": { questionno: "03", question: "In the past 12 months have you seen a doctor 3 or more times for the same condition?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "4": { questionno: "04", question: "Is this the condition or problem that has lasted for at least 3 months?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "5": { questionno: "05", question: "Are you suffering from any illness, injury or condition that needs immediate care?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "6": { questionno: "06", question: "Do you have any health problem that needs special therapy?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "7": { questionno: "07", question: "Are you currently on any kind of medication or treatment?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "8": { questionno: "08", question: "Have you completed your routine check ups?", answertype: "radio", answer1: "Yes", answer2: "No", answer3: "", answer4: "", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "9": { questionno: "09", question: "How long has it been since your most recent visit?", answertype: "radio", answer1: "Less than a month", answer2: "More than a month and less than 3 months", answer3: "More than 3 months and less than 6 months", answer4: "", answer1check: ko.observable(""), answer2check: ko.observable(""), answer3check: ko.observable(""), answer4check: ko.observable(""), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "10": { questionno: "10", question: "Rate your treatment", answertype: "radio", answer1: "1", answer2: "2", answer3: "3", answer4: "4", answer1check: ko.observable("no"), answer2check: ko.observable("no"), answer3check: ko.observable("no"), answer4check: ko.observable("no"), answer: "", answer1bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer2bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer3bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer4bg: ko.observable("url('/www/img/patientsurveys/new_screens_survey_Redio_uncheck.png')"), answer1bgopacity: ko.observable("1"), answer2bgopacity: ko.observable("1"), answer3bgopacity: ko.observable("1") },
                        "11": { questionno: "Survey Complete", question: "Thank you for taking part in the survey", answertype: "", answer1: "", answer2: "", answer3: "", answer4: "", answer1check: "", answer2check: "", answer3check: "", answer4check: "", answer: "", answer1bg: "", answer2bg: "", answer3bg: "", answer4bg: "", answer1bgopacity: "", answer2bgopacity: "", answer3bgopacity: "" }
                    }
                }

        }]);
        
    }

    patientsurveydetailsViewModelDetails = { viewModel: new patientSurveyDetailsViewModel() };
    function initialize() {
        console.log("restaurant Knockout activated");
        // Activates knockout.js

        // get the DOM element
        var element = $('#patientsurveydetails_maindiv')[0];
        //call clean node, kind of unbind

        //  ko.cleanNode(element);

        //apply the binding again 
        ko.applyBindings(patientsurveydetailsViewModelDetails.viewModel, element);

    }

    initialize();


    
    
});
$(document).on('pageshow', "#patientsurvey_details", function (event) {

   
    //Reset the question index to one
    patientsurveydetailsViewModelDetails.viewModel.questionindex(1);
    

    //Change the value of the category index
    patientsurveydetailsViewModelDetails.viewModel.categoryindex(sessionStorage.getItem("category"));

    //change the nanobar value
    
  var currentprogressvalue = patientsurveydetailsViewModelDetails.viewModel.patientsurveydetails_data()[0][patientsurveydetailsViewModelDetails.viewModel.categoryindex()].progressvalue();
  nanobar.go(currentprogressvalue);

    //Global menu events
  $("#patientsurveydetailsglobalmenu_myhospital").hover(
function () {
    $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#000000");
}, function () {
    if (patientsurveydetailsexpand == 0) {
        $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
    }
}
);
  $("#patientsurveydetailsglobalmenu_cafe").hover(
   function () {
       $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#000000");
   }, function () {
       if (patientsurveydetailsglobalaccessentertainment_expand == 0) {
           $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
       }
   }
   );

  $("#patientsurveydetailsglobalmenu_mypatientsurveys").hover(
 function () {
     $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#000000");
 }, function () {
     if (patientsurveydetailsglobalaccessentertainment_expand == 0) {
         $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
     }
 }
 );
  $('#patientsurveydetailsglobalmenu_myhospital').unbind().on('click', function () {
      if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
          $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
          $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
          $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
          $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalaccessentertainment_expand = 0;

      }
      if (patientsurveydetailsglobalsurvey_expand == 1) {
          $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
          $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalsurvey_expand = 0;
      }
      if (patientsurveydetailsexpand == 0) {
          $('#patientsurveydetailsglobalmenumh_newsfeed').fadeIn();
          $('#patientsurveydetailsglobalmenumh_video').fadeIn();
          $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeIn();
          $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#000000");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.8");
          patientsurveydetailsexpand = 1;
      }
      else if (patientsurveydetailsexpand == 1) {
          $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
          $('#patientsurveydetailsglobalmenumh_video').fadeOut();
          $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
          $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsexpand = 0;
      }

  });
  $('#patientsurveydetailsglobalmenu_cafe').unbind().on('click', function () {
      if (patientsurveydetailsexpand == 1) {
          $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
          $('#patientsurveydetailsglobalmenumh_video').fadeOut();
          $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
          $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsexpand = 0;
      }
      if (patientsurveydetailsglobalsurvey_expand == 1) {
          $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
          $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalsurvey_expand = 1;
      }
      if (patientsurveydetailsglobalaccessentertainment_expand == 0) {
          $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeIn();
          $('#patientsurveydetailsglobalmenucg_cafengift').fadeIn();
          $('#patientsurveydetailsglobalmenucg_restaurant').fadeIn();
          $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#000000");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.8");
          patientsurveydetailsglobalaccessentertainment_expand = 1;
      }
      else if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
          $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
          $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
          $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
          $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalaccessentertainment_expand = 0;
      }
  });
  $('#patientsurveydetailsglobalmenu_mypatientsurveys').unbind().on('click', function () {
      if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
          $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
          $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
          $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
          $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalaccessentertainment_expand = 0;
      }

      if (patientsurveydetailsexpand == 1) {
          $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
          $('#patientsurveydetailsglobalmenumh_video').fadeOut();
          $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
          $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsexpand = 0;
      }
      if (patientsurveydetailsglobalsurvey_expand == 0) {
          $('#patientsurveydetailsglobalmenus_generalsurveys').fadeIn();
          $('#patientsurveydetailsglobalmenus_dailysurveys').fadeIn();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#000000");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.8");
          patientsurveydetailsglobalsurvey_expand = 1;
      }
      else if (patientsurveydetailsglobalsurvey_expand == 1) {
          $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
          $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
          $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
          patientsurveydetailsglobalsurvey_expand = 0;
      }


  });

  $("#patientsurveydetailsglobalmenu_background").on('click', function () {
      if (patientsurveydetailsglobalmenu_visible == 0) {
          if (patientsurveydetailsexpand == 1) {
              $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
              $('#patientsurveydetailsglobalmenumh_video').fadeOut();
              $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
              $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsexpand = 0;
              // $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.8");
          }
          if (patientsurveydetailsglobalsurvey_expand == 1) {
              $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
              $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
              $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsglobalsurvey_expand = 0;
          }
          if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
              $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
              $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
              $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
              $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsglobalaccessentertainment_expand = 0;
          }
          $("#patientsurveydetailsglobalmenu").width('84px');
          $("#patientsurveydetailsglobalmenu").height('51px');
          $("#patientsurveydetailsglobalmenu").css('margin-top', '720px');
          $("#patientsurveydetailsglobalmenu").css('margin-left', '454px');
          $("#patientsurveydetailsglobalmenu_background").fadeOut();
          $('#patientsurveydetailsglobalmenu_mydaySchedule').fadeOut();
          $('#patientsurveydetailsglobalmenu_mycareteam').fadeOut();
          $('#patientsurveydetailsglobalmenu_myclinicalDashboard').fadeOut();
          $('#patientsurveydetailsglobalmenu_cafe').fadeOut();
          $('#patientsurveydetailsglobalmenu_myhospital').fadeOut();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').fadeOut();

          $('#patientsurveydetailsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
          patientsurveydetailsglobalmenu_visible = 1;

      }
  });
  $("#patientsurveydetailsglobalmenu").unbind().on('click', function () {
      if (patientsurveydetailsglobalmenu_visible == 0) {
          if (patientsurveydetailsexpand == 1) {
              $('#patientsurveydetailsglobalmenumh_newsfeed').fadeOut();
              $('#patientsurveydetailsglobalmenumh_video').fadeOut();
              $('#patientsurveydetailsglobalmenumh_hospitalmap').fadeOut();
              $('#patientsurveydetailsglobalmenu_myhospital').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsexpand = 0;

          }
          if (patientsurveydetailsglobalsurvey_expand == 1) {
              $('#patientsurveydetailsglobalmenus_generalsurveys').fadeOut();
              $('#patientsurveydetailsglobalmenus_dailysurveys').fadeOut();
              $('#patientsurveydetailsglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsglobalsurvey_expand = 0;
          }
          if (patientsurveydetailsglobalaccessentertainment_expand == 1) {
              $('#patientsurveydetailsglobalmenucg_shoppingmall').fadeOut();
              $('#patientsurveydetailsglobalmenucg_cafengift').fadeOut();
              $('#patientsurveydetailsglobalmenucg_restaurant').fadeOut();
              $('#patientsurveydetailsglobalmenu_cafe').css("background-color", "#156c8a");
              $("#patientsurveydetailsglobalmenu_background").css("opacity", "0.6");
              patientsurveydetailsglobalaccessentertainment_expand = 0;
          }
          $("#patientsurveydetailsglobalmenu").width('84px');
          $("#patientsurveydetailsglobalmenu").height('51px');
          $("#patientsurveydetailsglobalmenu").css('margin-top', '720px');
          $("#patientsurveydetailsglobalmenu").css('margin-left', '454px');
          $("#patientsurveydetailsglobalmenu_background").fadeOut();
          $('#patientsurveydetailsglobalmenu_mydaySchedule').fadeOut();
          $('#patientsurveydetailsglobalmenu_mycareteam').fadeOut();
          $('#patientsurveydetailsglobalmenu_myclinicalDashboard').fadeOut();
          $('#patientsurveydetailsglobalmenu_cafe').fadeOut();
          $('#patientsurveydetailsglobalmenu_myhospital').fadeOut();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').fadeOut();

          $('#patientsurveydetailsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
          patientsurveydetailsglobalmenu_visible = 1;
      }
      else if (patientsurveydetailsglobalmenu_visible == 1) {
          $("#patientsurveydetailsglobalmenu").width('122px');
          $("#patientsurveydetailsglobalmenu").height('72px');
          $("#patientsurveydetailsglobalmenu").css('margin-top', '700px');
          $("#patientsurveydetailsglobalmenu").css('margin-left', '435px');

          $("#patientsurveydetailsglobalmenu_background").fadeIn();
          // $("#patientsurveydetailsglobalmenu").css('width','122px','height','72px','margin-top','-66px');
          $('#patientsurveydetailsglobalmenu_mydaySchedule').fadeIn();
          $('#patientsurveydetailsglobalmenu_mycareteam').fadeIn();
          $('#patientsurveydetailsglobalmenu_myclinicalDashboard').fadeIn();
          $('#patientsurveydetailsglobalmenu_cafe').fadeIn();
          $('#patientsurveydetailsglobalmenu_myhospital').fadeIn();
          $('#patientsurveydetailsglobalmenu_mypatientsurveys').fadeIn();

          $('#patientsurveydetailsglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
          patientsurveydetailsglobalmenu_visible = 0;
      }
  });

    //Calling the date and time function


  patientsurveydetailstimerIncrement();
  getDateTime();
  function patientsurveydetailstimerIncrement() {


      //calling the date and time function

      var resultContainer = document.getElementById('patientsurveydetailsweatherdetailsinfo');
      var weathericonholder = document.getElementById('patientsurveydetailsweather_icon');
      var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
      var locationinfo = document.getElementById('patientsurveydetailslocationinfo');
      if (resultContainer)
          resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
      if (weathericonholder)
          $('#patientsurveysweather_icon').css("background-image", weathericonholdercss);
      // weathericonholder.src = window.localStorage.getItem("weathericonholder");
      if (locationinfo)
          locationinfo.innerHTML = window.localStorage.getItem("locationinfo");
      idleIntervaldatetimeweather = setTimeout(patientsurveydetailstimerIncrement, 1000);
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
      var datetimetext = document.getElementById("patientsurveydetailsresultContainertime");
      var dateformattext = document.getElementById("patientsurveydetailsresultContainerdate");
      if (datetimetext)
          datetimetext.innerText = dateTime.toString();
      if (dateformattext)
          dateformattext.innerText = dateformat.toString();
      patientsurveydetailsdatetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
  }

});