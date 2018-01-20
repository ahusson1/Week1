const videoButton = document.getElementById("videoButton");
const balePic = document.getElementById("balePic");
const trivia = document.getElementById("trivia");
const baleVideo = document.getElementById("baleVideo")
const tableButton = document.getElementById("tableButton")
const movieTable = document.getElementById("movieTable")
const titleInput = document.getElementById("titleInput")
const yearInput = document.getElementById("yearInput")
//create baleVideo, videoButton, movieTable, titleInput, yearInput and trivia variables for DOM manipulation using above code as reference


triviaFunc = () => {
  alert("Welcome to Bale's Trivia! Please enter the letter of your answer");
  const value1 = prompt("Which Batman movie was Christian Bale's highest grossing movie worldwide? (a) Batman Begins, (b) The Dark Knight, (c) The Dark Knight Rises ");
  if (value1 === "c" || value1 === "C"){
    alert("You are RIGHT!");
  } else {
    alert("You are WRONG!");
  }
  const value2 = prompt("How tall is Christian Bale? (a) 5'8, (b)6'0, (c)5'6")
  if (value2 === "b" || value2 === "B"){
    alert("You are RIGHT!");
  } else {
    alert("You are WRONG!");
  }
  const value3 = prompt("Where was Christian Bale born? (a)Scottsbluff, Nebraska, (b)Toronto, Canada, (c)Haverfordwest, United Kingdom");
  if (value3 === "c" || value3 === "C"){
    alert("You are RIGHT!");
  } else {
    alert("You are WRONG!");
  }
}
//use value collected from prompt, if else statements, operators, and alerts to handle trivia question

trivia.addEventListener("click", function(){
  triviaFunc();
});

videoButton.addEventListener("click", function(){
  balePic.classList.toggle("displayClass");
  baleVideo.classList.toggle("displayClass");
});
//toggle balePic and baleVideo classes with button functionality

tableButton.addEventListener("click", function(){
  const row = movieTable.insertRow(6);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  // create variable to insert new cell similar to code above
  cell1.innerHTML = titleInput.value;
  cell2.innerHTML = yearInput.value;
});
  // add yearInput value to cell you just created
  //call resetInputValues function;

resetInputValues = () => {
  //define function to reset input values
};
