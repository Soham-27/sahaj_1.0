const artsQuestions = [
    { 
        domain: 'LLB', 
        text: 'Do you enjoy studying and interpreting laws?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Quite a bit', score: 3 },
            { text: 'Absolutely', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'Are you interested in understanding contracts and agreements?', 
        options: [
            { text: 'No interest', score: 1 },
            { text: 'Slightly', score: 2 },
            { text: 'Moderately', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'LLB', 
        text: 'How confident are you in handling arguments logically?', 
        options: [
            { text: 'Not confident', score: 1 },
            { text: 'A bit', score: 2 },
            { text: 'Fairly confident', score: 3 },
            { text: 'Highly confident', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'Do you like debating social and political issues?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'How interested are you in participating in Model United Nations (MUN) or moot courts?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Slightly', score: 2 },
            { text: 'Moderately', score: 3 },
            { text: 'Very interested', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'Do you find it rewarding to work towards justice and fairness?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Fairly rewarding', score: 3 },
            { text: 'Extremely rewarding', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'How often do you enjoy reading judgments or court case summaries?', 
        options: [
            { text: 'Never', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Occasionally', score: 3 },
            { text: 'Frequently', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'Do you like the idea of defending clients in a courtroom?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Quite a bit', score: 3 },
            { text: 'Absolutely', score: 4 }
        ]
    },
    { 
        domain: 'LLB', 
        text: 'Do you enjoy resolving conflicts through discussion and negotiation?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'LLB', 
        text: 'How comfortable are you with writing long, detailed reports or petitions?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly comfortable', score: 3 },
            { text: 'Very comfortable', score: 4 }
        ]
    },
    { 
        domain: 'Journalism', 
        text: 'Do you enjoy covering breaking news or events as they unfold?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Quite interested', score: 3 },
            { text: 'Highly passionate', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'How often do you enjoy reading newspapers or news websites?', 
        options: [
            { text: 'Never', score: 1 },
            { text: 'Rarely', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'Do you enjoy investigating the truth behind controversial topics?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'How well do you handle tight deadlines for assignments?', 
        options: [
            { text: 'Poorly', score: 1 },
            { text: 'A bit stressed', score: 2 },
            { text: 'Fairly well', score: 3 },
            { text: 'Very well', score: 4 }
        ]
    },
    { 
        domain: 'Journalism', 
        text: 'Do you enjoy working independently to find stories?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Journalism', 
        text: 'How passionate are you about using media to create social awareness?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'A little interested', score: 2 },
            { text: 'Fairly passionate', score: 3 },
            { text: 'Highly passionate', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'Do you enjoy collaborating with others for multimedia projects?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Quite often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'Are you comfortable working with modern tools like cameras or editing software?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'A bit hesitant', score: 2 },
            { text: 'Fairly comfortable', score: 3 },
            { text: 'Highly comfortable', score: 4 }
        ]
    },
    { 
        domain: 'Journalism', 
        text: 'How good are you at writing catchy headlines and captions?', 
        options: [
            { text: 'Not good', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Fairly good', score: 3 },
            { text: 'Excellent', score: 4 }
        ] 
    },
    { 
        domain: 'Journalism', 
        text: 'Do you enjoy traveling and meeting new people for interviews?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Love it', score: 4 }
        ] 
    },
    { 
        domain: 'Hotel Management', 
        text: 'Do you enjoy interacting with guests and ensuring their comfort?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Quite a bit', score: 3 },
            { text: 'Very much', score: 4 }
        ] 
    },
    { 
        domain: 'Hotel Management', 
        text: 'How comfortable are you with managing multiple tasks at once?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Slightly', score: 2 },
            { text: 'Fairly comfortable', score: 3 },
            { text: 'Extremely comfortable', score: 4 }
        ] 
    },
    { 
        domain: 'Hotel Management', 
        text: 'Do you enjoy planning and organizing events?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'How interested are you in learning about food and beverages?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Slightly interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ] 
    },
    { 
        domain: 'Hotel Management', 
        text: 'Do you enjoy working in a team-oriented environment?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Sometimes', score: 2 },
            { text: 'Most of the time', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'How comfortable are you with handling customer complaints?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Somewhat', score: 2 },
            { text: 'Comfortable', score: 3 },
            { text: 'Highly comfortable', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'Do you like the idea of working in a dynamic and fast-paced environment?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'How interested are you in pursuing a career in luxury hospitality?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Moderately interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'Do you enjoy learning new languages to interact with international guests?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'Hotel Management', 
        text: 'How well do you manage stress during peak work hours?', 
        options: [
            { text: 'Not well', score: 1 },
            { text: 'Slightly well', score: 2 },
            { text: 'Fairly well', score: 3 },
            { text: 'Very well', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'Do you enjoy sketching or creating new clothing designs?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'All the time', score: 4 }
        ] 
    },
    { 
        domain: 'Fashion Designing', 
        text: 'How passionate are you about following the latest fashion trends?', 
        options: [
            { text: 'Not passionate', score: 1 },
            { text: 'Slightly passionate', score: 2 },
            { text: 'Fairly passionate', score: 3 },
            { text: 'Highly passionate', score: 4 }
        ] 
    },
    { 
        domain: 'Fashion Designing', 
        text: 'Do you enjoy working with fabrics and textiles?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Quite a bit', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'How comfortable are you with learning software for digital design?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Slightly comfortable', score: 2 },
            { text: 'Moderately comfortable', score: 3 },
            { text: 'Highly comfortable', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'Do you enjoy experimenting with colors and patterns?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'How interested are you in styling models for fashion shows?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Slightly interested', score: 2 },
            { text: 'Moderately interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'Do you enjoy collaborating with other designers?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Quite often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'How well do you adapt to feedback on your designs?', 
        options: [
            { text: 'Not well', score: 1 },
            { text: 'Slightly well', score: 2 },
            { text: 'Fairly well', score: 3 },
            { text: 'Very well', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'Do you enjoy creating mood boards for inspiration?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Frequently', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Fashion Designing', 
        text: 'How motivated are you to start your own fashion brand?', 
        options: [
            { text: 'Not motivated', score: 1 },
            { text: 'Somewhat motivated', score: 2 },
            { text: 'Fairly motivated', score: 3 },
            { text: 'Highly motivated', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'Do you enjoy explaining concepts to others in a simple way?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ] 
    },
    { 
        domain: 'Teaching & Education', 
        text: 'How interested are you in designing interactive learning activities?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ] 
    },
    { 
        domain: 'Teaching & Education', 
        text: 'Do you feel confident speaking in front of a group of students?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Fairly confident', score: 3 },
            { text: 'Extremely confident', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'How comfortable are you with assessing and grading students’ work?', 
        options: [
            { text: 'Not comfortable', score: 1 },
            { text: 'Slightly comfortable', score: 2 },
            { text: 'Fairly comfortable', score: 3 },
            { text: 'Highly comfortable', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'Do you enjoy mentoring or guiding students outside of class?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'How interested are you in using technology to enhance learning?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Slightly interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Very interested', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'Do you enjoy working with students from different backgrounds?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'Occasionally', score: 2 },
            { text: 'Most of the time', score: 3 },
            { text: 'Always', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'How confident are you in managing classroom behavior effectively?', 
        options: [
            { text: 'Not confident', score: 1 },
            { text: 'Slightly confident', score: 2 },
            { text: 'Fairly confident', score: 3 },
            { text: 'Highly confident', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'Do you enjoy creating a positive and engaging classroom environment?', 
        options: [
            { text: 'Not at all', score: 1 },
            { text: 'A little', score: 2 },
            { text: 'Often', score: 3 },
            { text: 'Very much', score: 4 }
        ]
    },
    { 
        domain: 'Teaching & Education', 
        text: 'How interested are you in continuing professional development as a teacher?', 
        options: [
            { text: 'Not interested', score: 1 },
            { text: 'Somewhat interested', score: 2 },
            { text: 'Fairly interested', score: 3 },
            { text: 'Highly interested', score: 4 }
        ]
    }
];


let currentQuestion = 0;
const artsScores = {  
    LLB: 0, 
    Journalism: 0, 
    'Hotel Management': 0, 
    'Fashion Designing': 0, 
    'Teaching & Education': 0 
};
const userSelections = [];

function showQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const question = artsQuestions[index];
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
    const percentage = ((currentQuestion + 1) / artsQuestions.length) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Question ${currentQuestion + 1} of ${artsQuestions.length}`;
}

function calculateDomain() {
    return Object.keys(artsScores).reduce((a, b) => artsScores[a] > artsScores[b] ? a : b);
}

document.getElementById('next-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const score = parseInt(selectedOption.value);
        const currentDomain = artsQuestions[currentQuestion].domain;
        artsScores[currentDomain] += score;

        userSelections[currentQuestion] = score;
        currentQuestion++;

        if (currentQuestion < artsQuestions.length) {
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


async function getCareerPath(recommendedDomain) {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA3Abrzb6sN-Kv3CQeSmkcDqBdk6C5HpKQ';
  
    const prompt = `Provide a career path for a ${recommendedDomain} after class 10, including steps with names, estimated time, and a brief description of each step.`;
  
    const requestData = {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      const careerPath = data.candidates[0].content.parts[0].text;
  
      // Parse the JSON response
      //const careerPathData = JSON.parse(careerPath);
      console.log(careerPath)
      return careerPath;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  async function displayResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const scoreDetails = document.getElementById('score-details');

    const recommendedDomain = calculateDomain();
    console.log(`Recommended Domain: ${recommendedDomain}`);
    
    try {
        // Wait for the career path to be fetched
        const careerPath = await getCareerPath(recommendedDomain);
        console.log("Career Path Text:", careerPath); 

        // Display the recommended domain and the raw career path text
        resultText.textContent = `You should pursue a career in ${recommendedDomain}!`;
        
        // Display career path text directly
        scoreDetails.innerHTML = `<pre>${careerPath}</pre>`;  // Using <pre> to preserve formatting if needed
        resultContainer.style.display = 'block';
    } catch (error) {
        console.error('Error fetching career path:', error);
        scoreDetails.innerHTML = `<p>Unable to retrieve career path information.</p>`;
    }
}

async function extractSteps(careerPathText) {
    // Split the text into lines for easier processing
    const lines = careerPathText.split('\n').map(line => line.trim()).filter(line => line !== '');

    const steps = [];
    let currentStep = null;

    lines.forEach(line => {
        if (line.startsWith("Step")) {
            // If a new step starts, save the current step if it exists
            if (currentStep) steps.push(currentStep);

            // Start a new step object
            currentStep = { 
                title: line, 
                duration: '', 
                description: '' 
            };
        } else if (line.startsWith("* Duration:")) {
            currentStep.duration = line.replace("* Duration:", "").trim();
        } else if (line.startsWith("* Description:")) {
            currentStep.description = line.replace("* Description:", "").trim();
        }
    });

    // Push the last step if it exists
    if (currentStep) steps.push(currentStep);

    return steps;
}

function createCareerPathJSON(careerPathText) {
    // Split the text into lines
    const lines = careerPathText.split('\n').filter(line => line.trim() !== '');

    // Initialize JSON structure
    const careerPathJSON = {
        "Career Path": lines[0].split(": ")[1],
        "Description": lines[1],
        "Steps": []
    };

    // Loop through lines to create steps
    for (let i = 2; i < lines.length; i++) {
        if (lines[i].startsWith("Step")) {
            const step = {
                "Step": lines[i].trim(),
                "Description": "",
                "Estimated Time": "",
                "Requirement": ""
            };

            // Increment to read next lines until a new step is encountered
            i++;
            while (i < lines.length && !lines[i].startsWith("Step")) {
                if (lines[i].startsWith("Description:")) {
                    step.Description = lines[i].replace("Description:", "").trim();
                } else if (lines[i].startsWith("Estimated Time:")) {
                    step["Estimated Time"] = lines[i].replace("Estimated Time:", "").trim();
                } else if (lines[i].startsWith("Requirement:")) {
                    step.Requirement = lines[i].replace("Requirement:", "").trim();
                }
                i++;
            }
            careerPathJSON.Steps.push(step);
            i--; // Adjust the index back
        }
    }

    // Return the JSON object
    return careerPathJSON;
}

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'Homepage.html';
});

showQuestion(currentQuestion);
updateProgress();
