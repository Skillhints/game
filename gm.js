const myquestion = document.getElementById("question");
console.log(myquestion.innerText);
const myChoice = Array.from(document.getElementsByClassName("choice-text"));
myChoice.forEach(element => {
    console.log(element.innerText);
  });