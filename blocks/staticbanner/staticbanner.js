export default function decorate(block) {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const video = document.createElement('video');
    video.classList.add('bannerImage');
    video.setAttribute('preload', 'auto');
    video.setAttribute('loop', 'true');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('muted','true');
    const source = document.createElement('source');
    source.src = block.querySelector('p').textContent;
    source.setAttribute('type','video/mp4')
    video.appendChild(source);
    banner.appendChild(video);
    block.innerHTML = '';
    block.appendChild(banner);

    
}