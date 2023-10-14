let darkTrue = true;

$('#DarkPage').on('click', function () {

    if (darkTrue) {

        $('#body').css('background', '#101820');

        $('#main').css('background', '#101820');

        $('main section').css('background', '#FEB062');

        $('main section div:nth-child(2) h4').css('color', 'black');

        $('body header').css('background', '#9B7147');

        $('main h1').css('color', 'white');


        darkTrue = false;
    } else {
        window.location.reload(true);
        darkTrue = true;
    }
});