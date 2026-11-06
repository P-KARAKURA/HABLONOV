
/* ==========================================
   HABLOCLASS ADVANCED ENGLISH
   Four-stage course system
========================================== */

const STORAGE_KEY = "habloclassAdvancedCourse";

const questionBank = {

    // ======================================
    // STAGE 1: TENSES
    // ======================================

    1: [
        {
            q: "The earth _____ around the sun.",
            a: ["is moving", "moves", "moved", "move"],
            c: 1
        },
        {
            q: "Please be quiet. The students _____ an examination.",
            a: ["take", "took", "are taking", "takes"],
            c: 2
        },
        {
            q: "When I entered the room, the teacher _____ the lesson.",
            a: ["explains", "explained", "is explaining", "explain"],
            c: 1
        },
        {
            q: "She usually _____ to work, but this week she _____ the bus.",
            a: [
                "walks / is taking",
                "is walking / takes",
                "walked / takes",
                "walk / took"
            ],
            c: 0
        },
        {
            q: "I _____ your argument, but I do not agree with your conclusion.",
            a: ["am understanding", "understand", "understood", "understands"],
            c: 1
        },
        {
            q: "The population of the city _____ rapidly these days.",
            a: ["increases", "increased", "is increasing", "increase"],
            c: 2
        },
        {
            q: "The lion _____ the tiger to remain silent.",
            a: ["orders", "is ordering", "ordered", "order"],
            c: 2
        },
        {
            q: "My brother _____ in Kigali, but he _____ with us temporarily this month.",
            a: [
                "lives / is staying",
                "is living / stays",
                "lived / stays",
                "live / stayed"
            ],
            c: 0
        },
        {
            q: "Which sentence uses a stative verb correctly?",
            a: [
                "I am believing you.",
                "She is owning a house.",
                "They are knowing the answer.",
                "I believe your explanation."
            ],
            c: 3
        },
        {
            q: "The students _____ the assignment yesterday.",
            a: ["complete", "are completing", "completed", "completes"],
            c: 2
        }
    ],

    // ======================================
    // STAGE 2: FANBOYS
    // ======================================

    2: [
        {
            q: "She wanted to attend the meeting, _____ she was feeling unwell.",
            a: ["so", "but", "for", "and"],
            c: 1
        },
        {
            q: "The road was flooded, _____ we decided to stay at home.",
            a: ["so", "yet", "nor", "for"],
            c: 0
        },
        {
            q: "He did not apologise, _____ did he explain his behaviour.",
            a: ["but", "or", "nor", "so"],
            c: 2
        },
        {
            q: "The students worked hard, _____ they achieved excellent results.",
            a: ["so", "but", "nor", "yet"],
            c: 0
        },
        {
            q: "The speaker was inexperienced, _____ her presentation was impressive.",
            a: ["for", "yet", "so", "or"],
            c: 1
        },
        {
            q: "Choose the correctly punctuated sentence.",
            a: [
                "I was tired but, I continued working.",
                "I was tired, but I continued working.",
                "I was tired but I, continued working.",
                "I was tired, but, I continued working."
            ],
            c: 1
        },
        {
            q: "Which sentence uses FOR as a coordinating conjunction?",
            a: [
                "I waited for two hours.",
                "This gift is for my sister.",
                "She stayed indoors, for it was raining.",
                "We prepared food for the guests."
            ],
            c: 2
        },
        {
            q: "Which sentence uses YET as an adverb?",
            a: [
                "He was poor, yet he was generous.",
                "She has not completed the work yet.",
                "It was difficult, yet they succeeded.",
                "He was tired, yet he continued."
            ],
            c: 1
        },
        {
            q: "Choose the best conjunction: You must revise carefully, _____ you may fail the examination.",
            a: ["or", "nor", "for", "and"],
            c: 0
        },
        {
            q: "Which sentence correctly joins two independent clauses?",
            a: [
                "She was ill but, she attended class.",
                "She was ill, but she attended class.",
                "She was ill, but attended class she.",
                "She was ill but she, attended class."
            ],
            c: 1
        }
    ],

    // ======================================
    // STAGE 3: FOR, DURING, WHILE, STILL
    // ======================================

    3: [
        {
            q: "The students discussed the issue _____ the meeting.",
            a: ["for", "during", "while", "still"],
            c: 1
        },
        {
            q: "She has been learning English _____ three years.",
            a: ["during", "while", "for", "still"],
            c: 2
        },
        {
            q: "_____ I was preparing dinner, my brother was studying.",
            a: ["During", "For", "While", "Still"],
            c: 2
        },
        {
            q: "He is _____ working on the project.",
            a: ["during", "for", "while", "still"],
            c: 3
        },
        {
            q: "Which sentence is grammatically correct?",
            a: [
                "During three hours, I studied.",
                "I studied during three hours.",
                "I studied for three hours.",
                "I studied while three hours."
            ],
            c: 2
        },
        {
            q: "The phone rang _____ the teacher was explaining the lesson.",
            a: ["during", "while", "for", "still"],
            c: 1
        },
        {
            q: "She has not replied to my message _____.",
            a: ["still", "during", "yet", "while"],
            c: 2
        },
        {
            q: "Which sentence emphasizes that an expected action has not happened?",
            a: [
                "He has still not arrived.",
                "He has not arrived yet.",
                "He arrived during the morning.",
                "He waited for an hour."
            ],
            c: 1
        },
        {
            q: "The children played outside _____ the whole afternoon.",
            a: ["during", "while", "for", "yet"],
            c: 2
        },
        {
            q: "Choose the correct sentence.",
            a: [
                "During I was sleeping, the phone rang.",
                "While the meeting, she took notes.",
                "She is still waiting for the results.",
                "I waited during two hours."
            ],
            c: 2
        }
    ],

    // ======================================
    // STAGE 4: INTEGRATED FINAL ASSESSMENT
    // ======================================

    4: [
        {
            q: "Although she usually _____ early, today she _____ late.",
            a: [
                "arrives / is arriving",
                "is arriving / arrives",
                "arrived / arrive",
                "arrive / arrived"
            ],
            c: 0
        },
        {
            q: "The students _____ their work when the electricity went off.",
            a: [
                "complete",
                "were completing",
                "are completing",
                "completes"
            ],
            c: 1
        },
        {
            q: "He _____ the answer because he _____ the topic very well.",
            a: [
                "knows / understands",
                "is knowing / is understanding",
                "knew / understand",
                "know / understood"
            ],
            c: 0
        },
        {
            q: "The road was dangerous, _____ the driver continued carefully.",
            a: ["so", "yet", "for", "or"],
            c: 1
        },
        {
            q: "She stayed at the library _____ four hours.",
            a: ["during", "while", "for", "yet"],
            c: 2
        },
        {
            q: "_____ the conference, several important decisions were made.",
            a: ["While", "During", "For", "Still"],
            c: 1
        },
        {
            q: "_____ I was reading, my phone suddenly rang.",
            a: ["During", "For", "While", "Yet"],
            c: 2
        },
        {
            q: "He has _____ not submitted his application.",
            a: ["during", "while", "still", "for"],
            c: 2
        },
        {
            q: "She has not received the invitation _____.",
            a: ["still", "yet", "during", "for"],
            c: 1
        },
        {
            q: "Which sentence uses FOR as a conjunction?",
            a: [
                "I have worked here for six months.",
                "This letter is for the director.",
                "He was exhausted, for he had worked all night.",
                "We bought food for the children."
            ],
            c: 2
        },
        {
            q: "Which sentence is correctly punctuated?",
            a: [
                "He was nervous, yet he spoke confidently.",
                "He was nervous yet, he spoke confidently.",
                "He was nervous, yet, he spoke confidently.",
                "He was nervous yet he, spoke confidently."
            ],
            c: 0
        },
        {
            q: "Which sentence describes a temporary situation?",
            a: [
                "She works in a hospital.",
                "Water boils at 100°C at standard atmospheric pressure.",
                "She is working in a hospital this month.",
                "The earth revolves around the sun."
            ],
            c: 2
        },
        {
            q: "When I arrived, the meeting _____ already.",
            a: [
                "starts",
                "started",
                "is starting",
                "start"
            ],
            c: 1
        },
        {
            q: "Which sentence contains an error?",
            a: [
                "I understand your concern.",
                "She is still waiting outside.",
                "They discussed the matter during the meeting.",
                "I am believing every word you say."
            ],
            c: 3
        },
        {
            q: "Choose the best sentence.",
            a: [
                "While the lesson, the learners were taking notes.",
                "During the teacher was speaking, the learners listened.",
                "The learners listened while the teacher was speaking.",
                "The learners listened for the teacher was speaking."
            ],
            c: 2
        }
    ]
};


// ==========================================
// PROGRESS STORAGE
// ==========================================

function getProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (
            saved &&
            Array.isArray(saved.completed) &&
            typeof saved.scores === "object"
        ) {
            return saved;
        }
    } catch (error) {
        console.warn("Could not read saved progress.", error);
    }

    return {
        completed: [],
        scores: {}
    };
}

function saveProgress(progress) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
    );
}

function isUnlocked(stage, progress) {
    if (stage === 1) {
        return true;
    }

    return progress.completed.includes(stage - 1);
}


// ==========================================
// STAGE ACCESS CONTROL
// ==========================================

const currentStage = Number(document.body.dataset.stage);

let progress = getProgress();

if (!isUnlocked(currentStage, progress)) {
    alert(
        "This stage is locked. You must pass the previous stage with at least 75%."
    );

    const previousPage = currentStage === 2
        ? "index.html"
        : `stage${currentStage - 1}.html`;

    window.location.replace(previousPage);
}


// ==========================================
// NAVIGATION AND PROGRESS DISPLAY
// ==========================================

function updateNavigation() {
    const completedCount = progress.completed.length;

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    if (progressBar) {
        progressBar.style.width =
            `${(completedCount / 4) * 100}%`;
    }

    if (progressText) {
        progressText.textContent =
            `${completedCount} of 4 stages completed`;
    }

    document.querySelectorAll("[data-stage-link]").forEach(link => {
        const stage = Number(link.dataset.stageLink);
        const unlocked = isUnlocked(stage, progress);

        if (!unlocked) {
            link.classList.add("locked");
            link.setAttribute("aria-disabled", "true");
            link.addEventListener("click", event => {
                event.preventDefault();
                alert("Pass the previous stage first.");
            });
        }
    });

    const nextButton = document.getElementById("nextStage");
    const status = document.getElementById("completionStatus");

    if (nextButton && status) {
        const nextStage = currentStage + 1;
        const passed = progress.completed.includes(currentStage);

        if (passed && currentStage < 4) {
            nextButton.classList.remove("locked-link");
            status.textContent =
                `You passed Stage ${currentStage}. Stage ${nextStage} is now unlocked.`;
        } else if (currentStage === 4 && passed) {
            nextButton.classList.add("locked-link");
            status.textContent =
                "Congratulations! You have completed all four stages.";
        } else {
            nextButton.classList.add("locked-link");
            status.textContent =
                "Complete this stage with at least 75% to unlock the next stage.";
        }
    }

    if (currentStage === 4) {
        const certificate = document.getElementById("certificateMessage");

        if (certificate && progress.completed.includes(4)) {
            certificate.innerHTML = `
                <div class="result-box">
                    <h3>Course completed!</h3>
                    <p>You have successfully passed all four stages.</p>
                    <p>Your final assessment score: ${progress.scores[4]}%</p>
                </div>
            `;
        }
    }
}


// ==========================================
// BUILD THE QUESTIONS
// ==========================================

function renderQuestions() {
    const container = document.getElementById("quizQuestions");

    if (!container) {
        return;
    }

    const questions = questionBank[currentStage];

    if (!questions) {
        container.textContent = "No questions available.";
        return;
    }

    container.innerHTML = "";

    questions.forEach((question, index) => {
        const box = document.createElement("div");
        box.className = "question";

        const heading = document.createElement("h3");
        heading.textContent =
            `${index + 1}. ${question.q}`;

        box.appendChild(heading);

        question.a.forEach((answer, answerIndex) => {
            const label = document.createElement("label");
            label.className = "option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question-${index}`;
            radio.value = answerIndex;

            const text = document.createElement("span");
            text.textContent = answer;

            label.appendChild(radio);
            label.appendChild(text);

            box.appendChild(label);
        });

        container.appendChild(box);
    });
}


// ==========================================
// MARK THE ASSESSMENT
// ==========================================

function submitAssessment() {
    const questions = questionBank[currentStage];
    const resultContainer = document.getElementById("quizResult");

    if (!questions || !resultContainer) {
        return;
    }

    let score = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        const selected = document.querySelector(
            `input[name="question-${index}"]:checked`
        );

        if (!selected) {
            unanswered++;
            return;
        }

        if (Number(selected.value) === question.c) {
            score++;
        }
    });

    if (unanswered > 0) {
        alert(
            `You still have ${unanswered} unanswered question(s). Please answer all questions.`
        );
        return;
    }

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    const passed = percentage >= 75;

    if (passed) {
        if (!progress.completed.includes(currentStage)) {
            progress.completed.push(currentStage);
        }

        progress.scores[currentStage] = percentage;
        saveProgress(progress);
    } else {
        // A previous pass remains valid if the learner is retaking.
        // A failed retake does not remove a previously earned pass.
    }

    const heading = passed
        ? "Excellent work!"
        : "Keep practising!";

    const message = passed
        ? currentStage === 4
            ? "You have successfully completed the advanced English course."
            : `You scored at least 75%. Stage ${currentStage + 1} is now unlocked.`
        : "You need at least 75% to unlock the next stage. Review the lesson and try again.";

    resultContainer.innerHTML = `
        <div class="result-box ${passed ? "" : "fail"}">
            <h3>${heading}</h3>
            <p><strong>Your score:</strong> ${score} / ${questions.length}</p>
            <p><strong>Percentage:</strong> ${percentage}%</p>
            <p><strong>Required pass mark:</strong> 75%</p>
            <p>${message}</p>
            ${
                passed && currentStage < 4
                    ? `<a class="button" href="stage${currentStage + 1}.html">
                        Go to Stage ${currentStage + 1}
                       </a>`
                    : passed
                        ? `<a class="button" href="index.html">
                            Review the course
                           </a>`
                        : `<button class="button" id="retryQuiz" type="button">
                            Try again
                           </button>`
            }
        </div>
    `;

    if (passed) {
        updateNavigation();
    }

    const retryButton = document.getElementById("retryQuiz");

    if (retryButton) {
        retryButton.addEventListener("click", function () {
            renderQuestions();
            resultContainer.innerHTML = "";
        });
    }

    resultContainer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ==========================================
// START THE COURSE
// ==========================================

const submitButton = document.getElementById("submitQuiz");

renderQuestions();
updateNavigation();

if (submitButton) {
    submitButton.addEventListener("click", submitAssessment);
}
