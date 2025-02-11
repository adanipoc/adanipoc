export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		if (index == 0) {
			const cardImage = document.createElement('img');
			
		}
		if (index == 1) {
			const headingElement = document.createElement('p');
			headingElement.classList.add('heading');
			headingElement.textContent = item.textContent;
			item.replaceWith(headingElement);
		}
	})
}