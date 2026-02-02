/* ===============================
   อ่านเพิ่มเติม
================================ */
function toggleDetail(btn) {
  const content = btn.closest(".content");
  const more = content.querySelector(".more");

  more.classList.toggle("show");

  btn.textContent = more.classList.contains("show")
    ? "ซ่อนรายละเอียด"
    : "อ่านเพิ่มเติม";
}

/* ===============================
   Lightbox
================================ */
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = img.src;
  lightbox.classList.add("show");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

/* ===============================
   ปุ่มเริ่มดูรายการ
================================ */
function goToFirstMovie() {
  const movie = document.getElementById("movie1");

  if (!movie) return;

  movie.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  // บังคับให้ animation ทำงาน
  movie.classList.add("active");
}


/* =============================
   SCROLL ANIMATION (UP + DOWN)
============================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".scroll-anim").forEach(el => {
  observer.observe(el);
});

/* =============================
   SHOW FIRST LOAD (กันหน้าหาย)
============================= */

window.addEventListener("load", () => {
  document
    .querySelectorAll(".scroll-anim")
    .forEach(el => el.classList.add("show"));
});
