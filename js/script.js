// // Final Tea Results Data for 'DEAR YOU, DRINK THIS' — in JavaScript format

// export const teaResults = [
//     {
//       tea: "Chamomile",
//       emotion: "Overwhelmed, Anxious, Jittery, Overthinking",
//       exercises: [
//         "Do a 5-minute brain dump — write everything in your mind with no filter.",
//         "Try a 'breathe with me' guided audio — inhale calm, exhale chaos."
//       ],
//       affirmation: `Dear anxious heart,\nYou've been holding so many spinning thoughts, haven’t you? But not everything needs solving right now. You’re allowed to just be — without answers, without control. Imagine a little yellow flower whispering, ‘rest now, you sweet thing.’ The world can wait. You are safe, right here, in this gentle moment. Everything will settle, petal by petal.`
//     },
//     {
//       tea: "Lavender",
//       emotion: "Exhausted, Foggy, Sleep-deprived",
//       exercises: [
//         "Wrap yourself in a warm blanket and close your eyes for a 10-minute 'do nothing' break.",
//         "Rub lavender oil or lotion into your hands and take 3 long, deep sighs."
//       ],
//       affirmation: `Oh darling, you’ve been carrying too much.\nYour body’s lullaby has been playing, and it’s okay to answer it. You don’t have to earn rest — it is your birthright. Today, maybe the bravest thing you can do is close your eyes and drift, like a sleepy cloud over a lavender field. Sleep, sweet dreamer. The world will still love you when you wake.`
//     },
//     {
//       tea: "Rose",
//       emotion: "Lonely, Longing, Emotionally Soft",
//       exercises: [
//         "Write a letter to your past self — be the friend you needed.",
//         "Look in the mirror and say one kind thing to yourself out loud."
//       ],
//       affirmation: `Hello, little heart.\nI see that longing in your chest — that ache for closeness, softness, understanding. You are not invisible. You are made of poetry and quiet strength. Even if no one is nearby, the universe wraps you up in petals right now. You are worthy of love that feels like home. You already are that love.`
//     },
//     {
//       tea: "Peppermint",
//       emotion: "Mentally cluttered, Busy, Stuck",
//       exercises: [
//         "Pick one small task and finish it slowly — no multitasking.",
//         "Clean or organize something tiny (like your desk corner or one folder)."
//       ],
//       affirmation: `Dear whirlwind mind,\nYou don’t have to solve everything today. Let your thoughts line up like ducks in a row. Sip slowly. Inhale something minty. This moment can be your reset button. You are capable, even when you feel scrambled. One step. One deep breath. That’s how the tangle becomes a braid.`
//     },
//     {
//       tea: "Lemon Balm",
//       emotion: "Feeling 'not good enough', Insecure",
//       exercises: [
//         "Say one small thing you did well today — even if it’s brushing your teeth.",
//         "Do a 5-minute 'no rules' doodle of how your heart feels."
//       ],
//       affirmation: `Sweet soul,\nYou are not behind. You are not broken. You are becoming — just like blossoms that take their time. The world has tried to dim your sparkle, but guess what? Your light still peeks through. You don’t have to be perfect to be precious. You are allowed to bloom in your own cozy way.`
//     },
//     {
//       tea: "Tulsi",
//       emotion: "Burnout, Disillusionment, Emotional Flatness",
//       exercises: [
//         "Sit near something green (a plant, a tree, a patch of grass) and breathe slowly.",
//         "Whisper to yourself: 'I am allowed to begin again.'"
//       ],
//       affirmation: `Dear worn-down wonder,\nYou’ve given so much. Maybe too much. And now your spirit is whispering for pause — not because you’re lazy, but because you are sacred. Burnout is not weakness; it’s a message. Come back to yourself. Put your hands over your chest and feel the soft drum of life still beating. You are here. That is enough.`
//     },
//     {
//       tea: "Jasmine",
//       emotion: "Grieving, Sad, Longing for the past",
//       exercises: [
//         "Light a candle and let yourself cry or journal whatever memory comes.",
//         "Listen to one song that reminds you of someone or something you miss."
//       ],
//       affirmation: `Hello, tender spirit.\nSome days ache. Some memories glow even when they hurt. You are allowed to carry both — grief and love — like a soft shawl around your shoulders. Loss doesn’t mean you are broken. It means you cared deeply. Let the scent of jasmine remind you: what you’ve felt matters. And you’re not alone in missing it.`
//     },
//     {
//       tea: "Ginger",
//       emotion: "Uninspired, Low Energy, Dull",
//       exercises: [
//         "Try a 2-minute 'free scribble' — write or draw anything, fast and silly.",
//         "Change your environment: move rooms, light a new candle, wear a new color."
//       ],
//       affirmation: `Sweet sleepy spark,\nI know your light feels dim. But it’s still there. You don’t need to create a masterpiece — you just need to move, to feel again. Sometimes joy hides in messy little starts. Let the warmth of ginger remind you: you are fire. You are fun. You are flavor in a beige world. Let’s go dance with your daydreams again.`
//     }
//   ];

// ---- Questions & Answers ----
const questions = [
    {
      text: "1. How did you sleep last night?",
      options: [
        { text: "Tossed and turned 🌪", tea: "chamomile" },
        { text: "Couldn't get out of bed 💤", tea: "lavender" },
        { text: "Felt alone under the covers 🛏️", tea: "rose" },
        { text: "Dreamt of things I lost 🌙", tea: "jasmine" }
      ]
    },
    {
      text: "2. Right now, your heart feels...",
      options: [
        { text: "Beating too fast 🫀", tea: "chamomile" },
        { text: "A bit numb 💔", tea: "tulsi" },
        { text: "A little hollow 🎈", tea: "rose" },
        { text: "Restless and uninspired 🎨", tea: "ginger" }
      ]
    },
    {
      text: "3. When you try to relax, what happens?",
      options: [
        { text: "I can't shut my brain off 🧠", tea: "chamomile" },
        { text: "I melt into the bed instantly 🛋️", tea: "lavender" },
        { text: "I wish someone was around 🤝", tea: "rose" },
        { text: "I feel like I should be doing more 😔", tea: "lemonbalm" }
      ]
    },
    {
      text: "4. Your current vibe is closest to:",
      options: [
        { text: "Jittery ☕", tea: "chamomile" },
        { text: "Foggy 🌫️", tea: "lavender" },
        { text: "Quiet and unnoticed 🌒", tea: "rose" },
        { text: "Feeling behind everyone else 🐢", tea: "lemonbalm" }
      ]
    },
    {
      text: "5. How are your thoughts today?",
      options: [
        { text: "Spinning and fast-forwarding 🎡", tea: "chamomile" },
        { text: "Like a sleepy cloud ☁️", tea: "lavender" },
        { text: "Echoes in an empty room 🪞", tea: "rose" },
        { text: "Tangled in too many threads 🧵", tea: "peppermint" }
      ]
    },
    {
      text: "6. Your phone rings. You feel...",
      options: [
        { text: "Immediate panic 📞", tea: "chamomile" },
        { text: "Too tired to pick it up 😩", tea: "lavender" },
        { text: "Sad no one calls much 📵", tea: "rose" },
        { text: "Longing to hear a lost voice 🎧", tea: "jasmine" }
      ]
    },
    {
      text: "7. You made a mistake. What's your first thought?",
      options: [
        { text: "Overthink and replay it 💭", tea: "chamomile" },
        { text: "Ugh, why can't I do anything right? 🫠", tea: "lemonbalm" },
        { text: "No one would even care 🫥", tea: "rose" },
        { text: "What's the point these days? 🎭", tea: "tulsi" }
      ]
    },
    {
      text: "8. You're by yourself this weekend. You feel...",
      options: [
        { text: "Overanalyzing everything 🌀", tea: "chamomile" },
        { text: "Needing to hibernate 🧸", tea: "lavender" },
        { text: "Wishing someone cared 🧃", tea: "rose" },
        { text: "Trying to find creative sparks again 🎨", tea: "ginger" }
      ]
    },
    {
      text: "9. When you're walking alone...",
      options: [
        { text: "You rehearse imaginary convos 🗯️", tea: "chamomile" },
        { text: "You want to lie down under a tree 🌳", tea: "lavender" },
        { text: "You hope someone would text you 📩", tea: "rose" },
        { text: "You feel inspired by little things 🍂", tea: "ginger" }
      ]
    },
    {
      text: "10. How often do you take breaks?",
      options: [
        { text: "I feel guilty taking any 😓", tea: "chamomile" },
        { text: "I take naps, a lot 😴", tea: "lavender" },
        { text: "I just scroll and feel empty 📱", tea: "rose" },
        { text: "I stop to daydream and reflect 🌈", tea: "jasmine" }
      ]
    },
    {
      text: "11. Right now, what do you crave most?",
      options: [
        { text: "Peace of mind 🧘‍♀️", tea: "chamomile" },
        { text: "A nap in a fluffy blanket 🛏️", tea: "lavender" },
        { text: "A warm hug 🫂", tea: "rose" },
        { text: "To feel like I'm enough 🌱", tea: "lemonbalm" }
      ]
    },
    {
      text: "12. Someone compliments you. You feel...",
      options: [
        { text: "Unsure if they meant it 🤷‍♀️", tea: "chamomile" },
        { text: "Like crying from exhaustion 😢", tea: "lavender" },
        { text: "A small flicker of warmth 🕯️", tea: "rose" },
        { text: "Too worn down to care 😶‍🌫️", tea: "tulsi" }
      ]
    },
    {
      text: "13. Your room looks...",
      options: [
        { text: "Like a storm of thoughts hit it 🌪️", tea: "chamomile" },
        { text: "Dim and cozy but cluttered 🧸", tea: "lavender" },
        { text: "A bit too quiet 📭", tea: "rose" },
        { text: "Needing a creative refresh 🎨", tea: "ginger" }
      ]
    },
    {
      text: "14. You're sipping a warm drink. You think...",
      options: [
        { text: "“I hope this calms me down” ☕", tea: "chamomile" },
        { text: "“Finally, a moment to rest” 🥱", tea: "lavender" },
        { text: "“I wish I could share this” 💌", tea: "rose" },
        { text: "“I miss how things used to be” 📼", tea: "jasmine" }
      ]
    },
    {
      text: "15. What kind of sky matches your mood today?",
      options: [
        { text: "Lightning behind clouds ⚡", tea: "chamomile" },
        { text: "Purple dusk with sleepy stars 🌌", tea: "lavender" },
        { text: "Faded grey with one soft bird 🕊️", tea: "rose" },
        { text: "Smoky sky with hope on the edge 🔥🌤️", tea: "tulsi" }
      ]
    }
  ];
  
  // ---- Global state ----
  let currentQuestion = 0;
  const userAnswers = [];
  
  // ---- DOM Elements ----
    const homeScreen = document.getElementById("home");
    const quizScreen = document.getElementById("quiz-container");
    const resultScreen = document.getElementById("result");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");
    const teaName = document.getElementById("tea-name");
    const teaDescription = document.getElementById("tea-description");
    const exerciseList = document.getElementById("exercise-list");
    const affirmation = document.getElementById("affirmation");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    
  // ---- Functions ----
  function startQuiz() {
    homeScreen.classList.remove("active");
    homeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    quizScreen.classList.add("active");
    showQuestion();
    updateNavButtons();
  }
// Start the quiz
function startQuiz() {
  homeScreen.classList.remove("active");
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizScreen.classList.add("active");
  showQuestion();
  updateNavButtons();
}

// Display current question
function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = opt.text;
    optionButton.classList.add("option-btn");
    
    // Check if this option was previously selected
    if (userAnswers[currentQuestion] === opt.tea) {
      optionButton.classList.add("selected");
    }
    
    optionButton.onclick = () => {
      // Remove selection from all buttons
      document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.remove("selected");
      });
      
      // Add selection to this button
      optionButton.classList.add("selected");
      
      // Save the answer
      userAnswers[currentQuestion] = opt.tea;
      
      // Enable next button once an option is selected
      nextBtn.disabled = false;
    };
    
    optionsContainer.appendChild(optionButton);
  });
  
  // Update question counter
  document.getElementById("question-counter").textContent = 
    `Question ${currentQuestion + 1} of ${questions.length}`;
}
  
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
      updateNavButtons();
    } else if (currentQuestion == 14){
      // On last question, show submission option
      showSubmitButton();
    }
  }
  
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
      updateNavButtons();
    }
  }

  function updateNavButtons() {
    prevBtn.disabled = currentQuestion === 0;
    
    // Change next button to "submit" on the last question
    if (currentQuestion === questions.length - 1) {
      nextBtn.textContent = "Submit";
      nextBtn.onclick = showResult;
    } else {
      nextBtn.textContent = "Next";
      nextBtn.onclick = nextQuestion;
    }
    
    // Disable next button if no option is selected for current question
    nextBtn.disabled = !userAnswers[currentQuestion];
  }

  function showSubmitButton() {
    nextBtn.textContent = "Submit";
    nextBtn.onclick = showResult;
  }

function showResult() {
    quizScreen.classList.remove("active");
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    resultScreen.classList.add("active");

    const teaCount = {};
    userAnswers.forEach(tea => {
        teaCount[tea] = (teaCount[tea] || 0) + 1;
    });

    const topTea = Object.entries(teaCount).sort((a, b) => b[1] - a[1])[0][0];
    const result = teaResults[topTea]; // Ensure lowercase to match data.js
  
    teaName.textContent = result.name;
    teaDescription.textContent = result.description;
    exerciseList.innerHTML = "";
    result.exercises.forEach(ex => {
        const li = document.createElement("li");
        li.textContent = ex;
        exerciseList.appendChild(li);
      });
      
      // Display affirmation
      affirmation.textContent = result.affirmation;
    }
  
  function restartQuiz() {
    currentQuestion = 0;
    userAnswers.length = 0;
    userAnswers = [];
    resultScreen.classList.remove("active");
    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    homeScreen.classList.add("active");
}

// Initialize an array to store selected answers and corresponding tea types
let selectedTeas = [];

// Function to render the quiz questions and options
// function renderQuiz(questions) {
//     const quizContainer = document.getElementById('quiz-container');
//     // quizContainer.innerHTML = ''; // Clear previous content

//     questions.forEach((question, index) => {
//         const questionElement = document.createElement('div');
//         questionElement.classList.add('question');

//         // Display the question text
//         const questionText = document.createElement('p');
//         questionText.textContent = question.text;
//         questionElement.appendChild(questionText);

//         // Display the answer options as radio buttons
//         question.options.forEach((option, i) => {
//             const optionLabel = document.createElement('label');
//             const optionInput = document.createElement('input');
//             optionInput.type = 'radio';
//             optionInput.name = `question-${index}`;
//             optionInput.value = option.tea;
//             optionLabel.appendChild(optionInput);
//             optionLabel.appendChild(document.createTextNode(option.text));
//             questionElement.appendChild(optionLabel);
//             questionElement.appendChild(document.createElement('br'));
//         });

//         quizContainer.appendChild(questionElement);
//     });

//     // Display the submit button
//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'Submit';
//     submitButton.onclick = showResults;
//     quizContainer.appendChild(submitButton);
// }
// Function to render the quiz questions and options
function renderQuiz(questions) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous content
    quizContainer.classList.remove("hidden");

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        // Display the question text
        const questionText = document.createElement('p');
        questionText.textContent = question.text;
        questionElement.appendChild(questionText);

        // Create a container for the radio buttons (options)
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');
        question.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'question' + index;
            optionInput.value = option.tea; // store the tea type in the value

            // Display option text
            optionLabel.textContent = option.text;
            optionLabel.prepend(optionInput); // Add the input to the label
            optionsContainer.appendChild(optionLabel);
        });

        // Append the options to the question
        questionElement.appendChild(optionsContainer);
        quizContainer.appendChild(questionElement);
    });
}

// Function to handle the form submission and display results
function showResults() {
    // Collect the selected answers
    selectedTeas = [];
    const allRadioButtons = document.querySelectorAll('input[type="radio"]:checked');
    allRadioButtons.forEach((radio) => {
        selectedTeas.push(radio.value);
    });

    // Count the occurrences of each tea type
    const teaCounts = selectedTeas.reduce((acc, tea) => {
        acc[tea] = (acc[tea] || 0) + 1;
        return acc;
    }, {});

    // Find the tea with the highest count
    let recommendedTea = Object.keys(teaCounts).reduce((a, b) => teaCounts[a] > teaCounts[b] ? a : b);

    // Display the result based on the recommended tea
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';

    const teaResult = teaResults[recommendedTea];

    // Tea Name and Description
    const teaName = document.createElement('h2');
    teaName.textContent = `Recommended Tea: ${teaResult.name}`;
    resultContainer.appendChild(teaName);

    const teaDescription = document.createElement('p');
    teaDescription.textContent = teaResult.description;
    resultContainer.appendChild(teaDescription);

    // Exercises
    const exercisesTitle = document.createElement('h3');
    exercisesTitle.textContent = 'Calming Exercises:';
    resultContainer.appendChild(exercisesTitle);

    const exercisesList = document.createElement('ul');
    teaResult.exercises.forEach(exercise => {
        const listItem = document.createElement('li');
        listItem.textContent = exercise;
        exercisesList.appendChild(listItem);
    });
    resultContainer.appendChild(exercisesList);

    // Affirmation
    const affirmationTitle = document.createElement('h3');
    affirmationTitle.textContent = 'Positive Affirmation:';
    resultContainer.appendChild(affirmationTitle);

    const affirmationText = document.createElement('p');
    affirmationText.textContent = teaResult.affirmation;
    resultContainer.appendChild(affirmationText);
}

// Call renderQuiz to initialize the quiz on page load
document.addEventListener('DOMContentLoaded', function() {
    if (nextBtn) {
        nextBtn.disabled = true;
      }
    });
