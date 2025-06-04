onload = () => {
    const c = setTimeout(() => {
      document.querySelector('.container-flower')
      .classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document
.addEventListener("DOMContentLoaded",() => {
  let el = document.getElementsByClassName("load")
  for (let e of el) {
    e.classList.add('aktif')
  }
  document.querySelector(".pesan")
  .classList.add('aktif')
})