---
layout: post
title: "ODA - Optimasi Development Android"
date: 2017-04-04 03:33:05 +0700
categories: [programming,android,minds]
description: "Pembahasan bagaimana meningkatkan efisiensi koding dan performa kerja dalam pengembangan aplikasi android"
---

Bukan tentang cerita dimasa lalu ataupun coretan kisah yang tertelan waktu, tapi sebuah catatan pribadi yang ditulis untuk mudah dicari dan semoga tidak hanya bermanfaat bagi diri ini.

`Efisiensi bukan dari seberapa banyak aksi`
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

```gradle

# Di beberapa versi gradle secara default, gradle daemon dalam keadaan mati
# Tentu dengan menghidupkannya tidak perlu melakukan proses startup berulang kali

org.gradle.daemon=true

# Opsi spesifik dalam menentukan JVM arguments pada proses daemon dimana hal ini mempengaruhi kinerja memori.
# Default value: -Xmx10248m -XX:MaxPermSize=256m

org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

# Bagus untuk project mandiri dengan beberapa banyak modul
# Namun perlu hati hati jika bekerja dalam team karena mungkin akan terjadi konflik diantara modul karena adanya keharusan memiliki modul lain.

org.gradle.parallel=true

# Dalam dokumentasi gradle opsi ini menjalankan gradle hanya pada proyek yang melakukan permintaan/request
# Semakin anda memiliki banyak modul yang terkait maka semakin banyak juga waktu yang diminimalisir.  

org.gradle.configureondemand=true

```
**Rujukan :**
 - [docs.gradle.org/current/userguide/gradle_daemon.html](https://docs.gradle.org/current/userguide/gradle_daemon.html)
 - [docs.gradle.org/current/userguide/userguide_single.html](https://docs.gradle.org/current/userguide/userguide_single.html#sec:gradle_configuration_properties)
 - [gradle.org/docs/current/userguide/multi_project_builds.html](http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects)
 - [gradle.org/docs/current/userguide/multi_project_builds.html](http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:configuration_on_demand)


#### Build Gradle

Seperti pembahasan sebelumnya mengenai parameter jvm di `gradle.properties` anda juga bisa meletakkanya pada file `build.gradle` seperti berikut.

```gradle

dexOptions {
    javaMaxHeapSize "8g"
    jumboMode true
}

```

>8g = 8GB

**Rujukan :** [google.github.io/android-gradle-dsl/current](http://google.github.io/android-gradle-dsl/current/)


Kali ini kembali mengingat kenangan lolipop (API 21) tentu membawa ingatan kita pada ART, dimana jika minSdkVersion jauh dibawah itu maka akan di generate dex yang berjalan dikeduanya baik ART atau pendahulunya JVM. Tapi yang beda jika kita setting pada opsi API 21 (menggunakan ART) dimana salah satu fiturnya tidak memerlukan main dex tadi sebelum MultiDex.install(), hal ini tentu meminimalisir waktu dalam pengecekan class pada main dex. Anda bisa membaca [developer.android.com/multidex](http://developer.android.com/tools/building/multidex.html#dev-build).

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

*next time insyaallah i will post an another development tips, btw in the wild it isn't only about optimization but yours app on privation*


./creatorb

