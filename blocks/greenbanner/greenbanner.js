export default function decorate(block) {
	const rows = [...block.children];
	const maskArea = document.createElement('div');
	maskArea.classList.add('maskArea');
	const img = document.createElement('div');
	img.classList.add('img');
	if(block.classList.contains('version2')){
		rows.forEach((row, r) => {
			if(r==0){
				const heading = document.createElement('p');
				heading.classList.add('heading');
				heading.textContent = row.textContent;
				maskArea.appendChild(heading);
			}
			if(r==1){
				const subHeading = document.createElement('p');
				subHeading.classList.add('subHeading');
				subHeading.textContent = row.textContent;
				maskArea.appendChild(subHeading);
			}
			if(r==2){
				const bottomSecion = document.createElement('div');
				bottomSecion.classList.add('bottomSecion');
				const cols = [...row.children];
				cols.forEach((col, c) => {
					const item = document.createElement('item');
					item.classList.add('item');
					col.querySelectorAll('p').forEach((p, i) => {
						if(i==0){
							const liHeading = document.createElement('p');
							liHeading.classList.add('heading');
							liHeading.textContent = p.textContent;
							item.appendChild(liHeading);
						}
						if(i==1){
							const liSubHeading = document.createElement('p');
							liSubHeading.classList.add('subHeading');
							liSubHeading.textContent = p.textContent;
							item.appendChild(liSubHeading);
						}
					});
					bottomSecion.appendChild(item);
				});
				maskArea.appendChild(bottomSecion);
			}
			if(r==3){
				const bgImg = document.createElement('img');
				bgImg.classList.add('bgImg');
				bgImg.src = row.querySelector('img').src;
				bgImg.setAttribute('width','auto');
				bgImg.setAttribute('height','auto');
				img.appendChild(bgImg);
			}
			if(r==4){
				const abImg = document.createElement('img');
				abImg.classList.add('abImg');
				abImg.src = row.querySelector('img').src;
				abImg.setAttribute('width','auto');
				abImg.setAttribute('height','auto');
				img.appendChild(abImg);
			}
		});
	}else{
		rows.forEach((row, r) => {
			if(r==0){
				const heading = document.createElement('p');
				heading.classList.add('heading');
				heading.textContent = row.textContent;
				maskArea.appendChild(heading);
			}
			if(r==1){
				const subHeading = document.createElement('p');
				subHeading.classList.add('subHeading');
				subHeading.textContent = row.textContent;
				maskArea.appendChild(subHeading);
			}
			if(r==2){
				const whiteBtn = document.createElement('a');
				whiteBtn.classList.add('whiteBtn');
				whiteBtn.textContent = row.querySelector('a').textContent;
				whiteBtn.href = row.querySelector('a').href;
				maskArea.appendChild(whiteBtn);
			}
			if(r==3){
				const bgImg = document.createElement('img');
				bgImg.classList.add('bgImg');
				bgImg.src = row.querySelector('img').src;
				bgImg.setAttribute('width','auto');
				bgImg.setAttribute('height','auto');
				img.appendChild(bgImg);
			}
		});
	}
	block.innerHTML = '';
	block.appendChild(maskArea);
	block.appendChild(img);
}