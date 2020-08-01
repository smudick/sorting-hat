"use strict";
const houses = [
  { houseName: "Gryffindor", houseColor: "red" },
  { houseName: "Slytherin", houseColor: "green" },
  { houseName: "Hufflepuff", houseColor: "#FFD700" },
  { houseName: "Ravenclaw", houseColor: "blue" },
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
          style="font-size: 1.2rem"
          class="form-control mb-2"
          id="inlineFormInput"
          placeholder="Student Name"
          autocomplete="off"
          
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
  document.querySelector("#nameButton").addEventListener("click", backToPlaceholder);
  
};

const backToPlaceholder = () => {
  document.querySelector("#inlineFormInput").value = '';
  document.querySelector("#inlineFormInput").required = 'false';
};

const expelButtonClick = () => {
  document.querySelector("#studentCard").addEventListener("click", deleteItems);
};

let studentNames = [];

const getName = () => {
  if (document.getElementById("inlineFormInput").value !== "") {
    const name = document.getElementById("inlineFormInput").value;
    let houseNumber = getHouse();
    studentNames.push({
      name: name,
      house: houses[houseNumber].houseName,
      color: houses[houseNumber].houseColor,
    });
    document.querySelector("#inlineFormInput").required = 'false';
  } else {
    document.querySelector("#inlineFormInput").required = 'true';
  }
};

const getHouse = () => {
  return Math.floor(Math.random() * 4);
};

const buildCard = () => {
  let domString = "";

  for (let i = 0; i < studentNames.length; i++) {
    domString += `<div class="card" style="width: 14rem; margin: 1em; color: white; text-align: center; text-transform: capitalize;">`;
    domString += `<div class="card-body" style="background-color:${studentNames[i].color};">`;
    domString += `<h5 class="card-title" style="font-size: 1.7rem">${studentNames[i].name}</h5>`;
    domString += `<h6 class="card-subtitle mb-2" style="font-size: 1.5rem">${studentNames[i].house}</h6>`;
    domString += `<button type="button" style="font-size: 1.3rem" class="btn btn-danger" id=${i}>Expel</button>`;
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
