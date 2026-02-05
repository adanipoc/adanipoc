export default function decorate(block) {
    const items = [];
    const rows = [...block.children];
    rows.forEach((row) => {
        const cols = [...row.children];
        cols.forEach((col) => {
            const text = col.textContent.trim();
            if (text.length > 0) {
                items.push(text);
            }
        });
    });
    block.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('eds-menu');
    items.forEach((label) => {
        const item = document.createElement('div');
        item.classList.add('eds-menu-item');
        item.textContent = label;
        container.appendChild(item);
    });
    block.appendChild(container);
}
