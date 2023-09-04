---
layout: post
title: "Redhat Academy (RHA) Sibermu - Bab 1"
date: 2023-09-05 00:45:05 +0700
categories: [kuliah,sibermu,linux,rha]
description: "Rangkuman materi Redhat Academy Sibermu Bab 1"
---

بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ

اَلْحَمْدُ للّٰهِ رَبِّ العَالَمِيْنَ والعاقبة للمتقين،

 وَالصَّلاَةُ وَالسَّلَامُ عَلىَ إمام الْمُرْسَلِيْنَ،نبيين مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ اَجْمَعِيْنَ،
 
  اَمَّا بَعْدُ.
 

**Hai**

Sebelumnya salam kenal, saya Hasan Basri asal situbondo jawatimur, dari prodi informatika sibermu angkatan 5. Bagi kalian yang belum tau apa SiberMu yuk kunjungi <a href="https://sibermu.ac.id/" target="_blank">Kampus Virtual SiberMu</a>.

Teruntuk sesama angkatan salam kompak selalu dan bagi kakak angkatan dan segenap dosen, mohon bimbingannya :pray: Berikut rangkuman dari materi Redhat Academy, sekedar catatan sederhana, semoga bermanfaat dan sengaja tidak saya tulis lengkap khawatir copyright, tapi insyaAllah sudah mencakup inti materi, saran dan kritik membangun saya terima dengan sangat senang hati :love_letter: barakallahufiik.

Sekedar mengingatkan kembali untuk mengikuti Red Hat Academy ini, silahkan mengikuti instruksi sesuai modul pdf panduan yang sudah di share di group whatsapp, kemudian setelah mendaftar dan mendapat rhnid dan email bisa lakukan konfirmasi di link google form dan selamat menunggu email konfirmasi. Setelah mendapat link konfirmasi di email silahkan masuk pakai rhnid dan password yang sebelumnya daftar di Red Hat untuk mempelajari materi. Pertanyaan lebih lanjut terkait Red Hat Academy bisa bergabung di link telegram yang telah di bagikan pak @andisugandi :wave: Jazaakallahu khairan.

<br/>

![rhnid creatorbe sibermu](https://scontent.cdninstagram.com/v/t51.2885-15/373688183_634335355180805_8635728682921416796_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=f2MsgY_Pu8oAX-NkhYj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE4NDAyODEyNDUzNDY0MzQ0MA%3D%3D.2-ccb7-5&oh=00_AfCWr5jn00Q9L4OBxVYcYWPA6p_s12N5JJUgPsX7TSZl9Q&oe=64FA0522&_nc_sid=10d13b)


# *Bab 1. Memulai Red Hat Enterprise Linux*

- [x]  Visi : Mengenal Open Source, Linux, Linux Distributions, Red Hat Enterprise Linux
- [x]  Misi : Menjelaskan tujuan open source, Linux, Linux distributions, Red Hat enterprise Linux

## Linux

Linux adalah kernel opensource, kernel adalah program low-level, inti, antar muka pertama untuk mengelolah perangkat keras dengan mengakses CPU, Memory, disk I/O, networking melalui sistem operasi. Sistem operasi / operating system (OS) sendiri adalah perangkat lunak (software) yang bertugas menangani operasi dasar sistem dan manajemen perangkat keras (hardware), banyak sistem operasi yang sering kita pakai misal Windows, atau di laptop macbook memakai OS MacOS, di iphone memakai OS iOS, atau di smartphone lain memakai OS Android. Linux pertama kali dikembangkan oleh Linus Torvalds pada tahun 1991. Sebenarnya Linux dikembangkan untuk komputer pribadi berarsitektur Intel x86, tetapi seiring waktu Linux telah diportasi ke berbagai arsitektur, bahkan lebih banyak daripada sistem operasi lainnya.

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

- Karena Opensource, maksudnya kita bisa mengakses semuanya (source code, dll) kita bisa mengetahui cara kerja sistemnya, bisa memodifikasi dan membagikan secara gratis untuk dipakai bersama, termasuk tujuan opensource untuk lebih mudah dan cepat dalam pengembangan.
- Menyediakan command-line interface / CLI (bisa menggakses komputer dengan interface / antarmuka tampilan berbasis text saja) untuk kemudahan akses dan powerfull scripting (interpreter menerjemahkannya sehingga dipahami kernel, bisa dipakai untuk otomatisasi pekerjaan, backup, monitoring, dll)
- Karena Modular, bisa dengan mudah memperbaharui, meningkatkan, mengganti, menghapus semua komponen dalam sistem operasi.

## Opensource Software

- Adalah Perangkat lunak (software) yang source code nya bisa dipelajari, dimodifikasi dan bagikan.
- Source code adalah kumpulan kode instruksi yang bisa dipahami manusia dan digunakan untuk membuat program.
- Source code yang telah dibuat memiliki copyright (hak cipta).
- Pembuat hak cipta memberikan ketentuan terkait perangkat lunak yang dibuat apakah bisa disalin, dimodifikasi, disebarkan, dll.
- Pengguna perangkat lunak menggunakan sesuai lisensi yang tertera.
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

- Distro Linux komersil yang di distribusikan oleh perusahaan Red Hat.
- Red Hat mendukung penuh dalam pengembangannya demi mendapatkan software berkualitas untuk semua orang.
- Red Hat mensponsori fedora (salah satu distro Linux) dan mengintegrasikan menjadi proyek opensource yang berbasis komunitas dan fedora menjadi laboratorium pengembangan untuk fitur yang nantinya akan masuk pada CentOS dan produk RHEL.
- CentOS adalah upstream dari RHEL, dimana source nya dari Fedora.
- Red Hat berupaya menjaga stream CentOS tetap stabil untuk siap digunakan dalam jangka waktu panjang, terstandart dan mengintegrasikan pada RHEL dalam keadaan siap produksi.
- Pembaharuan RHEL bersifat opensource dan semua orang bisa berkontribusi didalamnya, patch akan di kirim ke CentOS Stream dan akan segera di integrasikan ke RHEL.
- RHEL Edge, varian RHEL yang digunakan untuk membuat image OS untuk keperluan Edge Computing (lokalisasi cloud computing biasanya untuk keperluan perangkat IoT)
- Red Hat CoreOS (RHCOS), bukan OS yang berdiri sendiri tapi image OS pada host dalam container, termasuk bagian dari Red Hat OpenShift Container Platform (RHOCP), terkait detail mengenai ini bisa mempelajari OpenShift dan containers.
- Red Hat Universal Base Image (UBI), ini biasanya diperuntukkan bagi developer / pengembang yang ingin mengembangkan aplikasi cloud-native dalam container, seperti bahasa pemprograman .NET, Golang, Node.js, Perl, PHP, Python, dan Ruby.
- Fedora Rawhide adalah continuous development environment (sebuah lingkungan pengembangan berkala) dari Fedora yang dirilis ke publik atau sederhananya Fedora Rawhide adalah versi terbaru fedora yang sedang dikembangkan.
- Komunitas melakukan pengujian dan menyiapkan versi kernel Linux baru, driver, utilities, dan aplikasi untuk di distribusikan sebagai rilis Fedora versi selanjutnya, adapun RHEL yang dirilis didapatkan dari rilis Fedora terbaru yang menjadi dasar dari CentOS Stream. Contohnya : Fedora 34 adalah sumber kode awal yang digunakan untuk membangun RHEL 9 dan CentOS Stream 9, jika ada package suatu software/aplikasi fedora 34 diperbaharui, maka pembaharuan dimasukkan ke CentOS Stream dan akan menjadi RHEL versi nightly build.
- Permisalan antara Fedora dan Fedora Rawhide sama dengan RHEL dan CentOS Stream, CentOS Stream disiapkan untuk pengembangan minor rilis dari RHEL dan Red Hat melakukan pengujian disegala aspek sebelum merilis RHEL ke publik.

## Beberapa alternatif untuk mendapatkan RHEL

- RHEL varian evaluation bisa download di <a href="https://access.redhat.com/products/red-hat-enterprise-linux/evaluation" target="_blank">https://access.redhat.com/products/red-hat-enterprise-linux/evaluation</a> untuk mengakses nya bisa gratis mendaftar akun di <a href="https://access.redhat.com/" target="_blank">https://access.redhat.com/</a>. Product akan menerima update dan dukungan dari Red Hat dalam periode tertentu, dan jika periode habis tetap masih bisa dipakai hanya saja tanpa dukugan Red Hat lagi.
- RHEL Developer Subsription, varian RHEL yang bisa download di <a href="https://developer.redhat.com/" target="_blank">https://developer.redhat.com/</a>, catatan : jangan menggunakan subscription ini jika sudah memiliki subscription organisasi tertentu, karena Developer Subcription ditujukan untuk perseorangan yang tertarik menambah pengalaman untuk mencobanya.
- Penyedia komputasi awan (Cloud Providers) terkemuka seperti Amazon Web Services, Google Cloud Platform, Microsoft Azure, menawarkan RHEL dengan subscription Red Hat Cloud Access service.
- Fedora Linux dan beberapa turunannya bisa dipakai gratis, bisa download di <a href="https://getfedora.org" target="_blank">https://getfedora.org</a>.
- EPEL / EPEL Next = Extra Packages for Enterprise Linux (EPEL) menyediakan berbagai package turunan dari Fedora atau sudah masuk CentOS tapi belum tersedia di RHEL. Silahkan baca lebih detail di <a href="https://docs.fedoraproject.org/en-US/epel/" target="_blank">https://docs.fedoraproject.org/en-US/epel/</a>
- CentOS Stream bisa download di <a href="https://www.centos.org/centos-stream/" target="_blank">https://www.centos.org/centos-stream/</a>.

## Rangkuman

- Perangkat lunak (software) Open source adalah perangkat lunak yang source code nya bisa diakses semua orang, dipakai untuk belajar, memodifikasi dan dibagikan ulang.
- Linux Distribution / Distro, ialah sistem operasi yang dibangun menggunakan Linux Kernel dan didukung aplikasi dan library.
- Perusahaan Red Hat berpartisipasi dalam mendukung dan berkontribusi pada proyek Open source, mensponsori dan mengintegrasikannya menjadi distribusi berbasis komunitas kemudian menstabilkannya agar dapat ditawarkan sebagai produk komersil yang enterprise-ready (suatu sistem teruji yang digunakan untuk meningkatkan aktivitas operasional perusahaan bekerja secara efektif).
- Red Hat Enterprise Linux (RHEL) adalah produk opensource yang enterprise-ready dengan dukungan berbayar yang ditawarkan oleh perusahaan Red Hat, 
- Red Hat Developer Subscription versi gratis dibuat untuk mempermudah seseorang untuk mendapat sumber belajar, informasi, termasuk Developer Subscription sendiri dan produk produk Red Hat lainnya.

## Informasi Terkait

- Koleksi video Red Hat Academy angkatan sebelumnya <a href="https://gist.github.com/andisugandi/2fa851a915e64080427df742acca1e04" target="_blank">https://gist.github.com/andisugandi/2fa851a915e64080427df742acca1e04</a>


اَللّٰهُ أَعْلَم


Alhamdulillahi rabbil 'alamin, mungkin sekian dulu catatan kecil ini, insyaAllah kita akan bertemu lagi di sesi berikutnya, barakallahufiik.

_Al-Faqiir ilaa Rahmatillahi Ta'ala_

:black_nib: Hasan Basri

:tent: Belakang Pemda Situbondo
