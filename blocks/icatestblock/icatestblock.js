export default function decorate(block) {
  // Collect each authored row (each row is a div; each col is a child div)
  const rows = [...block.children].filter((row) => row.children && row.children.length);

  // Build FAQ items as <details><summary>Q</summary><div>A</div></details>
  const items = rows.map((row) => {
    const [qCol, aCol] = row.children;

    const questionText = (qCol?.textContent || '').trim();

    const details = document.createElement('details');
    details.className = 'faq-item';

    const summary = document.createElement('summary');
    summary.className = 'faq-question';
    summary.textContent = questionText;

    const answer = document.createElement('div');
    answer.className = 'faq-answer';

    // Move all authored nodes from the answer column into the answer container
    while (aCol && aCol.firstChild) {
      answer.appendChild(aCol.firstChild);
    }

    details.append(summary, answer);
    return details;
  });

  // Clear the original block content
  block.textContent = '';

  // Show only first 2 initially; hide the rest
  const initialCount = 2;
  items.forEach((item, idx) => {
    if (idx >= initialCount) {
      item.classList.add('collapsed');
    }
    block.appendChild(item);
  });

  // Add "See more" button if needed
  if (items.length > initialCount) {
    const seeMore = document.createElement('button');
    seeMore.type = 'button';
    seeMore.className = 'faq-see-more';
    seeMore.setAttribute('aria-expanded', 'false');
    seeMore.textContent = 'See more';

    seeMore.addEventListener('click', () => {
      block.querySelectorAll('.faq-item.collapsed').forEach((el) => el.classList.remove('collapsed'));
      seeMore.remove();
    });

    block.appendChild(seeMore);
  }
}