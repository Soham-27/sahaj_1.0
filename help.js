const commerceQuestions = [
    // Accounting Domain
    { domain: 'Accounting', text: 'Do you enjoy working with numbers and financial records?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'How much do you like preparing and analyzing financial statements?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'Are you interested in learning about tax regulations and laws?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'How much do you enjoy managing budgets and cost analysis?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'Do you enjoy learning about auditing and internal controls?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'How much do you like working on balance sheets and profit/loss statements?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'Are you interested in financial reporting and analysis?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'How much do you enjoy working with accounting software and tools?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'Do you find managing accounts payable and receivable interesting?', options: [1, 2, 3, 4] },
    { domain: 'Accounting', text: 'How much do you enjoy forensic accounting and fraud investigation?', options: [1, 2, 3, 4] },

    // Economics Domain
    { domain: 'Economics', text: 'Are you interested in studying the behavior of economies?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'How much do you enjoy learning about supply and demand?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'Do you enjoy studying inflation and monetary policies?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'How much do you like learning about global trade and economic relations?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'Are you interested in learning about economic theories and models?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'How much do you enjoy analyzing the impact of government policies on economies?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'Do you like learning about microeconomics and market behavior?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'How much do you enjoy macroeconomic analysis?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'Are you interested in studying economic crises and their effects?', options: [1, 2, 3, 4] },
    { domain: 'Economics', text: 'How much do you like predicting future economic trends?', options: [1, 2, 3, 4] },

    // Business Domain
    { domain: 'Business', text: 'Do you enjoy learning about entrepreneurship and business management?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'How much do you like strategic business planning?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'Are you interested in managing teams and resources effectively?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'How much do you enjoy studying organizational behavior?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'Do you like creating business models and assessing risks?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'How much do you enjoy understanding supply chain management?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'Are you interested in learning about business ethics and corporate governance?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'How much do you enjoy learning about product development and lifecycle management?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'Do you enjoy analyzing market competition and strategies?', options: [1, 2, 3, 4] },
    { domain: 'Business', text: 'How much do you enjoy studying innovation and business growth?', options: [1, 2, 3, 4] },

    // Finance Domain
    { domain: 'Finance', text: 'Are you interested in investment and financial markets?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'How much do you enjoy working with stocks and investments?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'Do you enjoy learning about financial risk management?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'How much do you like analyzing portfolio management strategies?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'Are you interested in studying financial derivatives and their uses?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'How much do you enjoy working on corporate finance and capital structure?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'Do you enjoy analyzing financial statements and metrics?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'How much do you like learning about wealth management and personal finance?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'Are you interested in studying global financial markets?', options: [1, 2, 3, 4] },
    { domain: 'Finance', text: 'How much do you enjoy studying mergers, acquisitions, and financial restructuring?', options: [1, 2, 3, 4] },

    // Marketing Domain
    { domain: 'Marketing', text: 'Do you enjoy creating strategies for promoting products?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'How much do you enjoy studying consumer behavior?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'Are you interested in digital marketing and social media strategies?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'How much do you like analyzing market research data?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'Do you enjoy developing branding strategies for businesses?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'How much do you enjoy studying advertising and public relations?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'Are you interested in learning about product positioning and differentiation?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'How much do you enjoy working on customer relationship management (CRM)?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'Do you enjoy developing promotional campaigns and pricing strategies?', options: [1, 2, 3, 4] },
    { domain: 'Marketing', text: 'How much do you like learning about global marketing strategies?', options: [1, 2, 3, 4] }
];

let currentQuestion = 0;
const artsScores = { History: 0, Literature: 0, Psychology: 0, 'Political Science': 0, Sociology: 0 };
const userSelections = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = scienceQuestions[index];
    const selectedOption = userSelections[index];

    questionContainer.innerHTML = `
        <div class="question">${question.text}</div>
        <div class="options">
            ${question.options.map((option) => `
                <label>
                    <input type="radio" name="option" value="${option}" ${selectedOption === option ? 'checked' : ''}>
                    Option ${option}
                </label>
            `).join('')}
        </div>
    `;
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = (currentQuestion / scienceQuestions.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${scienceQuestions.length}`;
}

function calculateDomain() {
    const highestScoreDomain = Object.keys(scienceScores).reduce((a, b) => 
        scienceScores[a] > scienceScores[b] ? a : b
    );
    return highestScoreDomain;
}

document.getElementById('next-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const score = parseInt(selectedOption.value);
        const currentDomain = scienceQuestions[currentQuestion].domain;
        scienceScores[currentDomain] += score;

        userSelections[currentQuestion] = score;
        currentQuestion++;
        if (currentQuestion < scienceQuestions.length) {
            showQuestion(currentQuestion);
            updateProgress();
            document.getElementById('prev-btn').disabled = false;
        } else {
            const highestScoreDomain = calculateDomain();
            displayResult(highestScoreDomain); // Display result with scores
        }
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
        document.getElementById('next-btn').disabled = false;
        if (currentQuestion === 0) {
            document.getElementById('prev-btn').disabled = true;
        }
    }
});

function displayResult(domain) {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const allScoresText = document.getElementById('all-scores'); // New element for all scores

    // Generate a summary of all domain scores
    const scoresHTML = Object.entries(scienceScores)
        .map(([key, value]) => `<li>${key}: ${value}</li>`)
        .join('');

    // Display the highest-scoring domain and all domain scores
    resultText.innerHTML = `You should pursue a career in <strong>${domain}</strong>!`;
    allScoresText.innerHTML = `<ul>${scoresHTML}</ul>`;
    resultContainer.style.display = 'block';
}

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'Homepage.html';
});

// Initialize the quiz
showQuestion(currentQuestion);
updateProgress();
