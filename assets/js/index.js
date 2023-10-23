let name = ["S","a","v","i","n","d","a"," ","j","a","y","a","s","e","k","r","a","",""];

let char = 0;

$('#typeName').css({
    height: '50px',
    marginBottom:'8vh'
});

function setName(){
    $('#typeName').text($('#typeName').text()+name[char]);
}
setInterval(function (){
    if (char<name.length){
        setName();
        char++;
    }else {
        char = 0;
        $('#typeName').text('');
    }
},100);

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
            backgroundColor: 'rgba(199, 154, 98, 1)'
        });

        $('.custom-shape-divider-bottom-1693915055 .shape-fill').css('fill', '#101820');

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

        $('#main').css('background', '#101820');

        $('.home-section').css('background', '#101820');

        $('.service-section > h4 ').css('color', '#FD6E0A');

        $('.service-section > h1').css('color', 'white');

        $('.service-section > aside > div').css('background', '#FEB062');

        $('.service-section > aside:nth-child(4) > div:first-child div:nth-child(1)').css({
            background: 'url("assets/dark-images/status1.png")',
            backgroundSize: 'cover'
        });

        $('.service-section > aside:nth-child(4) > div:nth-child(2) div:nth-child(1)').css({
            background: 'url("assets/dark-images/status2.png")',
            backgroundSize: 'cover'
        });

        $('.service-section > aside:nth-child(4) > div:nth-child(3) div:nth-child(1)').css({
            background: 'url("assets/dark-images/status3.png")',
            backgroundSize: 'cover'
        });

        $('.service-section > aside:last-child > div:first-child div:nth-child(1)').css({
            background: 'url("assets/dark-images/status4.png")',
            backgroundSize: 'cover'
        });

        $('.service-section > aside:last-child > div:last-child div:nth-child(1)').css({
            background: 'url("assets/dark-images/status5.png")',
            backgroundSize: 'cover'
        });

        $('.service-section > aside > div p').css({
            color: 'white'
        });

        $('.aboutme-section > div:nth-child(2) > h1 > span:first-child').css({
            color: '#FD6E0A'
        });

        $('.aboutme-section > div:nth-child(2) > h1').css({
            color: 'white'
        });

        $('.aboutme-section > div:nth-child(2) > h1 > span:last-child ').css({
            color: 'gray'
        });

        $('.aboutme-section > section:nth-child(3) > aside:last-child > p:first-child > span').css({
            color: '#FD6E0A'
        });

        $('.aboutme-section > section:nth-child(3) > aside:last-child > p:first-child').css({
            color: 'white'
        });

        $('#aboutGmail, #aboutPhone').css({
            color: 'white'
        });

        $('.aboutme-section > section:nth-child(3) > aside:last-child > p:last-child').css({
            color: 'white'
        });

        $('.education-section > h4:first-child').css('color', '#FD6E0A');

        $('.education-section h1').css('color', 'white');

        $('.education-section section > .detail > h4').css('color', '#6891FF');

        $('.education-section section > .detail p').css('color', 'white');

        $('.education-section #line').css({
            borderLeft: "3px solid white"
        });

        $('.language-tools > h4').css({
            color: '#FD6E0A'
        });

        $('.language-tools > h1').css({
            color: 'white'
        });

        $('.language-tools > div:last-child > svg line').css({
            stroke: "rgb(254 254 255)"
        });

        $('.recent-works > h4').css({
            color: '#FD6E0A'
        });

        $('.recent-works > h1').css('color', 'white');

        $('.fa-graduation-cap').css('color', 'white');

        $('#visitors > span').css('color', 'white');

        $('.path').css({
            fill: '#FEB062'
        });

        $('.recent-works > section > div:nth-child(1) > div > div:first-child').css({
            background: 'url("assets/dark-images/status1.png")',
            backgroundSize: 'cover'
        });

        $('.recent-works > section > div:nth-child(2) > div > div:first-child').css({
            background: 'url("assets/dark-images/status2.png")',
            backgroundSize: 'cover'
        });

        $('.recent-works > section > div:nth-child(3) > div > div:first-child').css({
            background: 'url("assets/dark-images/status3.png")',
            backgroundSize: 'cover'
        });

        $('.recent-works > section > div > div > p ').css('color', 'black');

        $('.certificate-section > h4 ').css({
            color: '#FD6E0A'
        });

        $('.certificate-section > h1').css({
            color: 'white'
        });

        $('.general-life-section > h4 ').css({
            color: '#FD6E0A'
        });

        $('.general-life-section > h1 ').css({
            color: 'white'
        });

        $('.contact-section > h4').css({
            color: '#FD6E0A'
        });

        $('.contact-section > h1').css({
            color: 'white'
        });

        $('.contact-section > section > address > div > div:last-child > h4 , .contact-section > section > address > h4').css({
            color: 'white'
        });

        $('.contact-section > section > address a , .contact-section > section > address p').css({
            color: '#FD6E0A'
        });

        $('.contact-section aside > form > fieldset > label').css({
            color: 'white'
        });

        $('#footer').css('background', '#906C3C');

        darkTrue = false;
    } else {
        window.location.reload(true);
        darkTrue = true;
    }
});

let moveLeft = 0;

let moveRight = 0;

let count = 0;

$('#leftButton').on('click', function () {
    count--;
    moveLeft -= 49;

    $('.certificate-section > section > div:nth-child(2)>div').css({
        transitionDuration: '1s',
        position: 'relative',
        left: -moveLeft + 'vw'
    });
});

$('#rightButton').on('click', function () {
    count++;
    if (count <= 3) {
        moveLeft += 49;

        $('.certificate-section > section > div:nth-child(2)>div').css({
            transitionDuration: '1s',
            position: 'relative',
            left: -moveLeft + 'vw'
        });
    }
});

let countVisitors = parseInt(localStorage.getItem('visitorCounter') || '0');

countVisitors++;

localStorage.setItem('visitorCounter', countVisitors);
$('#count').css('marginLeft','10px')
$('#count').text(countVisitors);
