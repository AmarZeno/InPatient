var idleInterval;
var idleIntervaldatetimeweather;
var datetimeinterval;
var myCareTeamChatpage_Data1;
var mycarechatglobalmenu_visible = 1;
var mycarechatexpand = 0;
var mycarechatglobalaccessentertainment_expand = 0;
var mycarechatglobalsurvey_expand = 0;
$(document).on("pagehide", "#myCareTeam_ChatPage", function (event) {
    if (mycarechatexpand == 1) {
        $('#mycarechatglobalmenumh_newsfeed').fadeOut();
        $('#mycarechatglobalmenumh_video').fadeOut();
        $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
        $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
        $("#mycarechatglobalmenu_background").css("opacity", "0.6");
        mycarechatexpand = 0;

    }
    if (mycarechatglobalaccessentertainment_expand == 1) {
        $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
        $('#mycarechatglobalmenucg_cafengift').fadeOut();
        $('#mycarechatglobalmenucg_restaurant').fadeOut();
        $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
        $("#mycarechatglobalmenu_background").css("opacity", "0.6");
        mycarechatglobalaccessentertainment_expand = 0;

    }
    if (mycarechatglobalsurvey_expand == 1) {
        $('#mycarechatglobalmenus_generalsurveys').fadeOut();
        $('#mycarechatglobalmenus_dailysurveys').fadeOut();
        $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
        $("#mycarechatglobalmenu_background").css("opacity", "0.6");
        mycarechatglobalsurvey_expand = 0;
    }
    clearTimeout(datetimeinterval);
    clearTimeout(idleIntervaldatetimeweather);
    clearTimeout(idleInterval);

    if (mycarechatglobalmenu_visible == 0) {
        $("#mycarechatglobalmenu").width('84px');
        $("#mycarechatglobalmenu").height('51px');
        $("#mycarechatglobalmenu").css('margin-top', '555px');
        $("#mycarechatglobalmenu").css('margin-left', '454px');
        $("#mycarechatglobalmenu_background").fadeOut();
        $('#mycarechatglobalmenu_mydaySchedule').fadeOut();
        $('#mycarechatglobalmenu_mycareteam').fadeOut();
        $('#mycarechatglobalmenu_myclinicalDashboard').fadeOut();
        $('#mycarechatglobalmenu_cafe').fadeOut();
        $('#mycarechatglobalmenu_myhospital').fadeOut();
        $('#mycarechatglobalmenu_mypatientsurveys').fadeOut();

        $('#mycarechatglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
        mycarechatglobalmenu_visible = 1;
    }
});


$(document).on("pageinit", "#myCareTeam_ChatPage", function (event) {
    
    //Event for pulling secure messages
    jQuery.ajax({
        url: "https://thor2.pschealth.com/PatientPortalAPI/api/Member/23/Messages",
        dataType: 'json',
        type: "GET",
        accepts: "application/json",
        headers: { "Content-type": "application/json" },
        success: function (data, textStatus, jqXHR) {
            // Calls Success. If data found on the service then it would be inside "DATA" variable
           
            myCareTeamChatpage_Data1.viewModel.myCareTeamMy_ChatPage_data(data.reverse());
           // $('#mycareteamChatPage_doctoricon').attr("src", chat_picture);
           // alert(data); // ALERT the data variable
        },
        error: function (xhr, error, code) {
            // SOMETHING WRONG WITH YOUR CALL.
           // alert(error);
        },
        complete: function () {
           // alert("Process Completed.");
        }
    });


    function myCareTeam_ChatPage_ViewModel() {

        var self = this;
        self.mycareteamchat_buttonclick = function () {
            if (!($('#mycateteamchat_input').val() == '') || ($('#mycateteamchat_input').val() == null)) {
                if (!$('#mycateteamchat_input').val().match(/\S/)) {
                  //  alert('Please send a valid text');
                    return false;
                } else {

                    var _url = 'https://thor2.pschealth.com/PatientPortalAPI/api/Member/23/Message';

                    var _dataObject = {
                        "ToMemberId": 1,
                        "FormId": 1,
                        "Fields": [
                          {
                              "Id": "Subject",
                              "Value": "Patient"
                          },
                          {
                              "Id": "Body",
                              "Value": $('#mycateteamchat_input').val()
                          }
                        ]
                    };
                    $.ajax({
                        url: _url,
                        dataType: 'json',
                        type: 'PUT',
                        data: JSON.stringify(_dataObject),
                        accepts: "application/json",
                        beforeSend: function (x) {
                            x.setRequestHeader("Content-Type", "application/json");
                        },
                        success: function (data) {
                            //Event for pulling secure messages
                            jQuery.ajax({
                                url: "https://thor2.pschealth.com/PatientPortalAPI/api/Member/23/Messages",
                                dataType: 'json',
                                type: "GET",
                                accepts: "application/json",
                                headers: { "Content-type": "application/json" },
                                success: function (data, textStatus, jqXHR) {
                                    // Calls Success. If data found on the service then it would be inside "DATA" variable

                                    myCareTeamChatpage_Data1.viewModel.myCareTeamMy_ChatPage_data(data.reverse());


                                   // $('#mycareteamChatPage_doctoricon').attr("src", chat_picture);
                                    $('#mycateteamchat_input').val("");
                                    // alert(data); // ALERT the data variable
                                },
                                error: function (xhr, error, code) {
                                    // SOMETHING WRONG WITH YOUR CALL.
                                    alert(error);
                                },
                                complete: function () {
                                    // alert("Process Completed.");
                                }
                            });

                        },
                        error: function (xhr, error, code) {
                            // SOMETHING WRONG WITH YOUR CALL.
                           // alert(xhr);
                        },
                        complete: function () {
                           // alert("Process Completed.");
                        }
                    });
                }

                
            }
            

        }
        self.profilepicture = ko.observableArray([
            {patientpicture:"",doctorpicture:""}
        ]);
        self.test_data = ko.observableArray([
            { title: "My Doctor", picture: "img/mycareteam/icon_1.png", colorvalue: "#6f7271" },
            { title: "My Nurses", picture: "img/mycareteam/icon_2.png", colorvalue: "#6f7271" },
            { title: "My Hospitals", picture: "img/mycareteam/icon_3.png", colorvalue: "#6f7271" }
        ]);
        self.myCareTeam_ChatPage_data = ko.observableArray();
        self.myCareTeamMy_ChatPage_data = ko.observableArray([
              
  {
      Id: "2",
      Category: "Sent",
      Read: true,
      Subject: "Online Bill Pay",
      FromMember: {
          MemberId: 1,
          FirstName: "John",
          LastName: "Doe",
          PhotoUrl: null,
          Address: null
      },
      ToMember: {
          MemberId: 2,
          FirstName: "Billing",
          LastName: "User",
          PhotoUrl: null,
          Address: {
              Address1: "1234 Warren Pkwy",
              Address2: null,
              Address3: null,
              City: "Frisco",
              State: "Texas",
              ZipCode: "75011",
              Country: null
          }
      },
      Sent: "2012-09-05T12:24:22.15",
      FormId: "4",
      ReplyToId: null,
      Body: "<table class='MessageBody'> <tr><th>Date:</th><td>9/21/2012</td></tr> <tr><th>Invoice #:</th><td>8898687</td></tr> <tr><th>Dollar Amount:</th><td>25.00</td></tr></table>",
      BodyAsList: [
        {
            Id: "Subject",
            Caption: "Subject",
            Value: ""
        },
        {
            Id: "Body",
            Caption: "Body",
            Value: ""
        }
      ],
      "WorkflowState": null
  }

        ]);

       
    }
    //Main Execution
    function initialize() {
        console.log("Knockout activated");
        // Activates knockout.js

        // get the DOM element     
        var element = $('#mycareteam_chatpage_maindiv')[0];
        //apply the binding again 
        ko.applyBindings(myCareTeamChatpage_Data1.viewModel, element);

    }

    myCareTeamChatpage_Data1 = { viewModel: new myCareTeam_ChatPage_ViewModel() };
    initialize();

    
    
    
});

$(document).on('pageshow', '#myCareTeam_ChatPage', function (data) {



    $("#mycarechatglobalmenu_myhospital").hover(
 function () {
     $('#mycarechatglobalmenu_myhospital').css("background-color", "#000000");
 }, function () {
     if (mycarechatexpand == 0) {
         $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
     }
 }
);
    $("#mycarechatglobalmenu_cafe").hover(
   function () {
       $('#mycarechatglobalmenu_cafe').css("background-color", "#000000");
   }, function () {
       if (mycarechatglobalaccessentertainment_expand == 0) {
           $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
       }
   }
   );

    $("#mycarechatglobalmenu_mypatientsurveys").hover(
   function () {
       $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#000000");
   }, function () {
       if (mycarechatglobalaccessentertainment_expand == 0) {
           $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
       }
   }
   );
    $('#mycarechatglobalmenu_myhospital').unbind().on('click', function () {
        if (mycarechatglobalaccessentertainment_expand == 1) {
            $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
            $('#mycarechatglobalmenucg_cafengift').fadeOut();
            $('#mycarechatglobalmenucg_restaurant').fadeOut();
            $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalaccessentertainment_expand = 0;

        }
        if (mycarechatglobalsurvey_expand == 1) {
            $('#mycarechatglobalmenus_generalsurveys').fadeOut();
            $('#mycarechatglobalmenus_dailysurveys').fadeOut();
            $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalsurvey_expand = 0;
        }
        if (mycarechatexpand == 0) {
            $('#mycarechatglobalmenumh_newsfeed').fadeIn();
            $('#mycarechatglobalmenumh_video').fadeIn();
            $('#mycarechatglobalmenumh_hospitalmap').fadeIn();
            $('#mycarechatglobalmenu_myhospital').css("background-color", "#000000");
            $("#mycarechatglobalmenu_background").css("opacity", "0.8");
            mycarechatexpand = 1;
        }
        else if (mycarechatexpand == 1) {
            $('#mycarechatglobalmenumh_newsfeed').fadeOut();
            $('#mycarechatglobalmenumh_video').fadeOut();
            $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
            $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatexpand = 0;

        }

    });
    
    $('#mycarechatglobalmenu_cafe').unbind().on('click', function () {
        if (mycarechatexpand == 1) {
            $('#mycarechatglobalmenumh_newsfeed').fadeOut();
            $('#mycarechatglobalmenumh_video').fadeOut();
            $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
            $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatexpand = 0;
        }
        if (mycarechatglobalsurvey_expand == 1) {
            $('#mycarechatglobalmenus_generalsurveys').fadeOut();
            $('#mycarechatglobalmenus_dailysurveys').fadeOut();
            $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalsurvey_expand = 1;
        }
        if (mycarechatglobalaccessentertainment_expand == 0) {
            $('#mycarechatglobalmenucg_shoppingmall').fadeIn();
            $('#mycarechatglobalmenucg_cafengift').fadeIn();
            $('#mycarechatglobalmenucg_restaurant').fadeIn();
            $('#mycarechatglobalmenu_cafe').css("background-color", "#000000");
            $("#mycarechatglobalmenu_background").css("opacity", "0.8");
            mycarechatglobalaccessentertainment_expand = 1;
        }
        else if (mycarechatglobalaccessentertainment_expand == 1) {
            $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
            $('#mycarechatglobalmenucg_cafengift').fadeOut();
            $('#mycarechatglobalmenucg_restaurant').fadeOut();
            $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalaccessentertainment_expand = 0;
        }
    });
    $('#mycarechatglobalmenu_mypatientsurveys').unbind().on('click', function () {
        if (mycarechatglobalaccessentertainment_expand == 1) {
            $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
            $('#mycarechatglobalmenucg_cafengift').fadeOut();
            $('#mycarechatglobalmenucg_restaurant').fadeOut();
            $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalaccessentertainment_expand = 0;
        }

        if (mycarechatexpand == 1) {
            $('#mycarechatglobalmenumh_newsfeed').fadeOut();
            $('#mycarechatglobalmenumh_video').fadeOut();
            $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
            $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatexpand = 0;
        }
        if (mycarechatglobalsurvey_expand == 0) {
            $('#mycarechatglobalmenus_generalsurveys').fadeIn();
            $('#mycarechatglobalmenus_dailysurveys').fadeIn();
            $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#000000");
            $("#mycarechatglobalmenu_background").css("opacity", "0.8");
            mycarechatglobalsurvey_expand = 1;
        }
        else if (mycarechatglobalsurvey_expand == 1) {
            $('#mycarechatglobalmenus_generalsurveys').fadeOut();
            $('#mycarechatglobalmenus_dailysurveys').fadeOut();
            $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
            $("#mycarechatglobalmenu_background").css("opacity", "0.6");
            mycarechatglobalsurvey_expand = 0;
        }


    });
    $("#mycarechatglobalmenu_background").on('click', function () {
        if (mycarechatglobalmenu_visible == 0) {
            if (mycarechatexpand == 1) {
                $('#mycarechatglobalmenumh_newsfeed').fadeOut();
                $('#mycarechatglobalmenumh_video').fadeOut();
                $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
                $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatexpand = 0;

            }
            if (mycarechatglobalaccessentertainment_expand == 1) {
                $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
                $('#mycarechatglobalmenucg_cafengift').fadeOut();
                $('#mycarechatglobalmenucg_restaurant').fadeOut();
                $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatglobalaccessentertainment_expand = 0;
            }
            if (mycarechatglobalsurvey_expand == 1) {
                $('#mycarechatglobalmenus_generalsurveys').fadeOut();
                $('#mycarechatglobalmenus_dailysurveys').fadeOut();
                $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatglobalsurvey_expand = 0;
            }
            $("#mycarechatglobalmenu").width('84px');
            $("#mycarechatglobalmenu").height('51px');
            $("#mycarechatglobalmenu").css('margin-top', '555px');
            $("#mycarechatglobalmenu").css('margin-left', '454px');
             $("#mycarechatglobalmenu_background").fadeOut();
            $('#mycarechatglobalmenu_mydaySchedule').fadeOut();
            $('#mycarechatglobalmenu_mycareteam').fadeOut();
            $('#mycarechatglobalmenu_myclinicalDashboard').fadeOut();
            $('#mycarechatglobalmenu_cafe').fadeOut();
            $('#mycarechatglobalmenu_myhospital').fadeOut();
            $('#mycarechatglobalmenu_mypatientsurveys').fadeOut();

            $('#mycarechatglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            mycarechatglobalmenu_visible = 1;
        }
    });
    $("#mycarechatglobalmenu").unbind().on('click',function () {
        if (mycarechatglobalmenu_visible == 0) {
            if (mycarechatexpand == 1) {
                $('#mycarechatglobalmenumh_newsfeed').fadeOut();
                $('#mycarechatglobalmenumh_video').fadeOut();
                $('#mycarechatglobalmenumh_hospitalmap').fadeOut();
                $('#mycarechatglobalmenu_myhospital').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatexpand = 0;

            }
            if (mycarechatglobalaccessentertainment_expand == 1) {
                $('#mycarechatglobalmenucg_shoppingmall').fadeOut();
                $('#mycarechatglobalmenucg_cafengift').fadeOut();
                $('#mycarechatglobalmenucg_restaurant').fadeOut();
                $('#mycarechatglobalmenu_cafe').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatglobalaccessentertainment_expand = 0;
            }
            if (mycarechatglobalsurvey_expand == 1) {
                $('#mycarechatglobalmenus_generalsurveys').fadeOut();
                $('#mycarechatglobalmenus_dailysurveys').fadeOut();
                $('#mycarechatglobalmenu_mypatientsurveys').css("background-color", "#156c8a");
                $("#mycarechatglobalmenu_background").css("opacity", "0.6");
                mycarechatglobalsurvey_expand = 0;
            }
            $("#mycarechatglobalmenu").width('84px');
            $("#mycarechatglobalmenu").height('51px');
            $("#mycarechatglobalmenu").css('margin-top', '555px');
            $("#mycarechatglobalmenu").css('margin-left', '454px');
            $("#mycarechatglobalmenu_background").fadeOut();
            $('#mycarechatglobalmenu_mydaySchedule').fadeOut();
            $('#mycarechatglobalmenu_mycareteam').fadeOut();
            $('#mycarechatglobalmenu_myclinicalDashboard').fadeOut();
            $('#mycarechatglobalmenu_cafe').fadeOut();
            $('#mycarechatglobalmenu_myhospital').fadeOut();
            $('#mycarechatglobalmenu_mypatientsurveys').fadeOut();

            $('#mycarechatglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_06.png)');
            mycarechatglobalmenu_visible = 1;
        }
        else if (mycarechatglobalmenu_visible == 1) {
            $("#mycarechatglobalmenu").width('122px');
            $("#mycarechatglobalmenu").height('72px');
            $("#mycarechatglobalmenu").css('margin-top', '534px');
            $("#mycarechatglobalmenu").css('margin-left', '435px');
            $("#mycarechatglobalmenu_background").fadeIn();
            // $("#globalmenu").css('width','122px','height','72px','margin-top','-66px');
            $('#mycarechatglobalmenu_mydaySchedule').fadeIn();
            $('#mycarechatglobalmenu_mycareteam').fadeIn();
            $('#mycarechatglobalmenu_myclinicalDashboard').fadeIn();
            $('#mycarechatglobalmenu_cafe').fadeIn();
            $('#mycarechatglobalmenu_myhospital').fadeIn();
            $('#mycarechatglobalmenu_mypatientsurveys').fadeIn();
           
            $('#mycarechatglobalmenu').css('background-image', 'url(/www/img/globalmenu/Hub_global_ashu_03.png)');
            mycarechatglobalmenu_visible = 0;
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
   
   



   var chat_picture= sessionStorage.getItem("chat_picture");
   var chat_title= sessionStorage.getItem("chat_title");
   var chat_subtitle= sessionStorage.getItem("chat_subtitle");
   var chat_onlinestatus = sessionStorage.getItem("chat_onlinestatus");
   var chat_onlinepicture = sessionStorage.getItem("chat_onlinepicture");
   var chat_onlinepicturecss = "url('/www/" +chat_onlinepicture+ "')";
   $('#mycareteamChatPage_doctoricon').attr("src", chat_picture);
    /*url('/www/img/mycareteam/profile_2.png')*/
   //$('#mycareteamChat_picture').attr("src", chat_onlinepicture);

   $('#mycareteamChat_picture').css("background-image", chat_onlinepicturecss);
   $("#mycareteamChat_title").text(chat_title);
   $("#mycareteamChat_subtitle").text(chat_subtitle);
   $('#mycareteamChat_onlinestatus').attr("src", chat_onlinestatus);
   $('.doctoricon').css("background-image", chat_onlinepicturecss);
   $('.doctortitle').text(chat_title);
   setTimeout(function () {   //calls click event after a certain time
       //  $('#mycareteamChatPage_doctoricon').attr("src", chat_picture);      
     
       $('.doctoricon').css("background-image", chat_onlinepicturecss);
       $('.doctortitle').text(chat_title);
   }, 3000);
  
  //$('.doctoricon').css("background-image",chat_onlinepicturecss);

    //Calling the date and time function

   mycareteamChattimerIncrement();
    //calling the date and time function
       getDateTime();
   function mycareteamChattimerIncrement() {


       
       var resultContainer = document.getElementById('mycarechatweatherdetailsinfo');
       var weathericonholder = document.getElementById('mycarechatweather_icon');
       var weathericonholdercss = "url( " + window.localStorage.getItem("weathericonholder") + ")";
       var locationinfo = document.getElementById('mycarechatlocationinfo');
       if (resultContainer)
           resultContainer.innerHTML = window.localStorage.getItem("resultContainer");
       if (weathericonholder)
           $('#mycarechatweather_icon').css("background-image", weathericonholdercss);
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
       var datetimetext = document.getElementById("mycarechatresultContainertime");
       var dateformattext = document.getElementById("mycarechatresultContainerdate");
       if (datetimetext)
           datetimetext.innerText = dateTime.toString();
       if (dateformattext)
           dateformattext.innerText = dateformat.toString();
       datetimeinterval = setTimeout(getDateTime, secondsBeforeNextCheck * 1000);
   }
});