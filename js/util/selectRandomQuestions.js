function selectRandomQuestions(questions, num) {
  let shuffled = questions.sort(() => 0.5 - Math.random());
  let returned = shuffled.slice(0, num);
  for (let i = 0; i < returned.length; i++) {
    returned[i].answers.sort(() => 0.5 - Math.random());
  }

  return returned;
}

export default selectRandomQuestions;