const scienceQuestions = [
    // Engineering Questions
    { domain: 'Engineering', text: 'Do you enjoy solving complex mathematical problems?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Are you interested in designing and building structures or machines?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Do you like working with computers and software programming?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Would you enjoy collaborating on team projects?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Are you curious about how things work and eager to learn more?', options: [
        { text: 'Not curious', score: 1 },
        { text: 'Somewhat curious', score: 2 },
        { text: 'Curious', score: 3 },
        { text: 'Very curious', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Do you enjoy conducting experiments and analyzing data?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Would you like to work in industries like automotive, aerospace, or construction?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Do you think you would enjoy a career as an engineer in fields like civil, mechanical, or electrical engineering?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Probably', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Are you interested in sustainable technology and renewable energy?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Engineering', text: 'Do you prefer hands-on work rather than theoretical studies?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},

    // MBBS Questions
    { domain: 'MBBS', text: 'Are you passionate about studying human biology and medical science?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Do you enjoy working in high-stress environments and making quick decisions?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Are you interested in patient care and providing medical assistance?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Would you like to engage in ongoing education and research in medicine?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Do you see yourself specializing in fields such as surgery, psychiatry, or pediatrics?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Probably', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { domain:'MBBS', text: 'Are you prepared for long hours of study and clinical practice?', options: [
        { text: 'Not prepared', score: 1 },
        { text: 'Somewhat prepared', score: 2 },
        { text: 'Prepared', score: 3 },
        { text: 'Very prepared', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Do you enjoy working in teams with other healthcare professionals?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Are you willing to make personal sacrifices for a career in medicine?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Do you find fulfillment in helping others and making a difference in their lives?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'MBBS', text: 'Are you interested in advancements in technology that impact medicine?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},

    // Pharmacy Questions
    { domain: 'Pharmacy', text: 'Do you have a strong interest in chemistry and pharmacology?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Are you detail-oriented and enjoy working with precise measurements?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain:'Pharmacy', text: 'Would you like to counsel patients about their medications and health?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain:'Pharmacy', text: 'Do you enjoy working in laboratories and conducting experiments?', options: [
        { text: 'Never', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Are you interested in understanding how drugs interact and affect the body?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Would you enjoy a career in a clinical or community pharmacy setting?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Do you think you could work effectively with healthcare teams?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Are you willing to stay updated on new medications and regulations?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { domain:'Pharmacy', text: 'Do you find satisfaction in helping patients manage their medications?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Pharmacy', text: 'Are you interested in researching and developing new drugs to improve healthcare?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested ', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very Interested', score: 4 }
    ]},

    // Nursing Questions
    { domain: 'Nursing', text: 'Do you have a strong desire to care for others and provide support?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Are you comfortable working with patients in various medical situations?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Do you enjoy teamwork and collaborating with healthcare professionals?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Are you prepared for the emotional challenges of caring for sick patients?', options: [
        { text: 'Not prepared', score: 1 },
        { text: 'Somewhat prepared', score: 2 },
        { text: 'Prepared', score: 3 },
        { text: 'Very prepared', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Do you want to work in a variety of settings like hospitals, clinics, or home care?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Are you willing to commit to continuous education and training?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Do you feel that you can handle the physical demands of nursing?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat', score: 2 },
        { text: 'Mostly', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Are you interested in patient education and advocacy?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Would you enjoy a career that involves varying shifts and hours?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat', score: 2 },
        { text: 'Mostly', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { domain: 'Nursing', text: 'Do you find fulfillment in helping patients recover and improve their health?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},

    // Aviation Questions
    { domain: 'Aviation', text: 'Are you fascinated by aircraft and how they operate?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Do you have a strong interest in physics and mathematics?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Are you willing to undergo rigorous training to become a pilot or aviation professional?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Do you enjoy problem-solving and critical thinking under pressure?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Would you like to work in a fast-paced and dynamic environment?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Are you comfortable with the idea of traveling frequently for your job?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { domain:'Aviation', text: 'Do you see yourself working with advanced technologies in aviation?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Would you enjoy a career in air traffic control or aviation management?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Do you think you could handle the responsibilities that come with flying an aircraft?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Somewhat', score: 2 },
        { text: 'Mostly', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { domain: 'Aviation', text: 'Are you excited about a future career that involves the aviation industry?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]}
];




let currentQuestion = 0;
const scienceScores = {
    Engineering: 0, MBBS: 0, Pharmacy: 0, Nursing: 0, Aviation: 0
};
const userSelections = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = scienceQuestions[index];
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
    const percentage = ((currentQuestion + 1) / scienceQuestions.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${scienceQuestions.length}`;
}

function calculateDomain() {
    return Object.keys(scienceScores).reduce((a, b) => scienceScores[a] > scienceScores[b] ? a : b);
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
            ${Object.entries(scienceScores).map(
                ([domain, score]) => `<li>${domain}: ${score}</li>`
            ).join('')}
        </ul>
    `;

    resultContainer.style.display = 'block';
}

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'Homepage.html';
});

showQuestion(currentQuestion);
updateProgress();
