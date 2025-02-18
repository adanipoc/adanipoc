export default function decorate(block) {
	const rows = [...block.children];
    const cardscarousal = document.createElement('div');
    cardscarousal.classList.add('cardscarousal');
    const carouselWrapper = document.createElement('div');
    carouselWrapper.classList.add('carousel-wrapper');
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    rows.forEach((row, r) => {
        if(r==0){
            const heading = document.createElement('h1');
            heading.classList.add('heading');
            heading.textContent = row.querySelector('p').textContent;
            cardscarousal.appendChild(heading);
        } else{
            const carouselItems = document.createElement('div');
            carouselItems.classList.add('carouselItems');
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
    imgPrev.src = '../../icons/slide-arrow.png';
    imgNext.src = '../../icons/slide-arrow.png';
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
}