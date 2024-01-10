"use strict";

// let day = document.getElementsByClassName("day");

// console.log(day.innerHTML);

const day = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const month = document.getElementById("month");
const monthLabel = document.getElementById("monthLabel");
const year = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");

const form = document.getElementById("form");
const button = document.getElementById("submitButton");

form.addEventListener("submit", (obj) => {
  obj.preventDefault();
});

day.addEventListener("focus", function () {
  requiredField(day, dayLabel);
});
month.addEventListener("focus", function () {
  requiredField(month, monthLabel);
});

year.addEventListener("focus", function () {
  requiredField(year, yearLabel);
});

function requiredField(dayMonthYear, labelName) {
  // Creating an error message
  let errorMessage = document.createElement("div");
  errorMessage.className = "error";
  errorMessage.textContent = "This field is required";

  // Adding error functionality

  function ErrorActivate() {
    errorMessage.style.display = "block";
    dayMonthYear.classList.add("empty-input");
    labelName.classList.add("lable-allert");
  }

  function ErrorDeactivate() {
    errorMessage.style.display = "none";
    dayMonthYear.classList.remove("empty-input");
    labelName.classList.remove("lable-allert");
  }

  if (dayMonthYear.value === "") {
    let exist = labelName.getElementsByClassName("error");
    if (exist.length > 0) {
    } else {
      labelName.appendChild(errorMessage);
    }

    ErrorActivate();
  }
  dayMonthYear.addEventListener("input", function () {
    if (dayMonthYear.value !== "") {
      ErrorDeactivate();
    } else {
      ErrorActivate();
    }
  });
}

/* To Do : Logic for the age calculation */
