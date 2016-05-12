{% extends '../../layout.swig' %}

{% block body %}
  {% if list %}
    <table border="1">
      {% for place in list %}
        <tr>
          <td><img src={{ place.icon }} /></td>
          <td bgcolor="#99CC00">{{ place.name }}</td>
        </tr>
      {% endfor %}
    </table>
  {% else %}
    <li>周辺に何も見つかりませんでした</li>  
  {% endif %}
  <a href="/admin/locations/create">新しい場所を登録する</a>
{% endblock %}
