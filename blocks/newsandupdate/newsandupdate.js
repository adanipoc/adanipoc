export default function decorate(block) {
    const rows = [...block.children];
    const leftLayout = document.createElement('div');
    const rightLayout = document.createElement('div');
    leftLayout.classList.add('leftLayout');
    rightLayout.classList.add('rightLayout');
    rows.forEach((row, r) => {
        const cols = [...row.children];
        cols.forEach((col, c) => {
            if (c == 0) {
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
                viewAll.setAttribute('title', 'google')
                leftLayout.appendChild(viewAll);
            }
            if (c == 1) {
                const image = document.createElement('img');
                image.setAttribute('alt', 'adani');
                image.setAttribute('width', '186px');
                image.setAttribute('height', '233px');
                image.setAttribute('loading', 'lazy');
                image.src = col.querySelector('img').src;
                rightLayout.appendChild(image);
                const updates = document.createElement('div');
                updates.classList.add('updates');
                const ul = col.querySelector('ul');
                ul.querySelectorAll('li').forEach((li, i) => {
                    if (i == 0) {
                        const heading = document.createElement('p');
                        heading.classList.add('heading');
                        heading.textContent = li.textContent;
                        updates.appendChild(heading);
                        const quote = document.createElement('img');
                        quote.classList.add('quote');
                        quote.src = '../../icons/quote.png';
                        quote.setAttribute('width', '30px');
                        quote.setAttribute('height', '30px');
                        quote.setAttribute('alt', 'quote');
                        quote.setAttribute('loading', 'lazy');
                        updates.appendChild(quote);
                    }
                    if (i == 1) {
                        const heroTxt = document.createElement('p');
                        heroTxt.classList.add('heroTxt');
                        heroTxt.textContent = li.textContent;
                        updates.appendChild(heroTxt);
                    }
                    if (i == 2) {
                        const name = document.createElement('p');
                        name.classList.add('name');
                        name.textContent = li.textContent;
                        updates.appendChild(name);
                    }
                    if (i == 3) {
                        const heading = document.createElement('p');
                        heading.classList.add('heading');
                        heading.textContent = li.textContent;
                        updates.appendChild(heading);
                    }
                });
                rightLayout.appendChild(updates);
            }
        });
    });
    block.innerHTML = '';
    block.appendChild(leftLayout);
    block.appendChild(rightLayout);
}