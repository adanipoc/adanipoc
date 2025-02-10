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
		const itemCTA = document.createElement('button');
		heading.classList.add('heading')
		subHeading.classList.add('subHeading')
		itemCTA.classList.add('itemCTA');
		cols.forEach((innerItem, i) => {
			console.log(innerItem);
			if(i == 0){
				heading.textContent = innerItem.querySelector('p').textContent;
				textWrapper.appendChild(heading);
			}
			if(i == 1){
				subHeading.textContent = innerItem.querySelector('p').textContent;
				textWrapper.appendChild(subHeading);
			}
			// innerItem.replaceWith()
		});
		slide.appendChild(textWrapper);
		item.replaceWith(slide);

	});
}