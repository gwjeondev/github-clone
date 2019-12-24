function initMap() {
    const MyLatLng = {
        lat: 37.782293,
        lng: -122.391240
    }
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: MyLatLng,
            scrollwheel: false,
            zoom: 18
        }
    );
    const marker = new google.maps.Marker({
        position: MyLatLng,
        map: map,
        title: 'GitHub'
    });
}

(function (window, document) {
    'use strict';
    const toggles = document.querySelectorAll('.toggle');
    const toggleBtn = document.getElementById('toggle-btn');

    toggleBtn.addEventListener('click', function() {
        toggleElements();
    });
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });
    function toggleElements() {
        [].forEach.call(toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }
    function offElements() {
        [].forEach.call(toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document);

