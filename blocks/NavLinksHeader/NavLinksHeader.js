export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		console.log(row);
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('NavLinksHeader');
			row.replaceWith(sliderDiv);
		}
	})
}