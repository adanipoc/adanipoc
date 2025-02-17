export default function decorate(block) {
	const rows = [...block.children];
	const maskArea = document.createElement('div');
	maskArea.classList.add('maskArea');
	const img = document.createElement('div');
	img.classList.add('img');
	if(block.classList.contains('version2')){
		alert('version2');
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
				const whiteBtn = document.createElement('p');
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
				height.setAttribute('width','auto');
				img.appendChild(bgImg);
			}
		});
	}
}