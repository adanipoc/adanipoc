export default function decorate(block) {
	const rows = [...block.children];
	const itemWrapperMain = document.createElement('div');
	itemWrapperMain.classList.add('itemWrapperMain');
	rows.forEach((item, index) => {
		if (index == 0) {
			const quickLinkHeading = document.createElement('p');
			quickLinkHeading.classList.add('quickLinkHeading');
			quickLinkHeading.textContent = item.textContent;
			item.replaceWith(quickLinkHeading);
		}
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
					icon.setAttribute('width', '20px')
					icon.setAttribute('height', '20px')
					icon.setAttribute('alt', 'icon')
					icon.setAttribute('loading', 'lazy')
					li.appendChild(icon);
					li.classList.add('listItem');
				});
				ch.replaceWith(ulList);
				quickLinkItem.appendChild(ulList)
			}
		});
		item.replaceWith(itemWrapperMain);
		if(index != 0){
			itemWrapperMain.appendChild(quickLinkItem);
		}
	})
}