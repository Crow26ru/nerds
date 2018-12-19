'use strict';

(function () {
  var COORDINATES = [59.938631, 30.323055];

  var mapElement = document.querySelector('#map');
  var init = function () {
    // Создание карты.
    var myMap = new ymaps.Map(mapElement, {
      center: COORDINATES,
      zoom: 17
    });

    var myPlacemark = new ymaps.Placemark(COORDINATES);
    myMap.geoObjects.add(myPlacemark);
  };
  ymaps.ready(init);
})();
