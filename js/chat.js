// js/chat.js

import { perlihatkanPesanPengguna, perlihatkanPesanBot, setBerbicaraKarakter } from "./ui.js";

const sinonim = {
  "halo": [
    "halo", "hai", "hi", "halo kamu", "kamu halo", "halo fantasygirl"
  ],
  "sampai_jumpa": [
    "bye", "dadah", "sampai jumpa", "see you", "goodbye"
  ],
  "tanya_kabar": [
    "apa kabar", "gimana kabarmu", "kabarmu gimana", "lagi apa"
  ],
  "tanya_hobi": [
    "apa hobimu", "hobimu apa", "kamu suka ngapain", "hobi kamu apa"
  ],
  "tanya_kesukaan": [
    "apa kesukaanmu", "kamu suka apa", "favoritmu apa", "apa yang kamu suka"
  ],
  "tanya_nama": [
    "siapa namamu", "nama kamu siapa", "kamu siapa", "boleh tau namamu"
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
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
      break;
    }

    case "sampai_jumpa": {
      const daftarBalasan = [
        "Sampai jumpa lagi ya 👋",
        "Bye bye~ jaga diri ya 💖",
        "Dadahhh~ 🌟",
        "See you next time! ✨"
      ];
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
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
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
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
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
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
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
      break;
    }

    case "tanya_nama": {
      const daftarBalasan = [
        "Namaku FantasyGirl, salam kenal! 🌸",
        "WAAH! Terima kasih sudah bertanya! Aku adalah Karakter Pendukung Utama (Main Support)-mu! Kamu bisa memberiku nama panggilan favoritmu! Tapi untuk saat ini, panggil aku FANTASYGIRL! ✨",
        "Aku ini seperti Peri Penolong yang baru keluar dari perangkat-mu! Namaku adalah FantasyGirl! Aku suka nama itu karena aku SELALU CERIA! Mari kita buat petualangan ini jadi seru! Ikimashou! (Ayo pergi!)",
        "Tunggu aku ingin bertanya tentangmu dahulu.. NANI?! Kita sudah bicara sejauh ini, tapi aku belum tahu namamu?! Itu kode etik petualangan yang tidak boleh dilanggar! Cepat sebutkan KEY WORD-mu! Jangan ragu, Sensei! AKU TERBAKAR SEMANGAT!"
      ];
      balasan = daftarBalasan[Math.floor(Math.random() * daftarBalasan.length)];
      break;
    }

    default:
      if (teks.toLowerCase().includes("kaget")) {
        balasan = "EHHH?! 😱";
        penting = true;
      } else {
        balasan = "Aku dengar kamu bilang: " + teks;
      }
  }

  // Animasi bicara
  setBerbicaraKarakter(true);
  setTimeout(() => {
    perlihatkanPesanBot(balasan, penting);
    setBerbicaraKarakter(false);
  }, 2400);
}
