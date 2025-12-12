const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLeads = [];

function renderLeads() {
  ulEl.innerHTML += `
    <li>
      <a href="#" target="_blank">
        ${inputEl.value} 
      </a> 
    </li>`;
}

inputBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  if (inputEl.value !== "") {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
  }
});
