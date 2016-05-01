{% extends '../../layout.swig' %}

{% block body %}
  <ul>
  {% for l in locations %}
    <li><a href="/admin/locations/{{ l.location_id }}">{{ l.name }}</li>
  {% endfor %}
    </ul>
{% endblock %}
