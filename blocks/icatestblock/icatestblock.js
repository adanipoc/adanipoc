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
  
  // Extract "see more" and "see less" labels (last row with single or two columns)
  let seeMoreLabel = 'see more';
  let seeLessLabel = 'see less';
  const lastRow = rows[rows.length - 1];
  if (lastRow && lastRow.children.length >= 1) {
    seeMoreLabel = lastRow.children[0].textContent.trim();
    if (lastRow.children.length === 2 && lastRow.children[1].textContent.trim()) {
      seeLessLabel = lastRow.children[1].textContent.trim();
    }
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
  
  // Create "See More/Less" toggle button if there are hidden items
  if (rows.length > initialVisibleCount) {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'faq-see-more';
    toggleButton.textContent = seeMoreLabel;
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-expanded', 'false');
    
    toggleButton.addEventListener('click', () => {
      const isExpanded = toggleButton.getAttribute('data-expanded') === 'true';
      const hiddenItems = accordionContainer.querySelectorAll('.faq-accordion-item.hidden');
      
      if (!isExpanded) {
        // Expand: Show all hidden items
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        toggleButton.textContent = seeLessLabel;
        toggleButton.setAttribute('data-expanded', 'true');
        toggleButton.classList.add('expanded');
      } else {
        // Collapse: Hide items beyond initial count
        const allItems = accordionContainer.querySelectorAll('.faq-accordion-item');
        allItems.forEach((item, index) => {
          if (index >= initialVisibleCount) {
            item.classList.add('hidden');
            // Close any open accordions in hidden items
            item.classList.remove('active');
            const btn = item.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });
        toggleButton.textContent = seeMoreLabel;
        toggleButton.setAttribute('data-expanded', 'false');
        toggleButton.classList.remove('expanded');
      }
    });
    
    faqContainer.appendChild(toggleButton);
  }
  
  // Clear and append
  block.textContent = '';
  block.appendChild(faqContainer);
}