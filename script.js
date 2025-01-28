const input = document.querySelector("#json");
const output = document.querySelector(".output-form");
const questionsNumber = document.querySelector("#questions-number");
const error = document.querySelector("#error");
const titleElement = document.querySelector("#title");

function parseJSON(json) {
  try {
    const data = JSON.parse(json);
    const title = data.title;
    const questions = data.questions;
    return { title, questions };
  } catch (e) {
    error.textContent = e.message;
    console.error(e);
    return { title: "", questions: [] };
  }
}

input.addEventListener("input", (e) => {
  error.textContent = "";

  const { title, questions } = parseJSON(e.target.value);
  if (!title || questions.length <= 0) return;
  titleElement.textContent = title;
  output.innerHTML = "";
  questionsNumber.textContent = questions.length;
  questions.forEach((question) => {
    const questionElement = createQuestionElement(question);
    output.appendChild(questionElement);
    output.appendChild(document.createElement("br"));
  });
});

function createQuestionElement(question) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  const header = document.createElement("h3");
  header.textContent = question.title;
  questionElement.appendChild(header);

  const optionsList = document.createElement("ul");
  questionElement.appendChild(optionsList);

  question.options.forEach((option) => {
    const optionElement = createOptionElement(option, question);
    optionsList.appendChild(optionElement);
  });

  return questionElement;
}

function createOptionElement(option, question) {
  const optionElement = document.createElement("li");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = `option-${option.id}`;
  radio.id = `option-${option.id}`;
  radio.value = option.id;
  radio.addEventListener("change", (e) => {
    const parent = e.target.parentNode.parentNode;
    const correctOptionId = question.answer;
    optionElement.classList.toggle("incorrect", correctOptionId !== option.id);
    const options = parent.querySelectorAll("li");
    options.forEach((option) => {
      const selectedOption = option.querySelector("input").value * 1;
      option.classList.toggle("correct", selectedOption === correctOptionId);
      option.classList.add("disabled");
      option.querySelector("input").disabled = true;
    });
  });
  const label = document.createElement("label");
  label.htmlFor = `option-${option.id}`;
  label.textContent = option.value;
  optionElement.appendChild(radio);
  optionElement.appendChild(label);
  return optionElement;
}
