// js/chat.js

import { perlihatkanPesanPengguna, perlihatkanPesanBot, setBerbicaraKarakter } from "./ui.js";

export function penagananPesanPengguna(teks) {
  perlihatkanPesanPengguna(teks);

  let balasan;
  let penting = false;

  if (text.toLowerCase().includes("kaget")) {
    balasan = "EHHH?! 😱";
    penting = true;
  } else {
    balasan = "Aku dengar kamu bilang: " + text;
  }

  // Animasi bicara
  setBerbicaraKarakter(true);
  setTimeout(() => {
    perlihatkanPesanBot(balasan, penting);
    setBerbicaraKarakter(false);
  }, 800);
}
