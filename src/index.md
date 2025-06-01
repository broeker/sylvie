---
layout: base.njk
title: sylvie broeker 
permalink: /
---

<div id="header">
<h1 class="font-montserrat text-center">hello!</h1> 
</div>

<div id="hero" class="text-lg">
art and design by sylvie broeker, in minneapolis. thanks for looking!
</div>


<div class="post-thumbnails">
  {% for post in collections.posts %}
    {% if post.data.image %}
      <a href="{{ post.url }}">
        <img
          src="{{ post.data.image }}"
          alt="{{ post.data.title }}"
          style="max-width:150px; height:auto; object-fit:cover; margin:0.5em;"
        />
      </a>
    {% endif %}
  {% endfor %}
</div>
