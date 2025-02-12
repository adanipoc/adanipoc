export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		const footerCol = document.createElement('div');
		footerCol.classList.add('footerCol');
		const colsLength = [...item.children];
		console.log({ index });
		if (colsLength.length == 2) {
			const colsHeading = item.querySelector('p');
			if (colsHeading) {
				colsHeading.textContent = item.querySelector('p').textContent;
				console.log(colsHeading, index);
				colsHeading.classList.add('heading');
				footerCol.setAttribute('data-order', index+1);
				footerCol.appendChild(colsHeading);
				// item.replaceWith(colsHeading);
			}
			const cols = [...item.children];
			console.log(cols);
			const NavLinkList = item.querySelector('ul')
			if (NavLinkList) {
				NavLinkList.classList.add('navLinks');
				NavLinkList.querySelectorAll('li').forEach(li => {
					li.classList.add('navItem');
				});
				footerCol.appendChild(NavLinkList);
			}
		}
		if (colsLength.length == 5) {
			const iconsWrapper = document.createElement('div');
			colsLength.forEach((icon, i) => {
				const socialIcons = document.createElement('img');
				socialIcons.classList.add('icons');
				iconsWrapper.classList.add('iconsWrapper');
				socialIcons.src = icon.querySelector('img').src;
				iconsWrapper.appendChild(socialIcons);
				footerCol.appendChild(iconsWrapper);
			});
		}
		item.replaceWith(footerCol);
	})
}