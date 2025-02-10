import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('logo');
			const cols = [...row.children];
			cols.forEach((item, index) => {
				const newImage = document.createElement('img');
				newImage.src = item.querySelector('img').src
				if (index == 0) {
					newImage.classList.add('menuIcon')
				}
				if (index == 1) {
					newImage.classList.add('logoImage')
				}
				sliderDiv.appendChild(newImage);
			});
			// Replace the original row with the new sliderDiv
			row.replaceWith(sliderDiv);
		}
		if (r == 1) {
			const menuWrapper = document.createElement('div');
			menuWrapper.classList.add('menuWrapper');
			console.log(row);
		}
	});
}