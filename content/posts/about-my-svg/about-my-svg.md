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

SVGs are nice, inline SVGs are nicer - But wrapping them as components will make the experience much better 👌
# The need

I'd like my SVGs:

- Inline so I can CSS them
- As a component for a cleaner file
- With *props* like size and color
- To be able to use CSS or SCSS variants
- Available for both systematic and free-form use

# The use cases 

I have 2 of them:

1. As an *Icon System*, where there's a lot of similarly and a few differences. For this case I'll use a component called `SvgIconSystem.vue`
2. For general purpose, where the SVGs shown have nothing in common. I'll name this component `SvgFreeBase.vue`

Let's dive in to some real world examples

# Icon System

In this icon system each SVG is presented with 2 files - The 1st is the SVG wrapper, it's the main `SvgIconSystem.vue`, the 2nd file is the actual SVG path, the drawing of the icon. 

In this example I'll use the Attach icon 
<IconSystem>
    <IconSystemAttach />
</IconSystem>, named  `IconSystemAttach.vue`.


In the Icon System case all icons have the **same** size, color and behavior that I might override at the instance level, this is the 1st  file. The icon itself, the 2nd file, is unique in shape and name.

Adding the Attach icon in the a Vue file, will look like this:

```html
<SvgIconSystem>
    <IconAttach />
</SvgIconSystem>
```

Now let's review the two files
## The Icon System SFC

This is the 1st file called `SvgIconSystem.vue`:
- The *version*, *viewBox*, *aria-labelledby* and *role* are fixed 
> my icon system is 24\*24 – if your system is at a different size change the *viewBox*
- Controlling the *width*, *height* and *fill* as props, data binded with the `:`, with defaults set at the `props` section
- The icon name and the path will be passed along at the `<slot />`, this is where the SVG paths will be pushed in
- I've added a rectangular just to act as a bounding box regardless of the icons shape
- Control over styles like *hovers* and *transitions* will be done with CSS

Here's how the file looks:

```html
<template>
	<svg
        version="1.1"
		viewBox="0 0 24 24" 
		aria-labelledby="title"
		role="presentation"
		:width="width"
		:height="height"
		:fill="iconColor"
	>
		<slot /> 
		<rect id="bounding-box" fill="none" width="100%" height="100%"/>
	</svg>
</template>

<script>
export default {
	props: {
		width: {
			type: [Number, String],
			default: "1.5em",
		},
		height: {
			type: [Number, String],
			default: "1.5em",
		},
		iconColor: {
			type: String,
			default: "var(--system-dimmed)",
		},
	},
};
</script>

<style lang="scss" scoped>
svg {
	transition: fill 0.35s ease-out;
	&:hover {
		fill: var(--system-color-HL);
	}
}
</style>
```

### Basic Use

Here are a few icons 
<IconSystem>
    <IconSystemAttach />
</IconSystem>
of my *Icon System*:

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

### The  `IconSystemAttach.vue` file

In its origin this file used to be a SVG, something like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1" opacity=".84">
    <path id="➠-BG-Icon" fill="#333" d=",..."/>
  </g>
</svg>
```

And now I've cleaned it up to something like that:
```html
<template>
	<g>
		<title id="title" lang="en">Attach Icon</title>
		<path d="..."
		/>
	</g>
</template>

```

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