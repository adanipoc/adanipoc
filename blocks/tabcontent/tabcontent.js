export default function decorate(block) {
	const rows = [...block.children];
    const tabContent = document.createElement('div');
    tabContent.classList.add('tabContent');
    const tabList = document.createElement('ul');
    tabList.classList.add('tabList');
	rows.forEach((row, r) => {
        console.log(row);
        
	});
}