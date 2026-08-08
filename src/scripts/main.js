'use strict';

document.addEventListener('click', (e) => {
  const elemWall = e.target.closest('.wall');
  const elemSpider = document.querySelector('.spider');

  if (!elemWall) {
    return;
  }

  const rectWall = elemWall.getBoundingClientRect();
  const rectSpider = elemSpider.getBoundingClientRect();

  const posX = e.clientX - rectWall.left;
  const posY = e.clientY - rectWall.top;

  let newTop = Math.max(posY - rectSpider.height / 2, 0);
  let newLeft = Math.max(posX - rectSpider.width / 2, 0);

  newTop = Math.min(newTop, rectWall.height - rectSpider.height);
  newLeft = Math.min(newLeft, rectWall.width - rectSpider.width);
  elemSpider.style.left = `${newLeft}px`;
  elemSpider.style.top = `${newTop}px`;
  elemSpider.style.position = 'absolute';
});
