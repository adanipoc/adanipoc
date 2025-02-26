export default function decorate(block) {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const video = document.createElement('video');
    const videoSrc = block.querySelector('p').textContent; // Get the video URL
    banner.innerHTML = '<video preload="auto" loop="true" autoplay="true" muted><source src="' + videoSrc + '" type="video/mp4"></video>'
    block.innerHTML = ''; // Clear the content inside the block
    block.appendChild(banner); // Add the new banner to the block
}