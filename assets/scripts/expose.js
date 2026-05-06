// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Cache the DOM elements once so event handlers are easier to read.
  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = document.querySelector('#expose img');
  const audio        = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton   = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function () {
    const selected = hornSelect.value;

    // Keep image + audio in sync with whichever horn user picks.
    hornImage.src = `assets/images/${selected}.svg`;
    hornImage.alt = selected;

    audio.src = `assets/audio/${selected}.mp3`;
  });

  // Play current horn from the beginning each time button is clicked.
  playButton.addEventListener('click', function () {
    // Ignore clicks before a horn is selected.
    if (hornSelect.value === 'select') return;
    audio.currentTime = 0;
    audio.play();

    // Party horn gets a little extra celebration.
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  // Convert slider's 0-100 value to audio's 0.0-1.0 scale.
  volumeSlider.addEventListener('input', function () {
    const volume = parseInt(volumeSlider.value);
    audio.volume = volume / 100;

    // Swap icon based on rough loudness tiers.
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
