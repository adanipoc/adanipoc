export default function decorate(block) {
	const rows = [...block.children];
	// console.log(rows);
	rows.forEach((elements, index) => {
		if (index == 0) {
			const heading = document.createElement('p');
			heading.classList.add('heading');
			heading.textContent = elements.textContent;
			elements.replaceWith(heading);
		}
		if(index == 1){
			const itemWrapper = elements.querySelector('ul')
			itemWrapper.classList.add('navLinks');
			itemWrapper.querySelectorAll('li').forEach(li => {
				li.classList.add('navItem');
			});
			elements.replaceWith(itemWrapper);
		}
	})
}