---
layout: post
title: "Red Hat Academy (RHA) Sibermu - Bab 1"
date: 2023-09-05 00:45:05 +0700
categories: [kuliah,sibermu,linux,rha]
description: "Rangkuman materi Redhat Academy Sibermu Bab 1"
---

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

اَلْحَمْدُ للّٰهِ رَبِّ العَالَمِيْنَ والعاقبة للمتقين

 وَالصَّلاَةُ وَالسَّلَامُ عَلىَ إمام الْمُرْسَلِيْنَ،نبيين مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ اَجْمَعِيْنَ
 
  اَمَّا بَعْدُ
 

**Hai**

Sebelumnya salam kenal, saya Hasan Basri asal situbondo jawatimur, dari prodi informatika sibermu angkatan 5. Bagi kalian yang belum tau apa SiberMu yuk kunjungi <a href="https://sibermu.ac.id/" target="_blank">Kampus Virtual SiberMu</a>.

Teruntuk sesama angkatan salam kompak selalu dan bagi kakak angkatan dan segenap dosen, mohon bimbingannya (/|).
Berikut rangkuman dari materi Redhat Academy, sekedar catatan sederhana, semoga bermanfaat dan sengaja tidak saya tulis lengkap khawatir copyright, tapi insyaAllah sudah mencakup inti materi, saran dan kritik membangun saya terima dengan sangat senang hati <3 barakallahufiik.

>
> Sekedar mengingatkan kembali untuk mengikuti Red Hat Academy ini, silahkan mengikuti instruksi sesuai modul pdf panduan yang sudah di share di group whatsapp, kemudian setelah mendaftar dan mendapat rhnid dan email bisa lakukan konfirmasi di link google form dan selamat menunggu email konfirmasi. Setelah mendapat link konfirmasi di email silahkan masuk pakai rhnid dan password yang sebelumnya daftar di Red Hat untuk mempelajari materi. Untuk panduan lebih jelas bisa simak video mengenai <a href="https://www.youtube.com/watch?v=FVqBI0LwyRU" target="_blank">RHCSA : Tutorial Membuat Red Hat Network Id dan Login Red Hat Academy</a>. Pertanyaan lebih lanjut terkait Red Hat Academy bisa bergabung di link telegram yang telah di bagikan pak @andisugandi.

<br/>

![rhnid creatorbe sibermu](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74e7fdf0-fd9e-4120-bd18-2ad731fd8f51/dg7wfuq-f108a7b0-531d-4e91-ae00-f308d9b6db46.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0ZTdmZGYwLWZkOWUtNDEyMC1iZDE4LTJhZDczMWZkOGY1MVwvZGc3d2Z1cS1mMTA4YTdiMC01MzFkLTRlOTEtYWUwMC1mMzA4ZDliNmRiNDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dQ9PG_EdOqvF0Chp4vALuvgd3BpqNuD72Fi1kKBZWQ4)



# *Bab 1. Memulai Red Hat Enterprise Linux*

- [x]  Visi : Mengenal Open Source, Linux, Linux Distributions, Red Hat Enterprise Linux
- [x]  Misi : Menjelaskan tujuan open source, Linux, Linux distributions, Red Hat enterprise Linux

## Linux

Linux adalah kernel opensource, kernel adalah core / inti, antar muka pertama yang mengontrol sistem dengan mengakses CPU, Memory, disk I/O, networking melalui sistem operasi. Sistem operasi / operating system (OS) sendiri adalah perangkat lunak (software) yang bertugas menangani operasi dasar sistem dan manajemen perangkat keras (hardware), banyak sistem operasi yang sering kita pakai misal Windows, atau di laptop macbook memakai OS MacOS, di iphone memakai OS iOS, atau di smartphone lain memakai OS Android. Linux pertama kali dikembangkan oleh Linus Torvalds pada tahun 1991. Sebenarnya Linux dikembangkan untuk komputer pribadi berarsitektur Intel x86, tetapi seiring waktu Linux telah diporting ke berbagai arsitektur, bahkan lebih banyak daripada sistem operasi lainnya.

### Kenapa harus belajar Linux?

- Teknologi penting yang harus diketahui pekerja IT/TI profesional.
- Linux mengelola sistem point-of-sale (sistem yang digunakan untuk penjualan produk) dan pasar saham dunia.
- Mendukung smart TV dan sistem entertainment dalam penerbangan (hiburan audio,video yang disajikan pada penumpang maskapai penerbangan).
- Dipakai disebagian besar 500 superkomputer (komputer yg dipakai untuk perhitungan intensif semisal simulasi pesawat, riset iklim dan perkiraan cuaca, dll) di dunia.
- Menyediakan teknologi yang mempelopori cloud revolution dan menyediakan tool untuk membangun generasi terkini dari aplikasi berbasis container, software-based dan big data.
- Pengguna OS Windows butuh untuk saling bekerja dengan sistem Linux dan aplikasinya.
- Cloud Computing (teknologi internet komputer) memakai Linux.
- Aplikasi mobile dan perangkat Internet of Things (IoT) kebanyakan memakai Linux.
- dll

### Apa bagusnya memakai Linux?

- Karena Opensource, maksudnya kita bisa mengakses semuanya (source code, dll) kita bisa mengetahui cara kerja sistemnya, bisa memodifikasi dan membagikan secara gratis untuk dipakai bersama, termasuk tujuan opensource untuk lebih mudah dan cepat dalam pengembangan software itu sendiri.
- Menyediakan command-line interface / CLI (bisa menggakses komputer dengan interface / antarmuka tampilan berbasis text saja) untuk kemudahan akses dan powerfull scripting (interpreter menerjemahkannya sehingga dipahami kernel, bisa dipakai untuk otomatisasi pekerjaan, backup, monitoring, dll)
- Karena Modular, bisa dengan mudah memperbaharui, meningkatkan, mengganti, menghapus semua komponen dalam sistem operasi.

## Opensource Software

- Adalah Perangkat lunak (software) yang source code nya bisa dipelajari, dimodifikasi dan dibagikan.
- Source code adalah kumpulan kode instruksi yang bisa dipahami manusia dan digunakan untuk membuat program.
- Source code yang telah dibuat memiliki copyright (hak cipta).
- Pembuat hak cipta memberikan ketentuan terkait perangkat lunak yang dibuat apakah bisa disalin, dimodifikasi, disebarkan, dll.
- Pengguna perangkat lunak menggunakannya sesuai lisensi yang tertera.
- Beberapa perangkat lunak ada yang memiliki lisensi kepemilikan / hak paten (proprietary / closed source) source code nya hanya bisa dilihat, diubah, atau didistribusikan oleh orang, tim, atau organisasi pembuatnya, sedangkan bagi pengguna lain ada keterbatasan dalam mengakses program dan source codenya.
- Perangkat lunak opensource tetap bisa dijadikan komersial.
- Vendor opensource seperti Red Hat menawarkan dukungan komersial untuk menerapkan, mengelola, dan memberikan solusi tepat berdasarkan produk opensource.
- Lisensi Copyleft adalah lisensi opensource yang hasil turunan (perangkat lunak yang telah dimodifikasi / dikembangkan) harus sama lisensi nya dengan lisensi induk / awalnya.
- Lisensi Permissive adalah lisensi opensource yang hasil turunannya boleh memakai lisensi lain bahkan dijadikan lisensi proprieatary, komersil.

### Manfaat Opensource

- Control = Mengetahui bagaimana cara kerja kode dan meningkatkan performanya.
- Training = Melatih untuk langsung belajar dari code yang sudah berjalan dan bisa membuat aplikasi lain yang bermanfaat.
- Security = Memeriksa kode yang sensitif (ada celah untuk dirusak) dan bisa langsung memperbaikinya.
- Stability = Kode nya tetap bisa diandalkan (dimanfaatkan, dikembangkan, dll) meskipun sudah ditinggalkan oleh pembuat awalnya.

## Apa itu Linux Distribution / Distro Linux

- Distro Linux, sebutan untuk sistem operasi yang dikembangkan menggunakan kernel Linux.
- Dibuat untuk tujuan tertentu dan kadang juga didalamnya memiliki banyak aplikasi opensource.
- Distro Linux Memiliki dokumentasi terkait distro dan instalasi.
- Distro Linux Menyediakan partisipasi untuk dukungan software dan komunitas pengembang.
- Distro Linux tidak hanya dikembangkan gratis oleh komunitas, ada juga yang dikembangkan secara berbayar oleh organisasi.

### Mengenal Red Hat

- Adalah perusahaan penyedia perangkat lunak opensource terkemuka dunia.
- Pelopor di komunitas dalam mengembangkan teknologi cloud, Linux, middleware, storage, teknologi virtualisasi dan teknologi terbaik lain nya dengan sistem opensource.
- Berpartisipasi dalam mengembangkan pelanggan dalam komunitas opensource dan industri teknologi.

### Fedora Rawhide - Fedora | CentOS Stream - Red Hat Enterprise Linux / RHEL 

- RHEL, Distro Linux komersil yang di distribusikan oleh perusahaan Red Hat.
- Red Hat mendukung penuh dalam pengembangannya demi mendapatkan software berkualitas untuk semua orang.
- Red Hat mensponsori fedora (salah satu distro Linux) dan mengintegrasikan menjadi proyek opensource yang berbasis komunitas dan fedora menjadi laboratorium pengembangan untuk fitur yang nantinya akan masuk pada CentOS dan produk RHEL.
- CentOS adalah upstream dari RHEL, dimana source nya dari Fedora.
- Red Hat berupaya menjaga CentOS Stream tetap stabil untuk siap digunakan dalam jangka waktu panjang, terstandart dan mengintegrasikan pada RHEL dalam keadaan siap produksi.
- Pembaharuan RHEL bersifat opensource dan semua orang bisa berkontribusi didalamnya, patch akan di kirim ke CentOS Stream dan akan segera di integrasikan ke RHEL.
- RHEL Edge, varian RHEL yang digunakan untuk membuat image OS untuk keperluan Edge Computing (lokalisasi cloud computing biasanya untuk keperluan perangkat IoT)
- Red Hat CoreOS (RHCOS), bukan OS yang berdiri sendiri tapi image OS pada host dalam container, termasuk bagian dari Red Hat OpenShift Container Platform (RHOCP), terkait detail mengenai ini bisa mempelajari OpenShift dan containers.
- Red Hat Universal Base Image (UBI), ini biasanya diperuntukkan bagi developer / pengembang yang ingin mengembangkan aplikasi cloud-native dalam container, seperti bahasa pemprograman .NET, Golang, Node.js, Perl, PHP, Python, dan Ruby.
- Fedora Rawhide adalah continuous development environment (sebuah lingkungan pengembangan berkala) dari Fedora yang dirilis ke publik atau sederhananya Fedora Rawhide adalah versi terbaru fedora yang sedang dikembangkan.
- Komunitas melakukan pengujian dan menyiapkan versi kernel Linux baru, driver, utilities, dan aplikasi untuk di distribusikan sebagai rilis Fedora versi selanjutnya, adapun RHEL yang dirilis didapatkan dari rilis Fedora terbaru yang menjadi dasar dari CentOS Stream. Contohnya : Fedora 34 adalah sumber kode awal yang digunakan untuk membangun RHEL 9 dan CentOS Stream 9, jika ada package suatu software/aplikasi fedora 34 diperbaharui, maka pembaharuan dimasukkan ke CentOS Stream dan akan menjadi RHEL versi nightly build.
- Permisalan antara Fedora dan Fedora Rawhide sama dengan RHEL dan CentOS Stream, CentOS Stream disiapkan untuk pengembangan minor rilis dari RHEL dan Red Hat melakukan pengujian disegala aspek sebelum merilis RHEL ke publik.

## Beberapa alternatif untuk mendapatkan RHEL

- RHEL varian evaluation bisa download di <a href="https://access.redhat.com/products/red-hat-enterprise-linux/evaluation" target="_blank">https://access.redhat.com/products/red-hat-enterprise-linux/evaluation</a> untuk mengakses nya bisa gratis mendaftar akun di <a href="https://access.redhat.com/" target="_blank">https://access.redhat.com/</a>. Produk ini akan menerima update dan dukungan dari Red Hat dalam periode tertentu, dan jika periode habis tetap masih bisa dipakai hanya saja tanpa dukugan Red Hat lagi.
- RHEL Developer Subsription, varian RHEL yang bisa download di <a href="https://developer.redhat.com/" target="_blank">https://developer.redhat.com/</a>, catatan : Ada himbauan dari Red Hat untuk tidak menggunakan varian subscription ini jika sudah memiliki subscription organisasi tertentu, karena Developer Subcription ditujukan untuk perseorangan yang tertarik untuk mencobanya.
- Penyedia komputasi awan (Cloud Providers) terkemuka seperti Amazon Web Services, Google Cloud Platform, Microsoft Azure, pun menawarkan RHEL dengan subscription Red Hat Cloud Access service.
- Fedora Linux dan beberapa turunannya bisa dipakai gratis, bisa download di <a href="https://getfedora.org" target="_blank">https://getfedora.org</a>.
- EPEL / EPEL Next = Extra Packages for Enterprise Linux (EPEL) menyediakan berbagai package turunan dari Fedora atau sudah masuk CentOS tapi belum tersedia di RHEL. Silahkan baca lebih detail di <a href="https://docs.fedoraproject.org/en-US/epel/" target="_blank">https://docs.fedoraproject.org/en-US/epel/</a>
- CentOS Stream bisa download di <a href="https://www.centos.org/centos-stream/" target="_blank">https://www.centos.org/centos-stream/</a>.

## Rangkuman

- Perangkat lunak (software) Open source adalah perangkat lunak yang source code nya bisa diakses semua orang, dipelajari, dimodifikasi dan dibagikan ulang.
- Linux Distribution / Distro, ialah sistem operasi yang dibangun menggunakan Linux Kernel dengan dukungan aplikasi dan library.
- Perusahaan Red Hat berpartisipasi dan berkontribusi pada proyek Open source, mensponsori dan mengintegrasikannya menjadi distribusi berbasis komunitas kemudian menstabilkannya agar dapat ditawarkan sebagai produk komersil yang enterprise-ready (suatu sistem teruji yang digunakan untuk meningkatkan aktivitas operasional perusahaan bekerja secara efektif).
- Red Hat Enterprise Linux (RHEL) adalah produk opensource yang enterprise-ready dengan dukungan berbayar yang ditawarkan oleh perusahaan Red Hat, 
- Red Hat Developer Subscription versi gratis dibuat untuk mempermudah seseorang untuk mendapat sumber belajar, informasi, termasuk Developer Subscription sendiri dan produk produk Red Hat lainnya.


## Tips

- Keseluruhan course berbahasa inggris, dan beberapa bahasa lain selain bahasa indonesia, untuk pengguna browser chrome terbaru bisa klik kanan dan pilih terjemahkan halaman ini, atau bisa juga install addons / aplikasi chrome untuk menerjemahkan halaman atau kata yg dipilih (select/blok) menggunakan <a href="https://chrome.google.com/webstore/detail/imtranslator-translator-d/noaijdpnepcgjemiklgfkcfbkokogabh" target="_blank">ImTranslator</a>. Saya rekomendasikan ImTranslator karena memakai beberapa provider translator, Google, Bing, Yandex dan untuk hasil translate lebih manusiawi lagi (human readable) bisa memakai chatGPT atau addons yang memakai chatGPT seperti <a href="https://chrome.google.com/webstore/detail/maxaime-use-chatgpt-ai-an/mhnlakgilnojmhinhkckjpncpbhabphi">MaxAI.me</a>.
- Teruntuk prodi informatika / informasi, bahasa inggris termasuk ilmu alat penting yang dibutuhkan oleh pekerja IT dan mempelajarinya termasuk nilai tersendiri, karena mayoritas dokumentasi teknologi terupdate menggunakan bahasa inggris. Sebagaimana jika alat sudah lengkap maka pekerjaan lebih efisien lagi untuk dikerjakan. (Tentunya tetap semua kemudahan datangnya dari Allah, adapun keahlian hanya salah satu usaha untuk menggapai kemudahan dari Allah).
- Kembali mengingatkan kutipan dari pak @andisugandi **Goal untuk September 2023 ini bukan kebut-kebutan 15 chapters selesai (+ dapat sertifikat ketuntasan), melainkan mendapatkan exam voucher. Syaratnya dapat exam voucher ini harus eligible, syarat eligible: jangan ngebut: maksimal 2/3 chapter per 1X login (per hari). Boleh diulang-ulang untuk setiap chapter yg sama (berkali-kali login per hari).**

<br/>

اَللّٰهُ أَعْلَم


Alhamdulillahi rabbil 'alamin, mungkin sekian dulu catatan kecil ini, insyaAllah kita akan bertemu lagi di sesi berikutnya, barakallahufiik.

_Al-Faqiir ilaa Rahmatillahi Ta'ala_

✎ Hasan Basri

◉ Belakang pemda situbondo - Selasa, 19 Shofar 1445 
