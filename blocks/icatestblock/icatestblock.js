export default function decorate(block) {
    const rows = [...block.children];
    const container = document.createElement('div');
    container.classList.add('faq-accordion');
    rows.forEach((row, index) => {
        const cols = [...row.children];
        const question = cols[0]?.textContent.trim();
        const answer = cols[1]?.innerHTML.trim();
        const item = document.createElement('div');
        item.classList.add('faq-item');
        if (index === rows.length - 1) {
            const seeMore = document.createElement('a');
            seeMore.classList.add('see-more');
            seeMore.href = '#';
            seeMore.textContent = question;
            item.appendChild(seeMore);
            container.appendChild(item);
            return;
        }
        const q = document.createElement('div');
        q.classList.add('faq-question');
        q.textContent = question;
        const a = document.createElement('div');
        a.classList.add('faq-answer');
        a.innerHTML = answer;
        q.addEventListener('click', () => {
            a.classList.toggle('open');
            q.classList.toggle('active');
        });
        item.appendChild(q);
        item.appendChild(a);
        container.appendChild(item);
    });
    block.innerHTML = '';
    block.appendChild(container);
}