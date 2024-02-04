const testiomnialData = [
  "https://cdn.pixabay.com/photo/2016/08/01/15/47/music-1561355_640.jpg",
  "https://cdn.pixabay.com/photo/2020/05/17/17/11/bell-5182677_640.jpg",
  "https://cdn.pixabay.com/photo/2023/05/20/09/31/ai-generated-8006192_640.jpg",
  
  ]
  const slideHolder = document.querySelector("#slideHolder")
    for (let i of testiomnialData) slideHolder.innerHTML += "<div class='swiper-slide'><img src="+i+"></div>"
    const swiper = new Swiper('.MainSlider', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: { delay: 5000 }
    });
    const Cateogryswiper = new Swiper(".categories", {
        slidesPerView:"auto",
        spaceBetween: 10,
        freeMode: true,
      });
