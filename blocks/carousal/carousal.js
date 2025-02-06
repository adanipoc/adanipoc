export default function decorate(block) {
    console.log(block);
    const rows = [...block.children];

    rows.forEach((row, r) => {
        if (r == 0) {
            const nextBtn = document.createElement('button');
            nextBtn.classList.add('btn', 'btn-next');
            nextBtn.textContent = row.textContent;
            row.replaceWith(nextBtn);

            // Add click event listener
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked');
            });
        } else if (r == rows.length - 1) {
            const prevBtn = document.createElement('button');
            prevBtn.classList.add('btn', 'btn-prev');
            prevBtn.textContent = row.textContent;
            row.replaceWith(prevBtn);

            prevBtn.addEventListener('click', () => {
                console.log('Prev button clicked');
            });
        } else {
            row.classList.add('slide');
            [...row.children].forEach((col, c) => {
                if (col.querySelector('picture')) {
                    // Move picture outside and remove its parent div
                    const picture = col.querySelector('picture');
                    col.replaceWith(picture);
                } else {
                    col.classList.add('slide-text');
                }
            });
        }
    });
}