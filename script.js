let currentCrossword = 1;
let timeLeft = 60;

function startTimer() {
  const timerElement = document.getElementById('timer');
  const crosswordContainer = document.getElementById('crossword-container');
  const crosswords = document.querySelectorAll('.crossword');
  const crossword = document.getElementById(`crossword${currentCrossword}`);
  timerElement.textContent = timeLeft;
  crosswordContainer.style.display = 'block';
  crossword.style.display = 'block';

  const countdownTimer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(countdownTimer);
      crossword.style.display = 'none';
      if (currentCrossword < crosswords.length) {
        currentCrossword++;
        timeLeft = 60;
        setTimeout(() => {
          startTimer();
        }, 2000); // Tunda untuk 2 detik sebelum menampilkan teka-teki silang berikutnya
      } else {
        endGame();
      }
    }
  }, 1000);
}

function endGame() {
  const scoreElement = document.getElementById('score');
  const finalScoreElement = document.getElementById('final-score');
  const gameOverElement = document.getElementById('game-over');
  scoreElement.style.display = 'none';
  gameOverElement.style.display = 'block';
  finalScoreElement.textContent = calculateScore();
}

function calculateScore() {
  // Logika untuk menghitung skor permainan
  // Anda dapat menyesuaikan logika ini sesuai kebutuhan Anda
  return Math.floor(Math.random() * 1000); // Contoh: skor acak antara 0 dan 1000
}

window.onload = startTimer;