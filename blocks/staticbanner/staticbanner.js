export default function decorate(block) {

    const banner = document.createElement('div');
    banner.classList.add('banner');
    const image = document.createElement('img');
    image.classList.add('bannerImage');
    image.src = block.querySelector('img').src;
    banner.appendChild(image);
    block.innerHTML = '';
    block.appendChild(banner);
}