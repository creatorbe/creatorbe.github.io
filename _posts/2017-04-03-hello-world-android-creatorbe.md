---
layout: post
title: "Hello android World!"
date: 2017-04-03 04:03:14 +0700
categories: [programming,android]
description: "Quick Start Project for Android Developer. Pembahasan dasar bagi pemula tentang bagaimana cara membuat proyek android dengan Android Studio disertai beberapa penjelasan file dalam android project"
---

Sepertinya halnya belajar bahasa pemprograman lain, pelajaran pertama adalah bagaimana menampilkan kalimat sapaan yang tidak asing lagi, hello world (in our side we say "Assalamualaikum World!"). Berikut tahapan pembuatan proyek baru android di android studio dimana ini di implementasikan di setiap anda membuat proyek android baru.


### Cara Membuat Proyek Baru


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

 -  MainActivity.java salah satu output file yang tadi nya anda buat di jendela **Customize the Activity**. File java di direktori ini bisa di isi kompleksitas kode yang di dalammnya mengatur bagaimana aplikasi android berjalan, baik itu memerintah UI untuk berjalan, menangani proses dibelakang layar, berkomunikasi antar devices  ataupun koneksi dengan database. Dalam development android file java nantinya akan di konversi dalam bentuk dex dalam paket apk. File ini berisi sebagian besar fungsi dan logika pemprogramman yang berjalan pada aplikasi. 

**app > res > layout > activity_main.xml**

 - Dalam direktori layout akan dijumpai banyak ekstensi file.xml disana untuk konfigurasi user interface antara aplikasi dan pengguna, disini kita memprogram bagaimana tampilan pada suatu aplikasi.

**app > manifests > AndroidManifest.xml**

 - Berisi konfigurasi global, mendefinisasikan tiap tiap komponen dalam aplikasi android, semisal nama aplikasi, target versi os, orientasi, dll.

**Gradle Scripts > build.gradle**

 - Mengenai gradle sendiri telah di jelaskan di pembahasan [Apa itu Gradle](https://creatorbe.github.io/programming/android/2017/03/30/apa-sih-pengertian-gradle-creatorbe.html) dimana di setiap proyek android memiliki gradle dengan fungsi dasar untuk mengompilasi dan membangun aplikasi dari proyek yang kita kerjakan ataupun menambahkan depensi library yang di butuhkan.


Demikian, sebagian besar proses pembangunan aplikasi android akan terfokus di empat hal diatas.


### Koding

![hello-android-world-creatorbe](https://raw.githubusercontent.com/CreatorB/res/master/pic/helloandroidworld-creatorbe.gif)

*Pastikan anda mengikuti instruksi sampai tahap 3 pada [Cara Membuat Proyek Baru](#cara-membuat-proyek-baru).

Dalam pembahasan ini tidak hanya mencetak hello world tapi beberapa contoh kodingan sederhana lainya, pastikan anda sudah membuat activity baru yang diperlukan yaitu Main2Activity.java dan activity_main2.xml dengan cara klik **File > New > Activity > Empty Activity** (*centang generate layout file untuk otomatis membuat file xml nya) untuk nama bisa anda rubah atau biarkan default seperti yang saya contohkan.

Pada dasarnya membuat tampilan user interface pada android sangatlah mudah, bisa menggunakan fitur drag and drop dimenu design xml dan disini yang akan saya bahas adalah versi text nya. Mungkin langsung saja kita akan melanjutkan untuk membuat program hello world android dengan beberapa pemprograman dasar, untuk memudahkan visualisasi, saya akan menjelaskan masing masing kode inline dalam bentuk komentar.


*activity_main.xml*

```xml

<?xml version="1.0" encoding="utf-8"?>
<!--pakai layout linear untuk menampilkan semua komponen dalam bentuk sejajar-->
<!--Anda bisa memilih layout mendatar/horizontal atau dalam bentuk vertikal-->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="io.github.creatorbe.helloworld.MainActivity">

    <!--menampilkan text dalam bentuk inline code-->
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textStyle="bold"
        android:text="Assalamualaikum" />

    <!--menampilkan text dengan memanggil value dari variabel tag-->
    <!--string di folder values/strings-->
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/tag" />

    <!--menampilkan gambar dari folder res/drawable-->
    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:src="@drawable/banner"/>

    <!--layout linear baru dengan orientasi horizontal-->
    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:background="#ffffff">

        <!--edittext komponen dalam android semacam placeholder-->
        <EditText
            android:id="@+id/editText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="16dp"
            android:hint="@string/comment"
            android:inputType="textPersonName"/>

        <!--contoh menampilkan tombol dalam android-->
        <Button
            android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="16dp"
            android:text="@string/button_send" />

        <Button
            android:id="@+id/like"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/like"/>

    </LinearLayout>
</LinearLayout>

```

*MainActivity.java*

```java

package io.github.creatorbe.helloworld;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    //membuat konstan komentar
    public static final String MESSAGES = "io.github.creatorbe.helloworld.MESSAGE";

    //deklarasi Onclicklistener sebagai object yang nantinya bisa di passing dengan Komentari
    private View.OnClickListener Komentari = new View.OnClickListener(){
        public void onClick (View v){
            //intent salah satu obyek yang bisa menjembati beberapa komponen
            Intent i = new Intent(getApplicationContext(), Main2Activity.class);
            // diatas adalah kode menghubungkan kontek (MainActivity) dengan Main2Activity

            //inisialisasi edittext/placeholder pada ui activity_main
            EditText et = (EditText)findViewById(R.id.editText);
            //passing dari input menjadi string
            String comment = et.getText().toString();
            //methods untuk mengirim value dari intent dengan paramater key,value
            i.putExtra(MESSAGES,comment);
            // dimana MESSAGES sebagai key, reusable
            // comment sebagai value
            startActivity(i);
            //kemudian startActivity salah satu methods untuk menjalankan i
            // dimana i sebelumnya di inisialisasikan sbg intent
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //inisialisasi button di ui activiy_main
        Button comment = (Button)findViewById(R.id.button);
        Button like = (Button)findViewById(R.id.like);
        //set aksi pop up ketika button like di klik
        like.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //toast/popup memiliki 3 parameter
                //Toast.makeText(context, text, duration).show();
                Toast.makeText(getApplicationContext(),"Liked",Toast.LENGTH_LONG).show();
            }
        });
        //set aksi ketika button comment di klik dalam inline code dan passing dari Komentari
        comment.setOnClickListener(Komentari);

    }

}

```

*activity_main2.xml*

```xml

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    tools:context="io.github.creatorbe.helloworld.Main2Activity">

    <TextView
        android:id="@+id/isi_komen"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="isi komen"/>
</LinearLayout>


```

*Main2Activity.java*

```java

package io.github.creatorbe.helloworld;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class Main2Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        //terima string dari MainActivity
        Intent i = getIntent();
        String comment = i.getStringExtra(MainActivity.MESSAGES);

        //set string yang didapat ke textview di activity_main2
        TextView tv = (TextView)findViewById(R.id.isi_komen);
        tv.setText(comment);
    }
}

```

*AndroidManifest.xml*

```xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="io.github.creatorbe.helloworld">

    <!--walaupun aplikasi yang dibuat tidak membutuhkan akses internet tapi ini adalah contoh penerapannya-->
    <uses-permission android:name="android.permission.INTERNET" />
    <!--pemasangan hak akses internet pada aplikasi di luar tag application-->

    <!--gambar ikon aplikasi diambil dari folder res/mipmap -->
    <!--label adalah nama aplikasi yang di passing dari string key app_name-->
    <!--theme bisa dirubah pada folder values/styles.xml-->
    <!--intent action main, category launcher mendeklarasikan MainActivity adalah file utama saat aplikasi di jalankan-->
    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".Main2Activity">
            <!--tambah tag navigasi button home -->
            <!--di contoh proyek kali ini tidak begitu riskan dikarenakan mempunyai 1 home/beranda-->
            <meta-data
                android:name="android.support.PARENT_ACTIVITY"
                android:value=".MainActivity"/>
        </activity>
    </application>

</manifest>

```

Fiyuuuh >.< akhirnya selesai juga tugas saya :v . Alhamdulillah, semoga postingan sederhana ini bisa bermanfaat bagi mereka yang memulai belajar pemprograman android, setidak nya ini adalah jejak kecil untuk langkah yang besar.

./creatorb

**Resources**
 - [Check Project](https://github.com/CreatorB/HelloAndroidWorld)
 - [Download](https://github.com/CreatorB/HelloAndroidWorld/archive/master.zip)
