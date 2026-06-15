
const questions = [
    { q: "What is the capital of France?", a: ["Berlin", "Paris", "Rome", "Madrid"], c: 1 },
    { q: "2 + 2 equals?", a: ["3", "4", "5", "6"], c: 1 },
    { q: "Which planet is called the Red Planet?", a: ["Earth", "Mars", "Venus", "Jupiter"], c: 1 },
    { q: "Fastest land animal?", a: ["Lion", "Cheetah", "Tiger", "Horse"], c: 1 },
    { q: "Eleven’s real name in Stranger Things?", a: ["Jane", "Max", "Nancy", "Robin"], c: 0 },
    { q: "World's greatest footballer?", a: ["Cristiano Ronaldo", "Mohamed Salah", "Lionel Messi", "Kylian Mbappe"], c: 2 },
    { q: "Which gas do humans breathe in?", a: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], c: 0 },
    { q: "Which ocean is the largest?", a: ["Atlantic", "Indian", "Arctic", "Pacific"], c: 3 },
    { q: "What is H2O?", a: ["Oxygen", "Hydrogen", "Water", "Helium"], c: 2 },
    { q: "Who wrote Hamlet?", a: ["Shakespeare", "Tolstoy", "Dickens", "Hemingway"], c: 0 },

];

let current = 0;
let username = "";
let answers = Array(questions.length).fill(null);
let score = 0;


const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const playerNameEl = document.getElementById("player-name");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

document.getElementById("start-btn").onclick = () => {
    const input = document.getElementById("username").value.trim();
    if (!input) return alert("Please enter a username");
    username = input;
    startPage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    loadQuestion();
};

function loadQuestion() {
    const q = questions[current];
    questionEl.textContent = q.q;
    playerNameEl.textContent = `Player: ${username}`;
    progressEl.textContent = `${current + 1} / ${questions.length}`;

    answersEl.innerHTML = "";

    q.a.forEach((text, i) => {
        const btn = document.createElement("button");
        btn.innerHTML = `${i + 1}. ${text}`;
        btn.classList.remove("selected");

        if (answers[current] === i) btn.classList.add("selected"); 

        btn.onclick = () => {
            answers[current] = i;
            Array.from(answersEl.children).forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
        };

        answersEl.appendChild(btn);
    });
}


document.getElementById("next-btn").onclick = () => {
    if (current < questions.length - 1) {
        current++;
        loadQuestion();
    } else {
        finishQuiz();
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (current > 0) {
        current--;
        loadQuestion();
    }
};


function finishQuiz() {
    score = answers.reduce((acc, ans, i) => (ans === questions[i].c ? acc + 1 : acc), 0);
    quizPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    document.getElementById("final-player").textContent = `Player: ${username}`;
    document.getElementById("final-score").textContent = `${score} / ${questions.length}`;
}


document.getElementById("restart-btn").onclick = () => {
    location.reload();
};
