export default function decorate(block) {
  const rows = [...block.children];

  // Create SSO container
  const ssoContainer = document.createElement('div');
  ssoContainer.className = 'sso-integration-container';

  // Create header section
  const headerSection = document.createElement('div');
  headerSection.className = 'sso-header';

  const title = document.createElement('h2');
  title.textContent = 'SSO Integration Details';
  title.className = 'sso-title';

  headerSection.appendChild(title);

  // Create content sections
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'sso-content-wrapper';

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length === 1) {
      // Section header
      const sectionHeader = document.createElement('h3');
      sectionHeader.className = 'sso-section-header';
      sectionHeader.innerHTML = cells[0].innerHTML;
      contentWrapper.appendChild(sectionHeader);
    } else if (cells.length === 2) {
      // Key-value pair or endpoint
      const itemDiv = document.createElement('div');
      itemDiv.className = 'sso-item';

      const label = document.createElement('span');
      label.className = 'sso-label';
      label.textContent = cells[0].textContent;

      const value = document.createElement('span');
      value.className = 'sso-value';
      value.innerHTML = cells[1].innerHTML;

      // Check if value contains URL
      if (cells[1].textContent.includes('http')) {
        value.classList.add('sso-endpoint');
      }

      itemDiv.appendChild(label);
      itemDiv.appendChild(value);
      contentWrapper.appendChild(itemDiv);
    } else if (cells.length === 3) {
      // Field specification table
      if (!contentWrapper.querySelector('.sso-field-table')) {
        const table = document.createElement('table');
        table.className = 'sso-field-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        cells.forEach(cell => {
          const th = document.createElement('th');
          th.textContent = cell.textContent;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        tbody.className = 'sso-table-body';
        table.appendChild(tbody);

        contentWrapper.appendChild(table);
      } else {
        const tbody = contentWrapper.querySelector('.sso-table-body');
        const dataRow = document.createElement('tr');
        cells.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell.textContent;
          dataRow.appendChild(td);
        });
        tbody.appendChild(dataRow);
      }
    }
  });

  ssoContainer.appendChild(headerSection);
  ssoContainer.appendChild(contentWrapper);

  // Clear and append
  block.textContent = '';
  block.appendChild(ssoContainer);
}