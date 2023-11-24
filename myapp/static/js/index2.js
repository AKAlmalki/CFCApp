// Function to display input field only if specifc option is selected
function widowerCheck(that) {
  if (that.value == "widower") {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "flex";
      document.getElementById("widower_hr").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "none";
      document.getElementById("widower_hr").style.display = "none";
  }
}

function healthCheck(that) {
  if (that.value == "not good") {
      document.getElementById("id_personalinfo_disease_type_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_disease_type_group_info").style.display = "none"
  }
}

function workCheck(that) {
  if (that.value == "yes") {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "none"
  }
}