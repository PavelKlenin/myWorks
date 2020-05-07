const blogDate = document.querySelectorAll('.date');
const monthField = document.querySelector('.cal-month');
const yearField = document.querySelector('.cal-year');
const datesField = document.querySelector('.cal-dates');
const nextMonthBtn = document.querySelector('.next-month');
const prevMonthBtn = document.querySelector('.prev-month');


function Calendar(monthField, yearField, datesField) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = new Date();
  let currentMonth = 0;
  let currentYear = 0;

  this.init = () => {
    calendarView(date.getFullYear(), date.getMonth());
  }

  // проверка на високосный год
  const bissextile = (year) => {
    if ((year % 400 == 0 && year % 100 == 0) || (year % 100 !== 0 && year % 4 == 0)) {
      monthDays[1] = 29;
    }
  }

  const setMonth = (month) => {
    monthField.innerHTML = months[month];
    currentMonth = month;
  }

  const setYear = (year) => {
    yearField.innerHTML = year;
    currentYear = year;
  }

  const setDates = (year, month) => {
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const blogDatesArr = getBlogDates();
    
    // удаляем предыдущие данные
    datesField.innerHTML = '';


    bissextile(year);

    // получаем номер дня недели, воскресенье - 7й день
    let weekDay = new Date(year, month, 1).getDay();
    if (weekDay == 0) {
      weekDay = 7;
    }

    // пустые клетки, чтобы первое число месяца совпало с днем недели
    for (i = 1; i < weekDay; i++) {
      let emptyField = document.createElement('div');
      emptyField.classList.add('cal-day')
      datesField.appendChild(emptyField);
    }

    // заполняем дни
    for (let day = 1; day <= monthDays[month]; day++) {
      let newDate = new Date(year, month, day);
      let newDay = document.createElement('div');
      newDay.classList.add('cal-day', 'one-day');
      newDay.innerHTML =  day;
      // сравниваем каждый день с сегодняшним
      if (today - newDate == 0) {
        newDay.classList.add('today');
      }
      blogDatesArr.forEach((elem) => {
        if(newDate - elem == 0) {
          newDay.classList.add('day-with-blog');
        }
      })
      datesField.appendChild(newDay);
    }

    let weeksInMonth = document.querySelectorAll('.cal-day').length / 7;
    if (weeksInMonth <= 5) {
      datesField.style.gridTemplateRows = 'repeat(5, 30px)';
    }
  }

  const calendarView = (year, month) => {
    setMonth(month);
    setYear(year);
    setDates(year, month);
  }

  const getBlogDates = () => {
    let blogDates = [];
    blogDate.forEach((elem, i) => {
      let blogYear = elem.getAttribute('data-year');
      let blogMonth = elem.getAttribute('data-month');
      let blogDate = elem.getAttribute('data-date');
      let blogFullDate = new Date(blogYear, blogMonth, blogDate);
      blogDates = [...blogDates, blogFullDate];
    })
    return blogDates;
  }

  this.nextMonth = () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    calendarView(currentYear, currentMonth);
  }

  this.prevMonth = () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    calendarView(currentYear, currentMonth);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let calendar = new Calendar(monthField, yearField, datesField);
  calendar.init();

  nextMonthBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calendar.nextMonth();
  })

  prevMonthBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calendar.prevMonth();
  })
})