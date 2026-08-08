'use strict';

document.addEventListener('click', (e) => {
  // const elemWall = e.target.closest('.wall');
  // const elemSpider = document.querySelector('.spider');

  // if (!elemWall) {
  //   return;
  // }

  // const rectWall = elemWall.getBoundingClientRect();
  // const rectSpider = elemSpider.getBoundingClientRect();

  // const posX = e.clientX - rectWall.left;
  // const posY = e.clientY - rectWall.top;

  // let newTop = Math.max(posY - rectSpider.height / 2, 0);
  // let newLeft = Math.max(posX - rectSpider.width / 2, 0);

  // newTop = Math.min(newTop, rectWall.height - rectSpider.height);
  // newLeft = Math.min(newLeft, rectWall.width - rectSpider.width);
  // elemSpider.style.left = `${newLeft}px`;
  // elemSpider.style.top = `${newTop}px`;
  // elemSpider.style.position = 'absolute';

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', () => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    let x = e.clientX - wallRect.left - wall.clientLeft - spiderRect.width / 2;
    let y = e.clientY - wallRect.top - wall.clientTop - spiderRect.height / 2;

    x = Math.max(
      0,
      Math.min(x, wallRect.width - spiderRect.width - wall.clientLeft * 2),
    );

    y = Math.max(
      0,
      Math.min(y, wallRect.height - spiderRect.height - wall.clientTop * 2),
    );
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  });
});
