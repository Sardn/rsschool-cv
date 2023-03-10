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
