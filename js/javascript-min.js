const buttonBookmark=[].slice.call(document.querySelectorAll('.button-add-to-bookmarks'),0),buyItemButton=[].slice.call(document.querySelectorAll('.button-buy-item'),0),itemAddedPopup=document.querySelector('.popup-item-added'),addedPopupClose=itemAddedPopup.querySelector('.button-close'),continueShopping=itemAddedPopup.querySelector('.popup-button-continue');if(buttonBookmark.forEach(function(a){a.addEventListener('click',function(b){let c=document.querySelector('.button-bookmarks .quantity'),d=document.querySelector('.button-bookmarks'),e=+c.textContent+1;b.preventDefault(),c.textContent=e,d.classList.contains('button-full')||d.classList.add('button-full')})}),buyItemButton.forEach(function(a){a.addEventListener('click',function(b){let c=document.querySelector('.button-cart .quantity'),d=document.querySelector('.button-cart'),e=+c.textContent+1;b.preventDefault(),c.textContent=e,itemAddedPopup.classList.add('popup-show'),d.classList.contains('button-full')||d.classList.add('button-full')})}),addedPopupClose.addEventListener('click',function(a){a.preventDefault(),itemAddedPopup.classList.remove('popup-show')}),continueShopping.addEventListener('click',function(a){a.preventDefault(),itemAddedPopup.classList.remove('popup-show')}),window.addEventListener('keydown',function(a){itemAddedPopup.classList.contains('popup-show')&&27===a.keyCode&&(a.preventDefault(),itemAddedPopup.classList.remove('popup-show'))}),document.querySelector('.contacts-button-map')){const a=document.querySelector('.contacts-button-map'),b=document.querySelector('.popup-map'),c=b.querySelector('.button-close');a.addEventListener('click',function(d){d.preventDefault(),b.classList.add('popup-show')}),c.addEventListener('click',function(d){d.preventDefault(),b.classList.remove('popup-show')}),window.addEventListener('keydown',function(d){b.classList.contains('popup-show')&&27===d.keyCode&&(d.preventDefault(),b.classList.remove('popup-show'))})}if(document.querySelector('.contacts .button')){const a=document.querySelector('.contacts .button'),b=document.querySelector('.popup-letter'),c=b.querySelector('.button-close'),d=b.querySelector('form'),e=b.querySelector('[name=user-name]'),f=b.querySelector('[name=user-email]'),g=b.querySelector('[name=user-text]');let h=!0,i='';try{i=localStorage.getItem('name')}catch(j){h=!1}a.addEventListener('click',function(j){j.preventDefault(),b.classList.add('popup-show'),e.focus(),i?(e.value=i,f.value=localStorage.getItem('email'),g.focus()):e.focus()}),c.addEventListener('click',function(j){j.preventDefault(),b.classList.remove('popup-show'),b.classList.remove('popup-letter-error')}),d.addEventListener('submit',function(j){e.value&&f.value&&g.value?h&&(localStorage.setItem('name',e.value),localStorage.setItem('email',f.value)):(j.preventDefault(),b.classList.remove('popup-letter-error'),b.offsetWidth=b.offsetWidth,b.classList.add('popup-letter-error'))}),window.addEventListener('keydown',function(j){b.classList.contains('popup-show')&&27===j.keyCode&&(j.preventDefault(),b.classList.remove('popup-show'),b.classList.remove('popup-letter-error'))})}if(document.querySelector('.slider-button')){const a=[].slice.call(document.querySelectorAll('.slider-button'),0),b=[].slice.call(document.querySelectorAll('[name=toggle]'),0);a.forEach(function(c){c.addEventListener('click',function(d){d.preventDefault();let e=b.findIndex(function(f){return f.checked});e<b.length-1?b[e+1].checked=!0:b[0].checked=!0})})}
