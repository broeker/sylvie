---
layout: base.njk
title: Worker 
permalink: /
---


# hello! 

<div class="text-3xl font-bold">art and design by sylvie broeker, in minneapolis. thanks for looking!</div>

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
