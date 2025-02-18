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
        if(r==0){
            const heading = document.createElement('h1');
            heading.classList.add('heading');
            heading.textContent = row.querySelector('p').textContent;
            cardscarousal.appendChild(heading);
        } else{
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carouselItem');
            const cols = [...row.children];
            cols.forEach((col , c) => {
                if(c==0){
                    const img = document.createElement('img');
                    img.src = col.querySelector('img').src;
                    img.setAttribute('width','auto');
                    img.setAttribute('height','auto');
                    img.setAttribute('loading','lazy');
                    carouselItem.appendChild(img);
                }
                if(c==1){
                    const heading = document.createElement('p');
                    heading.classList.add('heading');
                    heading.textContent = col.querySelector('p').textContent;
                    carouselItem.appendChild(heading);
                }
                carouselItems.appendChild(carouselItem);
            });
        }
    });
    carousel.appendChild(carouselItems);
    const prev = document.createElement('button');
    prev.classList.add('prev', 'slider-arrow');
    const next = document.createElement('button');
    next.classList.add('next', 'slider-arrow');
    const imgPrev = document.createElement('img');
    const imgNext = document.createElement('img');
    imgPrev.setAttribute('width','20px');
    imgPrev.setAttribute('height','20px');
    imgNext.setAttribute('width','20px');
    imgNext.setAttribute('height','20px');
    imgPrev.src = '../../icons/slide-arrow.svg';
    imgNext.src = '../../icons/slide-arrow.svg';
    carouselWrapper.appendChild(imgPrev);
    carouselWrapper.appendChild(carousel);
    carouselWrapper.appendChild(imgNext);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('cardWrapper');
    cardWrapper.appendChild(carouselWrapper);
    cardWrapper.setAttribute('data-slidetoshow',5);
    cardscarousal.appendChild(cardWrapper);
    block.innerHTML = '';
    block.appendChild(cardscarousal);
    // ** Carousel Functionality **
    const slidesToShow = 5;  // Number of slides to show at once
    const slidesToMove = 1;  // Number of slides to move per click
    const mainWidth = carouselWrapper.offsetWidth;  // Get the width of the wrapper
    const carouselItemList = document.querySelectorAll(".carouselItem");
    
    let currentIndex = 0;
    const totalSlides = carouselItemList.length;
    
    // Set individual item width
    const itemWidth = mainWidth / slidesToShow - 31; 
    carouselItemList.forEach(item => item.style.width = `${itemWidth}px`);

    // Set the total carousel width
    carouselItems.style.width = `${itemWidth * totalSlides}px`;

    // Function to move the carousel
    function moveCarousel() {
        const offset = -currentIndex * itemWidth;
        carouselItems.style.transform = `translateX(${offset}px)`;
    }

    // Next Button functionality
    next.addEventListener("click", () => {
        if (currentIndex + slidesToMove < totalSlides - slidesToShow) {
            currentIndex += slidesToMove;
            prev.classList.remove('disabled');  // Enable prev button
        } else {
            next.classList.add('disabled');  // Disable next button at the end
            currentIndex = totalSlides - slidesToShow;
        }
        moveCarousel();
    });

    // Prev Button functionality
    prev.addEventListener("click", () => {
        if (currentIndex - slidesToMove >= 0) {
            next.classList.remove('disabled');  // Enable next button
            currentIndex -= slidesToMove;
        } else {
            prev.classList.add('disabled');  // Disable prev button at start
            currentIndex = 0;
        }
        moveCarousel();
    });

    // Initial setup
    carouselItems.style.display = 'flex';
    carouselItems.style.transition = 'transform 0.3s ease-in-out';
}