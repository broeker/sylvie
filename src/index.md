---
layout: base.njk
title: sylvie broeker 
permalink: /
---

<div id="header" class="mt-32">
<h1 class="font-montserrat text-center text-3xl mb-8 ">hello!</h1> 
</div>

<div id="hero" class="text-center text-md pb-8 text-gray-500">
art and design by sylvie broeker, in minneapolis. thanks for looking!
  </div>

  <div class="text-center mb-32">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {% for post in collections.posts %}
    {% if post.data.image %}
<div class="id="posts" relative overflow-hidden w-full aspect-[3/4]">
      <a href="{{ post.url }}" class="block w-full h-full">
        <img
          src="{{ post.data.image }}"
          alt="{{ post.data.title }}"
          class="block w-full h-full object-cover hover:opacity-0"
        />

 <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-75 flex flex-col items-center justify-center text-center">
    <h3 class="text-white text-xl font-semibold uppercase">{{ post.data.title }}</h3>
    {% if post.data.subtitle %}
      <div class="text-white text-sm">{{ post.data.subtitle }}</div>
    {% endif %}
  </div>
      </a>
</div>
    {% endif %}
  {% endfor %}
</div>
