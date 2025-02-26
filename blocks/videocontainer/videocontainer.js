export default function decorate(block) {
	const rows = [...block.children]
	const videoMain = document.createElement('div');
	videoMain.classList.add('videoMain');
	const subHeadingElement = document.createElement('p');
	const headingEle = document.createElement('p');
	const itemHeroImage = document.createElement('img');
	const readMore = document.createElement('a');
	rows.forEach((item, index) => {
		if (index == 0) {
			headingEle.classList.add('heading');
			console.log(headingEle);
			headingEle.textContent = item.textContent;
			videoMain.appendChild(headingEle)
			item.replaceWith(videoMain);
		}
		if (index == 1) {
			subHeadingElement.classList.add('subHeading');
			subHeadingElement.textContent = item.textContent;
			// item.replaceWith(subHeadingElement);
			videoMain.appendChild(subHeadingElement);
			item.replaceWith(videoMain)
		}
		if (index == 2) {
			itemHeroImage.classList.add('heroImage');
			itemHeroImage.src = item.querySelector('img').src;
			itemHeroImage.setAttribute('width', '322px');
			itemHeroImage.setAttribute('height', '185px');
			itemHeroImage.setAttribute('loading', 'lazy');
			itemHeroImage.setAttribute('alt', 'covid- 19 update');
			item.replaceWith(itemHeroImage);
		}
		if (index == 3) {
			readMore.classList.add('readMore');
			readMore.href = item.querySelector('a').href;
			readMore.textContent = item.querySelector('a').textContent;
			videoMain.appendChild(readMore)
			item.remove()
		}
	});

}