---
layout: post
title: "Gradle itu apa sih?"
date: 2017-03-30 13:16:23 +0700
categories: [programming,android]
description: "Pembahasan lengkap mengenai pengertian dasar gradle, bagaimana cara menggunakan gradle dan melihat bagaimana gradle bekerja sebagai pembangun otomatisasi dalam sistem."
---

Seringkali, ketika mencari definisi dasar suatu konsep pemrograman, kita hanya menemukan pembahasan teknis tentang *cara menggunakannya* dan bukan *apa esensinya*. Untuk itu, mari kita definisikan **Gradle** dengan kalimat yang sederhana:

Merujuk pada wikipedia [https://en.wikipedia.org/wiki/Gradle](https://en.wikipedia.org/wiki/Gradle) bisa ditarik kesimpulan gradle itu automation build system, apa itu? bisa dikatakan sebagai tool untuk mengotomatisasi pembangunan proyek secara tersistem seperti halnya mengkompilasi source code yang kita buat menjadi kode biner dan memaketkan dalam paket biner, menjalankan beberapa test dan unit unit yang berkaitan dengan keperluan ekosistem development secara otomatis. Ya ringkasnya gradle adalah *tool* (perkakas) yang bertugas mengotomatisasi semua langkah yang diperlukan untuk membangun dan mengemas sebuah proyek. 

Tugas-tugas yang diotomatisasi oleh Gradle meliputi:
* **Kompilasi:** Mengubah *source code* (kode sumber) dari bahasa tingkat tinggi (seperti Java atau Kotlin) menjadi kode biner.
* **Pengemasan:** Menggabungkan semua kode yang telah dikompilasi, *resource* (sumber daya), dan aset menjadi satu paket biner akhir (misalnya, file `.jar`, `.war`, atau `.apk`).
* **Manajemen Dependensi:** Mengunduh, mengkonfigurasi, dan menyertakan pustaka eksternal yang dibutuhkan oleh proyek.
* **Pengujian:** Menjalankan tes otomatis (unit test, instrumented test) pada kode.

Gradle bukanlah satu-satunya *build system*; ia memiliki pendahulu seperti **Ant** dan **Maven** di ekosistem Java, atau **Make** di lingkungan Linux. Keunggulan Gradle adalah kemampuannya yang **fleksibel** dan penggunaan bahasa **Groovy** atau **Kotlin DSL** (Domain Specific Language) untuk konfigurasi, membuatnya lebih *powerful* daripada XML statis.

Jika kita berbicara secara meluas dalam pengembangan android sendiri, taroh lah kita kembali pada era eclipse dimana disana kita juga bisa melihat bagaimana proses pembangunan android bekerja tapi tidak semudah itu dikarenakan kita terbebani dengan dx,aapt,dan beberapa otomatisasi lain yang bersifat low level format yang diolah sistem eclipse sendiri dan segala proses terbungkus rapi berjalan dibelakangnya. Dalam proses pembangunan aplikasi android sendiri dimana melibatkan file core xml dan class .java yang kemudian dikompliasi sehingga menjadi keluaran file apk untuk diinstall dari sedemikian proses tersebut lah yang dinamakan build system sebagaimana tugas gradle bekerja. Jika anda ingin melihat lebih dekat bagaimana itu terjadi anda bisa merujuk pada link berikut [https://developer.android.com/studio/build/building-cmdline.html](https://developer.android.com/studio/build/building-cmdline.html) dan [https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html](https://docs.gradle.org/current/userguide/tutorial_gradle_command_line.html).

Mengapa beralih pada gradle? banyak sekali yang dapat kita lakukan dengan gradle salah satunya meminimalisir konfigurasi keterkaitan proyek android dengan modul modul lainnya karena mengacu pada satu konfigurasi default yang mudah di kustomisasi, depensi kini dapat berupa banyak bentuk baik modul,arr ataupun jar dalam sistem lokal maupun remote server, otomatisasi test dalam direktori proyek pada saat proses build (pembangunan), menjadikan gradle membuat signed apk sekaligus beberapa output dalam satu modul yang sama biasanya berguna untuk pembuatan aplikasi versi daerah tertentu atau device tertentu.

### Melihat ekosistem Gradle lebih dekat
<br/>
![clear-explain-gradle-android-creatorbe](https://c1.staticflickr.com/3/2810/32919994483_3ff48ff590.jpg)

Terdapat beberapa file yang bisa kita konfigurasikan di sana walaupun pada dasarnya tidak banyak yang akan kita sentuh pada saat development android, sebagian besar hanya lebih pada module app tempat kita memasang depensi yang kita butuh kan pada proyek android atau module project untuk konfigurasi lebih global mengenai remote server dari mana depensi berasal, tapi ada bagusnya kita memahami secara kesuluruhan fungsionalitasnya. **gradle-wrapper.properties** file ini memudahkan orang lain untuk membangun proyek, dimana berisi konfigurasi default dari gradle semisal versi gradle, url, path distribusi, dll terkait proyek yang sedang dibangun intinya file ini memastikan bahwa setiap orang yang mengunduh proyek Anda akan menggunakan **versi Gradle yang sama**, yang sangat penting untuk konsistensi *build*.

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

build.gradle (Project Level)
Mengatur konfigurasi global seperti repository mana yang digunakan untuk mengambil dependensi (misalnya Google Maven atau Maven Central) dan versi plugin Gradle yang digunakan.

build.gradle (Module Level)
Ini adalah file yang paling sering diubah. Di sinilah Anda mendeklarasikan:
- Application ID.
- Versi SDK target dan minimum.
- Dependensi (pustaka) yang digunakan oleh modul tersebut.
- Konfigurasi build flavor (varian aplikasi).

Memahami Gradle berarti memahami otomatisasi dan kontrol penuh atas proses pembangunan suatu proyek.

Yap mungkin itu dulu, insyaallah beberapa poin poin penting telah saya sampaikan untuk lebih mengenal dan memahami apa itu gradle sudah tercapai, kini anda bisa bergabung dalam topik pembahasan gradle di forum forum untuk mengetahui lebih banyak lagi mengenai gradle. Berikut saya sertakan link rujukan untuk mengetahui pembahasan struktur gradle lebih rinci lagi di [https://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978](https://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978) dan bisa juga mengunjungi pembahasannya di site resmi android developer berikut [https://developer.android.com/studio/build/index.html](https://developer.android.com/studio/build/index.html)

Semoga tulisan ini bermanfaat, amin.

./creatorb
