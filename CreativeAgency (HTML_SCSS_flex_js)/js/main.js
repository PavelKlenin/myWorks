/* NAVIGATION */
// плавная прокрутка к якорю
const [...navMain] = document.querySelectorAll('.menu > li > a');

navMain.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        const aim = document.querySelector(href);
        aim.scrollIntoView({block: 'start', behavior: 'smooth'});
    })
});

/* DEVELOPERS */
// массив developers для примера
const developers = [{
        name: 'John Doe',
        photo: './img/johnDoe.png',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' +
            'Accusamus illo a, officiis commodi vitae nesciunt doloremque' +
            'assumenda qui veniam cumque dignissimos quisquam ab, aliquid' +
            'porro facilis numquam perferendis. Enim, consectetur?',
    },
    {
        name: 'Mary Poppins',
        photo: './img/johnDoe.png',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' +
            'Deleniti, sint ea! Magni magnam hic adipisci distinctio' +
            'veniam obcaecati eum similique fugiat! Eaque delectus quas' +
            'quis quaerat magnam est sequi quos',
    },
    {
        name: 'Kim Chan',
        photo: './img/johnDoe.png',
        about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' +
            'Eaque laborum maxime voluptas temporibus consectetur, earum optio,' +
            'voluptate suscipit quasi laudantium magnam repudiandae numquam' +
            'expedita ipsa dignissimos officia quos voluptatibus quia?',
    }
]

const time = 0.5;
const [...dots] = document.querySelectorAll('.dot');
const [...developer] = [
    document.querySelector('.devImg'),
    document.querySelector('.devAbout'),
    document.querySelector('.devName')
];

// наполнение контента
const devContent = (dev = {name:'', photo:'', about:''}) => {
    document.querySelector('.devImg').setAttribute('src', dev.photo);
    document.querySelector('.devAbout').innerHTML = dev.about;
    document.querySelector('.devName').innerHTML = dev.name;
}

// плавное изменение прозрачности
const devOpacity = (opacity) => {
    developer.forEach((dev) => {
        dev.style.transition = `opacity ${time}s`;
        dev.style.opacity = opacity;
    });
}

// свой developer для каждой точки
dots.forEach((dot, i) => {
    if (dot.classList.value.indexOf('activeDot') >= 0) {
        devContent(developers[i]);
    }
});

// нажатие на точки
dots.forEach((dot, i) => {
    dot.addEventListener('click', (event) => {
        event.preventDefault();
        devOpacity(0);

        dots.forEach((dot) => {dot.classList.remove('activeDot')});
        dot.classList.add('activeDot');

        setTimeout(() => {
            devContent(developers[i]);
            devOpacity(1);
        }, (time*1000));
    });
});