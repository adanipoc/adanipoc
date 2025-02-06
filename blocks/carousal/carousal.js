export default function decorate(block) {
    console.log(block);
    const rows = [...block.children];
    [...block.children].forEach((row, r) => {
        if (r == 0) {
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn');
            nextBtn.classList.add('btn-next');
            const node = document.createTextNode(row.textContent)
            nextBtn.append(node)
        }
        if (r == rows.length - 1) {
            const prevBtn = document.createElement('button');
            nextBtn.classList.add('btn');
            nextBtn.classList.add('btn-prev');
            const node = document.createTextNode(row.textContent)
        }
    });
}