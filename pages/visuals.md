---
title: Visuals
permalink: work/visuals
description: Handcrafted graphics of all flavors
shortdescription: Graphic design & animation
layout: project
section: home
hero: "/assets/img/video/ttv2"
tag: visuals
tagname: Visuals
org: Personal Project
year: 2014-Now
---

<div id="macy-container">
{% for image in site.static_files %}
{% if image.path contains '/assets/img/projects/graphics' %}
<img class="masonry-item" src="{{ site.baseurl }}{{ image.path }}" alt="image" />
{% endif %}
{% endfor %}
</div>


