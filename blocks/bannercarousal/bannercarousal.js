export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		console.log(item);
		const slide = document.createElement('div');
		slide.classList.add('slide');
		const textWrapper = document.createElement('div');
		textWrapper.classList.add('textWrapper');
		const cols = [...item.children];
		const heading = document.createElement('p');
		const subHeading = document.createElement('p');
		const itemCTA = document.createElement('a');
		const itemBGiamge = document.createElement('img');
		heading.classList.add('heading')
		subHeading.classList.add('subHeading')
		itemCTA.classList.add('itemCTA');
		itemBGiamge.classList.add('itemImg');
		cols.forEach((innerItem, i) => {
			console.log(innerItem);
			if (i == 0) {
				heading.textContent = innerItem.querySelector('p').textContent;
				textWrapper.appendChild(heading);
			}
			if (i == 1) {
				subHeading.textContent = innerItem.querySelector('p').textContent;
				textWrapper.appendChild(subHeading);
			}
			if (i == 2) {
				itemCTA.textContent = innerItem.querySelector('a').textContent
				itemCTA.href = innerItem.querySelector('a').href;
				textWrapper.appendChild(itemCTA);
			}
			if (i == 3) {
				itemBGiamge.src = innerItem.querySelector('img').src;
				itemBGiamge.width = '100%';
				slide.appendChild(itemBGiamge);
			}
			// innerItem.replaceWith()
		});
		slide.appendChild(textWrapper);
		item.replaceWith(slide);

	});
}