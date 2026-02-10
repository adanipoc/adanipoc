export default function decorate(block) {
  const rows = [...block.children];
  const initialVisibleCount = 2;

  // Extract title (first row with single column)
  let title = '';
  let titleRow = null;
  if (rows[0] && rows[0].children.length === 1) {
    title = rows[0].textContent.trim();
    titleRow = rows.shift();
  }

  // Extract "see more" label (last row with single column)
  let seeMoreLabel = 'see more';
  const lastRow = rows[rows.length - 1];
  if (lastRow && lastRow.children.length === 1) {
    seeMoreLabel = lastRow.textContent.trim();
    rows.pop();
  }

  // Create main container
  const faqContainer = document.createElement('div');
  faqContainer.className = 'faq-wrapper';

  // Add title if exists
  if (title) {
    const titleElement = document.createElement('h2');
    titleElement.className = 'faq-title';
    titleElement.textContent = title;
    faqContainer.appendChild(titleElement);
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
    questionButton.textContent = question.textContent.trim();
    questionButton.setAttribute('aria-expanded', 'false');
    questionButton.setAttribute('type', 'button');

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

  faqContainer.appendChild(accordionContainer);

  // Create "See More" button if there are hidden items
  if (rows.length > initialVisibleCount) {
    const seeMoreButton = document.createElement('button');
    seeMoreButton.className = 'faq-see-more';
    seeMoreButton.textContent = seeMoreLabel;
    seeMoreButton.setAttribute('type', 'button');

    seeMoreButton.addEventListener('click', () => {
      const hiddenItems = accordionContainer.querySelectorAll('.faq-accordion-item.hidden');
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      seeMoreButton.style.display = 'none';
    });

    faqContainer.appendChild(seeMoreButton);
  }

  // Clear and append
  block.textContent = '';
  block.appendChild(faqContainer);
}