

function toggleDetail(btn) {
  const content = btn.closest(".content");
  const more = content.querySelector(".more");

  more.classList.toggle("show");

  // เปลี่ยนข้อความปุ่ม
  btn.textContent = more.classList.contains("show")
    ? "ซ่อนรายละเอียด"
    : "อ่านเพิ่มเติม";
}

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function goToFirstMovie() {
  const movie = document.querySelector("#movie1");

  const offset =30; // ระยะเผื่อหัวเว็บ (ปรับได้)
  const y = movie.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });

  movie.classList.add("show");
}

const movies = document.querySelectorAll(".movie");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3
  }
);

movies.forEach(movie => {
  observer.observe(movie);
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}






