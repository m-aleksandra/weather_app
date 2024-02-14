import { createLineChart, createBarChart } from "./createCharts.js";

// Setting city name from local storage
const city = localStorage.getItem("city");
document.querySelector("#city").innerText = city;

// Getting weather data from local storage
const data = JSON.parse(localStorage.getItem("data"));
const daily = data.daily;

const ctxTemp = document.querySelector(".temp-chart").getContext("2d");
const ctxPrecip = document.querySelector(".precip-chart").getContext("2d");
const ctxWind = document.querySelector(".wind-chart").getContext("2d");

const tempBtn = document.querySelector(".temp");
const windBtn = document.querySelector(".wind");
const precipBtn = document.querySelector(".precip");
const backBtn = document.querySelector(".back");


// Creating weather charts
createLineChart(ctxTemp, "Daily Temperature", daily.dates, daily.dailyTemp);
createBarChart(ctxPrecip, "Daily Precipation", daily.dates, daily.dailyPrecip);
createLineChart(ctxWind, "Daily Windspeed", daily.dates, daily.dailyPrecip);

// Redirect to another page
backBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

// Switching between weather charts on button clicks
tempBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  tempBtn.classList.add("active");
  document.querySelector(".current").classList.remove("current");
  document.querySelector("#temp").classList.add("current");
});

precipBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  precipBtn.classList.add("active");
  document.querySelector(".current").classList.remove("current");
  document.querySelector("#precip").classList.add("current");
});

windBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  windBtn.classList.add("active");
  document.querySelector(".current").classList.remove("current");
  document.querySelector("#wind").classList.add("current");
});
