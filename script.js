function startGame() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('level1').classList.remove('hidden');
}

function checkLevel1() {
  const answer = document.getElementById('level1-answer').value;
  const feedback = document.getElementById('level1-feedback');
  if (answer == 10) {
    feedback.textContent = "Correct! Let's move to the next level.";
    document.getElementById('level1').classList.add('hidden');
    document.getElementById('level2').classList.remove('hidden');
  } else {
    feedback.textContent = 'Try again! Hint: What is the value assigned to x?';
  }
}

function checkLevel2() {
  const answer = document.getElementById('level2-answer').value;
  const feedback = document.getElementById('level2-feedback');
  if (answer == 15) {
    feedback.textContent = "Correct! Let's move to the next level.";
    document.getElementById('level2').classList.add('hidden');
    document.getElementById('level3').classList.remove('hidden');
  } else {
    feedback.textContent = 'Try again! Hint: Sum the numbers from 1 to 5.';
  }
}

function checkLevel3() {
  const answer = document.getElementById('level3-answer').value;
  const feedback = document.getElementById('level3-feedback');
  if (answer == 8) {
    feedback.textContent = "Correct! You've completed the game!";
  } else {
    feedback.textContent = 'Try again! Hint: Add 5 and 3.';
  }
}
