const columnHeight = [130, 45, 260, 80, 175, 100];
const columns = document.querySelectorAll('.time-block__column');
const columnStyle = () => {
  if (window.screen.width > 1439) {
    columns.forEach((item, i) => {
      item.style.height = `${columnHeight[i]}px`;
      item.style.width = `45px`;
    });
  } else if(window.screen.width > 425) {
    columns.forEach((item, i) => {
      item.style.width = `${columnHeight[i]}px`;
      item.style.height = `45px`;
    });
  } else {
    columns.forEach((item, i) => {
      item.style.width = `${columnHeight[i]/1.2}px`;
      item.style.height = `45px`;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {

  columnStyle();

  window.onresize = () => {
    columnStyle();
  }

}); 