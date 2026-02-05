export default function decorate(block) {
    const rows = [...block.children];

    // Create main container
    const blogContainer = document.createElement('div');
    blogContainer.classList.add('blog-container');

    // Create content wrapper for tag, title, and date
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('blog-header');

    rows.forEach((row, index) => {
        const col = row.querySelector('div');
        const content = col?.textContent?.trim();

        if (index === 0 && content) {
            // Blog Tag/Category
            const blogTag = document.createElement('span');
            blogTag.classList.add('blog-tag');
            blogTag.textContent = content;
            headerWrapper.appendChild(blogTag);
        }

        if (index === 1 && content) {
            // Blog Title
            const blogTitle = document.createElement('h1');
            blogTitle.classList.add('blog-title');
            blogTitle.textContent = content;
            headerWrapper.appendChild(blogTitle);
        }

        if (index === 2 && content) {
            // Publish Date
            const publishDate = document.createElement('p');
            publishDate.classList.add('publish-date');
            publishDate.textContent = content;
            headerWrapper.appendChild(publishDate);
        }

        if (index === 3) {
            // Banner Image
            const picture = col.querySelector('picture');
            const img = col.querySelector('img');

            const bannerWrapper = document.createElement('div');
            bannerWrapper.classList.add('banner-wrapper');

            if (picture) {
                const pictureClone = picture.cloneNode(true);
                const imgInPicture = pictureClone.querySelector('img');
                if (imgInPicture) {
                    imgInPicture.classList.add('blog-banner');
                }
                bannerWrapper.appendChild(pictureClone);
            } else if (img) {
                const imgClone = img.cloneNode(true);
                imgClone.classList.add('blog-banner');
                bannerWrapper.appendChild(imgClone);
            }

            if (bannerWrapper.children.length > 0) {
                blogContainer.appendChild(headerWrapper);
                blogContainer.appendChild(bannerWrapper);
            }
        }

        if (index === 4) {
            // Rich Text Content
            const richTextWrapper = document.createElement('div');
            richTextWrapper.classList.add('rich-text-content');

            // Move all child elements
            while (col.firstChild) {
                richTextWrapper.appendChild(col.firstChild);
            }

            blogContainer.appendChild(richTextWrapper);
        }
    });

    // Clear and append new structure
    block.innerHTML = '';
    block.appendChild(blogContainer);
}