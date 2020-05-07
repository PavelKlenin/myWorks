const designContent = document.querySelectorAll('.design_content-info');
const designBtns = document.querySelectorAll('.design_content-icon');

document.addEventListener('DOMContentLoaded', () => {
  switchTab(designBtns, designContent, 'design');
})