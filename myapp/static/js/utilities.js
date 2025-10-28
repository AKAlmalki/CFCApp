function toggleConditionalField(sourceElem, targetElemId, showValue='نعم') {
    const targetElem = document.getElementById(targetElemId);
    if (targetElem) {
        targetElem.style.display = (sourceElem.value === showValue) ? 'block' : 'none';
    }
}

function isNationalIdExists(nationalId) {
  var nationalIdExists = false; // Flag variable to indicate whether the national ID exists

  // Iterate through each row in the table body
  $('#family-table tbody tr').each(function() {
      // Get the national ID value from the current row
      var existingNationalId = $(this).find('td[data-attr="dependent_edit_info_national_id"]').text().trim();

      // Compare the existing national ID with the input national ID
      if (existingNationalId === nationalId) {
          // Set the flag variable to true if the national ID already exists
          nationalIdExists = true;
          return false; // Exit the loop early since we found a match
      }
  });

  // Return the flag variable indicating whether the national ID exists
  return nationalIdExists;
}
