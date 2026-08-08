'use strict';

document.addEventListener('click', (e) => {
  const posX = event.offsetX;
  const posY = event.offsetY;
  const elemWall = e.target.closest('.wall');

  if (!elemWall) {
    return;
  }

  const elemSpider = document.querySelector('.spider');
  let newTop = Math.max(posY - elemSpider.clientHeight / 2, 0);
  let newLeft = Math.max(posX - elemSpider.clientWidth / 2, 0);

  newTop = Math.min(newTop, elemWall.clientHeight - elemSpider.clientHeight);
  newLeft = Math.min(newLeft, elemWall.clientWidth - elemSpider.clientWidth);
  elemSpider.style.left = `${newLeft}px`;
  elemSpider.style.top = `${newTop}px`;
});
