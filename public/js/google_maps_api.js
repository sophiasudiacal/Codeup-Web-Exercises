 (function() {
		"use strict";

		var mapOptions = {
			zoom: 3,
		};

		// Set our address to geocode
		var address = "California";

		// Init geocoder object
		var geocoder = new google.maps.Geocoder();

		// Geocode our address
		geocoder.geocode({ "address": address }, function(results, status) {

		   // Check for a successful result
		   if (status == google.maps.GeocoderStatus.OK) {

			   // Recenter the map over the address
			   map.setCenter(results[0].geometry.location);
		   } else {

			   // Show an error message with the status if our request fails
			   alert("Geocoding was not successful - STATUS: " + status);
		   }
		});

		// Render the map
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var labels = "ABCDEFG"
		var labelIndex = 0;

		// Add the marker to our existing map
		var rockys = { lat: 21.3847350, lng: -158.0070650};
		var rockysImage = {
			url: "/img/food.png",
			scaledSize: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0,0)
		};
		var marker = new google.maps.Marker({
			position: rockys,
			label: labels[labelIndex++ % labels.length],
			animation: google.maps.Animation.DROP, 
			map: map,
			icon: rockysImage
		});

		var infowindow = new google.maps.InfoWindow({
			content: '<div id="content">' +
			'<h3 id="restaurantName" class="restaurantName">Rocky\'s\ Coffee Shop</h3>'+
			'<div id="bodyContent">' +
			'<p><b>Hours: </b> 4:30 am - 12:00 pm</p>' +
			'<p><b>Phone Number: </b> (808) 677-3842</p>'+
			'<p><b>Favorite Dish: </b> Fried Rice Omelette</p>'+
			'<p><i>"Totally cool old school diner with excellent home cooked meals from scratch and friendly servers."</i></p>'+
			'</div>'
		});
		marker.addListener("click", function() {
			infowindow.open(map, marker);
		});

		var fairview = { lat: 29.456438, lng: -98.4793811};
		var fairviewImage = {
			url: "/img/cafe.png",
			scaledSize: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0,0)
		};
		var marker1 = new google.maps.Marker({
			position: fairview,
			label: labels[labelIndex++ % labels.length],
			animation: google.maps.Animation.DROP, 
			map: map,
			icon: fairviewImage
		});

		var infowindow1 = new google.maps.InfoWindow({
			content: '<div id="content">' +
			'<h3 id="restaurantName" class="restaurantName">The Fairview</h3>'+
			'<div id="bodyContent">' +
			'<p><b>Hours: </b>Closed</p>' +
			'<p><b>Phone Number: </b> (210) 731-8009</p>'+
			'<p><b>Favorite Dish: </b> Banana and Nutella Kolaches</p>'+
			'<p><i>"Gourmet coffees are infused with housemade syrups at this chic, barista-owned Midtown cafe also serving a variety of toasts, waffles and biscuits."</i></p>'+
			'</div>'
		});
		marker1.addListener("click", function() {
			infowindow1.open(map, marker1);
		});

		var kogi = { lat: 32.8328607, lng: -117.1384242};
		var kogiImage = {
			url: "/img/fire.png",
			scaledSize: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0,0)
		};
		var marker2 = new google.maps.Marker({
			position: kogi,
			label: labels[labelIndex++ % labels.length],
			animation: google.maps.Animation.DROP, 
			map: map,
			icon: kogiImage
		});

		var infowindow2 = new google.maps.InfoWindow({
			content: '<div id="content">' +
			'<h3 id="restaurantName" class="restaurantName">Kogi BBQ</h3>'+
			'<div id="bodyContent">' +
			'<p><b>Hours: </b>5:00pm - 12:00am</p>' +
			'<p><b>Phone Number: </b> (858) 505-0611</p>'+
			'<p><b>Favorite Dish: </b> Everything</p>'+
			'<p><i>"This is what a KOREAN bbq vibe is supposed to be like!"</i></p>'+
			'</div>'
		});
		marker2.addListener("click", function() {
			infowindow2.open(map, marker2);
		});



	})();