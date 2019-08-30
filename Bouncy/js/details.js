const detailsContent = document.querySelectorAll('.details_content');
const detailsBtns = document.querySelectorAll('.details_icon');

document.addEventListener('DOMContentLoaded', () => {
  switchTab(detailsBtns, detailsContent, 'details');
})