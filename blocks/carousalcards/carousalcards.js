export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		const cardItem = document.createElement('div');
		cardItem.classList.add('cardItem');
		const cardElements = [...item.children];
		cardElements.forEach((el, i) => {
			if (i == 0) {
				const cardImg = document.createElement('img');
				cardImg.classList.add('cardImg');
				cardImg.src = el.querySelector('img').src;
				// el.replaceWith(cardImg);
				cardItem.appendChild(cardImg)
			}
			if (i == 1) {
				const cardTitle = document.createElement('p');
				cardTitle.classList.add('cardTitle');
				cardTitle.textContent = el.textContent;
				// el.replaceWith(cardTitle);
				cardItem.appendChild(cardTitle)
			}
			if (i == 2) {
				const cardDesc = document.createElement('p');
				cardDesc.classList.add('cardDesc');
				cardDesc.textContent = el.textContent;
				// el.replaceWith(cardDesc);
				cardItem.appendChild(cardDesc)
			}
		})
		item.replaceWith(cardItem);
	})
}