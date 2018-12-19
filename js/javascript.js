const buyItemButton = document.querySelectorAll('.button-buy-item');
const itemAddedPopup = document.querySelector('.popup-item-added');

const addedPopupClose = itemAddedPopup.querySelector('.button-close');
const continueShopping = itemAddedPopup.querySelector('.popup-button-continue');

// buy item
buyItemButton.forEach(item => {
  item.addEventListener('click', evt => {
    let itemsInCart = document.querySelector('.button-cart .quantity');
    let itemInCartBtn = document.querySelector('.button-cart');
    let newQuantity = Number(itemsInCart.textContent) + 1;
    evt.preventDefault();

    itemsInCart.textContent = newQuantity;
    itemAddedPopup.classList.add('popup-show');

    if (!itemInCartBtn.classList.contains('button-cart-full')) {
      itemInCartBtn.classList.add('button-cart-full');
    };
  })
});

addedPopupClose.addEventListener('click', evt => {
  evt.preventDefault();
  itemAddedPopup.classList.remove('popup-show');
});

continueShopping.addEventListener('click', evt => {
  evt.preventDefault();
  itemAddedPopup.classList.remove('popup-show');
});

window.addEventListener('keydown', evt => {
  if (itemAddedPopup.classList.contains('popup-show')) {

    if (evt.keyCode === 27) {
      evt.preventDefault();
      itemAddedPopup.classList.remove('popup-show');
    };
  };
});

 // map
if (document.querySelector('.contacts-button-map')) {
  const invokeMap = document.querySelector('.contacts-button-map');
  const popupMap = document.querySelector('.popup-map');
  const closeMap = popupMap.querySelector('.button-close');

  invokeMap.addEventListener('click', evt => {
    evt.preventDefault();
    popupMap.classList.add('popup-show');
  })

  closeMap.addEventListener('click', evt => {
    evt.preventDefault();
    popupMap.classList.remove('popup-show');
  })

  window.addEventListener('keydown', evt => {
    if (popupMap.classList.contains('popup-show')) {

      if (evt.keyCode === 27) {
        evt.preventDefault();
        popupMap.classList.remove('popup-show');
      };
    };
  });
};

 // popup Letter
if (document.querySelector('.contacts .button')) {
  const invokeLetter = document.querySelector('.contacts .button');
  const letterPopup = document.querySelector('.popup-letter');

  const letterClose = letterPopup.querySelector('.button-close');
  const letterForm = letterPopup.querySelector("form");

  const userName = letterPopup.querySelector('[name=user-name]');
  const userEmail = letterPopup.querySelector('[name=user-email]');
  const letterMessage = letterPopup.querySelector("[name=user-text]");

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  invokeLetter.addEventListener('click', evt => {
    evt.preventDefault();
    letterPopup.classList.add('popup-show');
    userName.focus();

    if (storage) {
      userName.value = storage;
      userEmail.value = localStorage.getItem('email')
      letterMessage.focus();
    } else {
      userName.focus();
    };
  });

  letterClose.addEventListener('click', evt => {
    evt.preventDefault();
    letterPopup.classList.remove('popup-show');
    letterPopup.classList.remove("popup-letter-error");
  });

  letterForm.addEventListener('submit', evt => {

    if (!userName.value || !userEmail.value || !letterMessage.value) {
      evt.preventDefault();
      letterPopup.classList.remove("popup-letter-error");
      letterPopup.offsetWidth = letterPopup.offsetWidth;
      letterPopup.classList.add("popup-letter-error");
    } else {

      if (isStorageSupport) {
        localStorage.setItem('name', userName.value);
        localStorage.setItem('email', userEmail.value);
      };
    };
  });

  window.addEventListener('keydown', evt => {
    if (letterPopup.classList.contains('popup-show')) {

      if (evt.keyCode === 27) {
        evt.preventDefault();
        letterPopup.classList.remove('popup-show');
        letterPopup.classList.remove("popup-letter-error");
      };
    };
  });
};

// index slider
if (document.querySelectorAll('.slider-button')) {
  const sliderControls = document.querySelectorAll('.slider-button');
  const sliderInputs = document.querySelectorAll('[name=toggle]');

  sliderControls.forEach(item => {
    item.addEventListener('click', evt => {
      evt.preventDefault();

      if (sliderInputs[0].checked === true) {
        sliderInputs[0].checked = false;
        sliderInputs[1].checked = true;
      } else {
        sliderInputs[0].checked = true;
        sliderInputs[1].checked = false;
      };
    })
  });
};
