---
layout: post
title: "CBCS - Creatorb Cheatsheet"
date: 2013-12-04 05:00:00
categories: [en,minds]
description: "CBCS (CreatorBe CheatSheet), Just an another my collections cheatsheet"
---

CBCS (creatorbe cheatsheet) a way to make my life easier.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)]()
[![Waffle.io](https://img.shields.io/badge/Helpful_%3F-A_lot-ff69b4.svg?style=flat)]()

### [List](#list)
- [GitHub Markdown](#github-markdown)
	- [Blockquotes](#blockquotes)
	- [Checklist](#checklist)
	- [Code](#code)
	- [Emoji](#emoji)
	- [Headers](#headers)
	- [HTML inline](#html-inline)
	- [Images](#images)
	- [Line](#line)
	- [Link](#link)
	- [List Menu](#list-menu)
	- [Tables](#tables)
	- [Text](#text)
	- [Youtube Videos](#youtube-videos)
- [irssi](#irssi)
  - [Start](#start)
  - [Cheat Chat](#cheat-chat)



## GitHub Markdown

### Blockquotes
 
```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
 
Quote break.
 
> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
```
 
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
 
Quote break.
 
> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

> Blockquote
>> Nested blockquote

    Markdown :  > Blockquote
              >> Nested Blockquote


### Checklist
- [ ] An uncompleted task
- [x] A completed task

~~~
 Markdown : - [ ] An uncompleted task
          - [x] A completed task
~~~


### Code
`code()`

    Markdown :  `code()`

```xml

<RelativeLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:paddingBottom="@dimen/activity_vertical_margin"
    tools:context=".CreatorbeActivity">

    <TextView 
        android:text="Coding"
        android:id="@+id/textview"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

</RelativeLayout>

```

    Markdown : ```xml

    			<RelativeLayout 
					    xmlns:android="http://schemas.android.com/apk/res/android"
					    xmlns:tools="http://schemas.android.com/tools"
					    android:layout_width="match_parent"
					    android:layout_height="match_parent"
					    android:paddingLeft="@dimen/activity_horizontal_margin"
					    android:paddingRight="@dimen/activity_horizontal_margin"
					    android:paddingTop="@dimen/activity_vertical_margin"
					    android:paddingBottom="@dimen/activity_vertical_margin"
					    tools:context=".CreatorbeActivity">

					    <TextView 
					        android:text="Coding"
					        android:id="@+id/textview"
					        android:layout_width="wrap_content"
					        android:layout_height="wrap_content" />

				</RelativeLayout>

               ```


### Emoji
emoji :smile: :thumbsup: `emoji :smile: :thumbsup:`

NOTE: <a href="http://www.webpagefx.com/tools/emoji-cheat-sheet/" target="_blank">Emoji cheat sheet for Github</a>


### Headers
 
```no-highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6
 
Alternatively, for H1 and H2, an underline-ish style:
 
Alt-H1
======
 
Alt-H2
------
```
 
# H1
## H2
### H3
#### H4
##### H5
###### H6
 
Alternatively, for H1 and H2, an underline-ish style:
 
Alt-H1
======
 
Alt-H2
------


### HTML inline
 
You can also use raw HTML in your Markdown, and it'll mostly work pretty well. 
 
```no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
 
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```
 
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
 
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>


### Images
 
```no-highlight
Here's our logo (hover to see the title text):
 
Inline-style: 
![alt text](https://raw.githubusercontent.com/creatorbe/creatorbe.github.io/master/static/img/favicon.ico "Logo Title Text 1")
 
Reference-style: 
![alt text][logo]
 
[logo]: https://raw.githubusercontent.com/creatorbe/creatorbe.github.io/master/static/img/favicon.ico "Logo Title Text 2"
```
 
Here's our logo (hover to see the title text):
 
Inline-style: 
![alt text](https://raw.githubusercontent.com/creatorbe/creatorbe.github.io/master/static/img/favicon.ico "Logo Title Text 1")
 
Reference-style: 
![alt text][logo]
 
[logo]: https://raw.githubusercontent.com/creatorbe/creatorbe.github.io/master/static/img/favicon.ico "Logo Title Text 2"
 


### Line
 
```
Three or more...
 
---
 
Hyphens
 
***
 
Asterisks
 
___
 
Underscores
```
 
Three or more...
 
---
 
Hyphens
 
***
 
Asterisks
 
___
 
Underscores



### Link
 
There are two ways to create links.
 
```no-highlight
[I'm an inline-style link](https://creatorbe.github.io)
 
[I'm an inline-style link with title](https://creatorbe.github.io "Creatorb's Link")
 
[I'm a reference-style link][Arbitrary case-insensitive reference text]
 
[I'm a relative reference to a repository file](../blob/master/LICENSE)
 
[You can use numbers for reference-style link definitions][1]
 
Or leave it empty and use the [link text itself]
 
Some text to show that the reference links can follow later.
 
[arbitrary case-insensitive reference text]: https://github.com
[1]: http://github.com
[link text itself]: http://github.com
```
 
[I'm an inline-style link](https://creatorbe.github.io)
 
[I'm an inline-style link with title](https://creatorbe.github.io "Creatorb's Link")
 
[I'm a reference-style link][Arbitrary case-insensitive reference text]
 
[I'm a relative reference to a repository file](../blob/master/LICENSE)
 
[You can use numbers for reference-style link definitions][1]
 
Or leave it empty and use the [link text itself]
 
Some text to show that the reference links can follow later.
 
[arbitrary case-insensitive reference text]: https://github.com
[1]: https://github.com
[link text itself]: https://github.com
 

### List Menu
* Bullet list
    * Nested bullet
        * Sub-nested bullet etc
* Bullet list item 2

~~~
 Markdown : * Bullet list
              * Nested bullet
                  * Sub-nested bullet etc
          * Bullet list item 2
~~~

1. A numbered list
    1. A nested numbered list
    2. Which is numbered
2. Which is numbered

~~~
 Markdown : 1. A numbered list
              1. A nested numbered list
              2. Which is numbered
          2. Which is numbered
~~~


### Tables
Simple Table

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

```
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

```no-highlight
Colons can be used to align columns.
 
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
 
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.
 
Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```
 
Colons can be used to align columns.
 
| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
 
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.
 
Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3



### Text

 
 Common text

    Markdown :  Common text

_Emphasized text_

    Markdown :  _Emphasized text_ or *Emphasized text*

~~Strikethrough text~~

    Markdown :  ~~Strikethrough text~~

__Strong text__

    Markdown :  __Strong text__ or **Strong text**

___Strong emphasized text___

    Markdown :  ___Strong emphasized text___ or ***Strong emphasized text***

Backslash Escapes
Markdown allows you to use backslash escapes to generate literal characters which
would otherwise have special meaning in Markdown’s formatting syntax.

\*literal asterisks\*

	Markdown : \*literal asterisks\*

@mentions

	Markdown : @mentions


### Youtube Videos
They can't be added directly but you can add an image with a link to the video, change 0.jpg to your image you want to show, like this:
 
```no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```
 
Or, in pure Markdown, but losing the image sizing and border:
 
```no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
 
Referencing a bug by #bugID in your git commit links it to the slip. For example #1. 

[![image alt text ](https://raw.githubusercontent.com/CreatorB/res/master/pic/youtube-banner-creatorbe-medium.png)](https://www.youtube.com/channel/UCbyEh3nQ0H_7-P5ukcZyUvg)

```
[![image alt text ](https://raw.githubusercontent.com/CreatorB/res/master/pic/youtube-banner-creatorbe-medium.png)](https://www.youtube.com/channel/UCbyEh3nQ0H_7-P5ukcZyUvg)
```


## irssi

### Start

 * Type `irssi`
 * Join a server `irssi -c irc.freenode.net`
 * Specify a nickname `irssi -n nick`

### Cheat Chat

  [![irssi-cbcs](https://raw.githubusercontent.com/CreatorB/res/master/pic/cbcs-irssi-creatorb.png)](https://raw.githubusercontent.com/CreatorB/res/master/pic/cbcs-irssi-creatorb.png)



./creatorb