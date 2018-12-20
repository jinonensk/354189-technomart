const buyItemButton = [].slice.call(document.querySelectorAll('.button-buy-item'),0);
const itemAddedPopup = document.querySelector('.popup-item-added');

const addedPopupClose = itemAddedPopup.querySelector('.button-close');
const continueShopping = itemAddedPopup.querySelector('.popup-button-continue');

// buy item
buyItemButton.forEach(function(item) {
  item.addEventListener('click', function(evt) {
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

addedPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  itemAddedPopup.classList.remove('popup-show');
});

continueShopping.addEventListener('click', function(evt) {
  evt.preventDefault();
  itemAddedPopup.classList.remove('popup-show');
});

window.addEventListener('keydown', function(evt) {
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

  invokeMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupMap.classList.add('popup-show');
  })

  closeMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    popupMap.classList.remove('popup-show');
  })

  window.addEventListener('keydown', function(evt) {
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

  invokeLetter.addEventListener('click', function(evt) {
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

  letterClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    letterPopup.classList.remove('popup-show');
    letterPopup.classList.remove("popup-letter-error");
  });

  letterForm.addEventListener('submit', function(evt) {

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

  window.addEventListener('keydown', function(evt) {
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
if (document.querySelector('.slider-button')) {
  const sliderControls = [].slice.call(document.querySelectorAll('.slider-button'),0);
  const sliderInputs = [].slice.call(document.querySelectorAll('[name=toggle]'),0);

  sliderControls.forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();

      let checkedIndex = sliderInputs.findIndex(function(el) {
        return el.checked
      });

      if (checkedIndex < sliderInputs.length-1) {
        sliderInputs[checkedIndex + 1].checked = true;
      } else {
        sliderInputs[0].checked = true
      };

      //sliderInputs[0].checked === true;
      //? sliderInputs[1].checked = true;
      //: sliderInputs[0].checked = true;
    })
  });
};
