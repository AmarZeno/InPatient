var videoid = "soxe1xrDBt0";
var videourl;
$(document).on("pageinit", "#myhospitalvideo_page", function (event) {

});
$(document).on('pageshow', '#myhospitalvideo_page', function (data) {
    
    videourl = "https://www.youtube.com/embed/" + videoid + "?theme=light";
    $('#ytplayermh').attr('src', videourl);

});


$(document).on("pagehide", "#myhospitalvideo_page", function (event) {
    videourl = "https://www.youtube.com/embed/?theme=light";
    $('#ytplayermh').attr('src', "");
});