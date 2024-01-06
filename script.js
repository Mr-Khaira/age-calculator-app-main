"use strict";

// let day = document.getElementsByClassName("day");

// console.log(day.innerHTML);

const day = document.getElementById("day");
const dayLabel = document.getElementById("dayLabel");
const month = document.getElementById("month");
const monthLabel = document.getElementById("monthLabel");
const year = document.getElementById("year");
const yearLabel = document.getElementById("yearLabel");

const errorMessage1 = document.getElementsById("error1");
const errorMessage2 = document.getElementsById("error2");
const errorMessage3 = document.getElementsById("error3");

errorMessage1.innerText =
  errorMessage2.innerText =
  errorMessage3.innerText =
    "This field is required";

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
  if (dayMonthYear.value === "") {
    dayMonthYear.classList.add("empty-input");
    labelName.classList.add("lable-allert");
    errorMessage[0].style.display = "block";
  }
  dayMonthYear.addEventListener("input", function () {
    console.log(dayMonthYear.value);
    if (dayMonthYear.value !== "") {
      dayMonthYear.classList.remove("empty-input");
      labelName.classList.remove("lable-allert");
      errorMessage[0].style.display = "none";
    } else {
      dayMonthYear.classList.add("empty-input");
      labelName.classList.add("lable-allert");
      errorMessage[0].style.display = "block";
    }
  });
}

/* To Do : Error message dilema */
