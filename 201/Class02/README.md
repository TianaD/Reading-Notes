# [**Introduction to HTML**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

### [**HTML text fundamentals**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

#### [The basics: headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)

&nbsp;

1. [Why is it important to use semantic elements in our HTML?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_semantics)

    ##### Semantics - "the branch of linguistics and logic concerned with meaning"

        Semantics make code universal to avoid confusion about what various elements mean.

2. [How many levels of headings are there in HTML?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#implementing_structural_hierarchy)

        Of the six heading levels available, you should aim to use no more than three per page, unless you feel it is necessary.

3. [What are some uses for the [sup]<sup> and [sub]<sub> elements?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#superscript_and_subscript)

- dates

- Ordinal numerals (e.g., 1<sup>st</sup>, 2<sup>nd</sup>, 3<sup>rd</sup>)

- footnotes and endnotes

- Copyright and trademark symbols (e.g., <sup>©</sup>, <sup>TM</sup>, <sup>®</sup>)

- chemical formulae/symbols (e.g., to show charges of ions, the formula for water is H<sub>2</sub>O.)

-  mathematical functions (e.g., to denote an exponent)

4. [When using the <abbr> element, what attribute must be added to provide the full expansion of the term?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)

>Another fairly common element you'll meet when looking around the Web is <abbr> — this is used to wrap around an abbreviation or acronym. When including either, provide a full expansion of the term in plain text on first use, along with the <abbr> to mark up the abbreviation. This provides a hint to user agents on how to announce/display the content while informing all users what the abbreviation means.
>
>If providing the expansion in addition to the abbreviation makes little sense, and the abbreviation or acronym is a fairly shortened term, provide the full expansion of the term as the value of title attribute:
>
>>Abbreviation example:
>>
>>Let's look at an example.
>>
>><p>
  >>We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web documents.
>></p>
>>
>><p>
  >>I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with the chainsaw.
>></p>
>
>
>These will come out looking something like this:
>
>>We use HTML, Hypertext Markup Language, to structure our web documents.
>>
>>I think Rev. Green did it in the kitchen with the chainsaw.
