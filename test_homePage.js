const questions = [
    // Science Questions
    { stream: 'Science', text: 'Do you enjoy solving numerical problems and working with mathematical formulas?', options: [
        { text: 'Strongly Disagree', score: 1 },
        { text: 'Disagree', score: 2 },
        { text: 'Agree', score: 3 },
        { text: 'Strongly Agree', score: 4 }
    ]},
    { stream: 'Science', text: 'Are you curious about how things work, such as electronic gadgets or natural phenomena?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Science', text: 'Would you enjoy conducting experiments in a laboratory setting?', options: [
        { text: 'Never', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { stream: 'Science', text: 'How comfortable are you with studying subjects like Physics, Chemistry, and Biology for long hours?', options: [
        { text: 'Not comfortable', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { stream: 'Science', text: 'Do you have an interest in pursuing a career in engineering, medicine, or research?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { stream: 'Science', text: 'Are you willing to prepare for competitive exams like JEE, NEET, or MHT-CET?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { stream: 'Science', text: 'Do you enjoy working with technology, programming, or robotics?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Rarely', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always', score: 4 }
    ]},
    { stream: 'Science', text: 'Would you prefer a career that involves technical skills, such as data analysis or research work?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Quite a bit', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { stream: 'Science', text: 'Are you comfortable studying in highly competitive environments, where high scores are crucial?', options: [
        { text: 'Not comfortable', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { stream: 'Science', text: 'Do you see yourself studying in top institutions like IITs, NITs, AIIMS, or IISERs?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Probably', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},

    // Arts Questions
    { stream: 'Arts', text: 'Do you have an interest in subjects like History, Political Science, or Psychology?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Arts', text: 'Do you enjoy expressing yourself through writing, public speaking, or debating?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { stream: 'Arts', text: 'Are you interested in pursuing careers in journalism, civil services, or teaching?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Moderately', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Arts', text: 'How inclined are you towards creative fields such as literature, fine arts, or performing arts?', options: [
        { text: 'Not inclined', score: 1 },
        { text: 'Slightly inclined', score: 2 },
        { text: 'Somewhat inclined', score: 3 },
        { text: 'Very inclined', score: 4 }
    ]},
    { stream: 'Arts', text: 'Would you enjoy studying humanities subjects and understanding societal issues in depth?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Absolutely', score: 4 }
    ]},
    { stream: 'Arts', text: 'Are you comfortable with extensive reading and writing, especially for theoretical subjects?', options: [
        { text: 'Not comfortable', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { stream: 'Arts', text: 'Do you have an interest in social causes and working with NGOs or community service?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'A little interested', score: 2 },
        { text: 'Somewhat interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { stream: 'Arts', text: 'Do you plan to pursue competitive exams like UPSC, MPSC, or NET for civil services or academia?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Somewhat', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Arts', text: 'Do you see yourself studying in institutions like TISS, JNU, or Fergusson College?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Probably', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { stream: 'Arts', text: 'Would you prefer a career that emphasizes creativity, communication, and people-oriented work?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Somewhat', score: 3 },
        { text: 'Very much', score: 4 }
    ]},

    // Commerce Questions
    { stream: 'Commerce', text: 'Do you have an interest in numbers, financial concepts, or business operations?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'A little', score: 2 },
        { text: 'Quite a bit', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Are you comfortable working with concepts such as accounting, economics, and taxation?', options: [
        { text: 'Not comfortable', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Fairly comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Would you enjoy managing businesses or starting your own entrepreneurial venture?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Absolutely', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Do you plan to pursue courses like B.Com, CA, CS, or MBA?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Definitely', score: 3 },
        { text: 'Very much', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Are you interested in analyzing market trends and understanding consumer behavior?', options: [
        { text: 'Not interested', score: 1 },
        { text: 'Somewhat interested', score: 2 },
        { text: 'Interested', score: 3 },
        { text: 'Very interested', score: 4 }
    ]},
    { stream: 'Commerce', text: 'How do you feel about working in a corporate environment or financial institution?', options: [
        { text: 'Not comfortable', score: 1 },
        { text: 'Somewhat comfortable', score: 2 },
        { text: 'Comfortable', score: 3 },
        { text: 'Very comfortable', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Would you like to engage in internships or projects related to finance or business?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Absolutely', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Do you see yourself working in fields like marketing, finance, or management?', options: [
        { text: 'Not at all', score: 1 },
        { text: 'Maybe', score: 2 },
        { text: 'Probably', score: 3 },
        { text: 'Definitely', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Are you willing to take competitive exams for professional courses like CAT or GMAT?', options: [
        { text: 'Not willing', score: 1 },
        { text: 'Somewhat willing', score: 2 },
        { text: 'Willing', score: 3 },
        { text: 'Very willing', score: 4 }
    ]},
    { stream: 'Commerce', text: 'Are you interested in learning about stock markets and investment strategies?', options: [
    { text: 'Not at all', score: 1 },
    { text: 'A little', score: 2 },
    { text: 'Somewhat', score: 3 },
    { text: 'Very much', score: 4 }
]},

];


let currentQuestion = 0;
const scores = { Science: 0, Arts: 0, Commerce: 0 };
const userSelections = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = questions[index];
    const selectedOption = userSelections[index];

    questionContainer.innerHTML = `
        <div class="question">${question.text}</div>
        <div class="options">
            ${question.options.map((option, idx) => `
                <label>
                    <input type="radio" name="option" value="${option.score}" ${selectedOption === option.score.toString() ? 'checked' : ''}>
                    ${option.text}
                </label>
            `).join('')}
        </div>
    `;
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function calculateStream() {
    const highestScoreStream = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    return highestScoreStream;
}

document.getElementById('next-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const score = parseInt(selectedOption.value);
        const currentStream = questions[currentQuestion].stream;
        scores[currentStream] += score;

        userSelections[currentQuestion] = selectedOption.value; // Store selected value as a string
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
            updateProgress();
            document.getElementById('prev-btn').disabled = false;
        } else {
            const selectedStream = calculateStream();
            document.getElementById('recommended-stream').textContent = selectedStream;
            document.getElementById('result-container').style.display = 'block';
            document.getElementById('question-container').style.display = 'none';
            document.getElementById('prev-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
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

// Button to proceed to the respective stream page
document.getElementById('good-btn').addEventListener('click', () => {
    const selectedStream = calculateStream();
    window.location.href = selectedStream + '.html'; 
});

showQuestion(currentQuestion);
updateProgress();
