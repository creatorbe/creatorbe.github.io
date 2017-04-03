---
layout: post
title: "Hello android World!"
date: 2017-04-03 04:03:14 +0700
categories: [programming,android]
description: "Pembahasan dasar bagi pemula tentang bagaimana cara membuat proyek android dengan Android Studio disertai beberapa penjelasan file dalam android project"
---

Sepertinya halnya belajar bahasa pemprograman lain, pelajaran pertama adalah bagaimana menampilkan kalimat sapaan yang tidak asing lagi, hello world (in our side we say "Assalamualaikum World!"). Berikut tahapan pembuatan proyek baru android di android studio dimana ini di implementasikan di setiap anda membuat proyek android baru.


### Cara Membuat Proyek / Aplikasi Android


1. Pada jendela aktif android studio pilih create new project untuk membuat proyek baru.
 * jika anda baru saja melakukan instalasi dan menjalankan pertama kali android studio anda maka akan masuk tampilan awal dari android studio di jendela **Welcome to Android Studio** kemudian pilih **Start a New Android Studio project**.
 * tapi jika anda sebelumnya telah membuat proyek android atau masuk pada tampilan proyek android maka tinggal pilih menu **File > New Project**.

2. Maka selanjutnya akan masuk pada form untuk mengisi nama aplikasi, domain (akan berpengaruh pada nama package di proyek android), dan beberapa opsi lainya.
 * **Application Name** : "HelloWorld" (isi dengan nama aplikasi anda).
 * **Company Domain** : "creatorbe.github.io" (isi dengan nama domain anda).
dengan konfigurasi diatas nantinya nama package proyek anda akan berupa io.github.creatorbe.helloworld kemudian **Next**
 * **Target Android Devices** anda bisa memilih banyak pilihan diantaranya **Phone and Tablet**, **Wear**, **Tv**, **Android Auto**, **Glass** dan bisa jadi akan terus berkembang jika nantinya ada release platform baru, disini anda bisa membiarkan konfigurasi ini default sebagai **Phone and Tablet** dengan minimum sdk API 15 (lebih jelas tentang API anda bisa merujuk pada pembahasan [API LEVEL](https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels)).
 * Kemudian menu berikutnya adalah **Add an Activity to Mobile** pilih **Empty Activity** dan **Next**.

3. Selanjutnya pada jendela **Customize the Activity** anda bisa membiarkan konfigurasi ini default, dimana **Acitivity Name** sebagai *MainActivity* dimana nantinya ini akan menjadi file java dan untuk **Layout Name** berisi *activity_main* nantinya ini akan menjadi nama tampilan file xml. kemudian **Finish**. Sejauh ini anda telah berhasil membuat proyek baru bernama HelloWorld.


### Memulai Pemprograman Android Dasar 

Sebelum masuk pada bahasa pemprograman, ada baiknya ada mengulas pembahasan lalu mengenai [Memahami Struktur Proyek Android](https://creatorbe.github.io/programming/android/2017/03/30/memahami-struktur-project-di-android-studio-creatorbe.html) untuk menjaga kesepahaman dan tidak terjadi pembahasan ulang disini. Umumnya pada proses pengembangan android anda akan lebih banyak di sibukkan dengan mengerjakan beberapa pemprograman di lingkup tertentu saja seperti halnya berikut:

**app > java > io.github.creatorbe.helloworld > MainActivity.java**

 -  MainActivity.java salah satu output file yang tadi nya anda buat di jendela **Customize the Activity**. File java di direktori ini bisa di isi kompleksitas kode yang di dalammnya mengatur bagaimana aplikasi android berjalan, baik itu memerintah UI untuk berjalan, menangani proses dibelakang layar, berkomunikasi antar devices  ataupun koneksi dengan database. Dalam development android file java nantinya akan di konversi dalam bentuk dex dalam paket apk. 

**app > res > layout > activity_main.xml**

 - File dalam direktori layout akan dijumpai banyak ekstensi file.xml disana untuk konfigurasi user interface antara aplikasi dan pengguna.

**app > manifests > AndroidManifest.xml**

 - Berisi konfigurasi global, mendefinisasikan tiap tiap komponen dalam aplikasi android.

**Gradle Scripts > build.gradle**

 - Mengenai gradle sendiri telah di jelaskan di pembahasan [Apa itu Gradle]{https://creatorbe.github.io/programming/android/gradle/2017/03/30/apa-sih-pengertian-gradle-creatorbe.html} dimana di setiap proyek android memiliki gradle dengan fungsi sadar untuk mengompilasi dan membangun aplikasi dari proyek yang kita kerjakan.
 
 *Coming Soon* some things still buffering to converting but my eyes really want to sleeping huh, please waiting ... cya

./creatorb
