const teammates = document.querySelectorAll('.teammate');
const teamButtons = document.querySelectorAll('.team_icon');

document.addEventListener('DOMContentLoaded', () => {
  switchTab(teamButtons, teammates, 'team');
})