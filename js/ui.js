// js/ui.js

export function inisiasiUI() {
  // bisa nanti isi animasi masuk, dsb.
}

export function perlihatkanPesanPengguna(teks) {
  const boksPesan = document.getElementById("pesan");
  const psn = document.createElement("div");
  psn.className = "pesan pengguna";
  psn.innerText = teks;
  boksPesan.appendChild(psn);
  boksPesan.scrollTop = boksPesan.scrollHeight;
}

export function perlihatkanPesanBot(teks) {
  const boksPesan = document.getElementById("pesan");
  const psn = document.createElement("div");
  psn.className = "pesan bot";
  psn.innerText = teks;
  boksPesan.appendChild(psn);
  boksPesan.scrollTop = boksPesan.scrollHeight;
}

export function setBerbicaraKarakter(berbicara) {
  const gmbr = document.getElementById("gmbr-karak");
  if (berbicara) {
    gmbr.src = "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20250930_181044.png";
    gmbr.classList.add("berbicara");
  } else {
    gmbr.src = "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20250930_181055.png";
    gmbr.classList.add("berbicara");
  }
}
