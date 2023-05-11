const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
        tab.classList.remove('active')
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});

const btns = document.querySelectorAll('.data');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const question = e.currentTarget;
        console.log(question);
        question.classList.toggle('show-text');
    });
});


$(document).ready(function () {
    $(".title").hide().fadeIn(2000);
});