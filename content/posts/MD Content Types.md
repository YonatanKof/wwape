---
title: MD Content Types
author_name: Yonatan Ben Knnan
urlname: md-content-types
date: 2020-11-12
updated: 
published: true
tags: ['Development']
cover_image: ./macOS/Comma_plugin.png
cover_caption: Polls on the beach
description: Markdown content types in use at this gridsome site
canonical_url: false
series: false
---
# Main Title

## Secondary Title

### Tertiary Title

#### Heading 4

##### Heading 5

###### Heading 6

This text is **Strong Text**

This text is *Emphasized Text*

This text is ~~Strikethrough *Text* Text **Text**~~

> This is *Blockquote*. Write `>` to use
> 
> With multi paragraph
> 
>> With nested blockquote
>> 
>>> Another nested blockquote
>
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

```
This is a *Preformatted* tag (pre). Warp with ``` to use
```

    Or just use a tab indent

<!-- You acn use a comment markup to separate elements -->
    <html>
        <body>
            <h1>You acn use a comment markup to separate elements</h1>
        </body>
    </html>  

- Yo
  - [x] Write the press release
  - [ ] Me not done


- [ ] Update the website
- [ ] Contact the media

### Three types of *hint* blockquote

!> Tip Blockquote, generates class `hint` & `tip`. Write `!>` to use

?> Attention Blockquote, generates class `hint` & `waring`. Write `?>` to use

x> Error Blockquote, generates class `hint` & `error`. Write `x>` to use

This is a paragraph -> The time has come for you to destroy Mephisto's Soulstone! Take the Stone to the Hellforge. Place it upon the forge and strike it soundly with the Hammer. Only by doing this can you prevent Mephisto from manifesting in this world ever again. 1/6 3/4 3/4

### Ordered List

1. Ordered list item
2. Another ordered list item
   1. Indented item
   2. Another indented item.
   
    Additional text for indented item

3. Yet another ordered list item [^footnote].
   
   Additional text for item

### Unordered List

- Ordered list item

- Another ordered list item
  
  - Indented item.

    - Another indent
    
    - Another item in that indent

  - Another indented item.
  
  ```
  Love is all you need
  ```

  Text for indented item

- Yet another ordered list item [^footnote].

   !> Blockquote in a list

---


---
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

``Use `code` in your Markdown file.``

Visit my website [Yonatan Kof](https://yonatankof.com "The best designer in Israel").

Visit my website [Yonatan Kof][mywebsite].

IDs to heading are being generate automatically, [You can link to them like so](#footnotes), by referring to [their id](#tertiary-title)

<https://yonatankof.com>

Sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[mywebsite]: <https://yonatankof.com> "The best designer in Israel"

### Using Tables

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

### Footnotes 

[^footnote]: I'm a footnote!