# [MDN CSS Guidelines](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)

&nbsp; 

## What is the file extension for css?

.css

## What is CSS

CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.

&nbsp; 

## What is CSS for?
As we have mentioned before, CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.

A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.

Presenting a document to a user means converting it into a form usable by your audience. Browsers, like Firefox, Chrome, or Edge, are designed to present documents visually, for example, on a computer screen, projector, or printer.

&nbsp; 

## CSS Syntax

CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.

h1 {
  color: pink;
  font-size: 6em;
}

CSS properties have different allowable values, depending on which property is being specified. In our example, we have the color property, which can take various color values. We also have the font-size property. This property can take various size units as a value.

A CSS stylesheet will contain many such rules, written one after the other.

h1 {
  color: pink;
  font-size: 6em;
}

p {
  color: yellow;
}


## CSS Modules

Modules are organized identifiers that make finding items easy since the information is categorized by type.
For example, Backgrounds and Borders is a module. Background-color and border-color properties would be defined in this module.

## CSS specifications

All web standards technologies (HTML, CSS, JavaScript, etc.) are defined in giant documents called specifications (or "specs"), which are published by standards organizations (such as the W3C, WHATWG, ECMA, or Khronos) and define precisely how those technologies are supposed to behave. CSS is no different.

&nbsp;

&nbsp;

# [How To Add CSS](https://www.w3schools.com/css/css_howto.asp)


## Three Ways to Insert CSS

There are three ways of inserting a style sheet:

- External CSS
- Internal CSS
- Inline CSS


&nbsp;

Example

External styles are defined within the link element, inside the head section of an HTML page:

&nbsp;

><!DOCTYPE html>
>
><html>
>
><head>
>
><link rel="stylesheet" href="mystyle.css">
>
></head>
><body>
>
><h1>This is a heading</h1>
>
><p>This is a paragraph.</p>
>
></body>
>
></html>

&nbsp;

An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

Here is how the "mystyle.css" file looks:

"mystyle.css"
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}

&nbsp;

***Note: Do not add a space between the property value and the unit:***

*Incorrect (space): margin-left: 20 px;*

*Correct (nospace): margin-left: 20px;*

&nbsp;

## Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the [style] 

Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the style element, inside the head section.

Example

"Internal styles are defined within the style element, inside the head section of an HTML page:"

&nbsp;


!DOCTYPE html

html

head

style

body {

  background-color: linen;

}

h1 {

  color: maroon;

  margin-left: 40px;

}

/style

/head

body


h1This is a heading/h1

pThis is a paragraph./p

/body

/html

Example

Internal styles are defined within the style element, inside the head section of an HTML page:

!DOCTYPE html

html

head

style

body {

  background-color: linen;

}

h1 {

  color: maroon;

  margin-left: 40px;

}

/style

/head

body

h1This is a heading/h1

pThis is a paragraph./p

/body

/html

&nbsp;

## Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

Example 

Inline styles are defined within the "style" attribute of the relevant element:

><!DOCTYPE html>
>
><html>
>
><body>
>
><h1 style="color:blue;text-align:center;">This is a heading</h1>
>
><p style="color:red;">This is a paragraph.</p>
>
></body>
></html>

&nbsp;

## Multiple Style Sheets

If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 

&nbsp;

## Cascading Order

What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

&nbsp;

&nbsp;

# [CSS color Property](https://www.w3schools.com/cssref/pr_text_color.php)

Example

Set the text-color for different elements:

body {

  color: red;

}

h1 {

  color: #00ff00;

}

p.ex {

  color: rgb(0,0,255);

}



### Definition and Usage

The color property specifies the color of text.

**Tip**: Use a background color combined with a text color that makes the text easy to read.

&nbsp;

## CSS Syntax

color: color | initial | inherit;






