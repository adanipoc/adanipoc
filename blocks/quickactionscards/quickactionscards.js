export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		const quickLinkItem = document.createElement('div');
		quickLinkItem.classList.add('itemWrapper');
		const children = [...item.children];
		children.forEach((qLink, i) => {
			console.log(qLink);
		})
		item.replaceWith(quickLinkItem)

	})
}