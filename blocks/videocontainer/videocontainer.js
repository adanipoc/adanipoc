export default function decorate(block) {
	const rows = [...block.children]
	const videoMain = document.createElement('div');
	videoMain.classList.add('videoMain');
	const subHeadingElement = document.createElement('p');
	const headingEle = document.createElement('p');
	const itemHeroImage = document.createElement('img');
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
			item.replaceWith(itemHeroImage);
		}
	});

}