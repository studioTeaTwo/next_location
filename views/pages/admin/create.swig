{% extends 'frame.swig' %}

{% block body %}
  <label>新しい場所を作ります</label>
  <form method="post" action="/locations">
    <label>井戸</label><input type="string" name="latitude" />
    <label>軽度</label><input type="string"  name="longitude" />
    <label>name</label><input type="string" name="name" />
    <label>owner</label><input type="string" name="owner" />
    <input type="submit">
  </form>
{% endblock %}