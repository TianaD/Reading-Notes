# [**Learn CSS - Flexbox**](https://web.dev/learn/css/flexbox/)

### **Flexbox**

*"Flexbox is a layout mechanism designed for laying out groups of items in one dimension. Learn how to use it in this module."*

Flexbox dif. items with dif. sizes and returns the best layout for those items. 

Sidebars sit inline with some content.

What benefits does the flex layout have?

```markdown
- They can display as a row, or a column.

- They respect the writing mode of the document.

- They are single line by default, but can be asked to wrap onto multiple lines.

- Items in the layout can be visually reordered, away from their order in the DOM.

- Space can be distributed inside the items, so they become bigger and smaller according to the space available in their parent.

- Space can be distributed around the items and flex lines in a wrapped layout, using the Box Alignment properties.

- The items themselves can be aligned on the cross axis.
```

"As you learned in the layout guide this will give you a block-level box, with flex item children. The flex items immediately start exhibiting some flexbox behavior, using their initial values."

The initial values mean that:

- Items display as a row.

- They do not wrap.

- They do not grow to fill the container.

- They line up at the start of the container.


### [Controlling the direction of items](https://web.dev/learn/css/flexbox/#controlling-the-direction-of-items)

Even though you haven't added a flex-direction property yet, the items display as a row because the initial value of flex-direction is row. If you want a row then you don't need to add the property. To change the direction, add the property and one of the four values:

- **row:** the items lay out as a row.

- **row-reverse:** the items lay out as a row from the end of the flex container.

- **column:** the items lay out as a column.

- **column-reverse:** the items lay out as a column from the end of the flex container.

### [Reversing the flow of items and accessibility**](https://web.dev/learn/css/flexbox/#reversing-the-flow-of-items-and-accessibility)

The *row-reverse* and *column-reverse* values are a good example of properties that reorder the visual display away from how things are ordered in the HTML document - it can negatively affect accessibility.

Reordering should include testing to check accessibility.

Flex items line up on the left and run horizontally.

### [Wrapping flex items](https://web.dev/learn/css/flexbox/#wrapping-flex-items)

"*The initial value of the flex-wrap property is nowrap. This means that if there is not enough space in the container the items will overflow.*"

"Items displaying using the initial values will shrink as small as they can, down to the *min-content* size before overflow happens."

"To cause the items to wrap add *flex-wrap: wrap* to the flex container."

**"When a flex container wraps it creates multiple flex lines. In terms of space distribution, each line acts like a new flex container. Therefore if you are wrapping rows, it is not possible to get something in row 2 to line up with something above it in row 1. This is what is meant by flexbox being one-dimensional. You can control alignment in one axis, a row or a column, not both together as we can do in grid."**

### [**The flex-flow shorthand**](https://web.dev/learn/css/flexbox/#the-flex-flow-shorthand)

You can set the *flex-direction* and *flex-wrap* properties using the shorthand *flex-flow*. For example, to set *flex-direction* to *column* and allow items to wrap:

### [**Controlling space inside flex items**](https://web.dev/learn/css/flexbox/#controlling-space-inside-flex-items)

*"Assuming our container has more space than is needed to display the items, the items line up at the start and do not grow to fill the space. They stop growing at their max-content size. This is because the initial value of the flex- properties is:"*

```markdown
- *flex-grow: 0*: items do not grow.

- *flex-shrink: 1*: items can shrink smaller than their *flex-basis*.

- *flex-basis: auto*: items have a base size of *auto*.
```

This can be represented by a keyword value of *flex: initial*. The *flex* shorthand property, or the longhands of *flex-grow*, *flex-shrink* and *flex-basis* are applied to the children of the flex container.

To cause the items to grow, while allowing large items to have more space than small ones use *flex:auto*. You can try this using the demo above. This sets the properties to:

```markdown
- *flex-grow: 1*: items can grow larger than their *flex-basis*.

- *flex-shrink: 1*: items can shrink smaller than their *flex-basis*.

- *flex-basis: auto*: items have a base size of *auto*.
```

Using *flex: auto* will mean that items end up different sizes, as the space that is shared between the items is shared out after each item is laid out as max-content size. So a large item will gain more space. To force all of the items to be a consistent size and ignore the size of the content change *flex:auto* to *flex: 1* in the demo.

This unpacks to:

- *flex-grow: 1*: items can grow larger than their *flex-basis*.

- *flex-shrink: 1*: items can shrink smaller than their *flex-basis*.

- *flex-basis: 0*: items have a base size of *0*.

Using *flex: 1* says that all items have zero size, therefore all of the space in the flex container is available to be distributed. As all items have a *flex-grow* factor of *1* they all grow equally and the space is shared equally.

### [**Allowing items to grow at different rates**](https://web.dev/learn/css/flexbox/#allowing-items-to-grow-at-different-rates)

"You don't have to give all items a *flex-grow* factor of *1*. You could give your flex items different *flex-grow* factors. In the demo below the first item has *flex: 1*, the second *flex: 2* and third *flex: 3*."

The same is for *flex-basis* of *auto*, though the three values will need to be specified. The first value being *flex-grow*, the second *flex-shrink*, and the third *flex-basis*.


### [**Reordering flex items**](https://web.dev/learn/css/flexbox/#reordering-flex-items)

The *order* property reorders items in flex container. "Items are laid out in the direction dictated by flex-direction, lowest values first."


### [**Flexbox alignment overview**](https://web.dev/learn/css/flexbox/#flexbox-alignment-overview)

"Flexbox brought with it a set of properties for aligning items and distributing space between items. These properties were so useful they have since been moved into their own specification, you'll encounter them in Grid Layout too. Here you can find out how they work when you are using flexbox."

The set of properties can be placed into two groups. Properties for space distribution, and properties for alignment. The properties which distribute space are:

- **justify-content**: space distribution on the main axis.

- **align-content**: space distribution on the cross axis.

- **place-content**: a shorthand for setting both of the above properties.

The properties used for alignment in flexbox:

- **align-self**: aligns a single item on the cross axis.

- **align-items**: aligns all of the items as a group on the cross axis.

If you are working on the main axis then the properties begin with *justify-*. On the cross axis they begin with *align-*.


1. Flexbox is designed for one-dimensional content. Explain what this means.

Flat, works in a single direction. There is a sense of order given. columns, rows

2. Explain the difference between the main axis and cross axis.

"When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it. Everything we do with flexbox refers back to these axes, so it is worth understanding how they work from the outset."

3. How can using certain properties of flexbox negatively impact accessibility?

Changing the order to display does not change the HTML. So, if something is displayed from right to left, it will still read from left to right (i.e. arabic).


# [**CSS Layout - Flexbox**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## **Flexbox**

### [**Why Flexbox?**](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox#why_flexbox)

Flexbox makes layout tasks easier.


1. What are some advantages of using flexbox over float?

Flexbox can be styled with more variety than floats.

2. How does this topic connect with your long term goals?

It is important to know both front-end and back-end elements for job flexibility. This will help me because I do a lot of design work.

# [**Learn CSS - Layout**](https://web.dev/learn/css/layout/)