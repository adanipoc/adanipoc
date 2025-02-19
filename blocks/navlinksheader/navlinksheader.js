export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((row, r) => {
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('logo');
			const cols = [...row.children];
			cols.forEach((item, index) => {
				const newImage = document.createElement('img');
				newImage.src = item.querySelector('img').src;
				newImage.setAttribute('width', '52px');
				newImage.setAttribute('height', '52px');
				if (index == 0) {
					newImage.classList.add('menuIcon')
					newImage.setAttribute('alt', 'menu Icon');
				}
				if (index == 1) {
					newImage.classList.add('logoImage')
					newImage.setAttribute('alt', 'logo Image');
				}
				sliderDiv.appendChild(newImage);
			});
			// Replaced the original row with the new sliderDiv
			row.replaceWith(sliderDiv);
		}
		if (r == 1) {
			row.classList.add('menuWrapper');
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
					newImage.src = item.querySelector('img').src;
					newImage.setAttribute('alt', 'user login');
					newImage.setAttribute('width', '52px');
					newImage.setAttribute('height', '52px');
					userLogin.appendChild(newImage);
					item.replaceWith(userLogin);
				}
			});
		}
	});
}