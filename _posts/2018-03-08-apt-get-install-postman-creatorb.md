---
layout: post
title: "Cara Install Postman di Ubuntu"
date: 2018-03-30 17:42:13 +0700
categories: [programming]
description: "Cara install postman native di Ubuntu via an apt-get install postman."
---

<p align="center">
  <img src="https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-Collection_headers.png" alt="postman">
</p>

_Bismillah ..._

Postman, tentu kamu (developer) tidak asing lagi dengan salah satu ini tool ini. Salah satu tool untuk menguji [API](https://en.wikipedia.org/wiki/Application_programming_interface) (Application Programing Interface) dengan beberapa fitur yang nyaman bagi kita untuk berkolaborasi dengan team dalam proyek kita. Tentu untuk menghemat waktu, disini saya tidak membahas detail mengenai postman anda bisa merujuk pada dokumentasi di [getpostman/docs](https://www.getpostman.com/docs/).

Merujuk pada judul konten, saya yakin banyak developer yang dulunya menggunakan tool ini di add on chrome dan kabar baiknya postman sudah merilis aplikasi native dengan dukungan multi platform. Anda bisa mendapatkan file installer nya di [getpostman.com/apps](https://www.getpostman.com/apps), namun hingga saat ini di web resmi postman belum melampirkan tutorial instalasinya, (khususnya untuk pengguna linux) dan berikut ini cara instalasi postman di ubuntu via command line interfaces (terminal,dll).

Unpack file installer yang sebelumnya telah anda download (saya unpack ke folder opt)

```bash
sudo tar -xzf postman.tar.gz -C /opt
```
Kemudian lakukan symbolic link, ini berguna agar postman bisa di panggil via CLI.

```bash
sudo ln -s /opt/Postman/Postman /usr/bin/postman
```
Lalu, buat shortcut untuk bisa di pin panel ubuntu atau muncul dalam pencarian aplikasi anda.
```bash
cat > ~/.local/share/applications/postman.desktop <<EOL
[Desktop Entry]
Encoding=UTF-8
Name=Postman
Exec=postman
Icon=/opt/Postman/resources/app/assets/icon.png
Terminal=false
Type=Application
Categories=Development;
EOL
```
Selesai, kini anda bisa memulai menggunakan postman.

## apt-get install postman
Yup, tentu konten ini yang anda tunggu ;p (_so sorry, actually it isn't apt-get install postman but this is an apt-get install postman_ :D )  tutorial instalasi postman yang saya jabarkan diatas insyaallah secara ijma `linux`us`er` sepakat itu mudah, namun disini saya hanya ingin sedikit membantu anda dalam menghemat waktu (_**العصر** : Al-'Asr ~ QS:103, Allah azza wa jalla tuhan pencipta waktu bersumpah pada ciptaannya yakni waktu, dengan kata lain hendaknya anda memperhatikan waktu anda_) dan ini lebih handy ~ mudah dalam menangani apabila anda mendapat notif update dari postman anda, cukup mengulang command ini untuk update postman anda.

Well, dengan command dibawah ini anda bisa install postman sekaligus update postman apabila terdapat notif update.
```shell
bash <(wget -O - https://raw.githubusercontent.com/CreatorB/Postman/master/apt-get-install-postman.sh)
```
Berikut SS (screenshot) instalasi postman via apt-get-install-postman diatas. 

![creatorb-postman](https://raw.githubusercontent.com/CreatorB/Postman/master/creatorbe-postman.png)

Sekian, semoga bermanfaat.

###  Related link
Github Repo apt-get install postman [github.com/creatorb/postman](https://github.com/CreatorB/Postman/blob/master/README.md)
