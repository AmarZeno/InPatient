var idleInterval;
var datetimeinterval;
var idleIntervaldatetimeweather;
var doctorsexpanded = "false";
var doctorschatpopup = "false";
var nurseschatpopup = "false";
var nursesexpanded = "false";
var myCareTeam_Data1;
var globalmenu_visible = 1;
var mycareexpand = 0;
var mycareglobalaccessentertainment_expand=0;
var mycareglobalsurvey_expand=0;
$(document).on("pagehide", "#myCareTeamPage", function (event) {


    if (mycareexpand == 1) {
        $('#mycareglobalmenumh_newsfeed').fadeOut();
        $('#mycareglobalmenumh_video').fadeOut();
        $('#mycareglobalmenumh_hospitalmap').fadeOut();
        $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
        $("#mycareglobalmenu_background").css("opacity", "0.6");
        mycareexpand = 0;

    }
    if (mycareglobalaccessentertainment_expand == 1) {
        $('#mycareglobalmenucg_shoppingmall').fadeOut();
        $('#mycareglobalmenucg_cafengift').fadeOut();
        $('#mycareglobalmenucg_restaurant').fadeOut();
        $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
        $("#mycareglobalmenu_background").css("opacity", "0.6");
        mycareglobalaccessentertainment_expand = 0;

    }
    if (mycareglobalsurvey_expand == 1) {
        $('#mycareglobalmenus_generalsurveys').fadeOut();
        $('#mycareglobalmenus_dailysurveys').fadeOut();
        $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
        $("#mycareglobalmenu_background").css("opacity", "0.6");
        mycareglobalsurvey_expand = 0;
    }
    $('#mycareteam_MyNurses').fadeOut('slow');

    $('#mycareteam_MyDoctor').fadeOut('slow');

    $("#mycareteamDoctors_title").fadeOut("slow");
    $("#mycareteamDoctors_subtitle").fadeOut("slow");

    //Removing that green selector
    myCareTeam_Data1.viewModel.myCareTeam_data([
                    { title: "My Doctor", picture: "img/mycareteam/icon_1.png", colorvalue: "#6f7271" },
            { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
            { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }

    ]);

    clearTimeout(datetimeinterval);

    clearTimeout(idleInterval);

    clearTimeout(idleIntervaldatetimeweather);

    


    if (doctorschatpopup == "true") {
        $('#mycareteamMyDoctors_popup').animate({
            marginLeft: '1394px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                doctorschatpopup = "false";
            }
        });

    }
    if (nurseschatpopup == "true") {
        $('#mycareteamMyNurses_popup').animate({
            marginLeft: '1394px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                nurseschatpopup = "false";
            }
        });

    }
    if (nursesexpanded == "true") {
        $('#mycareteam_blocker').fadeIn();
        $("#mycareteamMyNurses_detailsview").fadeOut("slow");
        $("#mycareteammynurses_scrollcontent_button").fadeOut("slow");
        //Jquery UI - Moving the divs
        $('#mycareteam_MyNurses').animate({
            marginLeft: '550px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                nursesexpanded = "false";
                $('#mycareteam_blocker').fadeOut();
            }
        });



       
    }

    if (doctorsexpanded == "true") {
        $('#mycareteam_blocker').fadeIn();
        $("#mycareteamMyDoctors_detailsview").fadeOut("slow");
        $("#mycareteam_scrollcontent_button").fadeOut("slow");
        //Jquery UI - Moving the divs
        $('#mycareteam_MyDoctor').animate({
            marginLeft: '550px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                doctorsexpanded = "false";
                $('#mycareteam_blocker').fadeOut();
            }
        });
    }

    if (globalmenu_visible == 0) {
        $("#mycareglobalmenu").width('84px');
        $("#mycareglobalmenu").height('51px');
        $("#mycareglobalmenu").css('margin-top', '4px');
        $("#mycareglobalmenu").css('margin-left', '454px');
        $("#mycareglobalmenu_background").fadeOut();
        $('#mycareglobalmenu_mydaySchedule').fadeOut();
        $('#mycareglobalmenu_mycareteam').fadeOut();
        $('#mycareglobalmenu_myclinicalDashboard').fadeOut();
        $('#mycareglobalmenu_cafe').fadeOut();
        $('#mycareglobalmenu_myhospital').fadeOut();
        $('#mycareglobalmenu_mypatientsurveys').fadeOut();

        $('#mycareglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        globalmenu_visible = 1;
    }
});
$(document).on("pageinit", "#myCareTeamPage", function (event) {
   
    function myCareTeamViewModel() {

        var self = this;
        ko.bindingHandlers.preventBubble = {
            init: function (element, valueAccessor) {
                var eventName = ko.utils.unwrapObservable(valueAccessor());
                ko.utils.registerEventHandler(element, eventName, function (event) {
                    event.cancelBubble = true;
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    }
                });
            }
        };

        self.mycareteamMyNurses_popupscrollclick = function () {
            $('#mycareteam_blocker').fadeIn();
            $('#mycareteamMyNurses_popup').animate({
                marginLeft: '1394px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    $('#mycareteam_blocker').fadeOut();
                }
            });

        }

        self.mycareteamMyDoctor_popupscrollclick = function () {
            $('#mycareteam_blocker').fadeIn();
            $('#mycareteamMyDoctors_popup').animate({
                marginLeft: '1394px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },
                complete: function () {
                    $('#mycareteam_blocker').fadeOut();
                }
            });

        }
        self.mycareteamframe1_click = function () {
            $('#mycareteam_blocker').fadeIn();
            if (doctorschatpopup == "true") {
                $('#mycareteamMyDoctors_popup').animate({
                    marginLeft: '1394px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },
                    complete: function () {
                        doctorschatpopup = "false";
                        $('#mycareteam_blocker').fadeOut();
                    }
                });
                
            }
           if (nurseschatpopup == "true") {
                $('#mycareteamMyNurses_popup').animate({
                    marginLeft: '1394px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },
                    complete: function () {
                        nurseschatpopup = "false";
                        $('#mycareteam_blocker').fadeOut();
                    }
                });

            }
           if (nursesexpanded == "true") {
               $('#mycareteam_blocker').fadeIn();
                $("#mycareteamMyNurses_detailsview").fadeOut("slow");
                $("#mycareteammynurses_scrollcontent_button").fadeOut("slow");
                //Jquery UI - Moving the divs
                $('#mycareteam_MyNurses').animate({
                    marginLeft: '550px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },
                    complete: function () {
                        nursesexpanded = "false";
                        $('#mycareteam_blocker').fadeOut();

                    }
                });
            
            }

           if (doctorsexpanded == "true") {
               $('#mycareteam_blocker').fadeIn();
                $("#mycareteamMyDoctors_detailsview").fadeOut("slow");
                $("#mycareteam_scrollcontent_button").fadeOut("slow");
                //Jquery UI - Moving the divs
                $('#mycareteam_MyDoctor').animate({
                    marginLeft: '550px'
                }, {
                    duration: 800,
                    specialEasing: {
                        marginLeft: 'swing'
                    },
                    complete: function () {
                        doctorsexpanded = "false";
                        $('#mycareteam_blocker').fadeOut();

                    }
                });
            }

           if (this.title == "My Doctor") {
               $('#mycareteam_blocker').fadeIn();
                myCareTeam_Data1.viewModel.myCareTeam_data([
                    { title: "My Doctor", picture: "img/mycareteam/icon_1green.png", colorvalue: "#75b91f" },
            { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
            { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }

                ]);
                
                $('#mycareteam_MyNurses').fadeOut('slow', function () {

                    $('#mycareteam_MyDoctor').fadeIn('slow');
                });
                $("#mycareteamDoctors_title").text('My Doctors');
                $("#mycareteamDoctors_subtitle").text('Doctors Im Currently Engaged With & All Other Doctors');
                $("#mycareteamDoctors_title").fadeIn("slow");
                $("#mycareteamDoctors_subtitle").fadeIn("slow");
                
               
                $('#mycareteam_blocker').fadeOut();
            }
           else if (this.title == "My Nurses") {
                $('#mycareteam_blocker').fadeIn();
                myCareTeam_Data1.viewModel.myCareTeam_data([
                    { title: "My Doctor", picture: "img/mycareteam/icon_1.png", colorvalue: "#6f7271" },
            { title: "My Nurses", picture: "img/mycareteam/icon_2green.png", colorvalue: "#75b91f" },
            { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }

                ]);
              
            

                $('#mycareteam_MyDoctor').fadeOut('slow', function () {
           
                    $('#mycareteam_MyNurses').fadeIn('slow');
                });
                $("#mycareteamDoctors_title").text('My Nurses');
                $("#mycareteamDoctors_subtitle").text('Nurses Im Currently Engaged With & All Other Nurses');
                $("#mycareteamDoctors_title").fadeIn("slow");
                $("#mycareteamDoctors_subtitle").fadeIn("slow");
                // $("#mycareteam_MyNurses").fadeIn("slow");
                $('#mycareteam_blocker').fadeOut();

            }
            else if (this.title == "My Hospitals") {
                myCareTeam_Data1.viewModel.myCareTeam_data([
                   { title: "My Doctor", picture: "img/mycareteam/icon_1.png", colorvalue: "#6f7271" },
           { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
           { title: "My Hospitals", picture: "img/mycareteam/icon_3green.png", colorvalue: "#75b91f" }

                ]);


                $('#mycareteam_MyDoctor').fadeOut('slow');

                    $('#mycareteam_MyNurses').fadeOut('slow');
               
                $("#mycareteamDoctors_title").text('My Hospitals');
                $("#mycareteamDoctors_subtitle").text('Hospitals Im Currently Engaged With');
                $("#mycareteamDoctors_title").fadeIn("slow");
                $("#mycareteamDoctors_subtitle").fadeIn("slow");

                $('#mycareteam_blocker').fadeOut();
            }
           
        }
        self.mycareteamMyDoctor_popupchatclick = function () {           
            
            $.mobile.pageContainer.pagecontainer("change", $("#myCareTeam_ChatPage"), { changeHash: false });         
            
        }
        self.mycareteamMyNurses_chatclick = function () {
            nurseschatpopup = "true";
            sessionStorage.setItem("chat_picture", this.picture);
            sessionStorage.setItem("chat_title", this.title);
            sessionStorage.setItem("chat_subtitle", this.subtitle);
            sessionStorage.setItem("chat_onlinestatus", this.onlinestatus);
            sessionStorage.setItem("chat_onlinepicture", this.onlinepicture);
            myCareTeam_Data1.viewModel.mycareteammynurses_popup_data([
                { title: this.title, subtitle: this.subtitle, picture: this.picture, onlinestatus: this.onlinestatus, onlinepicture: this.onlinepicture }
            ]);
            //Jquery UI - Moving the divs
            $('#mycareteamMyNurses_popup').animate({
                marginLeft: '1094px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {

                }
            });

        }

        self.mycareteamMyDoctor_chatclick = function () {
            doctorschatpopup = "true";
            sessionStorage.setItem("chat_picture", this.picture);
            sessionStorage.setItem("chat_title", this.title);
            sessionStorage.setItem("chat_subtitle", this.subtitle);
            sessionStorage.setItem("chat_onlinestatus", this.onlinestatus);
            sessionStorage.setItem("chat_onlinepicture", this.onlinepicture);
            myCareTeam_Data1.viewModel.mycareteammydoctor_popup_data([
                { title: this.title, subtitle: this.subtitle, picture: this.picture, onlinestatus: this.onlinestatus, onlinepicture: this.onlinepicture }
            ]);
            //Jquery UI - Moving the divs
            $('#mycareteamMyDoctors_popup').animate({
                marginLeft: '1094px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {
                   
                }
            });

        }


        self.myCareTeamMyNurses_click = function () {

            $('#mycareteam_blocker').fadeIn();
         
            myCareTeam_Data1.viewModel.mycareteammynurses_detailview_data([
               { title: this.title, subtitle: this.subtitle, description: this.description, picture: this.picture,onlinepicture:this.onlinepicture }
            ]);
            //Jquery UI - Moving the divs
            $('#mycareteam_MyNurses').animate({
                marginLeft: '1120px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {
                    $("#mycareteamMyNurses_detailsview").fadeIn("slow");
                    $("#mycareteammynurses_scrollcontent_button").fadeIn("slow");
                    nursesexpanded = "true";
                    $('#mycareteam_blocker').fadeOut();
                }
            });
        }


        self.myCareTeamMyDoctor_click = function () {
           
            $('#mycareteam_blocker').fadeIn();
            myCareTeam_Data1.viewModel.mycareteammydoctor_detailview_data([
                { title: this.title, subtitle: this.subtitle, description: this.description, picture: this.picture, onlinepicture: this.onlinepicture }
            ]);
            
            //Jquery UI - Moving the divs
            $('#mycareteam_MyDoctor').animate({
                marginLeft: '1120px'
            }, {
                duration: 800,
                specialEasing: {
                    marginLeft: 'swing'
                },

                complete: function () {
                    $("#mycareteamMyDoctors_detailsview").fadeIn("slow");
                    $("#mycareteam_scrollcontent_button").fadeIn("slow");
                    doctorsexpanded = "true";
                    $('#mycareteam_blocker').fadeOut();
                }
            });
        }
        self.mycareteammynurses_detailview_data = ko.observableArray([
            { title: "", subtitle: "", description: "", picture: "" }
        ]);
        self.mycareteammydoctor_detailview_data = ko.observableArray([
            { title: "", subtitle: "", description: "", picture: "" }
        ]);
        self.mycareteammynurses_popup_data = ko.observableArray([
           { title: "", subtitle: "", description: "", picture: "" }
        ]);
        self.mycareteammydoctor_popup_data = ko.observableArray([
           { title: "", subtitle: "", description: "", picture: "" }
        ]);

        self.myCareTeam_data = ko.observableArray([
            { title: "My Doctor", picture: "img/mycareteam/icon_1.png", colorvalue: "#6f7271" },
            { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
            { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }
        ]);

        self.myCareTeamMyNurses_data = [
               { title: "Christine L", subtitle: "Clinical Nurse Specialist", experience: "19 Years Experience", university: "MSN", picture: "img/mycareteam/Nurse_1.png", onlinepicture: "img/mycareteam/Nurse_1green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
                  { title: "Sara P", subtitle: "Cardiac Care Nurse", experience: "8 Years Experience", university: "DSN-DNP", picture: "img/mycareteam/Nurse_2.png", onlinepicture: "img/mycareteam/Nurse_2green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
                  
           { title: "Dan J", subtitle: "Psychiatric Nurse", experience: "6 Years Experience", university: "RN", picture: "img/mycareteam/Nurse_3.png", onlinepicture: "img/mycareteam/Nurse_3green.png", onlinestatus: "url('/www/img/mycareteam/online_icon.png')", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." }
              ];
        self.myCareTeamMyDoctor_data = [
             { title: "Dr. John Bergin", subtitle: "Cardiologists", experience: "19 Years Experience", university: "University of California", picture: "img/mycareteam/pic_1.png", onlinepicture: "img/mycareteam/pic_1green.png", onlinestatus: "url('/www/img/mycareteam/online_icon.png')", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
            { title: "Dr. Marissa Pinto", subtitle: "Gynecologist", experience: "6 Years Experience", university: "University of Texas", picture: "img/mycareteam/pic_2.png", onlinepicture: "img/mycareteam/pic_2green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
                  { title: "Dr. Jennina D'souza", subtitle: "Plastic Surgeon", experience: "10 Years Experience", university: "University of Texas", picture: "img/mycareteam/pic_3.png", onlinepicture: "img/mycareteam/pic_3green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
            { title: "Dr. Fatima", subtitle: "Hematologist", experience: "8 Years Experience", university: "University of California", picture: "img/mycareteam/pic_4.png", onlinepicture: "img/mycareteam/pic_4green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." },
                  { title: "Dr. Melvin Jacobs", subtitle: "Radiologist", experience: "14 Years Experience", university: "University of Texas", picture: "img/mycareteam/pic_5.png", onlinepicture: "img/mycareteam/pic_5green.png", onlinestatus: "", buttonpicture: "url('/www/img/mycareteam/speak_icon_1.png')", description: "Our heart is one of the most important organ in our body and because of which we live. The heart pumps out blood to various organs helping them to function properly. A cardiologist is a person who treats the problems relating to heart and blood vessels. Dr. John Bergin is an MD and FACC in cardiology who works in St. Thomas Hospital, Nashville. Dr.Bergin is considered as one of the best cardio specialist who treats and gives the best solutions to his patients. His specialities are advanced heart failure and transplant cardiology, cardiovascular diseases, and special expertise in diagnostic catheterization." }
        ];


    }

    //Main Execution
    function initialize() {
        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#mycareteamHost')[0];
        //apply the binding again 
        ko.applyBindings(myCareTeam_Data1.viewModel, element);

    }




    myCareTeam_Data1 = { viewModel: new myCareTeamViewModel() };
    //call knockout
    initialize();

});

$(document).on('pageshow', '#myCareTeamPage', function (data) {
   
    $("#mycareglobalmenu_myhospital").hover(
 function () {
     $('#mycareglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (mycareexpand == 0) {
         $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#mycareglobalmenu_cafe").hover(
    function () {
        $('#mycareglobalmenu_cafe').css("background-color", "#000000");
    }, function () {
        if (mycareglobalaccessentertainment_expand == 0) {
            $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
        }
    }
    );

    $("#mycareglobalmenu_mypatientsurveys").hover(
   function () {
       $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (mycareglobalaccessentertainment_expand == 0) {
           $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#mycareglobalmenu_myhospital').unbind().on('click', function () {
        if (mycareglobalaccessentertainment_expand == 1) {
            $('#mycareglobalmenucg_shoppingmall').fadeOut();
            $('#mycareglobalmenucg_cafengift').fadeOut();
            $('#mycareglobalmenucg_restaurant').fadeOut();
            $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalaccessentertainment_expand = 0;

        }
        if (mycareglobalsurvey_expand == 1) {
            $('#mycareglobalmenus_generalsurveys').fadeOut();
            $('#mycareglobalmenus_dailysurveys').fadeOut();
            $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalsurvey_expand = 0;
        }
        if (mycareexpand == 0) {
            $('#mycareglobalmenumh_newsfeed').fadeIn();
            $('#mycareglobalmenumh_video').fadeIn();
            $('#mycareglobalmenumh_hospitalmap').fadeIn();
            $('#mycareglobalmenu_myhospital').css("background-color", "#000000");
            $("#mycareglobalmenu_background").css("opacity", "0.8");
            mycareexpand = 1;
        }
        else if (mycareexpand == 1) {
            $('#mycareglobalmenumh_newsfeed').fadeOut();
            $('#mycareglobalmenumh_video').fadeOut();
            $('#mycareglobalmenumh_hospitalmap').fadeOut();
            $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareexpand = 0;
        }

    });
    $('#mycareglobalmenu_cafe').unbind().on('click', function () {
        if (mycareexpand == 1) {
            $('#mycareglobalmenumh_newsfeed').fadeOut();
            $('#mycareglobalmenumh_video').fadeOut();
            $('#mycareglobalmenumh_hospitalmap').fadeOut();
            $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareexpand = 0;
        }
        if (mycareglobalsurvey_expand == 1) {
            $('#mycareglobalmenus_generalsurveys').fadeOut();
            $('#mycareglobalmenus_dailysurveys').fadeOut();
            $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalsurvey_expand = 1;
        }
        if (mycareglobalaccessentertainment_expand == 0) {
            $('#mycareglobalmenucg_shoppingmall').fadeIn();
            $('#mycareglobalmenucg_cafengift').fadeIn();
            $('#mycareglobalmenucg_restaurant').fadeIn();
            $('#mycareglobalmenu_cafe').css("background-color", "#000000");
            $("#mycareglobalmenu_background").css("opacity", "0.8");
            mycareglobalaccessentertainment_expand = 1;
        }
        else if (mycareglobalaccessentertainment_expand == 1) {
            $('#mycareglobalmenucg_shoppingmall').fadeOut();
            $('#mycareglobalmenucg_cafengift').fadeOut();
            $('#mycareglobalmenucg_restaurant').fadeOut();
            $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalaccessentertainment_expand = 0;
        }
    });
    $('#mycareglobalmenu_mypatientsurveys').unbind().on('click', function() {
        if (mycareglobalaccessentertainment_expand == 1) {
            $('#mycareglobalmenucg_shoppingmall').fadeOut();
            $('#mycareglobalmenucg_cafengift').fadeOut();
            $('#mycareglobalmenucg_restaurant').fadeOut();
            $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalaccessentertainment_expand = 0;
        }
       
        if (mycareexpand == 1) {
            $('#mycareglobalmenumh_newsfeed').fadeOut();
            $('#mycareglobalmenumh_video').fadeOut();
            $('#mycareglobalmenumh_hospitalmap').fadeOut();
            $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareexpand = 0;
        }
        if (mycareglobalsurvey_expand == 0) {
            $('#mycareglobalmenus_generalsurveys').fadeIn();
            $('#mycareglobalmenus_dailysurveys').fadeIn();
            $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#mycareglobalmenu_background").css("opacity", "0.8");
            mycareglobalsurvey_expand = 1;
        }
        else if (mycareglobalsurvey_expand == 1) {
            $('#mycareglobalmenus_generalsurveys').fadeOut();
            $('#mycareglobalmenus_dailysurveys').fadeOut();
            $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycareglobalmenu_background").css("opacity", "0.6");
            mycareglobalsurvey_expand = 0;
        }
        

    });


    myCareTeam_Data1.viewModel.myCareTeam_data([
                  { title: "My Doctor", picture: "img/mycareteam/icon_1green.png", colorvalue: "#75b91f" },
          { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
          { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }

    ]);

    $('#mycareteam_MyNurses').fadeOut('slow', function () {

        $('#mycareteam_MyDoctor').fadeIn('slow');
    });
    $("#mycareteamDoctors_title").text('My Doctors');
    $("#mycareteamDoctors_subtitle").text('Doctors Im Currently Engaged With & All Other Doctors');
    $("#mycareteamDoctors_title").fadeIn("slow");
    $("#mycareteamDoctors_subtitle").fadeIn("slow");

    $("#mycareglobalmenu_background").on('click', function () {
        if (globalmenu_visible == 0) {
            if (mycareexpand == 1) {
                $('#mycareglobalmenumh_newsfeed').fadeOut();
                $('#mycareglobalmenumh_video').fadeOut();
                $('#mycareglobalmenumh_hospitalmap').fadeOut();
                $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareexpand = 0;

            }
            if (mycareglobalaccessentertainment_expand == 1) {
                $('#mycareglobalmenucg_shoppingmall').fadeOut();
                $('#mycareglobalmenucg_cafengift').fadeOut();
                $('#mycareglobalmenucg_restaurant').fadeOut();
                $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareglobalaccessentertainment_expand = 0;
            }
            if (mycareglobalsurvey_expand == 1) {
                $('#mycareglobalmenus_generalsurveys').fadeOut();
                $('#mycareglobalmenus_dailysurveys').fadeOut();
                $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareglobalsurvey_expand = 0;
            }
            $("#mycareglobalmenu").width('84px');
            $("#mycareglobalmenu").height('51px');
            $("#mycareglobalmenu").css('margin-top', '7px');
            $("#mycareglobalmenu").css('margin-left', '454px');
            $("#mycareglobalmenu_background").fadeOut();
            $('#mycareglobalmenu_mydaySchedule').fadeOut();
            $('#mycareglobalmenu_mycareteam').fadeOut();
            $('#mycareglobalmenu_myclinicalDashboard').fadeOut();
            $('#mycareglobalmenu_cafe').fadeOut();
            $('#mycareglobalmenu_myhospital').fadeOut();
            $('#mycareglobalmenu_mypatientsurveys').fadeOut();

            $('#mycareglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            globalmenu_visible = 1;
        }
    });
    $("#mycareglobalmenu").unbind().on('click',function () {
        if (globalmenu_visible == 0) {
            if (mycareexpand == 1) {
                $('#mycareglobalmenumh_newsfeed').fadeOut();
                $('#mycareglobalmenumh_video').fadeOut();
                $('#mycareglobalmenumh_hospitalmap').fadeOut();
                $('#mycareglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareexpand = 0;
            }
            if (mycareglobalaccessentertainment_expand == 1) {
                $('#mycareglobalmenucg_shoppingmall').fadeOut();
                $('#mycareglobalmenucg_cafengift').fadeOut();
                $('#mycareglobalmenucg_restaurant').fadeOut();
                $('#mycareglobalmenu_cafe').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareglobalaccessentertainment_expand = 0;

            }
            if (mycareglobalsurvey_expand == 1) {
                $('#mycareglobalmenus_generalsurveys').fadeOut();
                $('#mycareglobalmenus_dailysurveys').fadeOut();
                $('#mycareglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#mycareglobalmenu_background").css("opacity", "0.6");
                mycareglobalsurvey_expand = 0;
            }
            $("#mycareglobalmenu").width('84px');
            $("#mycareglobalmenu").height('51px');
            $("#mycareglobalmenu").css('margin-top', '4px');
            $("#mycareglobalmenu").css('margin-left', '454px');
           $("#mycareglobalmenu_background").fadeOut();
            $('#mycareglobalmenu_mydaySchedule').fadeOut();
            $('#mycareglobalmenu_mycareteam').fadeOut();
            $('#mycareglobalmenu_myclinicalDashboard').fadeOut();
            $('#mycareglobalmenu_cafe').fadeOut();
            $('#mycareglobalmenu_myhospital').fadeOut();
            $('#mycareglobalmenu_mypatientsurveys').fadeOut();

            $('#mycareglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            globalmenu_visible = 1;
        }
        else if (globalmenu_visible == 1) {
            $("#mycareglobalmenu").width('122px');
            $("#mycareglobalmenu").height('72px');
            $("#mycareglobalmenu").css('margin-top', '-16px');
            $("#mycareglobalmenu").css('margin-left', '435px');
            $("#mycareglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#mycareglobalmenu_mydaySchedule').fadeIn();
            $('#mycareglobalmenu_mycareteam').fadeIn();
            $('#mycareglobalmenu_myclinicalDashboard').fadeIn();
            $('#mycareglobalmenu_cafe').fadeIn();
            $('#mycareglobalmenu_myhospital').fadeIn();
            $('#mycareglobalmenu_mypatientsurveys').fadeIn();
       
            $('#mycareglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            globalmenu_visible = 0;
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




    

    $("#mycareteam_scrollcontent_button").on("click", function () {
        mycareteamscrollbuttonhandler();
    });
    
    $("#mycareteammynurses_scrollcontent_button").on("click", function () {
        $('#mycareteam_blocker').fadeIn();
        $("#mycareteamMyNurses_detailsview").fadeOut("slow");
        $("#mycareteammynurses_scrollcontent_button").fadeOut("slow");
        //Jquery UI - Moving the divs
        $('#mycareteam_MyNurses').animate({
            marginLeft: '550px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                nursesexpanded = "false";
                $('#mycareteam_blocker').fadeOut();
            }
        });
    });

    function mycareteamscrollbuttonhandler()
    {
        $('#mycareteam_blocker').fadeIn();
        $("#mycareteamMyDoctors_detailsview").fadeOut("slow");
        $("#mycareteam_scrollcontent_button").fadeOut("slow");
        //Jquery UI - Moving the divs
        $('#mycareteam_MyDoctor').animate({
            marginLeft: '550px'
        }, {
            duration: 800,
            specialEasing: {
                marginLeft: 'swing'
            },
            complete: function () {
                doctorsexpanded = "false";
                $('#mycareteam_blocker').fadeOut();
            }
        });
    }




   
    mycareteamtimerIncrement();
    //calling the date and time function
    getDateTime();
    function mycareteamtimerIncrement() {


        
        var resultContainer = document.getElementById('mycareweatherdetailsinfo');
        var weathericonholder = document.getElementById('mycareweather_icon');
        var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
        var locationinfo = document.getElementById('mycarelocationinfo');
        if (resultContainer)
            resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
        if (weathericonholder)
            $('#mycareweather_icon').css("background-image", weathericonholdercss);
        // weathericonholder.src = window.localStorage.getItem("weathericonholder");
        if (locationinfo)
            locationinfo.innerHTML = window.localStorage.getItem("locationinfo");

        idleIntervaldatetimeweather = setTimeout(mycareteamtimerIncrement, 1000);
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
        var datetimetext = document.getElementById("mycareresultContainertime");
        var dateformattext = document.getElementById("mycareresultContainerdate");
        if (datetimetext)
            datetimetext.innerText = dateTime.toString();
        if (dateformattext)
            dateformattext.innerText = dateformat.toString();
        datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
    }
});