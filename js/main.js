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

const elImgShowcaseActiveImg = document.querySelector(`.img-showcase__active-img`);
const elsImgShowCaseTmubnailButton = document.querySelectorAll(`.js-img-showcase-thumbnail-button`);
const elsImgThumbnail = document.querySelectorAll(`.img-showcase__thumbnail`);

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