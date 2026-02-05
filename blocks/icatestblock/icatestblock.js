export default function decorate(block) {
const rows = [...block.children];
const container = document.createElement('div');
container.classList.add('faq-accordion');
const faqItems = [];
// Build FAQ items except last row
rows.forEach((row, index) => {
const cols = [...row.children];
const question = cols[0]?.textContent.trim();
const answer = cols[1]?.innerHTML.trim();
// Last row = See More
if (index === rows.length - 1) {
return;
}
const item = document.createElement('div');
item.classList.add('faq-item');
const q = document.createElement('div');
q.classList.add('faq-question');
q.textContent = question;
const a = document.createElement('div');
a.classList.add('faq-answer');
a.innerHTML = answer;
q.addEventListener('click', () => {
a.classList.toggle('open');
q.classList.toggle('active');
});
item.appendChild(q);
item.appendChild(a);
faqItems.push(item);
});
// Add FAQ items to container
faqItems.forEach((item, i) => {
if (i > 1) item.classList.add('hidden-faq');
container.appendChild(item);
});
// Create See More / See Less link
const seeMore = document.createElement('div');
seeMore.classList.add('see-more');
seeMore.textContent = 'See More';
let expanded = false;
seeMore.addEventListener('click', () => {
expanded = !expanded;
faqItems.forEach((item, i) => {
if (i > 1) {
if (expanded) item.classList.remove('hidden-faq');
else item.classList.add('hidden-faq');
}
});
seeMore.textContent = expanded ? 'See Less' : 'See More';
});
container.appendChild(seeMore);
block.innerHTML = '';
block.appendChild(container);
}