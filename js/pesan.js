onload = function () {
    const c = setTimeout(() => {
      document.querySelector('.container-flower')
      .classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
      document.querySelectorAll(".load").forEach((e) => e.classList.add('aktif'));
      document.querySelector(".pesan").classList.add('aktif');
      
  };
