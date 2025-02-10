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
			row.classList.add('menuWrapper');
			console.log(row);
			const cols = [...row.children];
			cols.forEach((item, index) => {
				if (index == 0) {
					const NavLinkList = item.querySelector('ul')
					NavLinkList.classList.add('navLinks');
					NavLinkList.querySelectorAll('li').forEach(li => {
						li.classList.add('navItem');
					});
					item.replaceWith(NavLinkList);
				}
				if (index == 1) {
					const userLogin = document.createElement('div');
					userLogin.classList.add('userLogin');
					const newImage = document.createElement('img');
					newImage.src = item.querySelector('img').src
					userLogin.appendChild(newImage);
					item.replaceWith(userLogin);
				}
			});
		}
	});
}