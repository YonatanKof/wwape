---
title: MD Content Types
author_name: Yonatan Ben Knnan
urlname: md-content-types
date: 2020-11-12
updated: 
published: true
tags: ['Content']
cover_image: ./macOS/Comma_plugin.png
cover_caption: Polls on the beach
description: Markdown content types in use at this gridsome site
canonical_url: false
series: false
---
# Main Title

## Secondary Title

### Tertiary Title

> Blockquote. Write `>` to use

*Hint* types Blockquote

!> Tip Blockquote, generates class `hint` & `tip`. Write `!>` to use

?> Attention Blockquote, generates class `hint` & `waring`. Write `?>` to use

x> Error Blockquote, generates class `hint` & `error`. Write `x>` to use

The time has come for you to destroy Mephisto's Soulstone! Take the Stone to the Hellforge. Place it upon the forge and strike it soundly with the Hammer. Only by doing this can you prevent Mephisto from manifesting in this world ever again.

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
## Code Snippets

### CSS

```css
strong {
    font-weight: var(--font-wight--bolder);
}

ul {
    list-style-type: disc;
    margin-left: var(--space-3xl);
    margin-bottom: var(--space-3xl);
}
ol {
    list-style-type: decimal;
    margin-left: var(--space-3xl);
    margin-bottom: var(--space-3xl);
}
```

### Javascript

```javascript
export default {
    props: {
        showLogo: { default: true },
        isSelected: { default: false },
        showPosts: { default: true },
        value: {"As a token of my gratitude, I will identify items for you at no charge."}
    }
};
```

# Footnotes

[^footnote]: I'm a footnote!