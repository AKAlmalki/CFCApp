// Function to display input field only if specifc option is selected
/* [Not included right now]
function widowerCheck(that) {
  if (that.value == "أرمل/ـة") {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "flex";
      document.getElementById("widower_hr").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "none";
      document.getElementById("widower_hr").style.display = "none";
  }
}
*/
// Check if the user work or not, display or hide the following field
function workCheck(that) {
  if (that.value == "نعم") {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "none";
  }
}

// If the value of this field become empty, it reset back the value to zero
function isThereWidower(inputField) {
  // Get the value of the input field
  var value = inputField.value.trim();

  // Check if the value is empty or blank
  if (value === "" || isNaN(value)) {
    // If empty or not a number, set it back to zero
    inputField.value = "0";
  }

  // Get the value of the orphan number input field
  var widowerNumber = parseInt(inputField.value);

  // Get the container element
  var widowerDurationContainer = document.getElementById("id_widower_duration_group_info");

  // Check if the orphan number is more than 0
  if (widowerNumber > 0) {
    // Display the orphan duration container
    widowerDurationContainer.style.display = "block";
  } else {
    // Hide the orphan duration container
    widowerDurationContainer.style.display = "none";
  }
}

  // If the value of this field become empty, it reset back the value to zero
function isThereOrphan(inputField) {
  // Get the value of the input field
  var value = inputField.value.trim();

  // Check if the value is empty or blank
  if (value === "" || isNaN(value)) {
    // If empty or not a number, set it back to zero
    inputField.value = "0";
  }

  // Get the value of the orphan number input field
  var orphanNumber = parseInt(inputField.value);

  // Get the container element
  var orphanDurationContainer = document.getElementById("id_orphan_duration_group_info");

  // Check if the orphan number is more than 0
  if (orphanNumber > 0) {
    // Display the orphan duration container
    orphanDurationContainer.style.display = "block";
  } else {
    // Hide the orphan duration container
    orphanDurationContainer.style.display = "none";
  }
}

