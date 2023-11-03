
const listItems = document.querySelectorAll('.questions-list-item');


listItems.forEach((item) => {
   const toggleButton = item.querySelector('.questions-list-item-wrap');
   const hiddenBlock = item.querySelector('.hidden-block');
   const liWrap = item.querySelector('.questions-list-item-wrap')
   const liText = item.querySelector('.questions-item-text')
   const plusSvg = item.querySelector('.plus-svg')
   const minusSvg = item.querySelector('.minus-svg')

   toggleButton.addEventListener('click', () => {
      liWrap.classList.toggle("active")
      liText.classList.toggle("active-text")
      hiddenBlock.classList.toggle('show-text');
      plusSvg.classList.toggle("hidden-svg")
      minusSvg.classList.toggle("hidden-svg")
   });
});
