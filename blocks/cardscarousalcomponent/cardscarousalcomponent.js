export default function decorate(block) {
    const rows = [...block.children];
    const cardscarousal = document.createElement('div');
    cardscarousal.classList.add('cardscarousal');
    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add('carousel-wrapper');
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    const carouselItems = document.createElement('div');
    carouselItems.classList.add('carouselItems');
    rows.forEach((row, r) => {
        if (r == 0) {
            const heading = document.createElement('h1');
            heading.classList.add('heading');
            heading.textContent = row.querySelector('p').textContent;
            cardscarousal.appendChild(heading);
        } else {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carouselItem');
            const cols = [...row.children];
            console.log(rows.length - 1);
            cols.forEach((col, c) => {
                if (c == 0) {
                    const img = document.createElement('img');
                    img.src = col.querySelector('img').src;
                    img.setAttribute('width', 'auto');
                    img.setAttribute('height', 'auto');
                    img.setAttribute('loading', 'lazy');
                    carouselItem.appendChild(img);
                }
                if (c == 1) {
                    const heading = document.createElement('p');
                    heading.classList.add('heading');
                    heading.textContent = col.querySelector('p').textContent;
                    carouselItem.appendChild(heading);
                }
                carouselItem.style.width = '194px';
                carouselItems.appendChild(carouselItem);
                // carouselItems.style.widows = 
            });
        }
    });
    carouselItems.style.width = `${carouselItems.children.length * 194}px`;
    carousel.appendChild(carouselItems);


    let currentIndex = 0;
    const slidesToShow = 5;  // Number of slides to show at once
    const slidesToMove = 1;
    // const carouselItems = document.querySelector('.carouselItems'); // Ensure you have this reference
    const totalSlides = carouselItems.children.length;

    // Create Left Button
    const leftBtn = document.createElement('button');
    leftBtn.classList.add('prev', 'slider-arrow');
    // leftBtn.innerHTML = `<img src="../../icons/slide-arrow.svg" width="20px" height="20px" alt="prev" />`;
    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= slidesToMove;  // Move to the previous slide
        }
        const translateX = 220 * currentIndex; // Adjust with the actual width of carousel item

        // Disable left button when at the start
        if (currentIndex === 0) {
            leftBtn.classList.add('disabled');
        } else {
            leftBtn.classList.remove('disabled');
        }

        // Enable right button
        if (currentIndex < totalSlides - slidesToShow) {
            rightBtn.classList.remove('disabled');
        }

        // Move carousel
        carouselItems.style.transform = `translateX(-${translateX}px)`;
    });
    carouselWrapper.appendChild(leftBtn);

    // Create Right Button
    const rightBtn = document.createElement('button');
    rightBtn.classList.add('next', 'slider-arrow');
    // rightBtn.innerHTML = `<img src="../../icons/slide-arrow.svg" width="20px" height="20px" alt="prev" />`;
    rightBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - slidesToShow) {
            currentIndex += slidesToMove;  // Move to the next slide
        }

        const translateX = 220 * currentIndex; // Adjust with the actual width of carousel item

        // Disable right button when at the end
        if (currentIndex >= totalSlides - slidesToShow) {
            rightBtn.classList.add('disabled');
        } else {
            rightBtn.classList.remove('disabled');
        }

        // Enable left button
        if (currentIndex > 0) {
            leftBtn.classList.remove('disabled');
        }

        // Move carousel
        carouselItems.style.transform = `translateX(-${translateX}px)`;
    });
    carouselWrapper.appendChild(rightBtn);


    // cardscarousal.appendChild(rightBtn);

    carouselWrapper.appendChild(carousel);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('cardWrapper');
    cardWrapper.appendChild(carouselWrapper);
    cardWrapper.setAttribute('data-slidetoshow', 5);
    cardscarousal.appendChild(cardWrapper);

    block.innerHTML = '';
    block.appendChild(cardscarousal);
}