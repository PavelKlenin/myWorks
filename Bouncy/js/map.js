const mapBtn = document.querySelector('.map_shadow-icon > i');
const map = document.querySelector('.map_address');
const mapShadow = document.querySelector('.map_shadow');
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  mapBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mapShadow.classList.add('transparent');
    setTimeout(() => {
      mapShadow.classList.add('hidden');
    }, 400);
  })

  container.addEventListener('click', (e) => {
    if (e.target != mapShadow && e.target != mapBtn) {
      mapShadow.classList.remove('hidden');
      setTimeout(() => {
        mapShadow.classList.remove('transparent');
      }, 0);
    }
  })
})