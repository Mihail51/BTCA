document.addEventListener('DOMContentLoaded', (event) => {
  const items = document.querySelectorAll('.item:not(.center-item)');
  const total = items.length;
  const container = document.querySelector('.scroll__items');
  const radius = 200; // радиус круга

  items.forEach((item, i) => {
    const angle = (i / 8) * (2 * Math.PI); // полный круг
    const itemWidth = item.offsetWidth;
    const itemHeight = item.offsetHeight;
    const x = radius * Math.cos(angle) - itemWidth / 2;
    const y = radius * Math.sin(angle) - itemHeight / 2;

    item.style.left = `${container.offsetWidth / 2 + x}px`; // центрирование
    item.style.top = `${container.offsetHeight / 2 + y}px`; // центрирование

    console.log(`Элемент ${i}: угол = ${angle}, x = ${x}, y = ${y}`);
  });
});



function rotateBlock() {
    const block = document.querySelector('.block');
    block.classList.toggle('rotate');
}
