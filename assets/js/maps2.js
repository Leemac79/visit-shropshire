var map, marker, infowindow;

function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(52.6776, -2.4673)
  });
}

function newLocation(location) {
  map.setCenter({
    lat: location.lat,
    lng: location.lng,
  });

  // if marker exists, remove it from the map
  if (marker)
    marker.setMap(null);

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(location.lat,location.lng),
    map: map,
  });

  var contentString =           
        '<h3 >'+ location.info1 +'</h3>'+   
        '<p >'+ location.info2 +'</p>'+         
        '</div>';

        infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // immediately open the infowindow
  infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

var Location = {
  telford: {
    lat: 52.6776,
    lng: -2.4673,
    info1: 'telford-1',
    info2: 'telford-2'
  },

   shrewsbury: {
    lat: 52.7073,
    lng: -2.7553,
    info1: 'shrewsbury-1',
    info2: 'shrewsbury-2'
  },

  ludlow: {
    lat: 52.3677,
    lng: -2.7139,
    info1: 'ludlow-1',
    info2: 'ludlow-2'
  },

  churchstretten: {
    lat: 52.5407,
    lng: -2.8035,
    info1: 'Church-Stretten-1',
    info2: 'Church-Stretten-2'
  },

    ironbridge: {
    lat: 52.62845,
    lng: -2.4813,
    info1: 'Ironbridge-1',
    info2: 'Ironbridge-2'
  },
}

//Setting Location with jQuery
$(document).ready(function initialize() {
  $("#telford").on('click', function() {
    newLocation(Location.telford);
  });
  $("#shrewsbury").on('click', function() {
    newLocation(Location.shrewsbury);
  });

  $("#ludlow").on('click', function() {
    newLocation(Location.ludlow);
  });

  $("#church-stretten").on('click', function() {
    newLocation(Location.churchstretten);
  });
  $("#ironbridge-button").on('click', function() {
    newLocation(Location.ironbridge);
  });
});