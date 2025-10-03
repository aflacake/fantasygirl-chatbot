// js/ui.js

let ekspresiSekarang =
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20250930_181055.png";
let resetEkspresiWaktu = null;

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

export function perlihatkanPesanBot(teks, adalahPenting = false) {
  const boksPesan = document.getElementById("pesan");
  const psn = document.createElement("div");
  psn.className = "pesan bot";
  psn.innerText = teks;
  boksPesan.appendChild(psn);

  boksPesan.classList.add("active");
  boksPesan.scrollTop = boksPesan.scrollHeight;

  if (adalahPenting) {
    const garis = document.getElementById("garis-kecepatan");
    const karak = document.getElementById("gmbr-karak");

    garis.classList.add("active");
    karak.classList.add("shake");

    setTimeout(() => {
      garis.classList.remove("active");
      karak.classList.remove("shake");
    }, 4000);
  }
}

export function setBerbicaraKarakter(berbicara) {
  const gmbr = document.getElementById("gmbr-karak");
  if (!gmbr) return;

  if (berbicara) {
    gmbr.classList.add("berbicara");
  } else {
    gmbr.classList.remove("berbicara");
  }

  gmbr.src = ekspresiSekarang;
}

export function setEkspresiKarakter(url, autoReset = true, resetDelay = 5000) {
  const avatar = document.getElementById("gmbr-karak");
  if (!avatar) {
    console.warn("Avatar tidak ditemukan!");
    return;
  }

  ekspresiSekarang = url;
  avatar.src = ekspresiSekarang;
  console.log("Ekspresi berubah ke:", url);

  if (autoReset && url !== ekspresiDefault) {
    if (resetEkspresiTimer) clearTimeout(resetEkspresiTimer);

    resetEkspresiTimer = setTimeout(() => {
      ekspresiSekarang = ekspresiDefault;
      avatar.src = ekspresiSekarang;
      console.log("Ekspresi otomatis kembali ke default:", ekspresiDefault);
    }, resetDelay);
  }
}

const ekspresiDefault =
  "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20250930_181055.png";
