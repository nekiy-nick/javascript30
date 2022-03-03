window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let paragraph = document.createElement('p');
const textContainer = document.querySelector('.words');
textContainer.appendChild(paragraph);

recognition.addEventListener('result', e => {
  console.log(e)
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    paragraph.textContent = poopScript;

    if (e.results[0].isFinal) {
      paragraph = document.createElement('p');
      textContainer.appendChild(paragraph);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
