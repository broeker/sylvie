---
layout: base.njk
title: sylvie broeker 
permalink: /
---

<div id="header">
<h1 class="font-montserrat text-center text-3xl mb-8 ">hello!</h1> 
</div>

<div id="hero" class="text-center text-md text-gray-500 mb-32">
art and design by sylvie broeker, in minneapolis. thanks for looking!
</div>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {% for post in collections.posts %}
    {% if post.data.image %}
      <a href="{{ post.url }}" class="block">
        <img
          src="{{ post.data.image }}"
          alt="{{ post.data.title }}"
          class="w-full h-auto object-cover"
        />
      </a>
    {% endif %}
  {% endfor %}
</div>
