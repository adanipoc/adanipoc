export default function decorate(block) {
	const rows = [...block.children];
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    const tabList = document.createElement('ul');
    tabList.classList.add('tabList');
    var dataIndex = -1;
    var contentItemdataIndex = -1;
    const content = document.createElement('div');
    content.classList.add('content');
    var contentItem = document.createElement('div');
    contentItem.classList.add('contentItem');
    var itemCard = document.createElement('div');
    itemCard.classList.add('itemCard');
	rows.forEach((row, r) => {
        const cols = [...row.children];
        const tabItem = document.createElement('li');
        tabItem.classList.add('tabItem');        
        const img = document.createElement('img');
        const title = document.createElement('p');
        const subHeading = document.createElement('p');
        img.setAttribute('width','46px');
        img.setAttribute('height','46px');
        title.classList.add('title');
        subHeading.classList.add('subHeading');
        cols.forEach((col, c) => {
            if(cols.length == 1){
                dataIndex++;
                tabItem.textContent = col.querySelector('p').textContent;
                tabItem.setAttribute('data-index',dataIndex);
                if(dataIndex == 0){
                    tabItem.classList.add('active');
                }
                tabList.appendChild(tabItem);
            }else{
                if(c==0){
                    img.src = col.querySelector('img').src;
                    itemCard.appendChild(img);
                }
                if(c==1){
                    title.textContent = col.querySelector('p').textContent;
                    itemCard.appendChild(title);
                }
                if(c==2){
                    subHeading.textContent = col.querySelector('p').textContent;
                    itemCard.appendChild(subHeading);
                    contentItem.appendChild(itemCard);
                    itemCard = document.createElement('div');
                    itemCard.classList.add('itemCard');
                }
            }
        });        
        if((cols.length == 1 && r!=0) || r==rows.length-1){
            contentItemdataIndex++;
            contentItem.setAttribute('data-index',contentItemdataIndex);
            if(contentItemdataIndex==0){
                contentItem.classList.add('active');
            }
            content.appendChild(contentItem);
            contentItem = document.createElement('div');
            contentItem.classList.add('contentItem');
        }
	});
    tabContent.appendChild(tabList);
    tabContent.appendChild(content);
    tabList.addEventListener('click', (event) => {
        document.querySelectorAll('.tabItem').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');
        document.querySelectorAll('.contentItem').forEach(content => content.classList.remove('active'));
        const dataIndex = event.target.getAttribute('data-index');
        document.querySelector(`.contentItem[data-index="${dataIndex}"]`)?.classList.add('active');
    });
    console.log(block);
    block.innerHTML = '';
    console.log(block);
    block.replaceWith(tabContent);
}