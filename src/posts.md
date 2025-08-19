---
layout: base.njk
title: Posts
permalink: /posts/
---

# Posts

<ul>
  {% for post in collections.posts %}
    <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
