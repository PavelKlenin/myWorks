const vintageProj = document.querySelectorAll('.projects-vintage-img');
const brandingProj = document.querySelectorAll('.projects-branding-img');

let imgIndex;

const toggleProjects = (project) => {
  project.forEach((el, i) => {
    el.classList.contains('project-img-active') ? imgIndex = i : null;
  });
  if (project[imgIndex].classList.contains('project-img-active')) {
    project[imgIndex].classList.remove('project-img-active');
    imgIndex == project.length-1 ? imgIndex = -1 : null;
    project[imgIndex+1].classList.add('project-img-active');
  } 
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    toggleProjects(vintageProj);
  }, 2500);  
  setInterval(() => {
    toggleProjects(brandingProj);
  }, 3000);
});
