---
layout: 'base'
title: About
image: "https://picsum.photos/1200/300.webp"
imageAlt: "Randomly generated photo"
imageType: "webp"
eleventyNavigation:
  key: About
  order: 1
---

<h1>{{ title }}</h1>

<picture class="hero-image__container">
  <source srcset="{{ image }}" type="image/{{ imageType }}" />
  <img src="{{ image }}" alt="{{ imageAlt }}" loading="lazy" />
</picture>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet est in nisi pretium facilisis. Etiam egestas aliquet nunc porta aliquet. Duis id maximus tellus. Sed feugiat nunc ut magna auctor, ac auctor libero imperdiet. Nullam non arcu felis. Quisque nunc nisl, aliquet aliquet leo sed, luctus auctor nunc. Suspendisse pretium suscipit ornare. In a justo sit amet risus volutpat dapibus et ut augue. Sed convallis sem sed facilisis elementum. Aliquam ipsum odio, feugiat ac enim quis, ultrices tincidunt erat. Aliquam iaculis ut nibh ut condimentum. Cras pellentesque egestas feugiat. In porttitor vulputate ipsum in tincidunt. </p>