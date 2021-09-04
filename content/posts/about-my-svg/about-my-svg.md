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
import IconSystemAttach from '~/components/icons-system/icon-system-attach.vue';    
import IconSystemDoor from '~/components/icons-system/icon-system-door.vue';    
import IconSystemImage from '~/components/icons-system/icon-system-image.vue';    
import IconSystemSettings from '~/components/icons-system/icon-system-settings.vue';    
import IconSystemOk from '~/components/icons-system/icon-system-ok.vue';    
import Hr from '~/components/Hr.vue';    

SVG's are nice, a framework can make then nicer 
## The use cases 

There are 2 use cases for my SVG's 

1. As an *Icon System*, where there's a lot of similarly and a few differences – All icons have the same size, color and behavior that I might override at the instance level – The icon is unique in shape and name -> File name `SvgIconSystem.vue`
2. For general purpose use, where the SVGs shown have nothing in common -> File name `SvgFreeBase.vue`


## The need

For both use cases I'd like my SVGs as followed:

- Inline so I can CSS them
- As a component for a cleaner file
- With porps like size and color
- To be able to use CSS or SCSS variants


Two approaches, the first is simple and offer little control, the later is loosely coupled but offers more control when the SVG is used.

# Icon System
Let's review the template
```html
<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		aria-labelledby="title"
		role="presentation"
		:width="width"
		:height="height"
		:fill="iconColor"
	>
		<slot />
		<rect fill="none" width="100%" height="100%"/>
	</svg>
</template>
```

### Basic Use

Here are a few icons of my *Icon System*:

<IconSystem>
    <IconSystemAttach />
</IconSystem>

<IconSystem>
    <IconSystemDoor/>
</IconSystem>

<IconSystem>
    <IconSystemImage/>
</IconSystem>

<IconSystem>
    <IconSystemSettings/>
</IconSystem>

<IconSystem>
    <IconSystemOk/>
</IconSystem>

Let's play around with them:

<IconSystem
    width="48"
    height="48"
    fill="var(--bg-primary-HL)"
    >
    <IconSystemAttach />
</IconSystem>

<IconSystem
    width="96"
    height="96"
    fill="orange"
    >
    <IconSystemAttach />
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