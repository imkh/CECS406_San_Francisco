// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
  var myLatLng = {lat: 37.7600537, lng: -122.4445825};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng,
    disableDefaultUI: true,
    scrollwheel:  false
  });

  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map,
  //   title: 'Hello World!'
  // });
}

// function initAutocomplete() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 37.7600537, lng: -122.4445825},
//     zoom: 13,
//     mapTypeId: 'roadmap'
//   });
//
//   // Create the search box and link it to the UI element.
//   var input = document.getElementById('pac-input');
//   var searchBox = new google.maps.places.SearchBox(input);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener('bounds_changed', function() {
//     searchBox.setBounds(map.getBounds());
//   });
//
//   var markers = [];
//   // Listen for the event fired when the user selects a prediction and retrieve
//   // more details for that place.
//   searchBox.addListener('places_changed', function() {
//     var places = searchBox.getPlaces();
//
//     if (places.length == 0) {
//       return;
//     }
//
//     // Clear out the old markers.
//     markers.forEach(function(marker) {
//       marker.setMap(null);
//     });
//     markers = [];
//
//     // For each place, get the icon, name and location.
//     var bounds = new google.maps.LatLngBounds();
//     places.forEach(function(place) {
//       if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//       }
//       var icon = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25)
//       };
//
//       // Create a marker for each place.
//       markers.push(new google.maps.Marker({
//         map: map,
//         icon: icon,
//         title: place.name,
//         position: place.geometry.location
//       }));
//
//       if (place.geometry.viewport) {
//         // Only geocodes have viewport.
//         bounds.union(place.geometry.viewport);
//       } else {
//         bounds.extend(place.geometry.location);
//       }
//     });
//     map.fitBounds(bounds);
//   });
// }
