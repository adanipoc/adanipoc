export default function decorate(block) {
  const rows = [...block.children];
  const initialVisibleCount = 2;

  // Get "see more" label from last row
  let seeMoreLabel = 'see more';
  const lastRow = rows[rows.length - 1];
  if (lastRow && lastRow.children.length === 1) {
    seeMoreLabel = lastRow.textContent.trim();
    rows.pop(); // Remove label row from FAQ items
  }

  // Create accordion container
  const accordionContainer = document.createElement('div');
  accordionContainer.className = 'faq-accordion-container';

  // Process each FAQ item
  rows.forEach((row, index) => {
    const [question, answer] = [...row.children];

    // Create accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'faq-accordion-item';

    if (index >= initialVisibleCount) {
      accordionItem.classList.add('hidden');
    }

    // Create question button
    const questionButton = document.createElement('button');
    questionButton.className = 'faq-question';
    questionButton.textContent = question.textContent;
    questionButton.setAttribute('aria-expanded', 'false');

    // Create answer container
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';
    answerDiv.innerHTML = answer.innerHTML;

    // Toggle functionality
    questionButton.addEventListener('click', () => {
      const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';
      questionButton.setAttribute('aria-expanded', !isExpanded);
      accordionItem.classList.toggle('active');
    });

    accordionItem.appendChild(questionButton);
    accordionItem.appendChild(answerDiv);
    accordionContainer.appendChild(accordionItem);
  });

  // Create "See More" button if there are hidden items
  if (rows.length > initialVisibleCount) {
    const seeMoreButton = document.createElement('button');
    seeMoreButton.className = 'faq-see-more';
    seeMoreButton.textContent = seeMoreLabel;

    seeMoreButton.addEventListener('click', () => {
      const hiddenItems = accordionContainer.querySelectorAll('.faq-accordion-item.hidden');
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      seeMoreButton.style.display = 'none';
    });

    accordionContainer.appendChild(seeMoreButton);
  }

  // Clear and append
  block.textContent = '';
  block.appendChild(accordionContainer);
}