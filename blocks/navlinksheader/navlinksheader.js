export default function decorate(block) {
	console.log(block);
	const rows = [...block.children];

	rows.forEach((row, r) => {
		if (r == 0) {
			const sliderDiv = document.createElement('div');
			sliderDiv.classList.add('logo');
			const cols = [...row.children];
			cols.forEach((item, index) => {
				const newImage = document.createElement('img');
				newImage.src = item.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));; // Replace with your image URL
				newImage.alt = 'Description of the image'; // Add alt text for accessibility
				// Append the image to sliderDiv
				if(index == 0){
					newImage.classList.add('menuIcon')
				}
				if(index == 1){
					newImage.classList.add('logoImage')
				}
				sliderDiv.appendChild(newImage);
			})



			// Replace the original row with the new sliderDiv
			row.replaceWith(sliderDiv);
		}
	});
}