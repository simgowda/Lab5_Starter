// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('#voice-select');
  const button = document.querySelector('button');
  const textarea = document.querySelector('#text-to-speak');
  const faceImg = document.querySelector('#explore img');

  // populate the dropdown with available voices
  function populateVoiceList() {
    const voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    if (synth.speaking) synth.cancel();
    const speak = new SpeechSynthesisUtterance(textarea.value);
    // match selected voice
    const selectedOption = voiceSelect.selectedOptions[0];
    if (selectedOption && selectedOption.value !== 'select') {
      const voices = synth.getVoices();
      speak.voice = voices.find(v => v.name === selectedOption.getAttribute('data-name')) || null;
    }

    // change face image while speaking
    speak.onstart = () => { faceImg.src = 'assets/images/smiling-open.png'; };
    speak.onend   = () => { faceImg.src = 'assets/images/smiling.png'; };
    speak.onerror = () => { faceImg.src = 'assets/images/smiling.png'; };

    synth.speak(speak);
  });
}

document.addEventListener('DOMContentLoaded', init);
