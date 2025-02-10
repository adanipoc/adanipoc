export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		console.log(row, r);
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('logo');
			const newImage = document.createElement('img');
			newImage.src = row.src; // Replace with your image URL
			newImage.alt = 'Description of the image'; // Add alt text for accessibility

			// Append the image to sliderDiv
			sliderDiv.appendChild(newImage);

			// Replace the original row with the new sliderDiv
			row.replaceWith(sliderDiv);
		}
	});
}