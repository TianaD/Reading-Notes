# [**CSS layout**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

# [**Normal Flow**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)

## [**How are elements laid out by default?**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow#how_are_elements_laid_out_by_default)


Let's look at a simple example that explains all of this:

<h1>Basic document flow</h1>

<p>
I am a basic block level element. My adjacent block level elements sit on new
lines below me.
</p>

<p>
By default we span 100% of the width of our parent element, and we are as tall
as our child content. Our total width and height is our content + padding +
border width/height.
</p>

<p>
We are separated by our margins. Because of margin collapsing, we are
separated by the width of one of our margins, not both.
</p>

<p>
Inline elements <span>like this one</span> and <span>this one</span> sit on
the same line along with adjacent text nodes, if there is space on the same
line. Overflowing inline elements will
<span>wrap onto a new line if possible (like this one containing text)</span>,
or just go on to a new line if not, much like this image will do:
<img src="long.jpg" alt="snippet of cloth" />
</p>

body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}

## [**Flexbox**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)


## [**Grids**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)

[Grid Layout in Css](https://youtu.be/KOvGeFUHAC0)

## [**Floats**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)

>The float property was introduced to allow web developers to implement layouts involving an image floating inside a column of text, with the text wrapping around the left or right of it. The kind of thing you might get in a newspaper layout.

>But web developers quickly realized that you can float anything, not just images, so the use of float broadened, for example, to fun layout effects such as drop-caps.


## [**Positioning**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

>Positioning allows you to take elements out of normal document flow and make them behave differently, for example, by sitting on top of one another or by always remaining in the same place inside the browser viewport. This article explains the different position values and how to use them.


## [**Multiple-column layout**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

This a method that allows text to be displayed in multiple columns.

## [**Responsive design**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

This allows for more universal use between devices as they access webpages. It renders pages with various parameters including screen size and screen resolution.

## [**Beginner's guide to media queries**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)

>The CSS Media Query gives you a way to apply CSS only when the browser and device environment matches a rule that you specify, for example "viewport is wider than 480 pixels". 

>**Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport, but they can also be used to detect other things about the environment your site is running on, for example whether the user is using a touchscreen rather than a mouse.**

>*In this lesson you will first learn about the syntax used in media queries, and then move on to use them in a working example showing how a simple design might be made responsive.*

## [**Legacy layout methods**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)

Old methods for including grids/grid layouts to pages (i.e. floats)

## [**Supporting older browsers**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)

"*This article explains how to use modern web techniques without locking out users of older technology.*"

