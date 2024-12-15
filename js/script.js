document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        { question: "What does BI stand for?", choices: ["Business Integration", "Business Insights", "Business Intelligence"], answer: "Business Intelligence" },
        { question: "Which tool is commonly used for BI?", choices: ["Photoshop", "Tableau", "AutoCAD"], answer: "Tableau" },
        { question: "What is the main purpose of BI?", choices: ["Better decision-making", "Creating graphics", "Improving network speed"], answer: "Better decision-making" }
    ];

    let currentQuestion = 0;
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const resultElement = document.getElementById("result");

    function loadQuestion() {
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        choicesContainer.innerHTML = "";
        q.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("quiz-button");
            button.onclick = () => checkAnswer(choice);
            choicesContainer.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        const correct = questions[currentQuestion].answer;
        if (selected === correct) {
            resultElement.textContent = "Correct!";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = `Wrong! Correct answer: ${correct}`;
            resultElement.style.color = "red";
        }
        setTimeout(() => {
            currentQuestion = (currentQuestion + 1) % questions.length;
            resultElement.textContent = "";
            loadQuestion();
        }, 1500);
    }

    loadQuestion();
});
