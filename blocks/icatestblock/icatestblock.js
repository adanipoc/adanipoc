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
    const columns = [...row.children];
    const question = columns[0];
    const answer = columns[1] || null;
    
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
    if (answer && answer.textContent.trim()) {
      answerDiv.innerHTML = answer.innerHTML;
    }
    
    // Toggle functionality
    questionButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close other open accordions (optional - remove if you want multiple open)
      const allItems = accordionContainer.querySelectorAll('.faq-accordion-item');
      allItems.forEach(item => {
        if (item !== accordionItem && item.classList.contains('active')) {
          item.classList.remove('active');
          const btn = item.querySelector('.faq-question');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current accordion
      const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';
      questionButton.setAttribute('aria-expanded', !isExpanded);
      accordionItem.classList.toggle('active');
    });
    
    accordionItem.appendChild(questionButton);
    accordionItem.appendChild(answerDiv);
    accordionContainer.appendChild(accordionItem);
  });
  
  // Create "See More" button
  const seeMoreButton = document.createElement('button');
  seeMoreButton.className = 'faq-see-more';
  seeMoreButton.textContent = seeMoreLabel;
  seeMoreButton.setAttribute('type', 'button');
  
  if (rows.length > initialVisibleCount) {
    seeMoreButton.addEventListener('click', (e) => {
      e.preventDefault();
      const hiddenItems = accordionContainer.querySelectorAll('.faq-accordion-item.hidden');
      hiddenItems.forEach(item => {
        item.classList.remove('hidden');
        // Add animation
        setTimeout(() => {
          item.style.opacity = '1';
        }, 10);
      });
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
