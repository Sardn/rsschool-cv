const aboutText = [
    'Hi! I am a beginner Frontend developer. Ready to work in an office in Yekaterinburg or remotely.',
    ' He started training in July 2021 and got carried away with the process. A great desire',
    'to realize yourself in production development. It is interesting how the process of creating a',
    'product is built in teams: interaction, problem solving, result. Life experience and diversity in',
    'professional activities led to a meaningful and balanced decision to devote most of his life to the',
    'field of information technology, to do it seriously and thoroughly. I like working in a team. I like',
    'to share experiences. I love development and self-improvement. My goal is to become a great',
    'developer, a professional in my field.'
];

function printLine() {
    let line = 0;
    let counter = 0;
    let past = "";
    let result = document.querySelector(".about-descr");
    function typeLine() {
        let spacing = setTimeout(function () {
            past += aboutText[line][counter];
            result.innerHTML = past + "|";
            counter++;
            if (counter >= aboutText[line].length) {
                counter = 0;
                line++;
                if (line == aboutText.length) {
                    clearTimeout(spacing);
                    result.innerHTML = past;
                    return true;
                }
            }
            typeLine();
        }, getRandInt(getRandInt(100 * 2)));
    }
    typeLine();
}
printLine();

function getRandInt(maximum) {
    return Math.floor(Math.random() * Math.floor(maximum));
}


// Тема
let flagTheme = false;

function themeChange() {
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        flagTheme = !flagTheme;
        themeBtn.classList.toggle('dark');
        document.body.classList.toggle('night');
    });
}
themeChange();

// кнопка скролл
const scrollToTopButton = document.getElementById("scrollToTop");
const handleScroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopButton.style.display = "block";
    }
    else {
        scrollToTopButton.style.display = "none";
    }
};

const scrollToTop = () => {
    const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (distanceFromTop > 0) {
        window.scrollTo(0, 0);
    }
};
document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
});

//burger
const burger = document.querySelector('.burger'),
    burgerNav = document.querySelector('.nav'),
    navLink = document.querySelectorAll('.nav-link'),
    body = document.querySelector('body'),
    // overlay = document.querySelector('.overlay'),
    burgerBackground = document.querySelector('.burger-background');

burger.addEventListener('click', function (e) {
    // e.stopPropagation();
    burger.classList.toggle('active');
    burgerNav.classList.toggle('open');
    body.classList.toggle('lock');
    burgerBackground.classList.toggle('background-open')
})

//клик по ссылкам
for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        burger.classList.remove('active');
        burgerNav.classList.remove('open');
        body.classList.remove('lock');
        burgerBackground.classList.remove('background-open')

    })
}

// клик снаружи
document.addEventListener('click', function (e) {
    if (e.target === burgerBackground) {
        burger.classList.remove('active');
        burgerNav.classList.remove('open');
        body.classList.remove('lock');
        burgerBackground.classList.remove('background-open')
    }
})

const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();

