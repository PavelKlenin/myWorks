const switchTab = (buttons, content, articleClass) => {
  buttons.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      buttons.forEach((btn) => {
        btn.classList.remove(`${articleClass}_icon-active`);
      })
      btn.classList.add(`${articleClass}_icon-active`);
      
      content.forEach((block) => {
        block.classList.remove(`${articleClass}_active-content`);
      })
      content[i].classList.add(`${articleClass}_active-content`);
    })
  })
}