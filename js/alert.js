function peringatan(pesan, callback = null, klas = 'hidden') {
  // Buat elemen overlay
  const overlay = document.createElement("div");
  overlay.className = "container-prompt";

  // Buat kotak prompt
  const promptBox = document.createElement("div");
  promptBox.className = "prompt-box";

  // Isi kotak prompt (gunakan innerHTML karena pesan bisa berisi <strong>, tapi hati-hati XSS)
  promptBox.innerHTML = `
    <h2>Peringatan</h2>
    <p>${pesan}</p>
    <div class='btn'>
      <button class="ok">OK</button>
      <button class="cancel ${klas}">Cancel</button>
    </div>
  `;

  overlay.appendChild(promptBox);
  document.body.appendChild(overlay);

  // Tampilkan prompt dengan animasi
  overlay.style.display = "flex";
  setTimeout(() => {
    promptBox.classList.add("show");
  }, 10);

  // Ambil tombol
  const btnOk = promptBox.querySelector(".ok");
  const btnCancel = promptBox.querySelector(".cancel");
  btnOk.focus();
  // Tutup prompt dengan animasi
  function tutupPrompt() {
    promptBox.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  }

  // Event: Klik OK
  btnOk.addEventListener("click", () => {
    tutupPrompt();
    if (typeof callback === 'function') {
      callback();
    }
  });

  // Event: Klik Cancel
  btnCancel.addEventListener("click", tutupPrompt);
}
