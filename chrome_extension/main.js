// ============= Declaration ============= //

const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLeads = [];

// ============= Function ============= //

function renderLeads() {
  let listItems = "";
  for (let lead of myLeads) {
    listItems += `
    <li>
      <a href="${lead}" target="_blank">
        ${lead} 
      </a> 
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

// ============= Main ============= //

let leadFormLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadFormLocalStorage) {
  myLeads = leadFormLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  if (inputEl.value !== "") {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    inputEl.value = "";
  }
});
