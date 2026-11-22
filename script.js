// Short learning checks after the three interactive experiments.
const quizData = [
  { question:"1. Why can one distance measurement not reveal one exact 2D location?",
    options:["It gives a circle of possible locations","It gives an exact point","It gives no useful information"], answer:0,
    explanation:"One distance defines a circle around the satellite. More measurements narrow the possibilities." },
  { question:"2. A 100 ns delay adds about 30 m to one satellite's measured range. What happens to position error?",
    options:["It is always exactly 30 m","It depends on the other measurements and geometry","It is always zero"], answer:1,
    explanation:"Measured range error and final position error are different. Satellite geometry matters." },
  { question:"3. When does breadth-first search find a shortest route in our city?",
    options:["When each road segment has equal cost","Only if there are no road closures","When it uses the fastest traffic speed"], answer:0,
    explanation:"BFS minimises the number of road segments. This is shortest distance here because every segment is equal." }
];
const quizContainer = document.getElementById("quizQuestions");
if (quizContainer) {
  quizData.forEach((item,index) => {
    const fieldset=document.createElement("fieldset");
    fieldset.className="quiz-question";
    const legend=document.createElement("legend");
    legend.textContent=item.question;
    fieldset.appendChild(legend);
    const feedback=document.createElement("p");
    feedback.className="quiz-feedback";
    feedback.setAttribute("aria-live","polite");
    item.options.forEach((option,i)=>{
      const label=document.createElement("label");
      const radio=document.createElement("input");
      radio.type="radio";
      radio.name=`question-${index}`;
      radio.value=String(i);
      radio.addEventListener("change",()=>{
        const correct=i===item.answer;
        feedback.textContent=(correct?"Correct! ":"Not quite. ")+item.explanation;
        feedback.classList.toggle("correct",correct);
      });
      label.append(radio,document.createTextNode(" "+option));
      fieldset.appendChild(label);
    });
    fieldset.appendChild(feedback);
    quizContainer.appendChild(fieldset);
  });
}
