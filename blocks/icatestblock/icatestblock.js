export default function decorate(block) {
  const rows = [...block.children];

  // First row contains the title "frequently asked questions"
  const titleRow = rows.shift();
  const title = titleRow.textContent.trim();

  // Last row contains the "see more" label
  const seeMoreRow = rows.pop();
  const seeMoreLabel = seeMoreRow.textContent.trim();

  const initialVisibleCount = 2;

  // Create title
  const titleElement = document.createElement('h2');
  titleElement.className = 'faq-title';
  titleElement.textContent = title;

  // Create accordion container
  const accordionContainer = document.createElement('div');
  accordionContainer.className = 'faq-accordion-container';

  // Process each FAQ item
  rows.forEach((row, index) => {
    const [question] = [...row.children];

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

    // Create answer container (empty initially, can be populated if needed)
    const answerDiv = document.createElement('div');
    answerDiv.className = 'faq-answer';

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
  const seeMoreButton = document.createElement('button');
  seeMoreButton.className = 'faq-see-more';
  seeMoreButton.textContent = seeMoreLabel;

  if (rows.length > initialVisibleCount) {
    seeMoreButton.addEventListener('click', () => {
      const hiddenItems = accordionContainer.querySelectorAll('.faq-accordion-item.hidden');
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      seeMoreButton.style.display = 'none';
    });
  } else {
    seeMoreButton.style.display = 'none';
  }

  // Clear and append
  block.textContent = '';
  block.appendChild(titleElement);
  block.appendChild(accordionContainer);
  block.appendChild(seeMoreButton);
}