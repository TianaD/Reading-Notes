# [**Readings: Audio, Video, Images**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

## Video and Audio on the Web

This is not a lesson on how to produce audio and video files. This is a basic foundation of HTML plugin.

>Note: Before you begin here, you should also know that there are quite a few OVPs (online video providers) like YouTube, Dailymotion, and Vimeo, and online audio providers like Soundcloud. Such companies offer a convenient, easy way to host and consume videos, so you don't have to worry about the enormous bandwidth consumption. OVPs even usually offer ready-made code for embedding video/audio in your webpages; if you use that route, you can avoid some of the difficulties we discuss in this article. We'll be discussing this kind of service a bit more in the next article.

&nbsp;

### [**The *video* element**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#the_video_element)

- allows someone to embed videos easily

**src**

"In the same way as for the <img> element, the src (source) attribute contains a path to the video you want to embed. It works in exactly the same way."

**Controls**

Controls needed: start and stop; should be accessible for people with narcolepsy

There is something called fallback in video tags. A paragraph goes within the tag. "This is called fallback content — this will be displayed if the browser accessing the page doesn't support the <video> element, allowing us to provide a fallback for older browsers."

### [**Using multiple source formats to improve compatibility**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#using_multiple_source_formats_to_improve_compatibility)

"Formats like MP3, MP4 and WebM are called container formats."

different browsers support dif. video and audio formats which means we must accommodate for this

Fun fact: "An "MP3 file" is actually an MPEG-1 Audio Layer III (MP3) audio track stored within an MPEG or MPEG-2 container."

"codecs described in the previous section exist to compress video and audio into manageable files, since raw audio and video are both exceedingly large." "Each codec offers its own advantages and drawbacks, and each container may also offer its own positive and negative features affecting your decisions about which to use."


>Things become slightly more complicated because not only does each browser support a different set of container file formats, they also each support a different selection of codecs. 

>In order to maximize the likelihood that your website or app will work on a user's browser, you may need to provide each media file you use in multiple formats. 

>If your site and the user's browser don't share a media format in common, your media won't play.

[***Choosing the right container***](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#choosing_the_right_container)

[***Choosing a video codec***](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec)

[***Choosing an audio codec***](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec)

Note: "mobile browsers may support additional formats not supported by their desktop equivalents, just like they may not support all the same formats the desktop version does"

"On top of that, both desktop and mobile browsers may be designed to offload handling of media playback (either for all media or only for specific types it can't handle internally)."

### [**Other *video* features**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#other_video_features)

List of Features:

- width and height - video size 
>>
>> You can control the video size either with these attributes or with CSS. In both cases, videos maintain their native width-height ratio — known as the aspect ratio. If the aspect ratio is not maintained by the sizes you set, the video will grow to fill the space horizontally, and the unfilled space will just be given a solid background color by default.

- autoplay - causes video to automatically start playing while page loads; this can be annoying to users

- loop - causes video/audio to play again after finished

- muted - causes the media to play and the sound to be turned off as default

- poster - displayed before video is played

- preload - Used for buffering large files; it can take one of three values:

- "*none*" does not buffer the file

- "*auto*" buffers the media file

- "*metadata*" buffers only the metadata for the file

You can find the above example available to play live on GitHub (also see the source code.) Note that we haven't included the *autoplay* attribute in the live version — if the video starts to play as soon as the page loads, you don't get to see the poster!


### [**The *audio* element**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#the_audio_element)



## [**Displaying video text tracks**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#displaying_video_text_tracks)

When the audio is unable to be heard...it is necessary to be transcribed

### [*Active learning: Embedding your own audio and video*](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#active_learning_embedding_your_own_audio_and_video)


1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.

2. Describe the use of the *src* and *controls* attributes in the *video* element.

3. Why is it important to have fallback content inside the *video* element?

4. Write a very short story where *audio* and *video* are characters.


# [**A Complete Guide To Grid**](https://css-tricks.com/snippets/css/complete-guide-grid/)

1. How does Grid layout differ from Flex?

2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.


# [**Responsive Images**](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

2. Define the following *img* attributes *srcset* and *sizes*. Write an example of how they are used.

3. How is *srcset* more helpful for responsive images than CSS or JavaScript?

makes the code more resilient

# [***Images in HTML***](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)

# [***Other Embedding Technologies***](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)