{% extends 'frame.swig' %}

{% block body %}
  {% if list %}
    <table border="1">
      {% for place in list %}
        <tr><form action="/checkin/create">
          <!-- TODO issue#12 の後にlocationIdに差し替え -->
          <input type="hidden" name="locationId" value={{ place.place_id }}>
          <input type="hidden" name="lat" value={{ place.geometry.location.lat }}>
          <input type="hidden" name="lng" value={{ place.geometry.location.lng }}>
          <input type="hidden" name="name" value="{{ place.name }}">
          <td><img src={{ place.icon }} /></td>
          <td bgcolor="#99CC00">{{ place.name }}</td>
          <td><input type="submit" value="checkin!"></td>
        </form></tr>
      {% endfor %}
    </table>
  {% else %}
    <li>周辺に何も見つかりませんでした</li>
  {% endif %}
  <a href="/admin/locations/create">新しい場所を登録する</a>
{% endblock %}
