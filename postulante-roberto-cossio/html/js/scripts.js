$(document).ready(function() {
    //menu mobile
    $( ".toggle-menu" ).click(function() {
        $('#mySidenav').attr('style','width: 280px');
        $('.over-content').show();
    });
    $( ".closebtn" ).click(function() {
        $('#mySidenav').attr('style','width: 0px');
        $('.over-content').hide();
    });
    $( ".over-content" ).click(function() {
        $('#mySidenav').attr('style','width: 0px');
        $(this).hide();
    });
});//fin document ready