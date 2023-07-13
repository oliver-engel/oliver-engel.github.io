---
title: Words
layout: default
---

<body class="blog-home">

  <section class="full-header">
    <h2 class="animated-header">My (very) occasional written words.</h2>
    <p>Thoughts on design and also other things</p>
  </section>

  <section class="standard-width">

    <div class="spacer-12x"></div>

    {% for post in site.posts %}
    <div class="blog-wrapper slideUp">
      <a class="blog-entry" href="{{post.url}}">
        <div class="img-wrapper">
          <img src="{{post.thumb}}">
        </div>

        <div class="blog-entry-content">
          <!-- <p class="blog-date">8 MAY 19</p> -->
          <p><b>{{post.title}}</b></p>
          <p>{{post.description}}</p>
          <div class="spacer-2x"></div>
          <p><span id="read-more">Read More</span></p>
        </div>

      </a>
    </div>
    {% endfor %}

  </section>

</body>
