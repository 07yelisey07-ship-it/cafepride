
    const scrollList = document.querySelector('.scroll-list__wrp');
    const items = document.querySelectorAll('.scroll-list__item');

    scrollList.addEventListener('scroll', () => {
      const currentScroll = scrollList.scrollTop;

      items.forEach(item => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const scrollCenter = currentScroll + scrollList.clientHeight / 2;

        const distanceToCenter = Math.abs(itemCenter - scrollCenter);

        const maxDistance = scrollList.clientHeight / 2 * 10;

        const normalizedDistance = Math.min(1, distanceToCenter / maxDistance);

        const opacity = 1 - normalizedDistance * 0.5;
        const scale = 1 - normalizedDistance * 0.2;

        item.style.opacity = opacity;
        item.style.transform = `scale(${scale})`;
      });
    });

   
  