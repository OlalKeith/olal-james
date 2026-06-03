---
title: Projects
layout: page
permalink: /projects
---

These are some of the projects I have worked on.

{% for project in site.data.projects.projects %}

---

<img align="left" class="light" src="{{ site.baseurl }}/assets/images/{{ project.image_light }}" height="80" style="margin-right: 10px">
{% if project.image_dark and site.plainwhite.dark_mode %}
<img align="left" class="dark" src="{{ site.baseurl }}/assets/images/{{ project.image_dark }}" height="80" style="margin-right: 10px">
{% endif %}

{{ project.description }}
{% endfor %}

---

## Personal Projects <small style="font-size: 0.5em; font-weight: normal; color: orange;"> - In Progress</small>

These are projects I am building independently.

{% for project in site.data.projects.personal_projects %}

---

<img align="left" class="light" src="{{ site.baseurl }}/assets/images/{{ project.image_light }}" height="80" style="margin-right: 10px">
{% if project.image_dark and site.plainwhite.dark_mode %}
<img align="left" class="dark" src="{{ site.baseurl }}/assets/images/{{ project.image_dark }}" height="80" style="margin-right: 10px">
{% endif %}

{{ project.description }}
{% endfor %}