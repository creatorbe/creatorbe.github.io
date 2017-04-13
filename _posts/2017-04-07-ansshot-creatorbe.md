---
layout: post
title: "Ansshot - Android Simple Screenshot"
date: 2017-04-07 03:33:05 +0700
categories: [en,programming,android,minds]
description: "Take screenshot and record android screen as fast as possible through adb"
---

Hi! this is just an another cheat to make your life easier, especially for android developer (just make sure you've been installed adb and make it on path). 

4 1st, It's short talk about [Android Debug Bridge (ADB)](https://developer.android.com/studio/command-line/adb.html), how it could be timesaver to take screenshot or even record your android screen by simple command. 

**Screenshot**
```bash
adb shell screencap -p /directory/file.png
```
**Screen Record**

```bash
adb shell screenrecord /directory/file.mp4
```
----------

## **Improvement**
 
Think like a Programmer, Cool but not enough, ewwh there's little bit wasted, yeah yah yah still long syntax and take a time for renaming. If you run on unix machine (you should!) you can make it as aliases on ~/.bashrc .

*.bashrc*
```bash
alias ansshot="adb shell screencap -p > ./ansshot-`date +%Y%m%d%H%M%S`.png"
```

Well, now you can call it easy by type `ansshot` or whatever word you put on aliases, it will take screenshot and automatically save in current directory as png file with format name ansshot - date time taken.


> **Tips:** 
> For windows user (*Cygwin).  Try to use :
> `adb shell screencap -p | sed 's/\r$//' > file.png`
> or another perl like:
> `adb shell screencap -p | perl -pe 's/\x0D\x0A/\x0A/g' > file.png`

----------

## **A Way**

**_this is for the sake of simplicity_**

Yeah for you **who's man keep going, lazy doing**. Just take minutes for me to give you a simple bash, feel free enjoy it (*don't worry no inject code, hahah!*).

Here you go!

`curl -s https://git.io/vS9Zy | sh`


Bye! *See yah...*

./creatorb

**<i class="icon-hdd"></i> Powerlink**
 - [github.com/creatorb/ansshot](https://github.com/CreatorB/Ansshot)
 - [gist - ADB screenshot real device](https://gist.github.com/CreatorB/1c15fa87af047395d0392409eaeca203)
