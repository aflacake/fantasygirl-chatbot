// js/main.js

import { inisiasiUI, mulaiSakura, perlihatkanPesanBot } from "./ui.js";
import { penagananPesanPengguna } from "./chat.js";

document.addEventListener("DOMContentLoaded", () => {
  inisiasiUI();
  mulaiSakura();

  const masukkan = document.getElementById("masukkan-pengguna");
  const kirimTmbl = document.getElementById("tmbl-kirim");

  kirimTmbl.addEventListener("click", () => {
    const teks = masukkan.value.trim();
    if (teks) {
      penagananPesanPengguna(teks);
      masukkan.value = "";
    }
  });

  masukkan.addEventListener("keypress", (e) => {
    if (e.key === "Enter") kirimTmbl.click();
  });

  // sapaan awal
  perlihatkanPesanBot("Halo! Aku siap ngobrol denganmu 😊");
});
