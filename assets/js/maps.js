function initialize() {
      var telford = new google.maps.LatLng(52.6776,-2.4673);
      var mapOptions = {
        zoom: 12,
        center: telford

        
      }


      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      var ctaLayer = new google.maps.KmlLayer({
        url: 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml'
      });
      ctaLayer.setMap(map);
    }

google.maps.event.addDomListener(document.getElementById('map'), 'click', initialize);