// js/chat.js

import { perlihatkanPesanPengguna, perlihatkanPesanBot, setBerbicaraKarakter } from "./ui.js";

export function penagananPesanPengguna(teks) {
  perlihatkanPesanPengguna(teks);

  let balasan = "Aku belum pintar, tapi aku tahu kamu bicara: " + teks;

  // Animasi bicara
  setBerbicaraKarakter(true);
  setTimeout(() => {
    perlihatkanPesanBot(balasan);
    setPembicaraKarakter(false);
  }, 800);
}
