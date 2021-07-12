---
title: How I use SVGs in Vue and Gridsome
author_name: Yonatan Ben Knaan
urlname: svg-vue-gridsome
date: 2021-07-09
updated: 2021-07-09
published: true
tags: ['Sketch','Productivity', 'Shortcuts']
cover_image: 
social_image: ./social-cover-about-my-svgs.jpg
cover_caption: 
description: 
---

## The problem

- I'd like my SVGs inline so I can CSS them
- I'd like them out of sight so for a cleaner file
- I'd like them easley manageable 

## The use cases 

1. For an icon system, where all icons have the same size and we just might change the size or color of an instance 
2. For general purpose use, where 

Two approaches, the first is simple and offer little control, the later is loosely coupled but offers more control when the SVG is used.

### IconBase.vue

<iframe
  src="https://app.abstract.com/embed/3f9a3f45-47a1-46fa-b7c2-d788a37aa269"
  width="100%"
  height="360"
  frameborder="0"
  allowfullscreen
></iframe>
 

```html
<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :stroke="stroke"
        :stroke-width="strokeWidth"
        :viewBox="viewBox"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <title :id="iconName" lang="en">{{ iconName }}</title>
        <g :fill="iconColor">
            <slot />
        </g>
    </svg>
</template>
```

```javascript
<script>
export default {
    props: {
        iconName: {
            type: String,
            default: ""
        },
        width: {
            type: [Number, String],
            default: 24
        },
        height: {
            type: [Number, String],
            default: 24
        },
        viewBox: {
            type: String,
            default: "0 0 32 32"
        },
        iconColor: {
            type: String,
            default: "currentColor"
        },
        stroke: {
            type: String,
            default: "none"
        },
        strokeWidth: {
            type: [Number, String],
            default: "none"
        }
    }
};
</script>
```