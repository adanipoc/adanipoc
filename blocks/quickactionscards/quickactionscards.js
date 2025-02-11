export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		const quickLinkItem = document.createElement('div');
		quickLinkItem.classList.add('itemWrapper');
		const children = [...item.children];
		// console.log(children)
		children.forEach((ch, i) => {
			if (i == 0) {
				const heading = document.createElement('p')
				heading.classList.add('heading');
				heading.textContent = ch.textContent;
				quickLinkItem.appendChild(heading);
			}
			if (i == 1) {
				const ulList = ch.querySelector('ul');
				ulList.classList.add('ulList')
				ulList.querySelectorAll('li').forEach(li => {
					const icon = document.createElement('img');
					icon.src = '../../icons/quick-actions.svg';
					li.appendChild(icon);
					li.classList.add('listItem');
				});
				ch.replaceWith(ulList);
				quickLinkItem.appendChild(ulList)
			}
		});
		item.replaceWith(quickLinkItem);
	})
}