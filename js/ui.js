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
  if (berbicara) {
    gmbr.src = "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20251003_144537.png";
    gmbr.classList.add("berbicara");
  } else {
    gmbr.src = "https://raw.githubusercontent.com/aflacake/fantasygirl-chatbot/main/assets/20250930_181055.png";
    gmbr.classList.add("berbicara");
  }
}

export function setEkspresiKarakter(url) {
  const avatar = document.getElementById("gmbr-karak");
  if (avatar) {
    avatar.src = url;
    console.log("Ekspresi berubah ke:", url);
  } else {
    console.warn("Avatar tidak ditemukan!");
  }
}
