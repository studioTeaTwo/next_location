{% extends 'frame.swig' %}

{% block body %}

  <button onclick="getCurrencLocation()">位置情報から取得する</button>

  <form action="/map/search">
    <input id="latitude_form" type="hidden" name="latitude" value="">
    <input id="longitude_form" type="hidden" name="longitude" value="">

    <input type="submit"></form>

  <p id="out"></p>

  <script>


    function getCurrencLocation(){

        var output = document.getElementById("out");

        if (!navigator.geolocation){
          output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
          return;
        }

        function success(position) {
          var latitude  = position.coords.latitude;
          var longitude = position.coords.longitude;

          output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

          var img = new Image();
          img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

          $("#latitude_form").attr('value', latitude);
          $("#longitude_form").attr('value', longitude);

          output.appendChild(img);
        };

        function error() {
          output.innerHTML = "Unable to retrieve your location";
        };

        output.innerHTML = "<p>Locating…</p>";

        navigator.geolocation.getCurrentPosition(success, error);
      }

  </script>

{% endblock %}
