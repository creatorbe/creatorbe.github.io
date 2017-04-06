---
layout: post
title: "ODA - Optimasi Development Android"
date: 2017-04-04 03:33:05 +0700
categories: [programming,android,minds]
description: "Pembahasan bagaimana meningkatkan efisiensi koding dan performa kerja dalam pengembangan aplikasi android"
---

Bukan tentang cerita dimasa lalu ataupun coretan kisah yang tertelan waktu, tapi sebuah catatan pribadi yang mudah dicari dan semoga tidak hanya bermanfaat bagi diri ini.

`Optimasi bukan dari seberapa banyak aksi`
`tapi keadaan dimana aktivitas yang tidak diperlukan berhenti`

*~creatorbe*

**TALK LESS, TWEAK MORE**

## List
  - [Android Studio](#android-studio)
  - [Gradle Script](#gradle-script)
    - [Gradle Properties](#gradle-properties)
    - [Build Gradle](#build-gradle)
  - [Debugging Devices](debugging-devices)
    - Menggunakan real devices / smartphone android akan lebih menghemat proses kompilasi.
    - Memperbarui hardware, terutama RAM komputer.
  - [Coming Soon](#coming-soon)


### Android Studio

Pada android studio secara default program bekerja pada mode online dikarenakan untuk memudahkan sinkronisasi dalam proyek (contoh : library) dan melakukan pengecekan berkala untuk melihat versi terbaru. Jika anda tidak memerlukan depensi terbaru anda bisa menonaktifkan fitur ini dan membiarkan gradle menggunakan cache dari library. Buka jendela setting pada android studio, Centang offline work dan pastikan menggunakan gradle yang ada di direktori lokal.

![android-offline-work](https://raw.githubusercontent.com/CreatorB/res/master/pic/improve-android-development-creatorbe.png)

### Gradle Script

#### Gradle Properties

Berikut beberapa opsi tweak pada `gradle.properties` untuk penjelasan saya cantumkan dalam kode.

<script src="https://gist.github.com/CreatorB/0911fa88d62b8255b336bc6a6af697a1.js"></script>


#### Build Gradle

Kembali mengingat kenangan lolipop (API 21) tentu membawa ingatan kita pada ART, dimana jika minSdkVersion jauh dibawah itu maka akan di generate dex yang berjalan dikeduanya baik ART atau pendahulunya JVM. Tapi yang beda jika kita setting pada opsi API 21 (menggunakan ART) dimana salah satu fiturnya tidak memerlukan main dex tadi sebelum MultiDex.install(), hal ini meminimalisir waktu dalam pengecekan class pada main dex. Untuk melihat bagaimana itu terjadi dalam detail anda bisa baca [developer.android.com/multidex](http://developer.android.com/tools/building/multidex.html#dev-build)

Opsi tweak pada `build.gradle` menambahkan minSdkVersion.

```gradle

defaultConfig {
        applicationId "io.github.creatorbe.optimization"
        minSdkVersion 15
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
    }

```

dimana dalam penerapan proyek sebenarnya, tentu anda bisa menggunakan fitur [multi flavors](http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Multi-flavor-variants) yang keren emang :p .

```gradle

android {
    flavorDimensions "rilisDimension", "devDimension"
    
    productFlavors {
        // versi improvements
        fastBuild {
            minSdkVersion 21
            dimension "devDimension"
        }
        regular {
            //  min sdk versi development
            minSdkVersion 14
            dimension "devDimension"
        }
        
        // versi release pasaran
        free {
            dimension "rilisDimension"
            //
        }
        pay {
            dimension "rilisDimension"
            //
        }
        
    }
    
    //
}

```


### Coming Soon

*i'm still working on awesome android development optimization, ...*
*next time insyaallah i will post an another development tips, actually in the wild its not only talking about optimization but yours app on privation*


./creatorb

