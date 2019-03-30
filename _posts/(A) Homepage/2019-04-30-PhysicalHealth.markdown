---
layout: default
title:  "Physical Health & Identity"
date:   2016-06-13 10:51:47 +0530
img: image-3.png
category: "Homepage"
---
<div class = "col-md-12">
<h1>Body Shaming</h1>
</div>

   <div class="row pack">
        {% for post in site.posts %}  
        {% if post.category == "BodyS" %} 
            <div class="col-md-4 card">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel panel-default">
                  {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %}
                  <div class="panel-body">
                    <h2 class="panel-title">{{ post.title | truncate: 50 }}</h2> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
                  </div>
                  <!-- <div class="panel-body"><small>
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</small>
                  </div> -->
                </div>
                </a>
            </div>
         {% endif %}
          {% endfor %}
    </div> 
 

<div class = "col-md-12">
<h1>Self Consciousness</h1>
</div>


   <div class="row pack">
        {% for post in site.posts %}  
        {% if post.category == "SelfC" %} 
            <div class="col-md-4 card">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel panel-default">
                  {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %}
                  <div class="panel-body">
                    <h2 class="panel-title">{{ post.title | truncate: 50 }}</h2> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
                  </div>
                  <!-- <div class="panel-body"><small>
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</small>
                  </div> -->
                </div>
                </a>
            </div>
         {% endif %}
          {% endfor %}
    </div> 
 
<div class = "col-md-12">
<h1>Body Changes</h1>
</div>

   <div class="row pack">
        {% for post in site.posts %}  
        {% if post.category == "BodyC" %} 
            <div class="col-md-4 card">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel panel-default">
                  {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %}
                  <div class="panel-body">
                    <h2 class="panel-title">{{ post.title | truncate: 50 }}</h2> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
                  </div>
                  <!-- <div class="panel-body"><small>
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</small>
                  </div> -->
                </div>
                </a>
            </div>
         {% endif %}
          {% endfor %}
    </div> 
 
<div class = "col-md-12">
<h1>Disabillities</h1>
</div>

   <div class="row pack">
        {% for post in site.posts %}  
        {% if post.category == "Disability" %} 
            <div class="col-md-4 card">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel panel-default">
                  {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %}
                  <div class="panel-body">
                    <h2 class="panel-title">{{ post.title | truncate: 50 }}</h2> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
                  </div>
                  <!-- <div class="panel-body"><small>
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 180 }}</small>
                  </div> -->
                </div>
                </a>
            </div>
         {% endif %}
          {% endfor %}
    </div> 
 


