---
layout: post
title:  "Memahami Struktur Proyek Android Studio"
date:   2017-03-30 06:23:35 +0700
categories: [programming,android]
---

Ketika membuat program/proyek baru maka kita akan disuguhkan dengan beberapa folder yang terkadang sebagai pemula bisa saja kaget dengan banyak nya folder folder yang bernama namun tak dikenal tersebut. Berikut mari kita berkenalan dengan beberapa folder yang terdapat pada unit proyek android studio. Salah satunya modul, modul memungkinkan kita untuk membagi proyek dalam beberapa unit, bisa memakai satu atau lebih modul sebagai depensi, library, dimana setiap modul bisa di buat, di debug, dan di uji seperti halnya proyek/program android pada umumnya. Langkah dalam pembuatan modul **File - New - New Module**.

Beberapa modul dalam android **android app module**, dimana isinya termasuk dari tipe tipe modul dasar pembangun android seperti halnya phone, tablet, android wear, android tv, glass, dll.
**Modul Library** terdiri dari modul yang sudah terkompilasi sebelumnya sehingga bisa digunakan kembali sebagai depensi pendukung / depensi tambahan yang bisa di gunakan pada proyek android, kita bisa membuatnya di perintah yang sama seperti langkah pembuatan modul sebelumnya. Modul library sendiri ada dua, **Android Library** tipe ini support di semua proyek android, strukturnya tidak jauh beda pada modul/folder proyek android pada umumnya, namun hasil akhirnya menjadi file bernama AAR (Android Archive) dimana kita bisa menggunakannya sebagai library pada proyek android. **Java Library** library umum, java library berektensi JAR (Java Archive) di mana kode sudah di paketkan dalam struktur kode sumber java sehingga bisa di tambahkan pada proyek android atau bisa juga pada proyek java lainnya.
**Modul Google Cloud** modul ini yang sering di pakai, dimana setiap orang kebanyakan menyatakan modul sebagai sub proyek dan gradle sendiri juga bisa dikatakan modul dalam bentuk proyek. Modul google cloud menyediakan kontainer untuk kode backend, menambahkan kode dan depensi yg diperlukan untuk backend java app engine yang menggunakan http biasa, cloud endpoints, GCM untuk menghubungkan ke aplikasi yang dibuat dan juga disediakan layanan cloud jika memang proyek yang dibangun membutuhkannya. Bisa mengunjungi link berikut untuk perihal detail google cloud [https://cloud.google.com/tools/android-studio/app_engine/add_module](https://cloud.google.com/tools/android-studio/app_engine/add_module)

### File proyek Android dalam bentuk sederhana

![Tampilan proyek android view](https://c1.staticflickr.com/3/2905/33598642851_2ff3a23a70.jpg)

Nah seperti screenshot diatas, tampilan hierarki proyek android yang biasanya kita gunakan untuk koding, tampilan tersebut hanya untuk memudahkan dalam navigasi ke beberapa modul yang kebanyakan dibutuhkan dalam proses development. Pada dasarnya meringkas kesuluruhan file yang nantinya sering di lakukan perubahan dalam development, seperti halnya menampilkan gradle script teratas dengan pemisahan dalam tampilan, modules app agar memudahkan pengeditan modul depensi dan library tambahan dari aplikasi yang dibuat, atau module gradle project dari skala kode sumber proyek di mana depensi di dapatkan/berasal. Disisi lain juga beberapa resource gambar,icon, dll terlihat dalam satu file saja walaupun sebenarnya terdapat banyak file dalam ukuran berbeda untuk menentukan ukuran yang sesuai pada standart platform.

Secara garis besar, tampilan dalam mode android tersebut dipisahkan menjadi **manifest** berisi konfigurasi global dari aplikasi android, **java** berisi file kontroler, java yang dipisahkan berdasarkan nama paket dan terakhir **res** dimana sebagai resources, view, sumber daya dari semua komponen layout berasal, untuk lebih detail mengenai pembahasan ini bisa ke topik berikut [https://developer.android.com/guide/topics/resources/providing-resources.html](https://developer.android.com/guide/topics/resources/providing-resources.html)

### File proyek Android dalam hierarki sebenarnya

![Tampilan proyek project view](https://c1.staticflickr.com/3/2903/33727535075_e7c008b47d.jpg)

nama-module/
build/
Berisi file output/result/keluaran dari beberapa kompilasi project yang dilakukan saat development.

libs/
berisi library proyek

src/
Berisi semua file sumber daya dan kode untuk modul, termasuk kode java dan semua file resources.

androidTest/
Berisi kode untuk pengujian instrumentasi yang dijalankan pada perangkat Android. Untuk informasi selengkapnya, anda bisa merujuk di link berikut [https://developer.android.com/studio/test/index.html](https://developer.android.com/studio/test/index.html).

main/
Berisi file sourceset "main": sumber daya dan kode Android yang digunakan bersama oleh semua varian pembangunan baik dalam release atau versi debug (file untuk varian pembangunan lainnya berada dalam direktori sama, semisal src/debug/ untuk tipe pembangunan versi debug).

AndroidManifest.xml
Konfigurasi global, menjelaskan sifat,tipe aplikasi dan masing-masing komponennya,activity,resources,nama aplikasi dll.

java/
Berisi kode Java yang notabene sebagai kontroler dalam struktur project.

jni/
Berisi kode asli yang menggunakan Java Native Interface (JNI).

gen/
generated file, Berisi file Java yang dihasilkan oleh Android Studio, misalnya file R.java Anda dan antarmuka yang dibuat dari file AIDL, biasanya terdiri dari susunan resource id yang sudah terkompilasi secara otomatis.

res/
Berisi sumber daya aplikasi tempat dimana mengatur tampilan dan layouting, dan folder lainnya berisi file resource pendukung gambar, file layout, dan string UI, dll.

assets/
Berisi file yang harus dikompilasi menjadi file .apk apa adanya tanpa kompilasi seperti modul modul sebelumnya. Anda bisa menyusuri direktori ini dengan cara yang sama seperti pada sistem file umumnya dengan menggunakan URI dan membaca file sebagai aliran byte dengan menggunakan AssetManager. Lokasi yang bagus untuk data game dan tekstur.

test/
Berisi kode untuk pengujian lokal yang dijalankan pada JVM host Anda.

build.gradle (modul)
build.gradle (proyek)
terkait 2 build gradle tersebut sudah saya jelaskan di tampilan default android diatas dimana pada dasarnya terdapat satu file hanya saja di tampilkan lebih untuk memudahkan navigasi antara pemasangan depensi atau pemasangan kode proyek sumber depensi.

Secara garis besar modul dan lingkup ruang kerja yang akan di gunakan dalam proses pengembangan proyek tidak lebih dari yang saya paparkan diatas, semoga penjelasan yang saya paparkan bisa lebih di pahami dan dimengerti mengenai fungsionalitas masing masing modul dalam proyek android itu sendiri, sehingga tidak perlu melakukan kesalahan edit file atau bingung hendak mengedit file yang mana. **manifest** tempat dimana kita mendeklarasikan semua aktivitas yang akan kita jalankan pada aplikasi android nantinya, disana juga terdapat beberapa opsi item, string and value untuk menentukan / mengkonfigurasi pengaturan global dalam aplikasi android. Untuk file kontroler lebih pada file yang berektensi .java yang terdapat pada folder sub java/ di direktori src/ sedangkan untuk tampilan penyokong UI sendiri berdiri pada extensi .xml yang terdapat pada folder res/layout dimana semua file/komponen pendukung lainnya juga bisa dimanfaatkan untuk memenuhi sumber daya semisal icon di folder mipmap/ gambar di folder drawable/ dan source string,integer,dll bisa di dapatkan dan diletakkan pada folder values/ .




