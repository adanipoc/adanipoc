export default function decorate(block) {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const video = document.createElement('video');
    video.classList.add('bannerImage');
    //video.src = block.querySelector('p').textContent;
    video.setAttribute('preload', 'auto');
    video.setAttribute('loop', 'true');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('muted');
    banner.appendChild(video);
    block.innerHTML = '';
    block.appendChild(banner);

    
}