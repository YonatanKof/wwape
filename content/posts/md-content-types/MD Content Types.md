---
title: MD Content Types
author_name: Yonatan Ben Knaan
urlname: markdown-types
date: 2020-11-12
updated: 
published: true
tags: ['Development']
cover_image:
social_image: ./social-cover-md-content-types.jpg
cover_caption: Two identical text groups, the first as plain text with Markdown syntax, the second formatted and styled
description: Markdown content types used in this gridsome site
canonical_url: false
series: false
---
import LShape from '~/components/forPosts/LShape.vue'
    
import YouTubePlayer from '~/components/YouTubePlayer.vue'

Hi all 👋  
Let's see what we have here

# Boring H1 Title

This post ain't interesting at all 🤷  
It's just a showcase of *Markdown* styles for this *Gridsome* website.

!> BTW, I'm using [vue-remark](https://www.npmjs.com/package/@gridsome/vue-remark) to transform MD  

## Humdrum H2 Title

I'm using my own design system, it's a great way to manage design and theming, and doing it with SCSS is easy and fun – relative to a tool like Sketch – which is awesome but tedious. 

Please keep an eye over [Kof Design System](https://share.goabstract.com/03c7ec17-6183-4b14-9528-59e90014e79e)

### Dull H3 Title

Because of vue-remark I can add Vue components into my markdown. Like this 3D viewer/controller from an article about Perspective I'm writing:

<LShape 
:show-comp-scale="true" 
:show-comp-pres="true"
:show-comp-rot-y="true"
:show-comp-axle-y="true"
/>

#### Monotonous H4 Title

##### Stale H5 Title

###### Tiresome H6 Title

This text is **Strong Text**

This text is *Emphasized Text*

This text is ~~Strikethrough *Text* Text **Text**~~

## Blockquotes 

### Regular stuff

> This is *Blockquote*. Write `>` to use
> 
> With multi paragraph
> 
>> With nested blockquote
>> 
>>> Another nested blockquote
>
> #### Welcome to the desert of the real 🏖
>
> - Quickly in and quickly out is all the advice I can give you.
> - I believe that stopping the siege on Harrogath is the only way for you to earn the trust of these people.  

>  Very nice – *Everything* is going according to **plan**.

## And with three types of *hints* 

!> **Tip** Blockquote, generates class `hint` & `tip`. Write `!>` to use

?> **Attention** Blockquote, generates class `hint` & `waring`. Write `?>` to use

x> **Error** Blockquote, generates class `hint` & `error`. Write `x>` to use

This is a paragraph -> The time has come for you to destroy Mephisto's Soulstone! Take the Stone to the Hellforge. Place it upon the forge and strike it soundly with the Hammer. Only by doing this can you prevent Mephisto from manifesting in this world ever again. 1/6 3/4 3/4

## Lists

### Ordered List

1. Ordered list item
2. Another ordered list item
   1. Indented item
      - The First 
      - The Second 
   2. Another indented item.
   
    Additional text for indented item

3. Yet another ordered list item [^footnote].
   
   Additional text for item

### Unordered List

- Ordered list item

- Another ordered list item
  
  - Indented item.

    - Another indent
        1. The First 
        2. The Second 
    - Another item in that indent

  - Another indented item.
  
  ```
  Love is all you need
  ```

  Text for indented item

- Yet another ordered list item [^footnote].

   !> Blockquote in a list


## Preformatted tag

```
This is a Preformatted tag (pre). Warp with ``` to use
```

    Or just use a tab indent

<!-- You acn use a comment markup to separate elements -->
    <html>
        <body>
            <h1>You acn use a comment markup to separate elements</h1>
        </body>
    </html>  


## Code Snippets

### HTML

```html
<html> <!-- html formatting  -->
    <body>
        <h1>You acn use a comment markup to separate elements</h1>
    </body>
</html> 
```

### CSS

```css
/* css formatting */
strong { 
    font-weight: var(--font-wight--bolder);
}

ul {
    list-style-type: disc;
    margin-left: 1rem;
    margin-bottom: 2rem;
}

```

### Javascript

```javascript
// javascript formatting
export default { 
    props: {
        showLogo: { default: true },
        isSelected: { default: false },
        showPosts: { default: true },
        value: {"As a token of my gratitude, I will identify items for you at no charge."}
    }
};
```
![image](~/assets/images/Yonatan_Ben-Knaan-Squere.jpg)
*Now that's one good looking Kof*

`Use code in your Markdown file.`

Visit my website [Yonatan Kof](https://yonatankof.com "The best designer in Israel").

Visit my website [Yonatan Kof][mywebsite].

IDs to heading are being generate automatically, [You can link to them like so](#footnotes), by referring to [their id](#tertiary-title)

<https://yonatankof.com>

Sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[mywebsite]: <https://yonatankof.com> "The best designer in Israel"

## Tables

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Checkbox – MIA

Missing in Action is design for the Checkbox  
It looks bad and right now I don't really know how to manipulate its CSS

  - [x] ~~Write the press release~~
  - [ ] Me not done
- [ ] Update the website
- [ ] Contact the media

### Add a Youtube Embed

!> Don't forget to add `import YouTubePlayer from '~/components/YouTubePlayer.vue` at the top for the `md` file

<YouTubePlayer
    videoId="E86gWQs-ios"
    title="Kill All Hippies"
    >
</YouTubePlayer>

## Footnotes 

[^footnote]: I'm a footnote!