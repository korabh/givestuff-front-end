var map;

var js_file = document.createElement('script');
js_file.type = 'text/javascript';
js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDR_wQs-yNf6-sYmGSGyXHQoXRKL0ZDE6w&callback=initMap';
document.getElementsByTagName('head')[0].appendChild(js_file);

window.initMap = function() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(50.98813235180042, -113.96043309936522),
		styles: [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f0e9e1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#323a45"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]						
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}