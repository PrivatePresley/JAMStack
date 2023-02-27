---
layout: layout.html
pageTitle: Apples
navTitle: Pictures
tags: page
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png
---

## Markdown, single image:

![alt info goes here]( {{ singleImage }} )

## HTML, single image:

<img src="{{ singleImage }}" alt="info goes here" style="transform: translate(0,-300px) scale(50%) rotate(90deg);" />

## Markdown in Liquid for loop:

{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}

## HTML in Liquid for loop:

{% for filename in images %}
<img src="/img/{{ filename }}" alt="A nice picture of apples." />
{% endfor %}

[Home](/)
