export default function decorate(block) {
	[...block.children].forEach(item => {
		const slide = document.createElement('div');
		slide.classList.add('slide');

		const textWrapper = document.createElement('div');
		textWrapper.classList.add('textWrapper');

		const [heading, subHeading, itemCTA, itemBGiamge] = [
			document.createElement('p'),
			document.createElement('p'),
			document.createElement('a'),
			document.createElement('img')
		];

		[heading, subHeading, itemCTA, itemBGiamge].forEach((el, i) => {
			el.classList.add(i === 0 ? 'heading' : i === 1 ? 'subHeading' : i === 2 ? 'itemCTA' : 'itemImg');
		});

		[...item.children].forEach((innerItem, i) => {
			const content = innerItem.querySelector(i === 0 ? 'p' : i === 2 ? 'a' : i === 3 ? 'img' : null);
			if (i === 0) heading.textContent = content.textContent;
			if (i === 1) subHeading.textContent = content.textContent;
			if (i === 2) { itemCTA.textContent = content.textContent; itemCTA.href = content.href; }
			if (i === 3) itemBGiamge.src = content.src;

			if (i < 3) textWrapper.appendChild([heading, subHeading, itemCTA][i]);
			if (i === 3) slide.appendChild(itemBGiamge);
		});

		slide.appendChild(textWrapper);
		item.replaceWith(slide);
	});
}
