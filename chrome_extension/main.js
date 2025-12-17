// ============= Declaration ============= //

const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
let myLeads = [];
const tabs = [{ url: "https://www.linkedin.com/in/per-harald-borgen/" }];

// ============= Function ============= //

function render(leads) {
  let listItems = "";
  for (let lead of leads) {
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

const leadFormLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadFormLocalStorage) {
  myLeads = leadFormLocalStorage;
  render(myLeads);
}

inputBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  if (inputEl.value !== "") {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEl.value = "";
  }
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
