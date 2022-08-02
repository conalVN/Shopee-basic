

// Time countdown flash sale
var countDownDate = new Date("Aug 10, 2022 00:00:00").getTime();

var x = setInterval(function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    $('#countDown').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's'

    if (distance < 0) {
        clearInterval(x)
        $('#countDown').innerHTML = '00 : 00 : 00'
    }

}, 1000)






// slider banner
$('.content__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


$('.category__list').slick({
    infinite: false,
    slidesToShow: 10,
    slidesToScroll: 2,

    responsive: [
        {
            dots: true,
            breakpoint: 1200,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.flashSale__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
        {
            dots: true,
            breakpoint: 1200,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.mall__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});






