---
layout: post
title: "Gradle itu apa sih?"
date: 2017-03-30 13:16:23 +0700
categories: [programming,android,gradle]
---

Ada saatnya ketika kita mencari jawaban suatu hal mendasar dalam bidang pemprograman mengembalikan kita pada beberapa link yang berbicara dan membahasnya secara seru namun kita tetap saja tidak mengerti apa sih itu, mungkin saja hal ini terjadi karena beberapa topik pembahasannya lebih berbicara dan membahas bagaimana sesuatu hal tersebut digunakan dan bagaimana cara bekerja dengan hal tersebut secara teknis, bukan mengenai pengertian subjek itu sendiri. Kita pemula butuh kalimat sederhana,ringkas yang tepat mengarah pada topik pembahasan, tapi terkadang hal itu tidak mudah dan disini mari kita kupas tuntas dengan bahasa ringkas.

Merujuk pada wikipedia [https://en.wikipedia.org/wiki/Gradle](https://en.wikipedia.org/wiki/Gradle) bisa ditarik kesimpulan gradle itu automation build system, apa itu? bisa dikatakan sebagai tool untuk mengotomatisasi pemembangunan proyek secara tersistem seperti halnya mengkompilasi source code yang kita buat menjadi kode biner dan memaketkan dalam paket biner, menjalankan beberapa test dan unit unit yang berkaitan dengan keperluan ekosistem development secara otomatis. Ya ringkasnya gradle adalah otomatisasi build system. Seperti halnya ant dan maven pada java, make pada linux, rake untuk ruby nah begitu lah gradle bekerja.

Jika kita berbicara secara meluas dalam pengembangan android sendiri, taroh lah kita kembali pada era eclipse dimana kita juga bisa mengeksekusi baris perintah di command line dan melihat bagaimana proses pembangunan android bekerja tapi tidak semudah itu dikarenakan kita terbebani dengan dx,aapt,dan beberapa otomatisasi lain yang bersifat low level format yang diolah system eclipse sendiri. Dalam proses pembangunan aplikasi android sendiri dimana melibatkan file core xml dan class .java yang kemudian dikompliasi sehingga menjadi keluaran file apk untuk diinstall dari sedemikian proses tersebut lah yang dinamakan build system. Jika anda ingin melihat lebih dekat bagaimana itu terjadi anda bisa merujuk pada link berikut [https://developer.android.com/studio/build/building-cmdline.html](https://developer.android.com/studio/build/building-cmdline.html) dan [https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html](https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html).

Mengapa beralih pada gradle? nah setelah pemahaman mengenai gradle sendiri telah tuntas dibahas diatas barulah kini kita beralih mengikuti sub sub pertanyaan yang ramai diperbincangkan yang bisa jadi ketika kita sibuk mencari pemahaman gradle sendiri di forum telah banyak menjelaskan panjang lebar mengenai apa menariknya itu, namun belum bisa kita pahami arah pembicaraan karena masih bingung dengan subjek gradle itu sendiri.

Banyak sekali yang dapat kita lakukan dengan gradle salah satunya meminimalisir konfigurasi keterkaitan proyek android dengan modul modul lainnya karena mengacu pada satu konfigurasi default yang mudah di kustomisasi, depensi kini dapat berupa banyak bentuk baik modul,arr ataupun jar dalam sistem lokal maupun remote server, otomatisasi test dalam direktori proyek pada saat proses build (pembangunan), menjadikan gradle membuat signed apk sekaligus beberapa output dalam satu modul yang sama biasanya berguna untuk pembuatan aplikasi versi daerah tertentu atau device tertentu.

### Melihat ekosistem Gradle lebih dekat
<br/>
![clear-explain-gradle-android-creatorbe](https://c1.staticflickr.com/3/2810/32919994483_3ff48ff590.jpg)

Terdapat beberapa file yang bisa kita konfigurasikan di sana walaupun pada dasarnya tidak banyak yang akan kita sentuh pada saat development android, sebagian besar hanya lebih pada module app tempat kita memasang depensi yang kita butuh kan pada proyek android atau module project untuk konfigurasi lebih global mengenai remote server dari mana depensi berasal, tapi ada bagusnya kita memahami secara kesuluruhan fungsionalitasnya. **gradle-wrapper.properties** file ini memudahkan orang lain untuk membangun proyek, dimana berisi konfigurasi default dari gradle semisal versi gradle, url, path distribusi, dll terkait proyek yang sedang dibangun.

```gradle
distributionBase=GRADLE_USER_HOME
 
//Determines whether the unpacked wrapper distribution should be stored in the project, or in the Gradle user home directory.//
 
distributionPath=wrapper/dists
 
//The path where the Gradle distributions required by the wrapper are unzipped.//
 
zipStoreBase=GRADLE_USER_HOME
 
zipStorePath=wrapper/dists
 
distributionUrl=https\://services.gradle.org/distributions/gradle-2.2.1-all.zip
 
//The URL where the correct version of Gradle should be downloaded from.//
```

**settings.gradle** berisi referensi terhadap semua modul apa saja yang terkait pada proyek android, karena dalam contoh screenshot diatas hanya ada modul app, maka tampilannya sesederhana berikut.

```gradle
include ':app'
```

**local.properties** berisi konfigurasi alamat path sdk android / lokasi sdk android yang sedang digunakan dalam project tersebut.

```gradle
sdk.dir=/Users/creatorbe/Library/Android/sdk
```

Yap mungkin itu dulu, insyaallah beberapa poin poin penting telah saya sampaikan untuk lebih mengenal dan memahami apa itu gradle sudah tercapai, kini anda bisa bergabung dalam topik pembahasan gradle di forum forum untuk mengetahui lebih banyak lagi mengenai gradle. Berikut saya sertakan link rujukan untuk mengetahui pembahasan struktur gradle lebih rinci lagi di [https://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978](https://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978) dan bisa juga mengunjungi pembahasannya di site resmi android developer berikut [https://developer.android.com/studio/build/index.html](https://developer.android.com/studio/build/index.html)

Semoga tulisan ini bermanfaat, amin.