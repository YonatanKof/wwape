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
import IconBase from '~/components/IconBase.vue';    
import IconSystem from '~/components/IconSystem.vue';    
import IconFree from '~/components/IconFree.vue';    
import KofIcon from '~/components/icons/KofIcon.vue';    
import IconBright from '~/components/icons/IconBright.vue';    
import MonkeySkull from '~/components/icons/MonkeySkull.vue';    
import SystemAttach from '~/components/icons-system/system-attach.vue';    
import Hr from '~/components/Hr.vue';    

## The problem

- I'd like my SVGs inline so I can CSS them
- I'd like them out of sight so for a cleaner file
- I'd like them easley manageable and to use CSS variants
- I'd like to use the power of the framework (in this case Vue and Gridsome)

## The use cases 

1. For an icon system, where all icons have the same size, color and behavior that I might change at the instance level. The icon is unique in shape and name.
2. For general purpose use, where the icons showed have nothing in common - they all have different size(*width*, *height*, *viewBox*), color (*fill* or *stroke*)

Two approaches, the first is simple and offer little control, the later is loosely coupled but offers more control when the SVG is used.

### Basic Use

Here are a few icons 

<IconSystem>
    <SystemAttach />
</IconSystem>

<IconSystem
    width="48"
    height="48"
    fill="var(--bg-primary-HL)"
    >
    <SystemAttach />
</IconSystem>

<IconSystem
    width="96"
    height="96"
    fill="red"
    >
    <SystemAttach />
</IconSystem>

<IconFree>
    <MonkeySkull />
</IconFree>

### Kof Icon

<IconBase>
    <KofIcon />
</IconBase>

<IconBase
    width="64"
    height="64"
    fill="var(--bg-primary-HL)"
    >
    <KofIcon />
</IconBase>

<IconBase
    width="128"
    height="128"
    >
    <KofIcon />
</IconBase>

<Hr hr-margin-top="var(--spacem-2xl)" />

### Sun Icon

<IconBase
    icon-name="flip-theme-to-bright"
    icon-color="none"
    stroke="var(--system-color)"
    stroke-width="2">
    <IconBright />
</IconBase>

<IconBase
    icon-name="flip-theme-to-bright"
    icon-color="none"
    stroke="var(--bg-caution-HL)"
    stroke-width="2"
    width="64"
    height="64"
    >
    <IconBright />
</IconBase>

<IconBase
    icon-name="flip-theme-to-bright"
    icon-color="none"
    stroke="var(--link-color)"
    stroke-width="2"
    width="128"
    height="128"
    >
    <IconBright />
</IconBase>


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