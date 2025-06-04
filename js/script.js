

document.querySelector(".info")
.addEventListener("click",()=>{
  peringatan(`untuk memastikkan bahwa anda adalah orang yang ditargetkan, anda harus memasukkan <strong> kata sandi yang dibuat menggunakan tanggal lahir</strong> anda. <br/> contoh lahir 01 februari 2005: <strong>010205</strong>`)
})


const kode = ["250807", "082507"]; // array kode
document.querySelector('input')
.addEventListener("input", function() {
  //menjalankan hanya krtika input 6 digit
  if (this.value.length !== 6) return; 
  //tutup keyboad
  this.blur()
  //ketika kode salah
  let input = this.value.trim();
  this.value = null
  let validasi = kode.includes(input)
  if (!validasi){
    peringatan("maaf sandi yang anda masukkan salah, kami akan menutup browser ini!",() => {
      window.location.replace('')
      window.close()
    })
  return
  }
  //ketika kode benar jalankan ini
  peringatan("kode sandi anda benar", () => {
    window.location.replace('./pesan.html')
  })
});