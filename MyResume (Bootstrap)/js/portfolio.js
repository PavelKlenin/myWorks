$(document).ready(() => {
  const buttons = $(".portfolio-btn");
  const myWorks = $(".portfolio-item");
  const works = $(".portfolio-wrap");
  const details = $(".portfolio-details").clone();
  const images = $(".portfolio-img").clone();
  let sliderItems = [];

  // Добавление элементов в карусель
  $(myWorks).each((i, work) => {
    // Создание нового элемент
    let newItem = $('<div class="carousel-item"></div>');
    // Добавление информации в элемент
    newItem.append(images[i], details[i]);
    // Добавление элемента в карусель
    $(".carousel-inner").append(newItem);
    // Замена классов для стилей в карусели
    $(details[i]).addClass("carousel-caption d-md-block");
    $(details[i]).removeClass("portfolio-details");
    // Показать ссылку
    $(`.carousel-caption > a:eq(${i})`).removeClass("invisible");

    sliderItems = [...sliderItems, newItem];

    $(work).click(() => {
      // Удаление "active" для предотвращения наложения
      // при повторных кликах
      $(sliderItems[i]).siblings(".carousel-item").removeClass("active");
      // Включение "нужного" слайда
      $(sliderItems[i]).hasClass("active")
        ? null
        : $(sliderItems[i]).addClass("active");
    });
  });

  const toggleView = (className = "portfolio-wrap") => {
    $(works).each((i, work) => {
      $(work).addClass("hidden");
      setTimeout(() => {
        $(work).addClass("hide");
        if ($(work).hasClass(className)) {
          $(work).removeClass("hide");
          setTimeout(() => {
            $(work).removeClass("hidden");
          }, 100);
        }
      }, 500);
    });
  };

  $(buttons).each((i, toggleBtn) => {
    $(toggleBtn).click(() => {
      if ($(toggleBtn).hasClass("reactjs")) {
        toggleView("reactjs");
      } else if ($(toggleBtn).hasClass("html")) {
        toggleView("html");
      } else toggleView();
    });
  });
});

/* //! JS
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".portfolio-btn");
  const works = document.querySelectorAll(".portfolio-wrap");

  const toggleView = (className = "portfolio-wrap") => {
    works.forEach((work) => {
      work.classList.add("hidden");
      work.classList.add("hide");
      if (work.classList.contains(className)) {
        work.classList.remove("hide");
        work.classList.remove("hidden");
      }
    });
  };

  buttons.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      if (toggleBtn.classList.contains("reactjs")) {
        toggleView("reactjs");
      } else if (toggleBtn.classList.contains("html")) {
        toggleView("html");
      } else toggleView();
    });
  });
}); */
