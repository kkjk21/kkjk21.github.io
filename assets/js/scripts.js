// main visual
$(function() {
  const visualBefore = ".frontVisualBefore";
  if (!visualBefore.length) return false;

  const visualbeforeTextTop = ".frontVisualBeforeTextTop";
  const visualbeforeTextBottom = ".frontVisualBeforeTextBottom";
  const visualAfter = ".frontVisualAfter";

  function mainVisualGallery() {
    const galleryWrap = $('.frontVisualAfterImages');
    const galleryItem = '.frontVisualAfterImage';
    const intarval = 7000;
    const fadeSpeed = 1000;

    setInterval(function() {
      $(galleryItem).eq(0).addClass('isFadeOut').fadeOut(fadeSpeed, function() {
        galleryWrap.append($(galleryItem).eq(0));
        $(galleryItem).last().show().removeClass('isFadeOut');
      });
      
    }, intarval + fadeSpeed);
  }
  
  const visual = gsap.timeline();
  visual.to(visualBefore, {
    /* 1秒後に、hogeを、0.8秒間かけてopacity:1・y軸座標を0にする */
    opacity: 1,
    duration: 0.25,
    delay: 0.5
  }, 0)
  .to(visualbeforeTextTop, {
    transform: 'translateX(0) translateY(-53.8%)',
    duration: .3,
    ease: Power3.easeOut
  }, '+=0.5')
  .to(visualbeforeTextBottom, {
    transform: 'translateX(0) translateY(46%)',
    duration: .3,
    ease: Power3.easeOut
  }, '<')
  .to(visualBefore, {
    opacity: 0,
    duration: .5,
    ease: Expo.easeOut
  }, '+=0.6')
  .to(visualAfter, {
    opacity: 1,
    duration: 2,
    ease: 'easeOut',
    onComplete : () => {
      mainVisualGallery();
    }
  }, '+=0.5');
});

// gallery
$(function() {
  const gallery = $('.jsFrontGallery');
  if(!gallery.length) return false;
  
  var columnSlider = new Swiper(gallery[0], {
    slidesPerView: "auto",
    speed: 500
  });
});

// images lazy view
$(function() {
  const lazyImage = document.querySelectorAll('.jsLazyView');
  if(!lazyImage.length) return false;
  
  const observerOptions = {
    root: null,
    rootMargin: "-35% 0px",
    threshold: 0
  };
  const observer = new IntersectionObserver(viewAnime, observerOptions);

  lazyImage.forEach(e => {
    observer.observe(e)
  });

  function viewAnime(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('isActive');
      }
    });
  }
});

// company information table clone
$(function() {
  const table = $('.jsCompanyTable');
  const cloneTarget = $('.jsCompanyTableContainer');
  if(!table.length) return false;
  
  const cloneTable = table.clone();
  table.addClass('isDaito');
  cloneTable.addClass('isMetal');
  cloneTarget.append(cloneTable);
});