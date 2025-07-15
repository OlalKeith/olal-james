---
title: Projects
layout: page
permalink: /projects
---

These are some of the projects I have worked on.

{% for project in site.data.projects.projects %}

---

{% if project.url %}
<a href="{{ project.url }}" target="_blank"><strong>{{ project.title }}</strong></a>
{% else %}
<strong>{{ project.title }}</strong>
{% endif %}

<img align="left" class="light" src="{{ site.baseurl }}/assets/images/{{ project.image_light }}" height="80" style="margin-right: 10px">
{% if project.image_dark and site.plainwhite.dark_mode %}
<img align="left" class="dark" src="{{ site.baseurl }}/assets/images/{{ project.image_dark }}" height="80" style="margin-right: 10px">
{% endif %}

{{ project.description }}
{% endfor %}
