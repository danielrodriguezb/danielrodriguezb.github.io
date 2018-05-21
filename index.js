window.onload = () => {
  const els = document.getElementsByClassName('fadeable');
  for (var i = 0; i < els.length; i++) {
    els[i].classList.add('fadedin');
  }
};