$(window).on('load', function () {
    setTimeout(removeLoader, 1000);
});

function removeLoader() {
    $("#loading").fadeOut(1000, function () {
        $("#loading").remove();
    });
}

let darkTrue = true;

$('#Dark').on('click', function () {
    if (darkTrue) {

        $("#headderIcon").attr("src", "assets/images/darkHedderIcon.png");

        $('#body').css('background', '#101820');

        $('#header').css({
            background: '#101820',
            borderBottom: '#150449'
        });

        $('#header nav > div > menu > li > a').css('color', 'white');

        $('.curve').css({
            backgroundColor:'rgba(199, 154, 98, 1)'
        });

        $('.custom-shape-divider-bottom-1693915055 .shape-fill').css('fill','#101820');

        $('.home-section > section:nth-child(3) > section:last-child > div:last-child > div:first-child ').css({
            background: '#EB9A94'
        });

        $('.home-section > section:nth-child(3) > section:last-child > div:last-child > div:nth-child(2)').css({
            background: '#F4B486'
        });

        $('.home-section > section:nth-child(3) > section:last-child > div:last-child > div:nth-child(3)').css({
            background: '#CF793D'
        });

        $('.home-section > section:nth-child(3) > section:nth-child(1) > aside div:first-child > p:first-child').css({
            color: 'white'
        });

        $('.home-section > section:nth-child(3) > section:nth-child(1) > aside div:first-child > h4:nth-child(3) > span ').css({
            color: 'white'
        });

        $('.home-section > section:nth-child(3) > section:nth-child(1) > aside div:first-child > p:nth-child(4)').css({
            color: 'white'
        });

        $('.status-section').css({
            background: '#101820',
            border: '1px solid orange'
        });

        $('.status-section > div h4').css({
            color: 'white'
        });

        $('.home-section > section:nth-child(3) > section:nth-child(1) > aside > div:last-child > a > button').css({
            background: '#101820'
        });

        darkTrue = false;
    } else {
        window.location.reload(true);
        darkTrue = true;
    }
});
