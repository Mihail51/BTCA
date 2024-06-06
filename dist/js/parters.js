
function placeItemsOnCircle(containerSelector, itemSelector, radiusVar) {
    const container = document.querySelector(containerSelector);
    const items = container.querySelectorAll(itemSelector);
    const radius = parseInt(getComputedStyle(container).getPropertyValue(radiusVar), 10);
    const angleStep = 360 / 8;

    items.forEach((item, index) => {
        if (index !== 0) { // Пропускаем центральный элемент
            const angle = angleStep * index;
            const radians = angle * (Math.PI / 180);
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);
            item.style.left = `calc(50% + ${x}px - ${item.offsetWidth / 2}px)`;
            item.style.top = `calc(50% + ${y}px - ${item.offsetHeight / 2}px)`;
        }
    });
}

// Вызов функции для расположения элементов на окружности
placeItemsOnCircle('.scroll__items', '.item', '--radius');



function rotateBlock() {
    const block = document.querySelector('.block');
    block.classList.toggle('rotate');
}
