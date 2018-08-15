---
layout: default
permalink: /
redirect_to: https://bekti.net/blog/
seo:
  type: WebSite
---
<ul class="post-list">{% for post in site.posts limit: 4 %}
  <li>
    <a {% if post.redirect_to %} target="_blank" rel="nofollow" href="{{ post.redirect_to }}" {% else %} href="{{ post.url | prepend: site.baseurl }}" {% endif %}>
      <aside class="date">{{ post.date | date:"%b %d" }}</aside>
      {{ post.title }} <h2>{% if post.description %}{{ post.description }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 90 }}{% endif %}</h2>
    </a>
  </li>
{% endfor %}</ul>
<!--{% for repository in site.github.public_repositories %}{% if repository.stargazers_count > 0 %}
[{{ repository.name }}]({{ repository.html_url }})
{% endif %}{% endfor %}-->
