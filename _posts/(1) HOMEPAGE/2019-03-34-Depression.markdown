---
layout: default
title:  "Depression"
date:   2016-06-13 10:51:47 +0530
img: depression.png
category: "Homepage"
---
<!-- <div class = "damn" style = "margin-left: 100px; margin-right: 100px;"> 
<div class = "bigboy row col-md-12" style = "text-align: center; font-size: 50px;"> --> 
<div class = "bigboy col-md-12" style = "font-size: 40px; text-align: center; margin-bottom: 10px; margin-top: -10px;"> 
Major Depression  <!-- depression -->
</div>

<div class="row">
        {% for post in site.posts %}  
        {% if post.category == "depression1" %} 
            <div class="col-md-4">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel fixed-panel {{ post.panelcolor }}">
                <div class = "panel-heading" >
                <h3 class = "panel-title"> {{ post.title | truncate: 50 }} </h3>
                </div>
                  <!-- {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %} -->
                  <div class="panel-body">
                    <!-- <small> --> 
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 191 }} <!-- </small> --> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
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

<div class = "bigboy col-md-12" style = "font-size: 40px; text-align: center; margin-bottom: 10px; margin-top: -10px;"> 
Persistent Depressive Disorder  <!-- life2 -->
</div>

<div class="row">
        {% for post in site.posts %}  
        {% if post.category == "depression2" %} 
            <div class="col-md-4">
             <a href="{{ post.url | prepend: site.baseurl }}" class="index-anchor">    
                <div class="panel fixed-panel {{ post.panelcolor }}">
                <div class = "panel-heading" >
                <h3 class = "panel-title"> {{ post.title | truncate: 50 }} </h3>
                </div>
                  <!-- {% if post.img %}
                  <img width="100%" src="{{site.baseurl}}/images/{{post.img}}" alt="{{post.title}}">
                  {% else %}
                  <img width="100%" src="{{site.baseurl}}/images/webjeda-logo-big.jpg" alt="{{site.title}}">
                  {% endif %} -->
                  <div class="panel-body">
                    <!-- <small> --> 
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 191 }} <!-- </small> --> <!-- <span class="post-meta pull-right"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span> -->
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