const commerceQuestions = [
    { 
        domain: 'Chartered Accountant', 
        text: 'Do you enjoy working with numbers and financial data?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Mostly', score: 3 },
            { text: 'Absolutely', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'How comfortable are you with auditing financial statements?', 
        options: [
            { text: 'Uncomfortable', score: 1 },
            { text: 'Slightly comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Do you have an interest in learning about tax laws and regulations?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'How well do you handle complex financial problems?', 
        options: [
            { text: 'Not well', score: 1 },
            { text: 'Average', score: 2 },
            { text: 'Good', score: 3 },
            { text: 'Excellent', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Are you detail-oriented in reviewing financial data?', 
        options: [
            { text: 'Rarely', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Do you enjoy managing budgets and financial reports?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Very much', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'How familiar are you with accounting software tools?', 
        options: [
            { text: 'Not familiar', score: 1 },
            { text: 'Somewhat familiar', score: 2 },
            { text: 'Familiar', score: 3 },
            { text: 'Expert', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Do you enjoy solving financial discrepancies?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Do you have the patience for lengthy audits?', 
        options: [
            { text: 'No', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Sometimes', score: 3 },
            { text: 'Yes', score: 4 }
        ] 
    },
    { 
        domain: 'Chartered Accountant', 
        text: 'Are you interested in corporate finance?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Slightly interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Very interested', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you have a good understanding of corporate laws?', 
        options: [
            { text: 'None', score: 1 },
            { text: 'Basic', score: 2 },
            { text: 'Moderate', score: 3 },
            { text: 'Advanced', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you enjoy drafting legal documents?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'How well can you manage compliance deadlines?', 
        options: [
            { text: 'Poorly', score: 1 },
            { text: 'Fairly', score: 2 },
            { text: 'Well', score: 3 },
            { text: 'Perfectly', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you enjoy handling company meetings and board resolutions?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'How comfortable are you with corporate governance practices?', 
        options: [
            { text: 'Uncomfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you have good communication skills for business reporting?', 
        options: [
            { text: 'No', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Mostly', score: 3 },
            { text: 'Yes', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you enjoy working in a legal and regulatory environment?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Are you able to multi-task and handle multiple corporate responsibilities?', 
        options: [
            { text: 'No', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Sometimes', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'Do you enjoy advising companies on corporate matters?', 
        options: [
            { text: 'No', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Yes', score: 4 }
        ] 
    },
    { 
        domain: 'Company Secretary', 
        text: 'How interested are you in corporate finance and company law?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ] 
    },
    {
        domain: 'Investment Banker',
        text: 'Do you enjoy working with financial models and projections?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Mostly', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Are you comfortable with high-pressure environments?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Do you enjoy researching and analyzing market trends?',
        options: [
            { text: 'No', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly often', score: 3 },
            { text: 'Absolutely', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'How comfortable are you with networking and building client relationships?',
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Do you enjoy working with mergers, acquisitions, and IPOs?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Are you good at managing multiple projects simultaneously?',
        options: [
            { text: 'Not good', score: 1 },
            { text: 'Average', score: 2 },
            { text: 'Good', score: 3 },
            { text: 'Excellent', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Do you have strong analytical skills for decision-making?',
        options: [
            { text: 'No', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Mostly', score: 3 },
            { text: 'Yes', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Do you find it exciting to work with stocks and bonds?',
        options: [
            { text: 'Not exciting', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Very exciting', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'How comfortable are you with working long hours?',
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Investment Banker',
        text: 'Do you have a passion for financial markets?',
        options: [
            { text: 'No passion', score: 1 },
            { text: 'A little passion', score: 2 },
            { text: 'Moderate passion', score: 3 },
            { text: 'High passion', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Do you enjoy helping others resolve workplace conflicts?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'How well can you manage recruitment processes?',
        options: [
            { text: 'Not well', score: 1 },
            { text: 'Average', score: 2 },
            { text: 'Good', score: 3 },
            { text: 'Excellent', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Do you have good interpersonal skills for dealing with employees?',
        options: [
            { text: 'No', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Mostly', score: 3 },
            { text: 'Yes', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Are you comfortable conducting employee training sessions?',
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Do you have experience with payroll management?',
        options: [
            { text: 'No experience', score: 1 },
            { text: 'Some experience', score: 2 },
            { text: 'Fairly experienced', score: 3 },
            { text: 'Highly experienced', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Are you interested in creating policies and procedures for organizations?',
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'A little interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'How well can you handle employee performance reviews?',
        options: [
            { text: 'Poorly', score: 1 },
            { text: 'Fairly', score: 2 },
            { text: 'Well', score: 3 },
            { text: 'Very well', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Do you enjoy organizing team-building activities?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'How comfortable are you with handling sensitive employee information?',
        options: [
            { text: 'Uncomfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Human Resources (HR)',
        text: 'Do you enjoy working with people from diverse backgrounds?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Do you enjoy preparing financial statements and reports?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Are you familiar with auditing principles and practices?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little bit', score: 2 },
            { text: 'Quite familiar', score: 3 },
            { text: 'Extremely familiar', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'How comfortable are you with tax filing and compliance processes?',
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Do you enjoy analyzing and interpreting financial data for insights?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Absolutely', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'How familiar are you with Generally Accepted Accounting Principles (GAAP)?',
        options: [
            { text: 'Not familiar', score: 1 },
            { text: 'A little familiar', score: 2 },
            { text: 'Fairly familiar', score: 3 },
            { text: 'Very familiar', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Do you enjoy working on financial audits and ensuring compliance?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'How well can you manage multiple financial deadlines?',
        options: [
            { text: 'Not well', score: 1 },
            { text: 'Somewhat well', score: 2 },
            { text: 'Well', score: 3 },
            { text: 'Very well', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Are you comfortable using accounting software like QuickBooks or SAP?',
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat comfortable', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'How interested are you in forensic accounting and fraud detection?',
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'A little interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ]
    },
    {
        domain: 'Certified Public Accountant',
        text: 'Do you enjoy staying updated with new tax laws and financial regulations?',
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    }
];

let currentQuestion = 0;
const commerceScores = { 
    'Chartered Accountant': 0, 
    'Company Secretary': 0, 
    'Investment Banker': 0, 
    'Human Resources (HR)': 0, 
    'Certified Public Accountant': 0 
};
const userSelections = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = commerceQuestions[index];
    const selectedOption = userSelections[index];

    questionContainer.innerHTML = `
        <div class="question">${question.text}</div>
        <div class="options">
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="option" value="${option.score}" 
                    ${selectedOption === option.score ? 'checked' : ''}>
                    ${option.text}
                </label>
            `).join('')}
        </div>
    `;
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = ((currentQuestion + 1) / commerceQuestions.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${commerceQuestions.length}`;
}

function calculateDomain() {
    return Object.keys(commerceScores).reduce((a, b) => commerceScores[a] > commerceScores[b] ? a : b);
}

document.getElementById('next-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const score = parseInt(selectedOption.value);
        const currentDomain = commerceQuestions[currentQuestion].domain;
        commerceScores[currentDomain] += score;

        userSelections[currentQuestion] = score;
        currentQuestion++;

        if (currentQuestion < commerceQuestions.length) {
            showQuestion(currentQuestion);
            updateProgress();
            document.getElementById('prev-btn').disabled = false;
        } else {
            displayResult();
        }
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
        if (currentQuestion === 0) {
            document.getElementById('prev-btn').disabled = true;
        }
    }
});

function displayResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const scoreDetails = document.getElementById('score-details');

    const recommendedDomain = calculateDomain();
    resultText.textContent = `You should pursue a career in ${recommendedDomain}!`;

    scoreDetails.innerHTML = `
        <h3>Your Scores:</h3>
        <ul>
            ${Object.entries(commerceScores).map(
                ([domain, score]) => `<li>${domain}: ${score}</li>`
            ).join('')}
        </ul>
    `;
    resultContainer.style.display = 'block';
}

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'Homepage.html';
});

// Initial Setup
showQuestion(currentQuestion);
updateProgress();
