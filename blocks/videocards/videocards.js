export default function decorate(block) {
    const rows = [...block.children];
    const heroSection = document.createElement('div');
    const vcardWrapper = document.createElement('div');
    heroSection.classList.add('heroSection');
    vcardWrapper.classList.add('vcardWrapper');
    rows.forEach((row, r) => {
        if (r == 0) {
            const heroImg = document.createElement('img');
            heroImg.classList.add('heroImg');
            heroImg.src = row.querySelector('img').src;
            heroImg.setAttribute('width', '100%');
            heroImg.setAttribute('height', 'auto');
            heroImg.setAttribute('alt', 'heroImg');
            heroImg.setAttribute('loading', 'lazy');
            const playIcon = document.createElement('img');
            playIcon.classList.add('playIcon');
            playIcon.src = '../../icons/play_circle.png';
            heroImg.setAttribute('width', '75px');
            heroImg.setAttribute('height', '75px');
            heroImg.setAttribute('alt', 'play icon');
            heroImg.setAttribute('loading', 'lazy');
            heroSection.appendChild(heroImg);
            heroSection.appendChild(playIcon);
        } else {
            const vCardItem = document.createElement('div');
            vCardItem.classList.add('vCardItem');
            const cols = [...row.children];
            cols.forEach((col, c) => {
                if (c == 0) {
                    const cardImage = document.createElement('img');
                    cardImage.classList.add('cardImage');
                    cardImage.src = col.querySelector('img').src;
                    cardImage.setAttribute('width', '100%');
                    cardImage.setAttribute('height', 'auto');
                    cardImage.setAttribute('loading', 'lazy');
                    vCardItem.appendChild(cardImage);
                }
                if (c == 1) {
                    const heading = document.createElement('p');
                    heading.classList.add('heading');
                    heading.textContent = col.querySelector('p').textContent;
                    vCardItem.appendChild(heading);
                }
                if (c == 2) {
                    const subHeading = document.createElement('p');
                    subHeading.classList.add('subHeading');
                    subHeading.textContent = col.querySelector('p').textContent;
                    vCardItem.appendChild(subHeading);
                }
            });
            vcardWrapper.appendChild(vCardItem);
        }
    });
    block.innerHTML = '';
    block.appendChild(heroSection);
    block.appendChild(vcardWrapper);
}