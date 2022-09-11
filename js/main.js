const modifiers = {
  siteHeaderCardModalOpen: `site-header__card-modal--open`,
  imgThumbnailActive: `img-showcase__thumbnail--active`,
  lightBoxOpen: `lightbox--open`
};

const elSiteHeaderCardLink = document.querySelector(`.js-site-header-card-link`);
const elSiteHeaderCardModal = document.querySelector(`.site-header__card-modal`);

if (elSiteHeaderCardLink) {
  elSiteHeaderCardLink.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    elSiteHeaderCardModal.classList.toggle(modifiers.siteHeaderCardModalOpen);
  });
}


// IMG-SHOWACASE

const elProductPageGallery = document.querySelector(`.product-page__gallery`);
const elImgShowcaseActiveImg = elProductPageGallery.querySelector(`.img-showcase__active-img`);
const elsImgShowCaseTmubnailButton = elProductPageGallery.querySelectorAll(`.js-img-showcase-thumbnail-button`);
const elsImgThumbnail = elProductPageGallery.querySelectorAll(`.img-showcase__thumbnail`);

elsImgShowCaseTmubnailButton.forEach(function (elButton) {
  elButton.addEventListener(`click`, function () {

  elsImgThumbnail.forEach(function (elImgThumbnail) {
    elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
  });

  elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

  elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
  elImgShowcaseActiveImg.srcset =`${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseBig} 2x`;
  });
});


// LIGHTBOX

const elLightBox = document.querySelector(`.lightbox`);
const elLightBoxToggler = document.querySelector(`.js-lightbox-toggler`);
const elLightBoxClose = document.querySelector(`.js-lightbox-close`);

if(elLightBoxToggler) {
  elLightBoxToggler.addEventListener(`click`, function () {
    elLightBox.classList.add(modifiers.lightBoxOpen)
  });
}

if(elLightBoxClose) {
  elLightBoxClose.addEventListener(`click`, function () {
    elLightBox.classList.remove(modifiers.lightBoxOpen)
  });
}


// THUMBNAIL-CLICK

const elImgLightboxActiveImg = elLightBox.querySelector(`.img-showcase__active-img`);
const elsImgLightboxTmubnailButton = elLightBox.querySelectorAll(`.js-img-lightbox-thumbnail-button`);
const elsLightboxImgThumbnail = elLightBox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxTmubnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {
    // Remove active state from all buttons
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });

    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
  });
});


// Lightbox control
const elLightboxControlPrev = elLightBox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightBox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
  elLightboxControlNext.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
    } else {
      elNextActiveItem = elActiveItem.nextElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
}

if (elLightboxControlPrev) {
  elLightboxControlPrev.addEventListener('click', function () {
    // Find active li element
    const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    if (elActiveItem.previousElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length - 1];
    } else {
      elNextActiveItem = elActiveItem.previousElementSibling;
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
  });
}