---
title: Dead Simple Image Gallery with Jekyll
date: 2020-05-03 12:00:00 Z
permalink: "/words/jekyll-image-gallery"
categories:
- misc
layout: post
description: Using Liquid tags and a bit of Javascript.
thumb: "/assets/img/blog/jekyllgallery/thumb.jpg"
hero: "/assets/img/blog/jekyllgallery/hero.jpg"
---

#### Background
I've been learning how to use Jekyll for my new website, and ended up building a custom image gallery for [my photography](https://oliverengel.com/play/photo). I knew I wanted something heavily inspired by [Squarespace's Wells gallery](https://wells-demo.squarespace.com/), and also didn't need to bother with captions for each image. Let's get to it.


#### Quick Demo
Here's what we're going to make:

<video class="blog-video" loop muted autoplay>
  <source src="/assets/img/blog/jekyllgallery/demo.mp4 " type="video/mp4">
</video>

That's it. You can cycle forwards and backwards through a folder of images. Animations between make it a bit more complicated, so I'll leave those out. I also won't really touch on styling other than some basics.

#### Setup
All you need to begin is Jekyll (obviously) and a folder full of images.

![Folder of images](/assets/img/blog/jekyllgallery/folder.png)*Photos can be any format and have any name. Though they'll be sorted by alphanumeric rank in the gallery.*

#### 1. Looping with Liquid Tags
So you've got a folder full of images you want to display in the gallery. We're going to use a [Liquid tag](https://shopify.dev/docs/themes/liquid/reference/tags) to loop over all of those images and render them on our page.

<p class="subhead code-type">HTML</p>

```html
{% raw %}
<div class="image-gallery">
  {% for image in site.static_files %}
    {% if image.path contains '/path/to/images/' %}
      <img src="{{ site.baseurl }}{{ image.path }}"/>
    {% endif %}
  {% endfor %}
</div>
{% endraw %}
```
Pretty simple: we set up a div with class <code>.image-gallery</code>, narrow in on our desired image folder, and one-by-one create images with <code>src</code> pulled from the image paths.

On build, that code will output to:

<p class="subhead code-type">OUTPUT</p>

```html
{% raw %}
<div class="image-gallery">
  <img src="/path/to/images/Photo-1.jpg">
  <img src="/path/to/images/Photo-2.jpg">
  ...
  <img src="/path/to/images/Photo-N.jpg">
</div>
{% endraw %}
```

Great, now we've got a bunch of images displayed on the page (in whatever style you've applied to <code>.image-gallery</code>).

![display all images](/assets/img/blog/jekyllgallery/display-all.jpg)*Your page might look something like this.*

#### 2. Controlling Image Visibility
Now we're going to only show one image at a time, per the gallery style we're aiming for. The general technique here is: assign all images *except* the first one as <code>display:none</code> We're using the display property because it means all the following images will not take up space on the page.

However, this makes animation more difficult as <code>display</code> cannot be animated with CSS alone. There are some [more complex workarounds](https://www.impressivewebs.com/animate-display-block-none/).

<p class="subhead code-type">SCSS</p>

```scss
{% raw %}
.image-gallery {
  img:first-child {
    display:block;
  }
  img {
    display:none;
  }
}
{% endraw %}
```

![display first child](/assets/img/blog/jekyllgallery/display-first-child.jpg)*Only the first image in the DOM will render, while all others are hidden.*

#### 3. Set Up the Controls
Let's give the user something to click on to navigate through the images. The technique I'm going to use is two interactive divs that split the page into left and right halves. We'll assign functions to these with <code>onClick()</code>.

![interaction model](/assets/img/blog/jekyllgallery/interaction-model.jpg)*The left div will trigger the previous image, and the right div will trigger the next one.*

<p class="subhead code-type">HTML</p>
```html
{% raw %}
<div id="previous" onclick="prevImage();"></div>
<div id="next" onclick="nextImage();"></div>
{% endraw %}
```

<p class="subhead code-type">SCSS</p>
```scss
{% raw %}
#previous{
  z-index:1000;
  position: absolute;
  left:0px;
  width:50vw;
  height:100vh;
  cursor: w-resize;
}

#next{
  z-index:1000;
  position: absolute;
  right:0px;
  width:50vw;
  height:100vh;
  cursor: e-resize;
}
{% endraw %}
```

Now we have two divs that each take up the half the viewport, and map to two different functions. Our last step is to write those functions.

#### Cycling With Javascript

You can probably guess where this is going: we're going to change the <code>display</code> property of the images programmatically as we cycle through them.

##### nextImage()

First we'll set up a function called <code>nextImage()</code> and create an array of all our images. We also need a variable to track which image we're showing.

<p class="subhead code-type">javascript</p>

```javascript
{% raw %}
var imgCounter = 0;

function nextImage(){
  // Get all the images into an array
  var photoArray = document.getElementsByTagName('img');
}
{% endraw %}
```

When we trigger <code>nextImage()</code>, we want to hide the current image and show the next one, like so:

<p class="subhead code-type">javascript</p>
```javascript
{% raw %}
// Change current image to display: none
photoArray[imgCounter].style.display = "none";

// Change next image to display: block
photoArray[imgCounter + 1].style.display = "block";

// Increment imgCounter
imgCounter++;
{% endraw %}
```

You can now cycle forward through the images. However, you'll hit a snag once you get to the last image in the folder. Let's add some code to wrap it back around to the first index once that happens.

<p class="subhead code-type">javascript</p>
```javascript
{% raw %}
// If our imgCounter is at the last index...
if(imgCounter === photoArray.length - 1){

  // Hide the current image
  photoArray[imgCounter].style.display = "none";

  // reset the counter to 0
  imgCounter = 0;

  // and display the image at index 0.
  photoArray[imgCounter].style.display = "block";
}
{% endraw %}
```

And if this is the case, we don't want to run that first block of code that increments our counter since we've just reset it. We'll put that in an <code>else</code> to tidy up. Tying everything all together:

<p class="subhead code-type">javascript</p>
```javascript
{% raw %}
var imgCounter = 0;

function nextImage(){
  var photoArray = document.getElementsByTagName('img');

  if(imgCounter === photoArray.length - 1){
    photoArray[imgCounter].style.display = "none";
    imgCounter = 0;
    photoArray[imgCounter].style.display = "block";
  }

  else{
    photoArray[imgCounter].style.display = "none";
    photoArray[imgCounter + 1].style.display = "block";
    imgCounter++;
  }
};
{% endraw %}
```

##### previousImage()

Luckily, our previous image function just needs a couple tweaks to work. I'll give ya the code block with comments to call out the changes.

<p class="subhead code-type">javascript</p>
```javascript
{% raw %}
function previousImage(){
  var photoArray = document.getElementsByTagName('img');

  // To wrap around, catch imgCounter when it gets to index 0.
  if(imgCounter === 0){
    photoArray[imgCounter].style.display = "none";
    //...and reassign it to the last index.
    imgCounter = photoArray.length - 1;
    photoArray[imgCounter].style.display = "block";
  }

  else{
    photoArray[imgCounter].style.display = "none";
    // Go to the previous index, not the next one.
    photoArray[imgCounter - 1].style.display = "block";
    // ...and decrement the counter.
    imgCounter--;
  }
};
{% endraw %}
```

<video class="blog-video" loop muted autoplay>
  <source src="/assets/img/blog/jekyllgallery/demo.mp4 " type="video/mp4">
</video>

Your gallery should now behave like the demo!


##### Full Javascript Code

Here's everything all together:

<p class="subhead code-type">javascript</p>
```javascript
{% raw %}
var imgCounter = 0;

function nextImage(){
  var photoArray = document.getElementsByTagName('img');

  if(imgCounter === photoArray.length - 1){
    photoArray[imgCounter].style.display = "none";
    imgCounter = 0;
    photoArray[imgCounter].style.display = "block";
  }

  else{
    photoArray[imgCounter].style.display = "none";
    photoArray[imgCounter + 1].style.display = "block";
    imgCounter++;
  }
};

function previousImage(){
  var photoArray = document.getElementsByTagName('img');

  if(imgCounter === 0){
    photoArray[imgCounter].style.display = "none";
    imgCounter = photoArray.length - 1;
    photoArray[imgCounter].style.display = "block";
  }

  else{
    photoArray[imgCounter].style.display = "none";
    photoArray[imgCounter - 1].style.display = "block";
    imgCounter--;
  }
};
{% endraw %}
```
#### In Conclusion
There's likely a much more streamlined way to write the Javascript portion, but I'm a pretty casual coder. And there's likely many other ways of tackling a gallery – this is just an approach that worked for me.
