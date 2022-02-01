---
title: How I use SVGs in Vue and Gridsome
author_name: Yonatan Ben Knaan
urlname: svg-vue-gridsome
date: 2021-07-09
updated: 2021-07-09
published: true
tags: ['SVG', 'Creative', 'Code']
cover_image: 
social_image: ./social-cover-about-my-svgs.jpg
cover_caption: 
description: 
---
import SVGIconBase from '~/components/SVGIconBase.vue';    
import KofIcon from '~/components/icons/KofIcon.vue';    
import IconBright from '~/components/icons/IconBright.vue';    
import MonkeySkull from '~/components/icons/MonkeySkull.vue';    
import IconSystemAttach from '~/components/icons-system/icon-system-attach.vue';    
import IconSystemDoor from '~/components/icons-system/icon-system-door.vue';    
import IconSystemImage from '~/components/icons-system/icon-system-image.vue';    
import IconSystemSettings from '~/components/icons-system/icon-system-settings.vue';    
import IconSystemOk from '~/components/icons-system/icon-system-ok.vue';    
import Hr from '~/components/Hr.vue';    
import Example from './example.vue';    

> SVGs are **nice**  
> Inline SVGs are **nicer**  
> SVG as components are the **nicest**

# The need

I'd like my SVGs:

1. As an *Icon System*, where there's a lot of similarly and a few differences. 
   For this case I'll use a component called `SVGIconBase.vue`
   - Inline so I can CSS them
   - As a component for a cleaner file
   - With *props* like size and color
   - To be able to use CSS or SCSS variants
   - Available for both systematic and free-form use
2. For general purpose, where the SVGs shown have nothing in common but you still want it as component and to use all the Veudoo magic

Let's dive in to some real world examples

# The Icon System SVG

In my *icon system* all icons have the **same size, color and behavior** (which I might override at the instance level).  

**I use 2 *SFC*s for each icon** – The 1st file is the SVG wrapper (`SVGIconBase.vue`), the 2nd file is the actual SVG path, the drawing of the icon, which is also a *Vue* file (`IconSomeName.vue`) and it's unique in its shape and name.  

It will look like this in the HTML:

```html
<SVGIconBase> <!-- The wrapper -->
    <IconSomeName /> <!-- The icon -->
</SVGIconBase>
```

Now let's review these two files
## The SVGIconBase SFC

This is the 1st file called `SVGIconBase.vue`:
- The *version*, *viewBox*, *aria-labelledby* and *role* are fixed 
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
		:width="size"
        :height="size"
		:fill="iconColor"
	>  <!-- The values with ":" indicate the props
            The rest is fixed -->
		<slot /> <!-- The icon -->
		<rect 
            id="bounding-box" 
            fill="none" 
            size="100%" 
    
        />  <!-- For better hovers -->
	</svg>
</template>

<script>
export default {
	props: {
		size: {
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
	transition: transform 0.25s ease-out;
	&:hover {
		transform: scale(1.025);
	}
}
</style>
```
## The Icon File

For the icon drawing I tore apart the *path* form the the *SVG* and added the *title* tag and the *lang* attribute. 

x> Plan a multi-lang icon system?  
Make sure to expose the *title* & *lang* values *props* as well

x> Using a *stroke* with or instead of a *fill*?  
Make sure to expose it as a *prop* too

```html
<template>
	<g>
		<title id="title" lang="en">Some Icon Name</title>
		<path d="..." />
	</g>
</template>
```

## Basic Use

Here are a few icons of my *Icon System* to play around with:

<Hr />

<SVGIconBase>
    <IconSystemAttach />
</SVGIconBase>

<SVGIconBase>
    <IconSystemDoor/>
</SVGIconBase>

<SVGIconBase>
    <IconSystemImage/>
</SVGIconBase>

<SVGIconBase>
    <IconSystemSettings/>
</SVGIconBase>

<SVGIconBase>
    <IconSystemOk/>
</SVGIconBase>

<Hr />

Now I can easley change the icon size and color

<SVGIconBase
    size="16"
    fill="var(--title-color)"
    >
    <IconSystemAttach />
</SVGIconBase>

<SVGIconBase>
    <IconSystemAttach />
</SVGIconBase>

<SVGIconBase
    size="48"
    fill="var(--bg-primary-HL)"
    >
    <IconSystemAttach />
</SVGIconBase>

<SVGIconBase
    size="96"
    fill="var(--system-color-HL)"
    >
    <IconSystemAttach />
</SVGIconBase>

<Hr />

And example code will look like so:

```html
<SVGIconBase size="96" fill="orange">
    <IconSystemAttach />
</SVGIconBase>
```

x> My icon system is 24\*24 – If you built your system in a different size make sure to change the *viewBox* and the default *props*

<Hr />

Nice, now for the 2nd use case

# Free Style SVG

For this one is just change your SVG to a *Vue* file and wrap it with a *template* tag. The end. And again, the value of it is that you can use your css/scss vars and to better organize your file - like so:

```html
<<template>
	<svg viewBox="0 0 640 240">
		<rect 
            fill="var(--bg-code)" 
            width="100%" height="100%" />
        <polygon 
            transform-origin="320 120" 
            points="320 40 390 80 390 160 320 200 250 160 250 80">
        </polygon>
	</svg>
</template>

<style lang="scss" scoped>
@keyframes rotate {
	0% { transform: rotate(0); }
	to { transform: rotate(360deg); }
}
polygon {
	fill: var(--system-color);
	transition: fill 0.5s ease-in-out,;
	animation: rotate 5s cubic-bezier(0.75, 0, 0.25, 1) alternate infinite;
	&:hover {
		fill: var(--link-color);
	}
}
</style> 
```

Which looks like that:

<Example />

<Hr />


#### That's all folks, see ya'll next time