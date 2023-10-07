---
layout: post
title: "Solved rd.break is stuck at Warning: Break before switch_root - RHA134"
date: 2023-10-07 22:35:05 +0700
categories: [kuliah,sibermu,linux,rha]
description: "Sedikit pembahasan menarik dari course RHA 134 Chapter 10, rd.break issues"
---

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

اَلْحَمْدُ للّٰهِ رَبِّ العَالَمِيْنَ والعاقبة للمتقين

 وَالصَّلاَةُ وَالسَّلَامُ عَلىَ إمام الْمُرْسَلِيْنَ،نبيين مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ اَجْمَعِيْنَ

  اَمَّا بَعْدُ


## JUDUL

Mengatasi permasalahan rd.break di RHA 134 Chapter 10 - Controlling The Boot Process


## ABSTRAK

Pembahasan ini ditulis untuk membantu siapa saja (terlebih mahasiswa <a href="https://sibermu.ac.id" target="_blank">Sibermu</a>) yang mengalami permasalahan yang sama di course RHA134 Chapter 10, yang perlu di garis bawahi saya (penulis) tidak menggunakan fitur / tombol Show Solution (lihat solusi / jawaban) dari course yang dimaksud, bisa jadi apa yang saya tulis disini sama dengan solusi yang ada di balik fitur tersebut. Lalu kenapa saya menulis ini? karena saya merasa materi tutorial / course yang diberikan sebelumnya tidak menyertakan alternatif yang telah saya lakukan untuk menyelesaikan chapter ini, sementara ini saya belum tau pasti ini adalah bug atau memang penyedia course menginginkan peserta mencari dari referensi lain untuk menyelesaikan tugas lab di chapter 10 ini, atau memang bisa jadi hanya lab saya yang bermasalah, karena tidak seperti sebelumnya di RHA124 dan RHA134 chapter sebelumnya, tugas lab yang diberikan sesuai dengan materi yang disampaikan.

Kemudian beberapa solusi dan referensi yang telah dikumpulkan disajikan disini dalam bentuk tahapan yang bisa diikuti / praktekkan dan diakhiri dengan kesimpulan. Versi Red Hat Enterprise Linux yang dipakai di lab ini ialah RHEL 9.0 plow, tidak menuntut kemungkinan jika terjadi permasalahan sebenarnya (real) yang sama diluar sana juga bisa mengikuti apa yang dijelaskan dipembahasan ini.

Kata Kunci : Sibermu, Linux, Red Hat, RHA134 Chapter 10, Control The Boot Process, RHEL 9.0 Plow, Atur Ulang Kata Sandi RHEL, Diagnosa dan Perbaikan Boot, Atur default target systemd, rd.break


## ISI

Di Lab RHA134 Chapter 10, peserta diminta untuk mereset root password, memperbaiki beberapa konfigurasi boot dan menetapkan default target boot ke mode graphical.

Setelah memulai lab dan masuk pada serverb melalui console di Lab Environment, akan mendapati issue pada file-system yang harus diselesaikan dan pertama-pertama harus merubah password user root terlebih dahulu. Hanya saja di materi sebelumnya menggunakan `rd.break` yang dipasang di akhir baris linux yang ada pada boot loader (dengan menekan huruf keyboard `e` pada menu list boot untuk edit, menu ini ada setelah restart / awal booting), namun ketika menggunakan `rd.break` saya tidak bisa masuk ke prompt `switch_root` yang diharapkan dari sana mengubah password user root ke redhat. Alih-alih masuk kesana, melainkan terlempar ke mode emergency yang passwordnya memang perlu direset dan jika diperhatikan list log diatasnya, sebelum masuk mode emergency, didapati error `rd.break is stuck at Warning: Break before switch_root`.

Setelah beberapa waktu mencoba tetap gagal untuk masuk ke switch_root menggunakan rd.break, akhirnya diputuskan untuk masuk tanpa menggunakan `rd.break`, melainkan `init=/bin/bash` dengan tahapan sebagai berikut :

1. Edit boot-loader entry (pembahasannya telah disampaikan di materi sebelum tugas lab).

2. Pembahasan yang disampaikan sebelumnya dengan menambahkan `rd.break` diakhir baris kata `linux` dan itu sudah dicoba dan gagal / tidak bekerja, maka ganti dengan menambahkan `init=/bin/bash` diakhir baris kata, tidak hanya itu hapus juga `'console=tty0' & 'console=ttyS0,115200n8'`.

3. Kemudian `Ctrl + x` untuk booting dengan konfigurasi yang telah diperbaharui dilangkah nomor 2 diatas.

4. Maka akan masuk ke kernel commandline, dan secara default file sistem root dalam keadaan mount dan read-only maka remount untuk menjadikannya read-write, menggunakan perintah `mount -o remount,rw /`

5. Di shell yang sedang aktif sekarang ini bisa digunakan untuk reset password dan mengatasi permasalahan yang ada dalam tugas lab, untuk reset password, menggunakan perintah `passwd` dan ganti passwordnya ke `redhat` (sesuai soal dalam tugas lab ini).

6. Setelah password berhasil diperbaharui, bisa keluar dari shell dengan perintah `exec /sbin/init` atau `reboot`. Dalam posisi ini password telah berhasil diatur ulang.

Demikian beberapa tahapan yang bisa dilakukan untuk berhasil reset password yang sebelumnya terkendala ketika menggunakan `rd.break`, disiasati dengan masuk melalui alternatif shell `init=/bin/bash`. Selanjutnya silahkan kembali mengerjakan tugas lab nya sesuai materi yang sebelumnya disampaikan.


## PENUTUP

Dari beberapa referensi yang dihimpun, maka disimpulkan Opsi kernel `rd.break` dan `init=/bin/bash` memiliki tujuan sama dan berbeda dalam cara kerjanya:

1. **rd.break:** Opsi ini menghentikan proses booting dan memberikan akses ke emergency shell, sebelum sistem beralih ke sistem file root yang sebenarnya. Ketika menggunakan `rd.break`, sistem initial RAM disk (initramfs) awalnya terpasang / mount sebagai inisialisasi dari sistem file root, dalam posisi ini bisa menggunakan `mount` untuk mengakses sistem file root yang sebenarnya. Ini berguna untuk memperbaiki masalah booting yang terkait dengan initramfs, termasuk reset password.

2. **init=/bin/bash:** Opsi ini secara langsung menetapkan bahwa shell `/bin/bash` dieksekusi sebagai proses init dari sistem, sehingga membuatnya menjadi proses root. Ini menggantikan proses init standar karena menjalankan shell secara langsung. Dengan cara ini bisa langsung masuk menuju sistem file root yang sebenarnya tanpa melalui initramfs. Ini juga masuk dalam kategori mode emergency shell, untuk pemulihan ketika sistem tidak dapat booting normal.

Seperti yang telah dialami, `rd.break` tidak berfungsi seperti yang diharapkan, kesimpulannya bisa jadi karena konfigurasi tertentu atau masalah dengan initramfs, Penggunaan `init=/bin/bash` yang mem bypass initramfs, sangat bermanfaat ketika `rd.break` tidak berfungsi seperti kasus ini. Hanya saja penggunaan `init=/bin/bash` harus dilakukan dengan hati-hati karena proses ini tidak melalui langkah inisialisasi dan konfigurasi yang terjadi selama proses booting, tidak seperti dengan apa yang dilakukan `rd.break`.

Demikian, semoga yang sedikit ini bisa memberi banyak manfaat.

<br/>

اَللّٰهُ أَعْلَم


Alhamdulillahi rabbil 'alamin, mungkin sekian dulu catatan kecil ini, semoga bermanfaat, barakallahufiik.

_Al-Faqiir ilaa Rahmatillahi Ta'ala_

✎ Hasan Basri

◉ Belakang pemda situbondo - Sabtu (malam Ahad), 21 Rabi'ul Awwal 1445
