export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		console.log(item);
		const elment = document.createElement('div');
		const textWrapper = document.createElement('div');
		elment.classList.add('slide');
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
			}
			if(i == 1){
				subHeading.textContent = innerItem.querySelector('p').textContent;
			}
			// innerItem.replaceWith()
			// textWrapper.appendChild(innerItem);
		});
		item.replaceWith(elment);

	});
}