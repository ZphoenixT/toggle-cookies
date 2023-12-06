'use strict';

let height, width, browser, os;
let life = 5;

// Function to open the modal after a delay
function openModalDelayed() {
  setTimeout(function () {
    document.getElementById('myModal').style.display = 'block';
  }, 1000);
}

// Call openModalDelayed when the page finishes loading
window.onload = openModalDelayed;

function hideModals() {
  const modal1 = document.querySelector('.modal1');
  const modal2 = document.querySelector('.modal2');
  modal1.style.display = 'none';
  modal2.style.display = 'none';
}

// Event listener for the Accept button click
document.querySelectorAll('.accept').forEach(button => {
  button.addEventListener('click', function () {
    hideModals();
    const modal2 = document.querySelector('.modal2');
    modal2.style.display = 'none'; // Hide modal2
    getCookies();
  });
});

function showSettings() {
  const modal1 = document.querySelector('.modal1');
  const modal2 = document.querySelector('.modal2');
  modal1.style.display = 'none';
  modal2.style.display = 'block';
}

// Event listener for the Settings button click
document.querySelector('.settings').addEventListener('click', showSettings);

// Window
function getWindowH() {
  height = window.innerHeight;
}

function getWindowW() {
  width = window.innerWidth;
}

// Browser
function getBrowser() {
  const userAgent = navigator.userAgent;
  browser = "Unknown";

  if (userAgent.includes("Firefox")) {
    browser = "Mozilla Firefox";
  } else if (userAgent.includes("Edg")) {
    browser = "Microsoft Edge";
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    browser = "Opera";
  } else if (userAgent.includes("Chrome")) {
    browser = "Google Chrome";
  } else if (userAgent.includes("Safari")) {
    browser = "Safari";
  }
}

// OS
function getOS() {
  const platform = navigator.platform;
  os = "Unknown OS";

  if (platform.includes("Win")) {
    os = "Windows OS";
  } else if (platform.includes("Mac")) {
    os = "Mac OS";
  } else if (platform.includes("Linux")) {
    os = "Linux OS";
  } else if (platform.includes("iPhone")) {
    os = "iOS";
  } else if (platform.includes("Android")) {
    os = "Android OS";
  }
}

// Cookies
function getCookies() {
  getBrowser();
  getOS();
  getWindowH();
  getWindowW();

  const settingsList = document.querySelectorAll('.settings-list li');
  const selectedCookies = [];

  settingsList.forEach(setting => {
    const checkbox = setting.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      const label = setting.querySelector('.settingLabel').textContent;
      let value = null;

      if (label === 'Browser') {
        value = browser;
      } else if (label === 'Operating System') {
        value = os;
      } else if (label === 'Screen Width') {
        value = width;
      } else if (label === 'Screen Height') {
        value = height;
      }

      if (value !== null) {
        selectedCookies.push(`${label}=${value}`);
      }
    }
  });

  selectedCookies.forEach(cookie => {
    document.cookie = `${cookie}; path=/; max-age=${life}; SameSite=Lax`;
  });

  setCookies(selectedCookies);
}

function setCookies(selectedCookies) {
  const cookies = document.cookie.split(';');
  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    if (selectedCookies.includes(`${name}=${value}`)) {
      console.log(`${name}: ${value}`);
    }
  });
}

console.log(document.cookie ? 'Cookies available' : 'No cookies found');