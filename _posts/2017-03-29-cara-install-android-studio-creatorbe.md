---
layout: post
title:  "Instalasi android studio"
date:   2017-03-29 11:50:41 +0700
categories: [programming,android]
description: "Pembahasan mengenai tutorial cara instalasi android studio secara umum, bagaimana install android studio di windows, linux, maupun macintosh."
---

Untuk memulai mengembangkan program berbasis android kita membutuhkan perangkat lunak / software yang akan kita gunakan untuk membangun aplikasi android itu sendiri, salah satu software yang akan kita gunakan adalah [Android Studio](https://developer.android.com/studio/intro/index.html?hl=id). Disini saya tidak akan membahas secara detail cara dan tutorial instalasi karena tentunya melihat ragam device/platform os yang kita gunakan mungkin saja berbeda (linux, windows, mac, dll), maka dari itu saya akan menjelaskan secara global alat dan pendukung apa saja yang anda butuhkan untuk membuat suatu aplikasi android dan anda bisa menerapkan nya secara kesuluruhan, anda bisa mengunjungi situs resmi pengembang android untuk tahap instalasi android studio di link berikut [https://developer.android.com/studio/install.html?hl=id](https://developer.android.com/studio/install.html?hl=id) dan silahkan googling untuk mendapatkan tambahkan rujukan sesuai platform os yang anda gunakan dan disini anda bisa meninggalkan komentar apabila terdapat masalah dalam instalasi atau hendak berdiskusi sesuai topik yang dipaparkan.

### Instalasi Android Studio

**1. [Java](https://en.wikipedia.org/wiki/Java_Development_Kit)**

Pembuatan aplikasi android notabene menggunakan bahasa pemprograman java, dimana java sendiri disediakan dalam dua paket pengembangan, JRE dan JDK. Untuk memulai pengembangan android diperlukan instalasi JDK, berikut saya sediakan link download nya di official site oracle [http://www.oracle.com/technetwork/java/javase/downloads/index.html](http://www.oracle.com/technetwork/java/javase/downloads/index.html) silahkan download sesuai platform os yang anda gunakan dan lakukan instalasi.

**2. [Android Studio](https://developer.android.com/studio/intro/index.html?hl=id)**

Software pengembangan android yang akan digunakan untuk membuat aplikasi android bisa anda download di site resminya berikut [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)

### Instalasi SDK

SDK akronim dari Software Development Kit, berupa folder yang berisi alat, platform dan komponen pendukung dalam pembangunan aplikasi android, dimana di dalamnya terdapat tool yang diperbarui sesuai versi os android itu sendiri. Anda bisa melakukan update dengan mengklik sdk manager pada android studio anda (lihat screenshot), kemudian akan muncul list beberapa modul sdk yang disediakan, silahkan update sesuai kebutuhan saja dikarenakan kapasitas beberapa modul berjumlah besar.

![Screenshot sdk manager](https://c1.staticflickr.com/3/2870/32880748244_08c0f23da2_b.jpg)

Anda dapat menggunakan Android SDK tools, platform-tools, SDK build-tools yang sesuai masing masing satu dan bisa di uninstall untuk yang versi lama, ada baiknya menyisakan 2 komponen dengan versi berbeda dikhawatirkan ada bug di versi terbaru anda bisa menggunakan versi sebelumnya.

### Testing Program

Dalam proses menjalankan aplikasi nantinya dibutuhkan media/device os android sendiri di mana aplikasi yang telah dibuat akan di jalankan untuk proses pengujian dan kelayakan. Anda bisa menggunakan hp/smartphone android anda untuk menjalankan aplikasi yang sudah dibangun di android studio sebelumnya.

Menjalankan aplikasi yang dibangun menggunakan real device (menggunakan hp/smartphone seperti yang sebelumnya saya jelaskan) di perlukan beberapa tahapan untuk mengaktifkan mode usb debugging. USB debugging merupakan opsi yang disediakan untuk developer melakukan debugging aplikasi melalui fungsi USB android yang terhubung dengan pc/laptop dengan adanya mode ini dapat membangun jembatan antara perangkat Android dan PC menggunakan Android SDK (Software Development Kit), yang menjadi platform pengembangan untuk developer selama mendesain dan menguji aplikasi dan modding Android yang mereka kerjakan. 

Cara mengaktifkan usb debugging dengan masuk bagian menu **Settings** > **About Devices** > **Build number** dan ketika sudah muncul versi build number lakukan tap tap pada build number sebanyak 10 kali sampai muncul pesan popup pemberitahuan bahwa mode devoloper di aktifkan dengan ditandai muncul nya icon developer option di bagian menu.

![Screenshot developer mode options](https://c1.staticflickr.com/4/3933/33723929365_fa3a5d51b3_z.jpg)

kemudian klik dan dari sana anda bisa mengaktifkannya dengan menceklis di bagian debugging.

![Screenshot developer usb debugging](https://c1.staticflickr.com/3/2950/33567809302_f14820b949_z.jpg)

Setelah mode usb debugging anda aktif kini anda bisa menghubungkan kabel data smartphone dengan PC/laptop seperti hal nya transfer data biasa dan setelah terhubung akan muncul pemberitahuan bahwa mode usb debugging sedang berlangsung, dalam kondisi ini anda bisa langsung menjalankan project android yang dibangun pada smartphone yang terhubung dengan PC/laptop yang nantinya akan muncul list device yang aktif dan pilih sesuai device mana yang hendak anda lakukan debugging (sebelumnya dipastikan terlebih dahulu apabila belum terdeteksi maka bisa jadi belum terinstall driver untuk smartphone androidnya).

Anda bisa mengunjungi [https://developer.android.com/training/basics/firstapp/running-app.html](https://developer.android.com/training/basics/firstapp/running-app.html) terkait detail untuk menjalankan program android yang telah dibangun di android studio.


### Emulator dan Alternatif

Jika anda tidak memiliki device/smartphone/platform android, Anda juga bisa memakai emulator untuk alternatif lain. Emulator semisal ekosistem android yang dibangun dalam lingkup desktop PC/laptop anda, jadi tidak perlu menggunakan device platform android nyata tapi device tiruan yang berjalan di sistem operasi anda.

Dalam program Android Studio juga terdapat emulator bawaan bernama AVD [(Android Virtual Device)](https://developer.android.com/studio/run/managing-avds.html) dan diluar sana ada banyak emulator populer yang bisa anda coba Bluestack, Andyroid, Windroye, Youwave, Nox, dll tidak bisa saya review kan semua disini. Saya akan menjelaskan instalasi emulator yang sering saya pakai, Genymotion.

Cara menginstall genymotion, pastikan anda telah menginstall virtual box karena seperti umumnya emulator, genymotion juga berjalan diatas mesin virtual. Pastikan sistem operas anda telah terinstall virtual box, jika tidak anda bisa mendownload virtual box sesuai os yang digunakan di site [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads) dan setelah instalasi virtual box selesai, anda bisa memasang genymotion dengan mendownload nya di [https://www.genymotion.com/](https://www.genymotion.com/) genymotion tersedia dalam versi berbayar tapi anda juga bisa mengguanakan versi gratis. Untuk meng unduh nya anda diharuskan mendaftar terlebih dahulu di site tersebut.

Setelah download, silahkan install dan jalankan genymotion, kemudian pilih dan download salah satu versi os android yang akan anda pakai dalam membangun aplikasi android nantinya, lebih baik untuk versi saat ini API 15 keatas untuk mendukung lingkungan pengembangan yang baik dan setelah proses download selesai, jalankan dengan mengklik tombol play pada jendela genymotion. Untuk menghubungkan genymotion pada android studio juga disediakan plugin genymotion, anda bisa install plugin genymotion di android studio, klik **Configure > Plugins > Browse Repositories** kemudian ketik genymotion dan cari. Kemudian klik **Install Plugin** pada menu list genymotion dan tunggu instalasai selesai, kemudian klik restart jika proses instalasi selesai untuk menerapkan konfigurasi plugin terbaru pada android studio anda. Kini anda bisa menjalankan os pada emulator genymotion baik dari aplikasi genymotion atau langsung klik icon genymotion pada bagian toolbar di android studio anda. Jika android emulator telah berjalan kini anda bisa melakukan debugging seperti halnya melakukan debugging pada smartphone biasa.

Disini saya ingin berbagi link download master file os android dalam bentuk ova, seperti yang sebelumnya anda download secara online melalui aplikasi genymotion sebenarnya juga bisa memasang os android di genymotion tanpa harus download melalui aplikasinya dengan menggunakan fasilitas import pada virtual box, dimana cara ini sangat efektif dan efisien dalam penggunaan pembelajaran umum/masal dalam satu tempat, untuk lebih jelasnya anda bisa mengunjungi [https://github.com/CreatorB/Virtual/tree/master/genymotion](https://github.com/CreatorB/Virtual/tree/master/genymotion)

Mungkin sampai disini dulu tulisan saya, mohon maaf apabila terdapat penjabaran yang terlalu global anda bisa merujuk pada beberapa website untuk detail terkait apa yang saya bahas diatas karena memang niatan saya pribadi untuk lebih menjabarkan proses instalasi secara umum dan tentu berusaha untuk tidak melewatkan poin penting dari beberapa aspek yang dibahas, semoga bisa bermanfaat.

./creatorb
