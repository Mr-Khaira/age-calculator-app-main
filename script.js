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
  console.log("Beginning with - ", birthDay, birthMonth, birthYear);

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let yearsDiff = currentYear - birthYear;
  let monthDiff = currentMonth - birthMonth;
  let dayDiff = currentDate - birthDay;

  if (birthDay > currentDate && birthMonth >= currentMonth) {
    yearsDiff--;
  }

  if (currentMonth > birthMonth) {
    yearsDiff--;
  }

  if (birthMonth >= currentMonth) {
    monthDiff = 12 - birthMonth + currentMonth;
  }

  if (birthDay > currentDate) {
    let daysInTheMonth = new Date(birthYear, birthMonth, 0).getDate();
    console.log(
      "days - ",
      daysInTheMonth,
      "birthDay - ",
      birthDay,
      " currentDate - ",
      currentDate
    );

    if (daysInTheMonth === 31) {
      monthDiff--;

      dayDiff = daysInTheMonth - birthDay + currentDate;
    } else if (daysInTheMonth === 30) {
      monthDiff--;
      dayDiff = daysInTheMonth - birthDay + currentDate + 1;
    } else {
      monthDiff--;
      dayDiff =
        new Date(birthYear, birthMonth, 0).getDate() +
        birthDay -
        currentDate +
        1;
    }
  }
  if (birthDay < currentDate) {
    yearsDiff--;
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

/* To Do : Keep Moving forword. */
