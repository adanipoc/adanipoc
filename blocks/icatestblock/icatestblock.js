export default function decorate(block) {
  const rows = [...block.querySelectorAll('tr')];

  if (rows.length < 3) return; // must have at least 3 rows

  // Last row is the toggle row
  const toggleRow = rows[rows.length - 1];
  const toggleCell = toggleRow.querySelector('td');
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'faq-toggle';
  toggleBtn.textContent = 'See more';
  toggleCell.innerHTML = '';
  toggleCell.appendChild(toggleBtn);

  // FAQ rows: skip row 0 (title) and last row (button)
  const faqRows = rows.slice(1, rows.length - 1);

  faqRows.forEach((row, index) => {
    const cell = row.querySelector('td');
    cell.classList.add('faq-question');

    // hide after first 2
    if (index > 1) {
      row.classList.add('faq-hidden');
    }
  });

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.textContent === 'See less';
    faqRows.forEach((row, index) => {
      if (index > 1) {
        row.style.display = isExpanded ? 'none' : 'table-row';
      }
    });
    toggleBtn.textContent = isExpanded ? 'See more' : 'See less';
  });
}
