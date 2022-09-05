const elSiteHeaderCardLink = document.querySelector(`.js-site-header-card-link`);
const elSiteHeaderCardModal = document.querySelector(`.site-header__card-modal`);

if (elSiteHeaderCardLink) {
  elSiteHeaderCardLink.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    elSiteHeaderCardModal.classList.toggle(`site-header__card-modal--open`);
  });
}