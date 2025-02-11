export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		console.log(item);
		const quickLinkItem = document.createElement('div');
		quickLinkItem.classList.add('itemWrapper');
		const children = [...item.children];
		children.forEach((qLink, i) => {
			console.log(qLink);
		})

	})
}