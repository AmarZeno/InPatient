var videoid;
var videourl;
$(document).on("pageinit", "#mydayschedulevideosPage", function (event) {
 
});
$(document).on('pageshow', '#mydayschedulevideosPage', function (data) {
   videoid = sessionStorage.getItem("videoid");
   videourl = "https://www.youtube.com/embed/" + videoid + "?theme=light";
   $('#ytplayer').attr('src', videourl);
  
});


$(document).on("pagehide", "#mydayschedulevideosPage", function (event) {
    videourl = "https://www.youtube.com/embed/?theme=light";
    $('#ytplayer').attr('src', "");
});