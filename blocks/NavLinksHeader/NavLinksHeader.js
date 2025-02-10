import { loadHeader } from "../../scripts/aem";

export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('NavLinksHeader');
			row.replaceWith(sliderDiv);

			// Add click event listener
			sliderDiv.addEventListener('click', () => {
				console.log('Next button clicked');
			});
		}
	})
}