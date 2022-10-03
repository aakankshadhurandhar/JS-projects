const questionsAnswers = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

class QuestionsAnswers {
  constructor() {
    this.attachEvents();
  }
  attachEvents() {
    this.createElements();
  }
  createElements() {
    const container = document.querySelector(".faq-details");

    const FAQdiv = document.createElement("div");
    container.appendChild(FAQdiv);
    FAQdiv.setAttribute("class", "FAQdiv");

    questionsAnswers.map((item) => {
      const component = document.createElement("div");
      FAQdiv.appendChild(component);
      component.setAttribute("class", "component");

      component.innerHTML = `<details><summary>${item.question} </summary><p>${item.answer} <p></details>`;
    });
  }
}
new QuestionsAnswers();
