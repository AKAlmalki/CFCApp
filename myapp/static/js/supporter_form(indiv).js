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

function workCheck(that) {
  if (that.value == "نعم") {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "none";
  }
}

function isThereOrphan(that) {
  var orphanNum = parseInt(that.value); // Convert the value to a number

  if (orphanNum > 0) {
    document.getElementById("id_orphan_duration_group_info").style.display = "flex"; // Set the file input as required
  } else {
    document.getElementById("id_orphan_duration_group_info").style.display = "none"; // Remove the required attribute
  }
}

function isThereWidower(that) {
  var widowerNum = parseInt(that.value); // Convert the value to a number

  if (widowerNum > 0) {
    document.getElementById("id_widower_duration_group_info").style.display = "flex"; // Set the file input as required
  } else {
    document.getElementById("id_widower_duration_group_info").style.display = "none"; // Remove the required attribute
  }
}

