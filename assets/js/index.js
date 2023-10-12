$(window).on('load', function(){
    setTimeout(removeLoader, 1000);
});
function removeLoader(){
    $( "#loading" ).fadeOut(1000, function() {
        $( "#loading" ).remove();
    });
}
