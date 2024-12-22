const backbtn = () => {
  const backtoTopBtn = document.querySelector('#btn-backUp');
  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      if (!backtoTopBtn.classList.contains('btnEntrance')) {
        backtoTopBtn.classList.remove('btnExit');
        backtoTopBtn.classList.add('btnEntrance');
        backtoTopBtn.style.display = 'block';
      }
    } else {
      if (backtoTopBtn.classList.contains('btnEntrance')) {
        backtoTopBtn.classList.remove('btnEntrance');
        backtoTopBtn.classList.add('btnExit');
        setTimeout(() => {
          backtoTopBtn.style.display = 'none';
        }, 250);
      }
    }
  }

  backtoTopBtn.addEventListener('click', backtoTop);

  function backtoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

export default backbtn;
