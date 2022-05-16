var stylesArray = [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            { "visibility": "off" }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
];
function initMap() {
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom:15,
        center:new google.maps.LatLng(-33.91722, 151.23064),
        styles:stylesArray
    });

    const iconBase =
        "https://demo.frank-dev.com/tga/ankara-kultur-yolu/_assets/icons/";
    const icons = {
        parking: {
            icon: iconBase + "google-maps-maker.svg",
        }
    };
    const features = [
        {
            position: new google.maps.LatLng(-33.91721, 151.2263),
            type: "parking",
        },
        {
            position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
            type: "parking",
        },
        {
            position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
            type: "parking",
        },
        {
            position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
            type: "parking",
        },
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
    }
}

if(document.getElementById("google-map") != null){
    google.maps.event.addDomListener(window, 'load', initMap);
}

$(document).ready(function() {
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(navigator.userAgent);

    if(!isMobileDevice){
        var contentHeight = window.innerHeight - $(".container-header").outerHeight();
        $("#google-map").css("height",contentHeight+"px");
    }

    $(".mobile-extend-map").mouseup(function (e){
        $("#google-map").css("height","70vh").css("transition","height .5s ease-in");
    });
});
