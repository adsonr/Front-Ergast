'use strict';

$(document).ready(function () {

    //settings for slider
    var width = 720;
    var animationSpeed = 2000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval, timeout;

    function startSlider() {
        console.log('startSlider');
        interval = setInterval(function () {
            console.log('executeSlider');
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function nextSlider() {
        console.log('nextSlider');
        $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
            console.log('nextSlider callback');
            if (++currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
            timeout = setTimeout(function () {
                nextSlider();
            }, pause);
        });
    }

    function pauseSlider() {
        console.log('pauseSlider');
        clearInterval(interval);
        clearTimeout(timeout);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider2);

    startSlider2();

    function startSlider2() {
        timeout = setTimeout(function () {
            nextSlider();
        }, pause);
    }

    fetch('http://ergast.com/api/f1/drivers.json', {
        method: "GET"
    })
        .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Ocorreu um erro. Status Code: ' +
                    response.status);
                return;
            }

            // resposta 
            response.json().then(function (data) {
                var drivers = data['MRData']['DriverTable']['Drivers'];

                drivers.forEach(function(element) {
                    var driverEl = document.createElement('li');
                    driverEl.innerHTML = '<p>' + element.givenName  + ': ' + element.driverId + '</p>';
                    document.getElementById('drivers-list').appendChild(driverEl);
                });
            });
        }
        )
        .catch(function (err) {
            console.log('Fetch Error: ', err);
        });



});
