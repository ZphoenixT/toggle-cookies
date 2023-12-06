'use strict';

// Function to open the modal after a delay
function openModalDelayed() {
    setTimeout(function() {
      document.getElementById('myModal').style.display = 'block';
    }, 1000); // 1000 milliseconds = 1 second
  }
  
  // Call openModalDelayed when the page finishes loading
  window.onload = openModalDelayed;
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }