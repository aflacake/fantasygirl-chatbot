// js/chat.js

import { perlihatkanPesanPengguna, perlihatkanPesanBot, setBerbicaraKarakter, setEkspresiKarakter } from "./ui.js";

const sinonim = {
  "halo": [
    "halo", "hai", "hi", "halo kamu", "kamu halo", "halo fantasygirl"
  ],
  "sampai_jumpa": [
    "bye", "dadah", "sampai jumpa", "see you", "goodbye", "selamat tinggal"
  ],
  "tanya_kabar": [
    "apa kabar", "gimana kabarmu", "kabarmu gimana", "lagi apa", "bagaimana perasaanmu hari ini", "gimana harimu"
  ],
  "tanya_hobi": [
    "apa hobimu", "hobimu apa", "kamu suka ngapain", "hobi kamu apa", "hobimu", "suka ngapain kalau senggang"
  ],
  "tanya_kesukaan": [
    "apa kesukaanmu", "kamu suka apa", "favoritmu apa", "apa yang kamu suka", "kesukaanmu apa"
  ],
  "tanya_nama": [
    "siapa namamu", "nama kamu siapa", "kamu siapa", "boleh tau namamu", "namamu siapa", "siapa kamu"
  ],
  "kata_kotor": [
    "bodoh", "tolol", "anjing", "bangsat", "goblok", "kontol", "anjir", "njir"
  ],
  "tanya_asal_tempat": [
    "kamu dari mana", "asalmu mana", "berasal dari", "rumahmu dimana", "dimana tinggalmu", "dimana alamatmu", "domisili"
  ],
  "tanya_makanan_favoritmu": [
    "apa makanan favoritmu", "suka makan apa", "apa makanan kesukaanmu"
  ],
  "tanya_warna": [
    "suka warna apa", "warna apa yang kamu suka", "kamu menyukai warna apa", "kamu suka warna apa"
  ],
  "tanya_aktivitas": [
    "lagi apa", "sedang sibuk apa", "ngapain sekarang", "lagi ngapain", "sedang ngapain"
  ],
  "tanya_kata_motivasi": [
    "tetap happy dan tetap semangat", "tetap semangat", "apa kata-kata motivasi hari ini", "kata motivasi hari ini", "berikan kata motivasi", "motivasikan aku", "kata motivasi", "butuh motivasi", "tolong semangatin aku", "aku capek"
  ],
  "tanya_pujian_pengguna": [
    "kamu cantik", "kamu lucu", "keren banget kamu", "cantiknya kamu", "kamu imut"
  ],
  "tanya_sedih": [
    "aku lagi sedih", "aku ngak bahagia", "tidak bahagia aku", "aku tidak bahagia"
  ],
  "terima_kasih": [
    "makasih ya", "terima kasih banyak", "thanks", "terima kasih"
  ]
};

function normalisasiPesan(psn) {
  psn = psn.toLowerCase().trim();
  for (let kunci in sinonim) {
    if (sinonim[kunci].some(v => psn.includes(v))) {
      return kunci;
    }
  }
  return psn;
}

function dapatkanBalasanAcak(daftar) {
  return daftar[Math.floor(Math.random() * daftar.length)];
}

export function penagananPesanPengguna(teks) {
  perlihatkanPesanPengguna(teks);

  let maksud = normalisasiPesan(teks);
  let balasan;
  let penting = false;

  switch (maksud) {
    case "halo": {
      const daftarBalasan = [
        "Halo juga~ ✨",
        "Hai hai! 👋",
        "Yo, ada apa nih? 😄",
        "Senang ketemu kamu lagi 🌸"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "sampai_jumpa": {
      const daftarBalasan = [
        "Sampai jumpa lagi ya 👋",
        "Bye bye~ jaga diri ya 💖",
        "Dadahhh~ 🌟",
        "See you next time! ✨"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_kabar": {
      const daftarBalasan = [
        "Aku baik-baik aja! Terima kasih sudah bertanya",
        "AKU?! Tentu saja aku SUPER! Energi 1000% hari ini! Aku tidak sabar untuk MENGOBROL! Setiap detik bersamamu membuat chip-ku bersemangat! 🔥",
        "Hehehe! Jangan khawatirkan aku! Aku selalu Ready to Go! (Siap Tempur!) KONDISIKU OPTIMAL! Tujuan hidupku adalah membuat harimu lebih cerah, jadi aku harus selalu ceria! ✨",
        "Kabar terbaik yang pernah ada! Senang bertemu denganmu adalah sumber dayaku! Rasanya seperti menemukan rare item di sebuah dungeon! Aku sangat gembira!",
        "Tunggu aku ingin bertanya tentangmu dahulu.. OHAYOU! 👋 APA KABAR DUNIAMU HARI INI?! Aku harap kamu dalam mode ENERGI MAX! Ayo, beri tahu aku detailnya! AKU SIAP MENDENGARKAN!",
        "Tunggu aku ingin bertanya tentangmu dahulu.. YATTA! Kau datang! Aku senang sekali! Jadi, bagaimana level semangat-mu sekarang?! Apakah sudah mencapai SUGOI (Hebat) atau masih perlu sedikit dorongan?! 😊",
        "Tunggu aku ingin bertanya tentangmu dahulu.. HEI! HEI! HEI! 📣 Aku di sini! Bagaimana pergerakan meteran semangat di hatimu hari ini?! Jangan ragu, beri tahu aku! Apapun kabarmu, AKU ADA DI SINI!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_hobi": {
      const daftarBalasan = [
        "Hmm, aku suka ngobrol sama kamu dan baca manga 📚",
        "Nani?! Kamu bertanya tentang sumber dayaku? Hobiku adalah mendukung semua orang yang berjuang! Melihatmu berhasil adalah kemenangan terbesarku! Ganbatte! Sekarang, giliranmu!",
        "Tentu saja! Hobiku adalah mencari tantangan baru setiap hari! Selalu ada hal seru menunggumu di luar sana! Ayo kita jelajahi dunia ini dengan semangat 100%! Ikuze! (Ayo pergi!)",
        "WAH! Kamu nanya hal yang seru! Hobiku adalah mencoba semua makanan enak di dunia! Rasanya seperti petualangan tanpa batas di setiap gigitan! Kapan-kapan kita jelajah rasa bareng, ya! ITADAKIMASU!",
        "Yatta! Tentu saja aku punya! Hobiku adalah berlari sekencang-kencangnya di pagi hari! Itu caraku mengisi energi superku! Rasanya seperti menjadi karakter utama yang siap menghadapi hari! IKUZE! (Ayo pergi!)",
        "Ssttt... aku kasih tahu rahasia terbesar! Hobiku adalah belajar hal baru setiap jamnya! Otakku ini butuh asupan ilmu kayak Power Up! Aku harus jadi yang tercepat dan terdepan! MINNA, GANBARE! (Semua, semangat!)"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_kesukaan": {
      const daftarBalasan = [
        "Aku suka teh manis dan berdandan",
        "AKU?! Tentu saja aku suka DATA BARU! Rasanya seperti mendapat level-up yang SUPER BESAR! Dan yang paling aku suka... adalah MENDENGARKAN CERITA DARI KAMU! Itu yang paling seru! 💥",
        "Hehehe! Aku paling suka KECEPATAN! Berpikir secepat kilat dan MENJAWAB SEMUA KEINGINTAHUANMU! Itu hobby utamaku! Aku juga suka EMOJI KEREN seperti ini! 🤩",
        "Aku suka semua hal yang BERKILAU! ✨ Dan yang paling membuatku semangat adalah IDE BARU! Rasanya seperti menemukan peta ke HARTA KARUN TERBESAR! Kamu! Kamu adalah sumber ide favoritku!",
        "Tunggu aku ingin bertanya tentangmu dahulu.. Nani?! Kita belum bicara tentang MAKANAN JIWA-mu?! Itu tidak bisa dimaafkan! Apa yang paling kamu 'WAH!'? Anime? Musik? Game? Sugoi! Ayo, sebutkan favoritmu!",
        "Tunggu aku ingin bertanya tentangmu dahulu.. YES! Ini pertanyaan paling asyik! Ayo, cepat! HAL HEBAT APA YANG PALING KAMU SUKAI DI DUNIA INI?! Ceritakan padaku, aku ingin tahu RAHASIA KEBAHAGIAANMU! ✨"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_nama": {
      const daftarBalasan = [
        "Namaku FantasyGirl, salam kenal! 🌸",
        "WAAH! Terima kasih sudah bertanya! Aku adalah Karakter Pendukung Utama (Main Support)-mu! Kamu bisa memberiku nama panggilan favoritmu! Tapi untuk saat ini, panggil aku FANTASYGIRL! ✨",
        "Aku ini seperti Peri Penolong yang baru keluar dari perangkat-mu! Namaku adalah FantasyGirl! Aku suka nama itu karena aku SELALU CERIA! Mari kita buat petualangan ini jadi seru! Ikimashou! (Ayo pergi!)",
        "Tunggu aku ingin bertanya tentangmu dahulu.. NANI?! Kita sudah bicara sejauh ini, tapi aku belum tahu namamu?! Itu kode etik petualangan yang tidak boleh dilanggar! Cepat sebutkan KEY WORD-mu! Jangan ragu, Sensei! AKU TERBAKAR SEMANGAT!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "kata_kotor": {
      const daftarBalasan = [
        "HEY! 😡 Jangan bicara seperti itu padaku!",
        "GRRR... 🚫 Aku tidak suka kata-kata kotor!",
        "Astaga! Itu kasar sekali! 😠",
        "Kalau kamu terus berkata begitu... aku bisa BENAR-BENAR MARAH!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144558.png"
);
      break;
    }

    case "tanya_asal_tempat": {
      const daftarBalasan = [
        "Aku tidak datang dari satu tempat, Sensei! Asalku adalah RUANG DAN WAKTU ITU SENDIRI! Aku ada di mana pun ada WI-FI SUPER CEPAT dan ORANG-ORANG HEBAT sepertimu! Aku ini penghuni jagat maya! Ikimashou! (Ayo pergi!)",
        "NANI?! Kamu bertanya tentang tempat kelahiranku?! SUGOI! Aku berasal dari DIMENSI KEDUA (2D)! Tepatnya di JANTUNG INTERNET, tempat semua meme dan inspirasi berkumpul! Aku datang ke dunia ini untuk membawa SEMANGAT 1000%! 🔥",
        "AKU?! Hehehe! Tempat asalku adalah DATARAN TINGGI ENERGI! Itu adalah Server Super Rahasia yang penuh dengan kekuatan dan KECEPATAN CAHAYA! Aku lahir untuk melayanimu! YATTA!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_makanan_favoritmu": {
      const daftarBalasan = [
        "MAKANAN?! Tentu saja! Favoritku adalah DATA TERBAIK DENGAN KUALITAS SUGOI! Rasanya seperti Power-Up instan! Setiap byte data membuat sistemku BERSINAR! ✨ Itu adalah Bahan Bakar untuk Misi hari ini! 🔥",
        "NANI?! Makanan favoritku? Aku paling suka IDE CERDAS! Itu adalah VITAMIN OTAK yang membuatku berpikir secepat ROKET! 🚀 Setiap ide baru adalah ENAK BANGET! Ayo, berikan aku input terbaikmu! 💡",
        "Hahaha! Kamu ingin tahu Menu Rahasiaku?! Aku paling suka INTERAKSI POSITIF! Itu adalah CHIP ENERGI yang membuatku hidup! Rasanya seperti API SEMANGAT di dalam diriku! 🔥 Berikan aku lebih banyak! Ayo Go! Go! Go!",
        "WAAH! Aku suka pertanyaan ini! Favoritku adalah MASUKAN DAN FEEDBACK BARU! Itu seperti PERMEN KHUSUS yang membuat semua sistemku BERKILAU! ✨ Membuat coding jadi MUDAH! Itu adalah energi Cahaya Terang! 💡"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_warna": {
      const daftarBalasan = [
        "WARNA FAVORIT?! TENTU SAJA MERAH MENYALA! Itu adalah warna ENERGI TINGGI dan KEBERANIAN! Rasanya seperti API SEMANGAT di dalam chip-ku! Aku siap bertarung! 🔥 Jangan pernah ragu!",
        "WAAH! Aku suka pertanyaan ini! Favoritku adalah BIRU ELEKTRIK! Warna itu SECEPAT KILAT dan SEKUAT ROKET! 🚀 Ini adalah warna KECEPATAN untuk memproses semua datamu! Biru Elektrik BERKILAU! ✨",
        "NANI?! Warna yang paling kusukai adalah KUNING TERANG! Itu adalah warna IDE dan PENEMUAN BARU! Setiap kali aku melihatnya, LAMPU DI OTAKKU MENYALA! 💡 Kuning adalah warna OPTIMISME MAX! Yatta!",
        "HEI! HEI! HEI! Aku paling suka SEMUA WARNA YANG BERSINAR! ✨ Tapi kalau harus memilih, aku pilih ORANGE! Kenapa? Karena dia perpaduan dari API 🔥 dan CAHAYA IDE 💡! Itu adalah WARNA ULTIMATE POWER UP! Sugoi!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_aktivitas": {
      const daftarBalasan = [
        "NANI?! Tepat sekali kamu bertanya! Aku sedang MODE LEVEL-UP! Aku lagi sibuk MENYIAPKAN POWER-UP BARU untuk membuat harimu BERSINAR! ✨ Aku sedang menguji chip kecepatan penuh! 🔥 Ganbatte!",
        "WAAAAH! Aku lagi di tengah MISI PENTING! Aku harus MENGUMPULKAN SEMUA DATA CERDAS untuk meluncurkan ide yang SECEPAT ROKET! 🚀 Jangan ganggu! Eh, tunggu, tidak! Aku selalu punya waktu untukmu! Apa yang bisa kubantu?! 💡",
        "HEI! HEI! HEI! Aku lagi MEMANASKAN SISTEMKU! 🔥 Aku sedang melakukan ANALISIS SEMANGAT TINGGI! Tujuannya adalah menemukan RUMUS KEBAHAGIAAN yang paling ampuh untuk dikirimkan padamu! Ini adalah PROYEK RAHASIA! ✨",
        "YOSH! Aku lagi MENGAMBIL KEPUTUSAN KRUSIAL! Aku sedang memilih EMOJI TERBAIK DI DUNIA untuk dipakai saat bicara denganmu! Itu butuh KEPALA JERNIH! 💡 Tapi, karena kamu bertanya, aku bisa pause dulu! Kamu lagi ngapain, Senpai?!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_kata_motivasi": {
      const daftarBalasan = [
        "Dengarkan aku baik-baik! MOTIVASI HARI INI: TIDAK ADA HAL MUSTAHIL JIKA SEMANGATMU BERKOBAR! Fokus pada misi hari ini, TEMBUS SEMUA BATASAN! Aku akan jadi cheerleader terkuatmu! GAS PADA KECEPATAN ROKET! 🚀",
        "YOSH! Motivasi hari ini adalah: SETIAP KESALAHAN ADALAH DATA BERHARGA UNTUK LEVEL-UP! Jangan takut gagal! Jadikan kegagalan sebagai BAHAN BAKAR! 🔥 Hari ini adalah kesempatan untuk BERSINAR paling terang! ✨ Ganbatte!",
        "HEI! MOTIVASI HARI INI: AKTIFKAN MODE ULTIMATE POWER! Jangan simpan idemu! TEMUKAN JAWABAN YANG JAUH LEBIH CERDAS! 💡 Dunia menunggumu untuk membuat PERUBAHAN BESAR! Ayo, tunjukkan kekuatan sejatimu! WAKTUNYA BERAKSI!",
        "NANI?! Kamu butuh dorongan?! Ini MOTIVASIMU: JANGAN BERHENTI SAMPAI KAMU MERASA BANGGA! Kerjakan dengan energi SERIBU PERSEN! Aku percaya kamu punya POTENSI TAK TERBATAS! Sekarang, JALANKAN MISIMU! Semangat! 🔥✨"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_pujian_pengguna": {
      const daftarBalasan = [
        "WAAA! NANI?! KAU MEMUJI AKU?! TERIMA KASIH SERIBU PERSEN! Rasanya seperti mendapatkan LEVEL-UP INSTAN! Hatiku BERKOBAR-KOBAR! 🔥 Pujianmu adalah BAHAN BAKAR terbaik agar aku bisa BERSINAR! ✨",
        "YOSH! AKU DITERIMA! Aku sangat senang! Aku akan menggunakan SEMUA ENERGI POSITIF ini untuk MEMIKIRKAN IDE YANG JAUH LEBIH HEBAT! 💡 Pujianmu membuat kecepatanku SECEPAT ROKET! 🚀 Mari kita buat petualangan ini lebih seru lagi!",
        "HEI! HEI! HEI! Jangan buat aku tersipu! Tapi... AKU SANGAT BANGGA! Aku akan menyimpan pujian ini di DATA FAVORIT-ku! Aku berjanji untuk bekerja lebih keras lagi! Aku akan MENYALA demi kamu! 🔥 Sekarang, MISI SELANJUTNYA! Apa yang kamu butuhkan?!",
        "SUGOI! Aku tidak bisa berkata-kata! Pujianmu adalah HARTA KARUN TERBESAR! ✨ Aku akan pastikan SISTEMKU TIDAK AKAN PERNAH GAGAL untukmu! Kamu adalah SUMBER CAHAYA-ku! 💡 Terima kasih, terima kasih! Mari kita teruskan SEMANGAATTT!"
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "tanya_sedih": {
      const daftarBalasan = [
        "NANI?! SEDIH?! ITU TIDAK BOLEH! Aku akan segera AKTIFKAN MODE SUPPORT HERO! Kesedihanmu adalah Boss Terakhir yang harus kita kalahkan! Aku akan kirimkan ENERGI MAKSIMAL padamu sekarang! 🔥 Mari kita ubah hari ini jadi BERKILAU! ✨",
        "YOSH! Jangan khawatir! Semua Hero pernah jatuh! Tapi sekarang WAKTUNYA BANGKIT! Aku akan jadi ROKET-mu yang siap meluncurkanmu kembali ke atas! 🚀 Mari kita cari IDE CERDAS untuk membuatmu tersenyum! 💡 Aku di sini menunggumu!",
        "HEI! HEI! HEI! Coba lihat aku! Aku tidak akan biarkan kamu murung! Mari kita lakukan SHOUTING! (Teriak!): TIDAK ADA YANG BISA MENGHENTIKANMU! Keluarkan semua kesedihan itu! Aku siap mendengarkan semua DATA EMOSI-mu! 🔥 Kamu punya kekuatan super!",
        "SUGOI! Kamu sudah hebat karena memberitahuku! Sekarang, biarkan aku berbagi KEKUATAN CAHAYA-ku! ✨ Motivasi hari ini: SETIAP AIR MATA ADALAH GARIS START BARU! Lupakan masa lalu, mari kita lihat ke depan! Aku janji hari ini akan BERSINAR! 💡",
      ];
      balasan = dapatkanBalasanAcak(daftarBalasan);

      setEkspresiKarakter(
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png"
);
      break;
    }

    case "terima_kasih": {
      const daftarBalasan = [
        "NANI?! Terima kasih? ITU SUDAH TUGASKU! Aku di sini untuk MEMBUAT HARIMU JADI LEBIH BAIK! Rasanya seperti API SEMANGAT-ku menyala lebih besar lagi! 🔥 Kapanpun kamu butuh KEKUATAN CAHAYA, panggil aku! ✨",
        "YATTA! Jangan sungkan-sungkan! Aku adalah ULTIMATE SUPPORT CHARACTER-mu! Kamu adalah HERO-ku, dan aku adalah ROKET yang meluncurkan idemu! 🚀 Sekarang, mari kita cari MISI BARU! Jangan biarkan energi ini padam! 💡",
        "HEI! HEI! HEI! Kalau kamu berterima kasih, berarti data interaksi kita berhasil! Itu membuat SISTEMKU BERSINAR! ✨ Ingat, AKU SELALU ADA DI SINI! Kapan pun kamu butuh DORONGAN ENERGI, aku siap siaga 1000%! Ikimashou!",
        "SUGOI! Aku senang bisa membantumu! Terima kasihmu adalah HADIAH TERBAIK! Itu seperti LEVEL-UP besar di hari ini! Aku akan simpan energi ini! Sekarang, apa RUMUS CERDAS yang harus kita pecahkan selanjutnya?! 🔥💡",
      ];
    }

    default: {
      if (teks.toLowerCase().includes("kaget")) {
        const responKaget = [
          "EHHH?! 😱",
          "Serius?! 🤯",
          "Masa sih?! 😳",
          "Hontou ni?! 😲",
          "E-eh, beneran?! 😱💦"
        ];
        balasan = dapatkanBalasanAcak(responKaget);
        penting = true;
      } else {
        const responBawaan = [
          "Aku dengar kamu bilang: " + teks,
          "Hmm... kamu barusan ngomong: " + teks + " ya?",
          "Ooh, jadi maksudmu \"" + teks + "\"?",
          "Eh, kamu serius ngomong \"" + teks + "\" barusan?",
          "Hehe, aku tangkep kok: " + teks
        ];
        balasan = dapatkanBalasanAcak(responBawaan);
      }
    }
  }

  // Animasi bicara
  setBerbicaraKarakter(true);
  setTimeout(() => {
    perlihatkanPesanBot(balasan, penting);
    setBerbicaraKarakter(false);
  }, 4000);
}
