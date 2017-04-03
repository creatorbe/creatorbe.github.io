---
layout: post
title: "Java dan XML dibalik layar"
date: 2017-04-03 04:03:05 +0700
categories: [programming,android,minds]
description: "Short and Clear Explanations! tentang kisah java dan xml di balik layar"
---

Tidak sedalam menyelam dalam kisah romeo dan juliet tapi secerca romansa java dan xml. Jika cinta bermakna `TextView` maka disana kacamata relasi diantara keduanya. Statement mengenai `TextView` dalam xml bermakna view dan pada java adalah class, tidak juga salah tetapi jangan lupa kembali lagi ke awal dimana `View` sendiri adalah class java dan tentu `TextView` adalah subclass dari `View`. Bagaimana xml memahami java yaitu dengan memposisikan diri menyederhananakn kompleksitas java dengan menerjemahkan sejumlah `View` sebagai obyek yang mana hasil akhirnya adalah antar muka (UI) yang kita kenal selama ini. Sehebat keduanya memahami kompleksitas diri, sebagaimana itu teori dan sekarang mari melihat bagaimana itu terjadi.

**activity_main.xml**

```
<RelativeLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:paddingBottom="@dimen/activity_vertical_margin"
    tools:context=".MainActivity">

    <TextView 
        android:text="Perasaan"
        android:id="@+id/textview"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

</RelativeLayout>
```

**MainActivity.java**

```
public class MainActivity extends Activity {
    
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

              TextView cinta  = (TextView) findViewById(R.id.textview);
                                            
            }
}
```

Seperti itulah umumnya implementasi dan berikut jika java sebagai persepsi.

```
public class MainActivity extends Activity {
    
        @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);

                   View relativeLayout = findViewById(R.id.rootlayout);
                   TextView cinta = new TextView(this);
                   cinta.setText("Perasaan");
                   cinta.setId(12)
                   setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT,LayoutParams.WRAP_CONTENT)); 
                   ((RelativeLayout) relativeLayout).addView(cinta);
                                                                    
            }
}
```

Keren, begitu indah, tak terukir kata, seakan ingin rasanya mengatakan lihat dan baca lah, biar kode yang menjelaskannya, haha!.

Memang dari permisalan yang saya paparkan diatas satu sama lain bisa saling menggantikan, memang kesimpulan yang tidak salah tetapi kembali lagi lihatlah kode diatas mungkin itu hanyalah sebuah rak kecil dalam sebuah rumah, bagaimana jika kita ingin membangun desa, kota, belum lagi dunia, tentu membangun UI dalam java dengan sekelumit kontainer,kontrol,method dan belum lagi yang lainnya adalah tindakan yang benar benar ceroboh dan rawan kesalahan.

Disini xml sangat mengerti java dan disana sebagian orang hendak memisahkannya, sejauh ini xml sebagai tubuh dan java adalah jiwa, dimana itu adalah wadah yang cantik dari kode java itu sendiri. Disisi lain tentu itu membuat anda bekerja lebih mudah daripada mengerjakan dengan tangan anda sendiri dan terlalu letih tangan anda untuk melihat orientasi (Potret dan Landscape). Satu hal yang pasti selama tidak ada yang menggantikan eksistensi `AndroidManifest.xml` maka benar benar menyingkirkan xml hanyalah sebatas mimpi akan tetapi seiring berjalannya waktu mungkin semua kisah ini akan berakhir dengan hadirnya subyek yang lebih indah dari UI yang kini ada, siapa yang bisa menerka. Namun setidaknya kisah itu pernah singgah menjadi satu dari bagian string dalam creatorbe links ;)

./creatorb

**Rujukan**
- [https://developer.android.com/reference/android/widget/TextView.html](https://developer.android.com/reference/android/widget/TextView.html)





