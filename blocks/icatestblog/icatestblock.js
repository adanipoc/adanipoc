export default function decorate(block) {
    const rows = [...block.children];

    // Create main container
    const blogContainer = document.createElement('div');
    blogContainer.classList.add('blog-container');

    rows.forEach((row, index) => {
        const col = row.querySelector('div');
        const content = col?.textContent?.trim();

        if (index === 0 && content) {
            // Blog Tag/Category
            const blogTag = document.createElement('span');
            blogTag.classList.add('blog-tag');
            blogTag.textContent = content;
            blogContainer.appendChild(blogTag);
        }

        if (index === 1 && content) {
            // Blog Title
            const blogTitle = document.createElement('h1');
            blogTitle.classList.add('blog-title');
            blogTitle.textContent = content;
            blogContainer.appendChild(blogTitle);
        }

        if (index === 2 && content) {
            // Publish Date
            const publishDate = document.createElement('p');
            publishDate.classList.add('publish-date');
            publishDate.textContent = content;
            blogContainer.appendChild(publishDate);
        }

        if (index === 3) {
            // Banner Image
            const imgElement = col?.querySelector('img');
            if (imgElement) {
                const bannerWrapper = document.createElement('div');
                bannerWrapper.classList.add('banner-wrapper');

                const bannerImg = document.createElement('img');
                bannerImg.classList.add('blog-banner');
                bannerImg.src = imgElement.src;
                bannerImg.alt = imgElement.alt || 'Blog Banner';
                bannerImg.setAttribute('loading', 'eager');
                bannerImg.setAttribute('width', '1200');
                bannerImg.setAttribute('height', '600');

                bannerWrapper.appendChild(bannerImg);
                blogContainer.appendChild(bannerWrapper);
            }
        }

        if (index === 4 && content) {
            // Rich Text Content
            const richTextWrapper = document.createElement('div');
            richTextWrapper.classList.add('rich-text-content');

            // Preserve any HTML content from the cell
            const contentDiv = col.cloneNode(true);
            richTextWrapper.innerHTML = contentDiv.innerHTML;

            blogContainer.appendChild(richTextWrapper);
        }
    });

    // Clear and append new structure
    block.innerHTML = '';
    block.appendChild(blogContainer);
}
