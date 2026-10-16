import { Article, AgendaEvent, Comment } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Pesantren Mandiri 2026: 500 Pondok di Indonesia Luncurkan Inkubator Sains & Agrobisnis Santri',
    slug: 'pesantren-mandiri-2026-inkubator-sains-agrobisnis-santri',
    category: 'Berita Utama',
    summary: 'Gerakan kemandirian ekonomi pesantren mencatat tonggak sejarah baru dengan integrasi teknologi hijau dan unit usaha santri modern di 27 provinsi.',
    content: [
      'JOMBANG — Sebanyak 500 pondok pesantren di berbagai pelosok nusantara secara serempak meresmikan program akselerasi Pesantren Mandiri Berkelanjutan. Inisiatif ini tidak hanya berfokus pada pendalaman turats dan akhlakul karimah, tetapi juga membekali para santri dengan keterampilan sains terapan, teknologi agrobisnis presisi, dan tata kelola ekonomi syariah.',
      'Dalam sambutan pembukaan, para pimpinan pondok menekankan bahwa sejarah pesantren di Indonesia selalu lekat dengan kemandirian sosial dan pemberdayaan masyarakat sekitar. Dengan mengadopsi greenhouse berbasis sensor pintar dan koperasi digital berbasis blockchain syariah, pesantren kini membuktikan bahwa tradisi sarungan dapat berjalan beriringan dengan inovasi abad 21.',
      'Melalui program inkubasi ini, setiap pondok didampingi tenaga ahli riset untuk mengembangkan komoditas unggulan lokal, mulai dari kopi arabika organik, perikanan air tawar ramah lingkungan, hingga pengembangan perangkat lunak berbasis open-source untuk digitalisasi administrasi pesantren.',
      'Keberhasilan transformasi ini juga disambut hangat oleh ribuan santri yang kini tidak hanya menguasai gramatika Arab dan kaidah fiqhiyyah, melainkan juga memiliki sertifikasi keahlian profesional yang siap bersaing di kancah global.'
    ],
    quote: {
      arabicText: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
      text: 'Sebaik-baik manusia adalah yang paling bermanfaat bagi sesama manusia.',
      author: 'Hadits Riwayat Ahmad & Ath-Thabarani'
    },
    imageUrl: '/src/assets/images/hero_pesantren_campus_1792150069492.jpg',
    imageCaption: 'Suasana asri kompleks pesantren di Jawa Timur yang memadukan arsitektur tradisional dan fasilitas pembelajaran modern.',
    author: {
      name: 'Ahmad Faizurrohman, M.Pd.',
      role: 'Redaktur Khazanah & Pendidikan',
      pesantrenOrigin: 'Alumni Ponpes Tebuireng'
    },
    publishedAt: '16 Oktober 2026',
    readTime: '4 menit baca',
    tags: ['Kemandirian Pesantren', 'Ekonomi Syariah', 'Santri Abad 21', 'Agrobisnis'],
    views: 8420,
    likes: 642,
    isFeatured: true,
    isBreaking: true,
    location: 'Jombang, Jawa Timur'
  },
  {
    id: 'art-2',
    title: 'Peluang Emas: Beasiswa Santri Berprestasi 2026 Resmi Dibuka untuk 1.200 Kuota Kampus Top Dunia',
    slug: 'beasiswa-santri-berprestasi-2026-resmi-dibuka',
    category: 'Pendidikan & Beasiswa',
    summary: 'Kemenag dan Lembaga Pengelola Dana Pendidikan kembali membuka jalur beasiswa penuh bagi santri berprestasi untuk studi jenjang S1, S2, hingga S3 di 40 universitas dunia.',
    content: [
      'JAKARTA — Kabar gembira datang bagi para santri hafizh Quran dan pengkaji kitab kuning di seluruh penjuru Indonesia. Program Beasiswa Santri Berprestasi (PBSB) dan LPDP Khusus Santri 2026 resmi membuka pendaftaran dengan alokasi beasiswa penuh sebanyak 1.200 penerima beasiswa.',
      'Tahun ini, cakupan universitas mitra diperluas tidak hanya ke Timur Tengah seperti Universitas Al-Azhar Kairo, Universitas Al-Qarawiyyin Maroko, dan Universitas King Saud Riyadh, melainkan juga universitas riset sains dan humaniora di Inggris, Jepang, Jerman, dan Australia.',
      'Persyaratan utama mencakup surat rekomendasi pengasuh pondok terdaftar, kemampuan membaca kitab kuning, hafalan Al-Qur\'an minimal 10 juz untuk bidang agama atau prestasi olimpiade sains madrasah bagi bidang STEM.',
      'Pendaftaran dibuka mulai 15 Oktober hingga 30 November 2026 secara daring dengan bimbingan intensif persiapan bahasa dan wawancara dari Ikatan Alumni Penerima Beasiswa Santri.'
    ],
    quote: {
      arabicText: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
      text: 'Menuntut ilmu adalah kewajiban bagi setiap muslim.',
      author: 'HR. Ibnu Majah'
    },
    imageUrl: '/src/assets/images/beasiswa_santri_global_1792150072174.jpg',
    imageCaption: 'Santri alumni pondok pesantren menunjukkan piagam penerimaan beasiswa internasional.',
    author: {
      name: 'Nabila Zahra El-Farabi',
      role: 'Koresponden Pendidikan Luar Negeri',
      pesantrenOrigin: 'Alumni Ponpes Krapyak Yogyakarta'
    },
    publishedAt: '15 Oktober 2026',
    readTime: '3 menit baca',
    tags: ['Beasiswa Santri', 'PBSB 2026', 'Al-Azhar', 'LPDP Santri', 'Pendidikan Tinggi'],
    views: 12390,
    likes: 1104,
    location: 'Jakarta'
  },
  {
    id: 'art-3',
    title: 'Kajian Kitab Ihya Ulumiddin: Membangun Etika Digital dan Adab Tabayyun di Era Medsos',
    slug: 'kajian-kitab-ihya-ulumiddin-etika-digital-santri',
    category: 'Kajian & Kitab',
    summary: 'Pembedahan bab Afatul Lisan (Bahaya Lisan) karya Imam Al-Ghazali menjadi landasan etis mendalam bagi generasi santri dalam menyaring narasi di ruang siber.',
    content: [
      'REMBANG — Dalam pengajian rutin kitab turats Ihya Ulumiddin yang dihadiri ribuan santri dan santri kalong, pembahasan kitab Afat al-Lisan karya Hujjatul Islam Imam Al-Ghazali kembali diaktualisasikan dengan realitas dunia maya saat ini.',
      'Pengasuh pengajian menegaskan bahwa konsep "lisan" pada zaman sekarang mencakup ketukan jari di layar telepon genggam, unggahan di linimasa media sosial, hingga komentar yang ditulis di portal internet. Segala ujaran kebencian, namimah (adu domba), dan ghibah digital memiliki konsekuensi hisab yang sama beratnya dengan lisan verbal.',
      'Prinsip tabayyun (verifikasi berita) yang diajarkan dalam Al-Qur\'an surat Al-Hujurat ayat 6 merupakan mekanisme penangkal hoaks paling paripurna sebelum teknologi algoritma pengecek fakta diciptakan.',
      'Santri diimbau menjadi duta kedamaian digital: merespons perbedaan dengan hikmah, membagikan konten keilmuan yang sejuk, serta menahan diri dari debat kusir yang mengeraskan hati.'
    ],
    quote: {
      arabicText: 'سَلَامَةُ الْإِنْسَانِ فِي حِفْظِ اللِّسَانِ',
      text: 'Keselamatan manusia terletak pada penjagaan lisannya.',
      author: 'Mutiara Hikmah Ulama Salaf'
    },
    imageUrl: '/src/assets/images/kajian_kitab_kuning_1792150070575.jpg',
    imageCaption: 'Naskah klasik kitab kuning dengan catatan gandul pegon di atas rehal kayu jati khas pesantren.',
    author: {
      name: 'Gus Muhammad Syamsuddin, Lc.',
      role: 'Pengasuh Rubrik Bahtsul Masail & Kitab Kuning',
      pesantrenOrigin: 'Pesantren Sarang, Rembang'
    },
    publishedAt: '14 Oktober 2026',
    readTime: '5 menit baca',
    tags: ['Kajian Kitab', 'Ihya Ulumiddin', 'Adab Bermedia', 'Tabayyun', 'Fiqh Digital'],
    views: 6720,
    likes: 853,
    location: 'Rembang, Jawa Tengah'
  },
  {
    id: 'art-4',
    title: 'Transformasi Laboratorium Koding Santri: Memadukan Hafalan Matan dengan Robotika dan AI',
    slug: 'transformasi-laboratorium-koding-santri-robotika-ai',
    category: 'Budaya & Santri',
    summary: 'Melihat geliat santri madrasah aliyah yang menjuarai kompetisi kecerdasan buatan nasional dengan tetap menjaga kedisiplinan mengaji ba\'da subuh.',
    content: [
      'TASIKMALAYA — Pemandangan menarik tersaji di sebuah pondok pesantren di Jawa Barat. Selepas menuntaskan hafalan nadhom Alfiyyah Ibnu Malik dan sholat dhuha berjamaah, para santri berganti pakaian praktik laboratorium untuk mengembangkan modul sistem pengairan pintar dan aplikasi pendeteksi hukum tajwid berbasis machine learning.',
      'Pondok pesantren ini mendirikan "Santri AI Lab" yang bekerja sama dengan asosiasi teknologi nasional. Metode menghafal rumus logika pemrograman ternyata memiliki kesamaan mendasar dengan metode takror (pengulangan hafalan nazham) yang telah dipraktikkan berabad-abad di pesantren.',
      'Banyak inovasi yang lahir dari laboratorium ini bersumber dari masalah nyata lingkungan sekitar pondok, seperti sensor penghematan energi listrik asrama santri, aplikasi pemilah sampah pondok, hingga aplikasi katalog kitab kuning berbasis semantik.',
      'Kehadiran laboratorium ini membuktikan bahwa pesantren mampu melahirkan intelektual yang berkarakter kokoh: mutafaqqih fiddin (ahli ilmu agama) sekaligus melek teknologi mutakhir.'
    ],
    imageUrl: '/src/assets/images/santri_digital_lab_1792150071693.jpg',
    imageCaption: 'Santri putra dan putri berkolaborasi merakit robot cerdas dan menulis kode program di pesantren.',
    author: {
      name: 'Rahmat Hidayatullah, S.T., M.Kom.',
      role: 'Spesialis Teknologi Edukasi Pesantren',
      pesantrenOrigin: 'Alumni Ponpes Cipasung'
    },
    publishedAt: '13 Oktober 2026',
    readTime: '4 menit baca',
    tags: ['Santri Digital', 'Robotika Pesantren', 'Coding Santri', 'Inovasi Madrasah'],
    views: 9150,
    likes: 934,
    location: 'Tasikmalaya, Jawa Barat'
  },
  {
    id: 'art-5',
    title: 'Multaqo Ulama Nusantara 2026: Komitmen Merawat Ukhuwah, Toleransi, dan Kedaulatan Bangsa',
    slug: 'multaqo-ulama-nusantara-2026-rawat-ukhuwah',
    category: 'Tokoh & Ulama',
    summary: 'Ratusan masyayikh dan kyai kharismatik se-Indonesia merumuskan Piagam Kemaslahatan Umat untuk menjaga persatuan nasional di tengah tantangan geopolitik dunia.',
    content: [
      'SURABAYA — Pertemuan akbar ulama dan masyayikh pondok pesantren se-Nusantara menghasilkan Deklarasi Surabaya 2026. Deklarasi ini menegaskan kembali peran historis pesantren sebagai tiang penyangga persatuan bangsa dan perekat kebhinekaan sejak era pra-kemerdekaan hingga kini.',
      'Para kyai sepuh menggarisbawahi pentingnya merawat Ukhuwah Islamiyyah (persaudaraan sesama muslim), Ukhuwah Wathaniyyah (persaudaraan sebangsa), dan Ukhuwah Basyariyyah (persaudaraan kemanusiaan) sebagai pondasi kokoh peradaban.',
      'Selain itu, forum ini juga menelurkan rekomendasi strategis bagi pemerintah untuk terus memperkuat regulasi Dana Abadi Pesantren dan pemenuhan sarana kesehatan lingkungan pondok.',
      'Pesan utama yang digaungkan adalah bahwa pesantren akan selalu berada di garda terdepan mendidik generasi berakhlak mulia yang cinta tanah air (hubbul wathan minal iman).'
    ],
    imageUrl: '/src/assets/images/ulama_khutbah_gathering_1792150072013.jpg',
    imageCaption: 'Pertemuan silaturahmi para kyai sepuh dan alim ulama dalam forum bahtsul masail nasional.',
    author: {
      name: 'K.H. Lukman Hakim Arifin',
      role: 'Ketua Dewan Pakar Keislaman',
      pesantrenOrigin: 'Pesantren Lirboyo, Kediri'
    },
    publishedAt: '12 Oktober 2026',
    readTime: '5 menit baca',
    tags: ['Tokoh Ulama', 'Ukhuwah Islamiyyah', 'Bahtsul Masail', 'Pesantren Nusantara'],
    views: 11400,
    likes: 1250,
    location: 'Surabaya, Jawa Timur'
  },
  {
    id: 'art-6',
    title: 'Opini: Mengapa Tradisi Sanad Keilmuan Pesantren Tetap Vital di Zaman Disrupsi AI?',
    slug: 'opini-sanad-keilmuan-pesantren-di-era-ai',
    category: 'Opini & Riset',
    summary: 'Kecerdasan buatan dapat memproses jutaan teks kitab dalam hitungan detik, tetapi berkah, tarbiyah keteladanan guru, dan tazkiyatun nafs hanya didapat lewat duduk bertalaqqi.',
    content: [
      'Perkembangan model bahasa cerdas (Large Language Models) memungkinkan siapa saja mencari dalil atau terjemahan kitab kuning dalam sekejap mata. Namun, ilmu dalam tradisi Islam bukan sekadar tumpukan data biner informasi, melainkan nurun yaqdzifullah (cahaya petunjuk yang Allah lekatkan dalam sanubari).',
      'Di sinilah letak keunikan tradisi pesantren: talaqqi dan musyafahah (belajar langsung bertatap muka) dengan para masyayikh. Di hadapan kyai, santri tidak hanya menyerap bunyi teks, tetapi mengamati bagaimana seorang alim bertutur, bagaimana adab bersikap saat berbeda pendapat, dan bagaimana tawadhu\' dihayati dalam keseharian.',
      'AI bisa menghasilkan teks khutbah yang puitis, tetapi AI tidak bisa memberikan doa mustajab seorang guru di sepertiga malam untuk keberkahan muridnya.',
      'Maka, alih-alih mengkhawatirkan teknologi, pesantren merengkuh alat modern ini untuk mempercepat akses dakwah, sembari menjaga inti ruh pesantren: sanad keilmuan yang bersambung hingga Rasulullah SAW.'
    ],
    imageUrl: '/src/assets/images/kajian_kitab_kuning_1792150070575.jpg',
    imageCaption: 'Tradisi ngaji sorogan tatap muka santri bersama kyai sebagai warisan adab keilmuan Islam.',
    author: {
      name: 'Dr. Hj. Ainun Mardhiyah, M.Ag.',
      role: 'Peneliti Filologi Islam & Dosen Pascasarjana',
      pesantrenOrigin: 'Alumni Ponpes Denanyar Jombang'
    },
    publishedAt: '11 Oktober 2026',
    readTime: '6 menit baca',
    tags: ['Opini Santri', 'Sanad Keilmuan', 'Filsafat Pendidikan', 'Tradisi Pesantren'],
    views: 7890,
    likes: 820,
    location: 'Yogyakarta'
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'comm-1',
    articleId: 'art-1',
    authorName: 'M. Wildan Firdaus',
    authorRole: 'Santri',
    content: 'Alhamdulillah, di pondok kami di Kediri sudah mulai menerapkan greenhouse hidroponik santri. Sangat terasa manfaatnya, santri jadi punya skill nyata selain kitab kuning. Mohon doanya agar program Pesantren Mandiri ini merata sampai ke pondok pelosok!',
    createdAt: '2 jam lalu',
    likes: 38,
    replies: [
      {
        id: 'reply-1-1',
        authorName: 'Ustadz Nur Kholis, S.Pd.I.',
        authorRole: 'Ustadz / Ustadzah',
        content: 'Aamiin ya Rabbal alamin. Semangat terus kang Wildan. Menuntut ilmu syariat adalah fardhu kifayah, dan membekali diri dengan kemandirian ekonomi adalah wujud ibadah muamalah.',
        createdAt: '1 jam lalu',
        likes: 19
      },
      {
        id: 'reply-1-2',
        authorName: 'H. Budi Santoso',
        authorRole: 'Wali Santri',
        content: 'Sebagai wali santri, saya sangat bangga dengan perkembangan pondok saat ini. Anak-anak dibekali akhlak sekaligus keterampilan hidup.',
        createdAt: '45 menit lalu',
        likes: 12
      }
    ]
  },
  {
    id: 'comm-2',
    articleId: 'art-1',
    authorName: 'Fatimatuz Zahra',
    authorRole: 'Alumni Pesantren',
    content: 'Keren sekali terobosan inkubator bisnis ini! Harapannya ikatan alumni santri juga dilibatkan sebagai mentor bisnis dan jejaring pemasaran produk pondok pesantren.',
    createdAt: '3 jam lalu',
    likes: 24,
    replies: []
  },
  {
    id: 'comm-3',
    articleId: 'art-2',
    authorName: 'Rifqi Al-Mubarok',
    authorRole: 'Santri',
    content: 'Bismillah, izin bertanya apakah untuk pendaftaran ke Al-Azhar Kairo tahun 2026 ini ada syarat tes toefl atau hanya i\'dad lughawi dan tes tahfizh saja ya? Terima kasih infopesantren.online atas informasinya yang sangat bermanfaat!',
    createdAt: '5 jam lalu',
    likes: 42,
    replies: [
      {
        id: 'reply-2-1',
        authorName: 'Nabila Zahra El-Farabi (Penulis)',
        authorRole: 'Alumni Pesantren',
        content: 'Halo Kang Rifqi! Untuk jalur Al-Azhar diutamakan tes I\'dad Lughawi (Pusiba) dan pemahaman kitab kuning, sedangkan TOEFL diperlukan khusus untuk pilihan universitas di Eropa/Jepang/Australia. Cek berkas lengkapnya di tautan portal resmi Kemenag ya!',
        createdAt: '4 jam lalu',
        likes: 29
      }
    ]
  },
  {
    id: 'comm-4',
    articleId: 'art-3',
    authorName: 'Gus Ilham Munir',
    authorRole: 'Ustadz / Ustadzah',
    content: 'Kajian yang sangat menyejukkan dan relevan dengan kondisi medsos hari ini. Betapa sering jari mendahului akal dan adab. Mari kita sebarkan artikel ini ke grup-grup WA santri dan alumni!',
    createdAt: '1 hari lalu',
    likes: 56,
    replies: []
  }
];

export const UPCOMING_EVENTS: AgendaEvent[] = [
  {
    id: 'evt-1',
    title: 'Bahtsul Masail Diniyyah Nasional: Fiqh Finansial Digital & Aset Kripto',
    pesantren: 'Pondok Pesantren Lirboyo',
    location: 'Kediri, Jawa Timur',
    date: '24–25 Oktober 2026',
    time: '08:00 – Selesai WIB',
    category: 'Bahtsul Masail',
    contact: '0812-3456-7890 (Panitia)'
  },
  {
    id: 'evt-2',
    title: 'Haul Akbar Masyayikh & Silaturahmi Nasional 10.000 Santri Alumni',
    pesantren: 'Pondok Pesantren Tebuireng',
    location: 'Jombang, Jawa Timur',
    date: '31 Oktober 2026',
    time: '19:30 WIB (Ba\'da Isya)',
    category: 'Haul & Dzikir',
    contact: '0821-9876-5432 (Sekretariat)'
  },
  {
    id: 'evt-3',
    title: 'Olimpiade Sains & Robotika Santri Nusantara (OSSN) 2026',
    pesantren: 'Pondok Pesantren Darunnajah',
    location: 'Jakarta Selatan',
    date: '7–9 November 2026',
    time: '08:00 WIB',
    category: 'Pelatihan Santri',
    contact: '0857-1122-3344 (Humas)'
  },
  {
    id: 'evt-4',
    title: 'Wisuda Akbar Tahfizh 30 Juz & Khotmil Kutubut Tis\'ah',
    pesantren: 'Pondok Pesantren Al-Munawwir',
    location: 'Krapyak, Yogyakarta',
    date: '15 November 2026',
    time: '07:30 WIB',
    category: 'Wisuda & Khotmil',
    contact: '0813-5566-7788 (Panitia Wisuda)'
  }
];

export const PRAYER_SCHEDULES: Record<string, { name: string; times: Record<string, string> }> = {
  jakarta: {
    name: 'DKI Jakarta',
    times: { Subuh: '04:18', Terbit: '05:32', Dzuhur: '11:44', Ashar: '14:52', Maghrib: '17:51', Isya: '19:01' }
  },
  surabaya: {
    name: 'Surabaya & Jatim',
    times: { Subuh: '03:54', Terbit: '05:08', Dzuhur: '11:20', Ashar: '14:32', Maghrib: '17:27', Isya: '18:37' }
  },
  jombang: {
    name: 'Jombang (Pondok)',
    times: { Subuh: '03:56', Terbit: '05:10', Dzuhur: '11:22', Ashar: '14:34', Maghrib: '17:29', Isya: '18:39' }
  },
  yogyakarta: {
    name: 'DI Yogyakarta',
    times: { Subuh: '04:06', Terbit: '05:20', Dzuhur: '11:32', Ashar: '14:44', Maghrib: '17:39', Isya: '18:49' }
  },
  bandung: {
    name: 'Bandung & Jabar',
    times: { Subuh: '04:19', Terbit: '05:33', Dzuhur: '11:45', Ashar: '14:53', Maghrib: '17:52', Isya: '19:02' }
  },
  aceh: {
    name: 'Banda Aceh',
    times: { Subuh: '05:07', Terbit: '06:21', Dzuhur: '12:28', Ashar: '15:43', Maghrib: '18:30', Isya: '19:39' }
  },
  makassar: {
    name: 'Makassar (Sulsel)',
    times: { Subuh: '04:26', Terbit: '05:40', Dzuhur: '11:51', Ashar: '14:58', Maghrib: '17:56', Isya: '19:05' }
  }
};
