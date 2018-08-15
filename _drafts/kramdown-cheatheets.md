---
title:  "Kramdown Cheats Sheet"
categories: Markdown, Kramdown
---

> Sample Blockquote
>
> > Nested Blockquote
>
> ### Header Blockquote

---

This is a sample codeblock
    test code

~~~~ ruby
#this is also codeblock
~~~
def what /
  42
end
#Ending lines must have at least as many tidles as startting line
~~~~

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

---

Definition

Term Definition
: Define the term

Coffee
: Black hot drink

Milk
: White cold drink

This *is* a term
: This will be para

  > Blockquote

  # A header

---

Block atributes
{: title="Blockquote title" }

> A nice blockquote with class
{: .class1 .class2 }

> A nice blockquote with id
{: #id1 .this_is_class }

---

This is a Markdown to HTML Demo

*[HTML]: Hypertext markup languange
*[text]: Array of char

---

## Table Of Content
{: .no_toc}
* Table Of Content
{:toc}


---

[homepage](/){:nofollow}
[About](/about){:nofollow}

{:nofollow: target="_blank" rel="nofollow"}


---

**Info :** This one only work on my blog.
{: .info }

---

This is a text with footnote [^1]

this is just a normal paragraph

[^1]: And here's the Definition
