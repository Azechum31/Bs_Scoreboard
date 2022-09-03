// declare variables as containers to be used to interact with the DOM
let homeSideEl = document.getElementById('home-score-sheet');
let awaySideEl = document.getElementById('away-score-sheet');
const homeAddOneEl = document.getElementById('home_add_one_btn');
const homeAddTwoEl = document.getElementById('home_add_two_btn');
const homeAddThreeEl = document.getElementById('home_add_three_btn');
const awayAddOneEl = document.getElementById('away_add_one_btn');
const awayAddTwoEl = document.getElementById('away_add_two_btn');
const awayAddThreeEl = document.getElementById('away_add_three_btn');
const resetScoreEl = document.getElementById('reset');
homeSideEl.textContent = parseInt(0);
awaySideEl.textContent = parseInt(0);
let counter = 0;
let result = 0;

// Add event listeners to buttons of the home teams

homeAddOneEl.addEventListener('click', () => {
  counter += 1;
  return homeSideEl.textContent = counter;
})

homeAddTwoEl.addEventListener('click', () => {
  counter += 2;
  return homeSideEl.textContent = counter;
})

homeAddThreeEl.addEventListener('click', () => {
  counter += 3;
  return homeSideEl.textContent = counter;
})

//add event listeners to the buttons of the away team

awayAddOneEl.addEventListener('click', () => {
  result += 1;
  return awaySideEl.textContent = result;
})

awayAddTwoEl.addEventListener('click', () => {
  result += 2;
  return awaySideEl.textContent = result;
})

awayAddThreeEl.addEventListener('click', () => {
  result += 3;
  return awaySideEl.textContent = result;
})


resetScoreEl.addEventListener('click', () => {
  homeSideEl.textContent = 0;
  awaySideEl.textContent = 0;
})


