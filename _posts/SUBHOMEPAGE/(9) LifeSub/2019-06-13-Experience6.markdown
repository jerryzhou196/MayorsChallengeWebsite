---
layout: post
title: Grade 12
date: 2016-06-13 10:51:47 +0530
img: image-1.png
category: "life2"
panelcolor: "panel-warning"
---
Below elements can be used just by adding certain classes to regular html elements. Since the theme is based on Bootstrap, you can use any bootstrap class in this theme.



<div class="row pack">

    {% for post in site.posts %}  
    {% if post.category == "NExperience" %}
            <div class="col-md-4 card">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel panel-default">
                  
                  {% if post.img %}
                  <img width="100%" class="img-circle" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%"  src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
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











