export default function decorate(block) {
	const rows = [...block.children];
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    const tabList = document.createElement('ul');
    tabList.classList.add('tabList');
	rows.forEach((row, r) => {
        const cols = [...row.children];
        const content = document.createElement('div');
        content.classList.add('content');
		cols.forEach((col, c) => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('contentItem');
            if(c==0){
                const li = document.createElement('li');
                li.classList.add('tabItem');
                if(r==0){
                    li.classList.add('active');
                    contentItem.classList.add('active');
                }
                li.setAttribute('data-index', r);
                contentItem.setAttribute('data-index', r);
                li.textContent = col.textContent;
                tabContent.appendChild(li);
            }
            if(c==1){
                const innerRows = [...col.children];
                innerRows.forEach((innerRow, ir) => {
                    const innerCols = [...innerRow.children];
                    const itemCard = document.createElement('div');
                    itemCard.classList.add('itemCard');
                    innerCols.forEach((innerCol, ic) => {
                        const img = document.createElement('img');
                        img.setAttribute('width','46px');
                        img.setAttribute('height','46px');
                        const p1 = document.createElement('p');
                        const p2 = document.createElement('p');
                        p1.classList.add('title');
                        p2.classList.add('subHeading');
                        if(ic==0){                      
                            img.src = innerCol.querySelector('img').src;                         
                        }
                        if(ic==1){        
                            p1.textContent = innerCol.textContent;
                        }
                        if(ic==2){                            
                            p2.textContent = innerCol.textContent;
                        }
                    });
                    itemCard.appendChild(img);
                    itemCard.appendChild(p1);
                    itemCard.appendChild(p2);
                    contentItem.appendChild(itemCard);
                });
            }
            content.appendChild(contentItem);
        });
	});
    tabContent.appendChild(content);
    block.replaceWith(tabContent);
}