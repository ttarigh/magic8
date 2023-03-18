const eightBall = document.querySelector('#eight-ball');
const questionBox = document.querySelector('#question-box');
const questionInput = document.querySelector('#question-input');
const submitButton = document.querySelector('#submit-button');
const animationImages = ['head1.png', 'head2.png'];

let animationIndex = 0;
let isAnimating = false;

questionBox.style.display = 'none';

eightBall.addEventListener('click', () => {
    const synth = window.speechSynthesis;
    const questionMessage = new SpeechSynthesisUtterance('Ask me a question!');
    
    isAnimating = true;
    animate();
  
    synth.speak(questionMessage);
    questionMessage.onend = () => {
      questionBox.style.display = 'flex';
      questionInput.focus();
      isAnimating = false;
    };
  });


submitButton.addEventListener('click', () => {
  questionBox.style.display = 'none';

  const synth = window.speechSynthesis;
  const answers = [
    'It is certain',
    'Reply machine busy, try again',
    'Don’t count on it',
    'It is decidedly so',
    'Ask again later',
    'My reply is no',
    'Without a doubt',
    'Better not tell you now',
    'My sources say no',
    'Yes, definitely',
    'Cannot predict now',
    'Outlook not so good',
    'You may rely on it',
    'Concentrate and ask again',
    'Very doubtful',
    'As I see it: yes!',
    'Most likely',
    'The outlook is good',
    'Yes',
    'All signs point to yes'
  ];
  const answer = answers[Math.floor(Math.random() * answers.length)];
  const answerMessage = new SpeechSynthesisUtterance('Answering your question: ' + answer);

  isAnimating = true;
  animate();

  synth.speak(answerMessage);
  answerMessage.onend = () => {
    isAnimating = false;
  };
  questionInput.value = '';
});

questionInput.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    submitButton.click();
  }
});

function animate() {
  if (isAnimating) {
    eightBall.src = animationImages[animationIndex];
    animationIndex = (animationIndex + 1) % animationImages.length;
    setTimeout(animate, 120);
  } else {
    eightBall.src = animationImages[0];
    animationIndex = 0;
  }
}
