export default function decorate(block) {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const image = document.createElement('img');
    image.classList.add('bannerImage');
    image.src = block.querySelector('img').src;
    image.setAttribute('width', '100%');
    image.setAttribute('height', 'auto');
    image.setAttribute('alt', 'banner');
    banner.appendChild(image);
    block.innerHTML = '';
    block.appendChild(banner);
}