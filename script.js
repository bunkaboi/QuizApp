let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Juston Bieber",
        "right-answer": 3
    },
    {
        "question": "Wer hat an der Uhr gedreht?",
        "answer_1": "Salvador Dali",
        "answer_2": "Snoop Dogg",
        "answer_3": "Robert Lex",
        "answer_4": "Der rosarote Panther",
        "right-answer": 4
    },
    {
        "question": "Wieso liegt hier Stroh rum?",
        "answer_1": "Die Bauern streiken",
        "answer_2": "Warum hast du eine Maske auf?",
        "answer_3": "wir sind in einer Scheune",
        "answer_4": "Keine Ahnung",
        "right-answer": 2
    }
]

let currentQuestion = 1;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();
    showAnswers();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
}

function showAnswers() {
    let question = questions[currentQuestion];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}