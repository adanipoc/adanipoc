export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('navlinksheader', 'testClass');

			row.replaceWith(sliderDiv);
		}
	});
}