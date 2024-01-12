"use strict";

const day = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const month = document.getElementById("month");
const monthLabel = document.getElementById("monthLabel");
const year = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");
const displayYear = document.getElementById("yearValue");
const displayMonth = document.getElementById("monthValue");
const displayDay = document.getElementById("dayValue");

const form = document.getElementById("form");
const button = document.getElementById("submitButton");

form.addEventListener("submit", (obj) => {
  obj.preventDefault();
  // console.log("day -", day.value);
  // console.log("Month -", month.value);
  // console.log("Year -", year.value);
});

function age(birthDay, birthMonth, birthYear) {
  let currDate = new Date();
  let yearsDiff = currDate.getFullYear() - birthYear;
  let monthDiff = birthMonth - (currDate.getMonth() + 1);
  let dayDiff = birthDay - currDate.getDay();
  displayYear.innerHTML = yearsDiff;
  displayMonth.innerHTML = monthDiff;
  displayDay.innerHTML = dayDiff;
}

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
    ErrorActivate();
    let exist = labelName.getElementsByClassName("error");
    if (exist.length > 0) {
    } else {
      labelName.appendChild(errorMessage);
    }
  }
  dayMonthYear.addEventListener("input", function () {
    if (dayMonthYear.value !== "") {
      ErrorDeactivate();
    } else {
      ErrorActivate();
    }
  });
}

/* To Do : Logic for the age calculation line - 19 - set logic as if the month has been pased in the cirrent year or not. */
