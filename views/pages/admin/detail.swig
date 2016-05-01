{% extends 'frame.swig' %}

{% block body %}
  <h1>めいしょ</h1>
  <h1>{{ location.name }}</h1>

  <h1>井戸</h1>
  <h1>{{ location.latitude }}</h1>

  <h1>経度</h1>
  <h1>{{ location.longitude }}</h1>

  // このへんにgoogleMapおく
{% endblock %}

{% block scripts %}
{% endblock %}
