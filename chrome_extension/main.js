// ============= Firebase ============= //

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-90626-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// console.log(firebaseConfig.databaseURL);

// ============= Declaration ============= //

const inputBtn = document.querySelector("#input");
const deleteBtn = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
let myLeads = [];

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
