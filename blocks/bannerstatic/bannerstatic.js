export default function decorate(block) {
	const rows = [...block.children];
	const staticBanner = document.createElement('div');
	staticBanner.classList.add('staticBanner');
	rows.forEach((item, index) => {
		if (index == 3) {
			console.log(item);
			const createImg = document.createElement('img');
			createImg.classList.add('bannerStatic');
			createImg.src = item.querySelector('img').src;
			staticBanner.appendChild(createImg);
		}
		item.replaceWith(staticBanner);
	})
}