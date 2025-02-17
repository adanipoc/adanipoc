export default function decorate(block) {
	const rows = [...block.children];
    const leftLayout = document.createElement('div');
    const rightLayout = document.createElement('div');
    leftLayout.classList.add('leftLayout');
    rightLayout.classList.add('rightLayout');
    rows.forEach((row, r) => {
        const cols = [...row.children];
        cols.forEach((col, c) => {
            if(c==0){
                const heading = document.createElement('p');
                heading.classList.add('heading');
                heading.textContent = col.querySelector('p').textContent;
                leftLayout.appendChild(heading);
                const ul = col.querySelector('ul');
                ul.querySelectorAll('li').forEach(li => {
                    const subHeading = document.createElement('p');
                    subHeading.classList.add('subHeading');
                    subHeading.textContent = li.textContent;
                    leftLayout.appendChild(subHeading);
                });
                const viewAll = document.createElement('a');
                viewAll.classList.add('viewAll');
                viewAll.textContent = col.querySelector('a').textContent;
                viewAll.href = col.querySelector('a').href;
                leftLayout.appendChild(viewAll);
                console.log(leftLayout);
            }
        });
    });
   
	
}