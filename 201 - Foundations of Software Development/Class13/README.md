# [**Local Storage And How To Use It On Websites**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)


"Storing information locally on a user’s computer is a powerful strategy for a developer who is creating something for the Web. In this article, we’ll look at how easy it is to store information on a computer to read later and explain what you can use that for."





### [**Adding State To The Web: The “Why” Of Local Storage**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#adding-state-to-the-web-the-why-of-local-storage)

HTTP is stateless as a main transport layer. When an application is closed, its state will be reset the next time it is opened.

As a developer, I need to store my interface, typically done server side. I can do this via signups, but some users do not prefer to signup. Therefore, the solution is using COOKIES.

### [**C Is For Cookie. Is That Good Enough For Me?**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#c-is-for-cookie-is-that-good-enough-for-me)

>The classic way to do this is by using a cookie. A cookie is a text file hosted on the user’s computer and connected to the domain that your website runs on. You can store information in them, read them out and delete them. Cookies have a few limitations though:
>
> - They add to the load of every document accessed on the domain.
>
> - They allow up to only 4 KB of data storage.
>
> - Because cookies have been used to spy on people’s surfing behavior, security-conscious people and companies turn them off or request to be asked every time whether a cookie should be set.

"To work around the issue of local storage — with cookies being a rather dated solution to the problem — the WHATWG and W3C came up with [a few local storage specs](https://html.spec.whatwg.org/multipage/webstorage.html), which were originally a part of HTML5 but then put aside because HTML5 was already big enough."

### [**Using Local Storage In HTML5-Capable Browsers #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#using-local-storage-in-html5-capable-browsers)

Modify localStorage object in JavaScript to use local storage. Or, use setItem() and getItem().


### [**Working Around The “Strings Only” Issue #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#working-around-the-strings-only-issue)

I can only store strings in a different keys.
This is tedious. 

Example: "
var car = {};
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';
console.log( car );
localStorage.setItem( 'car', car );
console.log( localStorage.getItem( 'car' ) );

Trying this out in the console shows that the data is stored as [object Object] and not the real object information:

You can work around this by using the native JSON.stringify() and JSON.parse() methods:

var car = {};
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';
console.log( car );
localStorage.setItem( 'car', JSON.stringify(car) );
console.log( JSON.parse( localStorage.getItem( 'car' ) ) );"


### [**Where To Find Local Storage Data And How To Remove It #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#where-to-find-local-storage-data-and-how-to-remove-it)

I can access data using clear methods, but when wanting to "clear the plate," I can use Opera: Preferences --> Advanced --> Storage. Here, I can see which domains have local as well as how much local data said domains have. 

![Opera Storage Settings Image](https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/596d7bfb-95b6-49ce-92dc-320753d1dcb8/storage-opera.png)


### [**Use Case #1: Local Storage Of Web Service Data #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#use-case-1-local-storage-of-web-service-data)

>One of the first uses for local storage that I discovered was caching data from the Web when it takes a long time to get it. My World Info entry for the Event Apart 10K challenge shows what I mean by that.
>
>When you call the demo the first time, you have to wait up to 20 seconds to load the names and geographical locations of all the countries in the world from the Yahoo BOSS Premium Web service. If you call the demo a second time, there is no waiting whatsoever because — you guessed it — I’ve cached it on your computer using local storage. 
>
>The following code (which uses jQuery) provides the main functionality for this. If local storage is supported and there is a key called thewholefrigginworld, then call the render() method, which displays the information. Otherwise, show a loading message and make the call to the Geo API using getJSON(). Once the data has loaded, store it in thewholefrigginworld and call render() with the same data:
>>if(localStorage && localStorage.getItem('thewholefrigginworld')){
>>
>>render(JSON.parse(localStorage.getItem('thewholefrigginworld')));
>>
>>} else {
>>
>>  $('#list').html('

Cache locally - recommended

### [**Use Case #2: Maintaining The State Of An Interface The Simple Way #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#use-case-2-maintaining-the-state-of-an-interface-the-simple-way)

"Another use case is to store the state of interfaces. This could be as crude as storing the entire HTML or as clever as maintaining an object with the state of all of your widgets. One instance where I am using local storage to cache the HTML of an interface is the [Yahoo Firehose research interface](https://github.com/codepo8/firehose-research)..."


### [**The Dark Side Of Local Storage #**](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/#the-dark-side-of-local-storage)



#### [**Further Reading On SmashingMag: #**]()

[Auto-Save User’s Input In Your Forms With HTML5 And Sisyphus.js](https://www.smashingmagazine.com/2011/12/sisyphus-js-client-side-drafts-and-more/)

[Keeping Web Users Safe By Sanitizing Input Data](https://www.smashingmagazine.com/2011/01/keeping-web-users-safe-by-sanitizing-input-data/)

[An In-Depth Introduction To Ember.js](https://www.smashingmagazine.com/2013/11/an-in-depth-introduction-to-ember-js/)

[Building A Simple Cross-Browser Offline To-Do List](https://www.smashingmagazine.com/2014/09/building-simple-cross-browser-offline-todo-list-indexeddb-websql/)

1. Why would a developer use local storage for a web application?

to store user preferences, or input

2. What information should not be stored in local storage?

anything that compromises a user - passwords, socials, etc.

3. Local storage can store what type of data? How would you convert it to that type before storing?

JSON allows us to store data in a way that looks  like a JavaScript object.




# Bookmark/Skim

# [**“The Past, Present, and Future of Local Storage for Web Applications”**](http://diveinto.html5doctor.com/storage.html)


