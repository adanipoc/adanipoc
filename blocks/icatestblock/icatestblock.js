export default function decorate(block) {
    const rows = [...block.children];
    const container = document.createElement('div');
    container.classList.add('faq-list');
    rows.forEach((row, index) => {
        const cols = [...row.children];
        const label = cols[0]?.textContent.trim();
        const link = cols[1]?.querySelector('a')?.href || '#';
        const item = document.createElement('a');
        item.classList.add('faq-item');
        item.href = link;
        if (index === rows.length - 1) {
            item.classList.add('see-more');
        }
        item.textContent = label;
        container.appendChild(item);
    });
    block.innerHTML = '';
    block.appendChild(container);
}