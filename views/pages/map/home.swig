{% extends 'frame.swig' %}

{% block body %}

    <button onclick="getCurrentLocation()">位置情報から取得する</button>
    <button onclick="getDummyLocation()">テキストから取得する</button>

  <form action="/place/search">
    <label for="namae" accesskey="n">ユーザーID：</label>
    <input id="user_form" type="text" name="userId" value="1000">
    <br/>
    <label for="namae" accesskey="n">緯度経度：</label>
    <input id="latitude_form" type="text" name="latitude" value="">
    <input id="longitude_form" type="text" name="longitude" value="">
    <br/>
    <input type="submit" value="checkin候補？">
  </form>
  
  <p id="out"></p>

  <script>
    function getCurrentLocation(){

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
      
      function getDummyLocation(){

        var output = document.getElementById("out");

        var latitude  = $("#latitude_form").val();
        var longitude = $("#longitude_form").val();
        
        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
        
        output.innerHTML = "<p>Locating…</p>";
        
        output.appendChild(img);
      }
      
      window.onload=getCurrentLocation;
  </script>

{% endblock %}
