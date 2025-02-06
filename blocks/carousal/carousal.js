export default function decorate(block) {
    console.log(block);
    const rows = [...block.children];

    [...block.children].forEach((row, r) => {
        if (r == 0) {
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn', 'btn-next');
            const node = document.createTextNode(row.textContent);
            nextBtn.append(node);
            row.replaceWith(nextBtn);

            // Add click event listener
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
            });
        } else if (r == rows.length - 1) {
            const prevBtn = document.createElement('button');
            prevBtn.classList.add('btn', 'btn-prev');
            const node = document.createTextNode(row.textContent);
            prevBtn.append(node);
            row.replaceWith(prevBtn);
            prevBtn.addEventListener('click', () => {
                console.log('Prev button clicked');
            });

        } else {
            row.classList.add('slide');
            [...row.children].forEach((col, c) => {
                if (c == 1) {
                    col.classList.add('slide-text');
                }
            });
        }
    });
}
