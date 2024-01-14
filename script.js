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

  age(Number(day.value), Number(month.value), Number(year.value));
});

function age(birthDay, birthMonth, birthYear) {
  let today = new Date();

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let yearsDiff = currentYear - birthYear;
  let monthDiff = currentMonth - birthMonth;
  let dayDiff = currentDate - birthDay;

  if (birthMonth > currentMonth) {
    monthDiff = 12 - birthMonth + currentMonth; // Remaning months of this year has to be added to the months until the birthday in the next year.
    yearsDiff--; // Birthday is not yet here so -1.
  }

  if (birthDay > currentDate) {
    monthDiff--; // NOT a complemete month, ie the dff is less than even 28.
    let daysInTheMonth = new Date(birthYear, birthMonth, 0).getDate();
    dayDiff = daysInTheMonth - birthDay + currentDate + 1; // Compensating 1 day.

    if (daysInTheMonth === 31) {
      dayDiff = daysInTheMonth - birthDay + currentDate;
    } else if (daysInTheMonth === 29) {
      dayDiff = daysInTheMonth - birthDay + currentDate + 2; // Compensating 2 days.
    }
  }

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

/* To Do : Data validation. */
