export default function decorate(block) {
  const rows = [...block.children];

  // Create form container
  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.className = 'custom-form';

  rows.forEach((row) => {
    const cells = [...row.children];
    const fieldType = cells[0]?.textContent.trim().toLowerCase();

    if (fieldType === 'mobile') {
      const mobileField = createMobileField(cells);
      form.appendChild(mobileField);
    } else if (fieldType === 'dob') {
      const dobField = createDOBField(cells);
      form.appendChild(dobField);
    } else if (fieldType === 'radio') {
      const radioField = createRadioField(cells);
      form.appendChild(radioField);
    }
  });

  formContainer.appendChild(form);
  block.textContent = '';
  block.appendChild(formContainer);
}

function createMobileField(cells) {
  const label = cells[1]?.textContent.trim() || 'Your registered mobile number:';
  const placeholder = cells[2]?.textContent.trim() || '+91 _';
  const helperText = cells[3]?.textContent.trim() || 'Please have it handy to verify OTP';

  const fieldGroup = document.createElement('div');
  fieldGroup.className = 'form-field-group';

  const labelEl = document.createElement('label');
  labelEl.className = 'form-label';
  labelEl.textContent = label;

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'input-wrapper';

  const input = document.createElement('input');
  input.type = 'tel';
  input.className = 'form-input mobile-input';
  input.placeholder = placeholder;
  input.setAttribute('maxlength', '15');

  const helper = document.createElement('span');
  helper.className = 'helper-text';
  helper.textContent = helperText;

  inputWrapper.appendChild(input);
  fieldGroup.appendChild(labelEl);
  fieldGroup.appendChild(inputWrapper);
  fieldGroup.appendChild(helper);

  return fieldGroup;
}

function createDOBField(cells) {
  const label = cells[1]?.textContent.trim() || 'Your Date of Birth:';
  const linkText = cells[2]?.textContent.trim() || 'Having issues? Click to validate with PAN';

  const fieldGroup = document.createElement('div');
  fieldGroup.className = 'form-field-group';

  const labelWrapper = document.createElement('div');
  labelWrapper.className = 'label-with-link';

  const labelEl = document.createElement('label');
  labelEl.className = 'form-label';
  labelEl.textContent = label;

  const linkEl = document.createElement('a');
  linkEl.className = 'form-link';
  linkEl.href = '#';
  linkEl.textContent = linkText;

  labelWrapper.appendChild(labelEl);

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'input-wrapper dob-wrapper';

  const dayInput = document.createElement('input');
  dayInput.type = 'text';
  dayInput.className = 'form-input dob-input';
  dayInput.placeholder = 'DD';
  dayInput.setAttribute('maxlength', '2');
  dayInput.setAttribute('pattern', '[0-9]*');

  const monthInput = document.createElement('input');
  monthInput.type = 'text';
  monthInput.className = 'form-input dob-input';
  monthInput.placeholder = 'MM';
  monthInput.setAttribute('maxlength', '2');
  monthInput.setAttribute('pattern', '[0-9]*');

  const yearInput = document.createElement('input');
  yearInput.type = 'text';
  yearInput.className = 'form-input dob-input';
  yearInput.placeholder = 'YYYY';
  yearInput.setAttribute('maxlength', '4');
  yearInput.setAttribute('pattern', '[0-9]*');

  inputWrapper.appendChild(dayInput);
  inputWrapper.appendChild(monthInput);
  inputWrapper.appendChild(yearInput);

  const helper = document.createElement('span');
  helper.className = 'helper-text link-helper';
  helper.appendChild(linkEl);

  fieldGroup.appendChild(labelWrapper);
  fieldGroup.appendChild(inputWrapper);
  fieldGroup.appendChild(helper);

  return fieldGroup;
}

function createRadioField(cells) {
  const label = cells[1]?.textContent.trim() || 'Your source of income:';
  const option1 = cells[2]?.textContent.trim() || 'Salaried';
  const option1Note = cells[3]?.textContent.trim() || 'Income verification or salary proof maybe required for processing loan request';
  const option2 = cells[4]?.textContent.trim() || 'Self Employed / Professionals / Business';

  const fieldGroup = document.createElement('div');
  fieldGroup.className = 'form-field-group';

  const labelEl = document.createElement('label');
  labelEl.className = 'form-label';
  labelEl.textContent = label;

  const radioWrapper = document.createElement('div');
  radioWrapper.className = 'radio-wrapper';

  // Option 1
  const radio1Container = document.createElement('div');
  radio1Container.className = 'radio-container';

  const radio1 = document.createElement('input');
  radio1.type = 'radio';
  radio1.id = 'income-salaried';
  radio1.name = 'income-source';
  radio1.value = 'salaried';
  radio1.className = 'radio-input';

  const label1 = document.createElement('label');
  label1.htmlFor = 'income-salaried';
  label1.className = 'radio-label';

  const labelText1 = document.createElement('span');
  labelText1.className = 'radio-label-text';
  labelText1.textContent = option1;

  const note1 = document.createElement('span');
  note1.className = 'radio-note';
  note1.textContent = option1Note;

  label1.appendChild(labelText1);
  label1.appendChild(note1);

  radio1Container.appendChild(radio1);
  radio1Container.appendChild(label1);

  // Option 2
  const radio2Container = document.createElement('div');
  radio2Container.className = 'radio-container';

  const radio2 = document.createElement('input');
  radio2.type = 'radio';
  radio2.id = 'income-self-employed';
  radio2.name = 'income-source';
  radio2.value = 'self-employed';
  radio2.className = 'radio-input';

  const label2 = document.createElement('label');
  label2.htmlFor = 'income-self-employed';
  label2.className = 'radio-label';
  label2.textContent = option2;

  radio2Container.appendChild(radio2);
  radio2Container.appendChild(label2);

  radioWrapper.appendChild(radio1Container);
  radioWrapper.appendChild(radio2Container);

  fieldGroup.appendChild(labelEl);
  fieldGroup.appendChild(radioWrapper);

  return fieldGroup;
}
