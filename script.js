let data = [];
let index = 0;

fetch("questions.js")
  .then(res => {
    if (!res.ok) {
      throw new Error("JSON konnte nicht geladen werden");
    }
    return res.json();
  })
  .then(json => {
    data = json;
    load();
  })
  .catch(err => {
    document.getElementById("question").innerText = "Fehler beim Laden der Fragen";
    console.error(err);
  });

function load() {
  document.getElementById("question").innerText = data[index].question;
  document.getElementById("answer").innerText = data[index].answer;
  document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
}

function nextQuestion() {
  index = (index + 1) % data.length;
  load();
}