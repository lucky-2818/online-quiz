const questions = [
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      answer: 2
    },
    {
      question: "Which is not a programming language?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: 2
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Apple"],
      answer: 0
    },
    {
      question: "Which keyword is used to define a class in C++?",
      options: ["object", "method", "define", "class"],
      answer: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionButtons = document.getElementsByClassName("option-btn");
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].innerText = q.options[i];
    }
  }
  
  function selectOption(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
      score++;
    }
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById("next-btn").style.display = "none";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");
    loadQuestion();
    document.getElementById("next-btn").style.display = "none";
  }
  
  window.onload = loadQuestion;