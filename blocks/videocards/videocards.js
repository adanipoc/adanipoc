export default function decorate(block) {
    const rows = [...block.children];
    const heroSection = document.createElement('div');
    const vcardWrapper = document.createElement('div');
    heroSection.classList.add('heroSection');
    vcardWrapper.classList.add('vcardWrapper');

    let heroImg = null; // This will hold the reference to the hero image element

    rows.forEach((row, r) => {
        if (r == 0) {
            heroImg = document.createElement('img');
            heroImg.classList.add('heroImg');
            heroImg.src = row.querySelector('img').src; // Initial hero image
            heroImg.setAttribute('width', '1120px');
            heroImg.setAttribute('height', '499px');
            heroImg.setAttribute('alt', 'heroImg');
            heroImg.setAttribute('loading', 'lazy');

            const playIcon = document.createElement('img');
            playIcon.classList.add('playIcon');
            playIcon.src = '../../icons/play_circle.png';
            playIcon.setAttribute('width', '75px');
            playIcon.setAttribute('height', '75px');
            playIcon.setAttribute('alt', 'play icon');
            playIcon.setAttribute('loading', 'lazy');

            heroSection.appendChild(heroImg);
            heroSection.appendChild(playIcon);
        } else {
            const vCardItem = document.createElement('div');
            vCardItem.classList.add('vCardItem');
            const cols = [...row.children];
            let cardImageSrc = ''; // This will hold the image URL for this vCardItem

            cols.forEach((col, c) => {
                if (c == 0) {
                    const cardImage = document.createElement('img');
                    cardImage.classList.add('cardImage');
                    cardImage.src = col.querySelector('img').src;
                    cardImage.setAttribute('width', '336');
                    cardImage.setAttribute('height', '140');
                    cardImage.setAttribute('loading', 'lazy');
                    cardImage.setAttribute('alt', 'card image');
                    vCardItem.appendChild(cardImage);
                    cardImageSrc = cardImage.src; // Store the image source for this card
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

            // Add an onclick event to change the hero image and add active class when clicked
            vCardItem.addEventListener('click', () => {
                // Remove active class from all vCardItems
                const allVCardItems = vcardWrapper.querySelectorAll('.vCardItem');
                allVCardItems.forEach(item => item.classList.remove('active'));

                // Add active class to the clicked vCardItem
                vCardItem.classList.add('active');

                // Change the hero image to the clicked vCardItem's image
                if (heroImg) {
                    heroImg.src = cardImageSrc;
                }
            });

            vcardWrapper.appendChild(vCardItem);
        }
    });

    block.innerHTML = '';
    block.appendChild(heroSection);
    block.appendChild(vcardWrapper);
}
