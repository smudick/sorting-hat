"use strict";
const houses = [
  { houseName: "Gryffindor", houseColor: "red" },
  { houseName: "Slytherin", houseColor: "green" },
  { houseName: "Hufflepuff", houseColor: "yellow" },
  { houseName: "Ravenclaw", houseColor: "blue" }
];

const initialButtonClick = () => {
  document.querySelector("#sortButton").addEventListener("click", buildForm);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);

  selectedDiv.innerHTML = textToPrint;
};

const buildForm = () => {
  let domString = `<form>
    <div class="form-row align-items-center">
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInput">Name</label>
        <input
          type="text"
          class="form-control mb-2"
          id="inlineFormInput"
          placeholder="Student Name"
          required
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-2" id="nameButton">Sort!</button>
      </div>
    </div>
  </form>`;

  printToDom("form", domString);
  nameButtonClick();
};

const nameButtonClick = () => {
  document.querySelector("#nameButton").addEventListener("click", getName);
  document.querySelector("#nameButton").addEventListener("click", buildCard);
};

const expelButtonClick = () => {
  document.querySelector("#studentCard").addEventListener("click", deleteItems);
};

let studentNames = [];

const getName = () => {
  const name = document.getElementById("inlineFormInput").value;
  let houseNumber = getHouse();
  studentNames.push({ name: name, house: houses[houseNumber].houseName, color: houses[houseNumber].houseColor });
};

const getHouse = () => {
  return Math.floor(Math.random() * 4);
};

const buildCard = () => {
  let domString = "";

  for (let i = 0; i < studentNames.length; i++) {
    domString += `<div class="card" style="width: 18rem;">`;
    domString += `<div class="card-body" style="background-color:${studentNames[i].color};">`;
    domString += `<h5 class="card-title">${studentNames[i].name}</h5>`;
    domString += `<h6 class="card-subtitle mb-2 text-muted">${studentNames[i].house}</h6>`;
    domString += `<button type="button" class="btn btn-danger" id=${i}>Expel</button>`;
    domString += `</div></div>`;
  }
  printToDom("studentCard", domString);
  expelButtonClick();
};

const deleteItems = (e) => {
  const ctype = e.target.type;
  const target = e.target.id;

  if (ctype === "button") {
    studentNames.splice(target, 1);

    buildCard();
  }
};

const init = () => {
  initialButtonClick();
};
init();
