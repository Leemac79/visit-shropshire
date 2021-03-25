var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(52.7101,-2.7521),//Setting Initial Position
    zoom: 9
  });
}

function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

//Setting Location with jQuery
$(document).ready(function ()
{
    $("#telford").on('click', function ()
    {
	  newLocation(52.6776,-2.4673);
	});
  
	$("#shrewsbury").on('click', function ()
    {
	  newLocation(52.7073,-2.7553);
	});
  
    $("#ludlow").on('click', function ()
    {
	  newLocation(52.3677,-2.7139);
	});
});