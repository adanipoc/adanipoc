export default function decorate(block) {
  const rows = [...block.querySelectorAll('tr')];

  // Remove heading row if present
  const headingRow = rows[0];
  const faqRows = rows.slice(1, rows.length - 1);
  const toggleRow = rows[rows.length - 1];

  // Convert FAQ cells
  faqRows.forEach((row, index) => {
    row.classList.add('faq-row');

    const cell = row.querySelector('td');
    cell.classList.add('faq-question');

    // Hide rows after second
    if (index > 1) {
      row.classList.add('faq-hidden');
    }
  });

  // Convert last row into a button
  const toggleCell = toggleRow.querySelector('td');
  const button = document.createElement('button');
  button.className = 'faq-toggle-btn';
  button.textContent = 'See more';
  toggleCell.innerHTML = '';
  toggleCell.appendChild(button);

  // Toggle functionality
  button.addEventListener('click', () => {
    const hiddenFaqs = block.querySelectorAll('.faq-hidden');

    const shouldShow = hiddenFaqs[0].style.display !== 'table-row';

    hiddenFaqs.forEach(r => {
      r.style.display = shouldShow ? 'table-row' : 'none';
    });

    button.textContent = shouldShow ? 'See less' : 'See more';
  });
}
