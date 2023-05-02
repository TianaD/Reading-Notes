# **REST**

[What Google Learned From Its Quest to Build the Perfect Team](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)

*Must subscribe to read*

&nbsp;

["How I explained REST to my Brother"](https://gist.github.com/brookr/5977550)

1. Who is Roy Fielding?

"Some guy. He's smart." "He helped write the first web servers, that sent documents across the internet… and then he did a ton of research explaining why the web works the way it does. His name is on the specification for the protocol that is used to get pages from servers to your browser."

2. Why don’t the techniques that we use in this class work well when we need to be able to talk to all of the machines in the world?

APIs - machines can use the web like humans do. "Computers can use protocols to send messages back and forth to each other. We've been doing that for a long time but none of the techniques we use today work well when you need to be able to talk to all of the machines in the entire world."

This is called a "redirect."

We are sending human readable data, not set up as a one to many relationship.

3. What is the HTTP protocol that Fielding and his friends created?

It tells the browser what prototype to use. It is capable of describing the location of something anywhere in a world. "The whole world wide web is built on an architectural style called “REST”. REST provides a definition of a “resource”, which is what those things point to."

>Brother: A web page is a resource?
>
>ME: Kind of. A web page is a “representation” of a resource. Resources are just concepts. URLs--those things that you type into the browser...
>
>Brother: I know what a URL is.
>
>ME: Of course. Those URLs tell the browser that there's a concept, somewhere. A browser can then go ask for a specific representation of the concept. Specifically, the browser asks for the web page representation of the concept.
>
>Brother: What other kinds of representations are there?
>
>ME: Actually, representations is one of these things that doesn't get used a lot. In many cases, a resource has only a single representation. But we're hoping that representations will be used more in the future because there's a bunch of new formats popping up all over the place.

4. What does a GET do?

GET allows systems to retrieve information from each other. 

5. What does a POST do?

POST adds something to another system.

6. What does PUT do?

PUT allows a system to replace something in another system.

7. What does PATCH do?

PATCH allows a system to do a partial update.

Note:

"HTTP is actually a general purpose protocol for applying verbs to nouns."

[Geocoding API](https://locationiq.com/) - API retrieved 

[Weather Bit API](https://www.weatherbit.io/)