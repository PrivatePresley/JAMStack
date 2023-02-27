---
layout: layout.html
pageTitle: Dice Throw 1
navTitle: Dice Throw 1
tags: page
singleImage: /img/dice.png
---

{%assign transX = 0 %}

<body style="background: black">
<div style="position: relative; border-left: 50px red solid; padding-bottom: calc(5px * 1500);">

{% for i in (0..1500) %}

{%if transX > 300 %}
{%assign grow = false%}
{%elsif transX < -300 %}
{%assign grow = true%}
{%endif%}

{%if grow == true %}
{%assign transX = transX|plus:5 %}
{% else %}
{%assign transX = transX|minus:5 %}
{%endif%}

{%if i < 1500 %}
<img src="{{ singleImage }}" alt="Four dice: red, blue, green, yellow" style="position: absolute; left: {{transX}}px; top: {{ i | times:5}}px; filter: blur(3px)" />
{%else %}
<img src="{{ singleImage }}" alt="Four dice: red, blue, green, yellow" style="position: absolute; left: {{transX}}px; top: {{ i | times:5}}px;" />
{%endif%}

{% endfor %}

</div>
<!-- <img src="{{ singleImage }}" alt="Three " style="transform: translateX({{transX}}px) translateY(-{{ i | times:500 }}px)" /> -->
</body>
