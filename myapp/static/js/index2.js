// Function to display input field only if specifc option is selected
function widowerCheck(that) {
  if (that.value == "أرمل/ـة") {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "flex";
      document.getElementById("widower_hr").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_widower_group_info").style.display = "none";
      document.getElementById("widower_hr").style.display = "none";
  }
}

function personalInfoHealthCheck(that) {
    if (that.value == "غير جيدة") {
        document.getElementById("id_personalinfo_disease_type_group_info").style.display = "block";
    } else {
        document.getElementById("id_personalinfo_disease_type_group_info").style.display = "none";
    }
  }
  
function dependentInfoHealthCheck(that) {
  if (that.value == "غير جيدة") {
      document.getElementById("id_dependentinfo_disease_type_group_info").style.display = "block";
  } else {
      document.getElementById("id_dependentinfo_disease_type_group_info").style.display = "none";
  }
}

function dependentEditInfoHealthCheck(that) {
    if (that.value == "غير جيدة") {
        document.getElementById("id_dependent_edit_info_disease_type_group_info").style.display = "block";
    } else {
        document.getElementById("id_dependent_edit_info_disease_type_group_info").style.display = "none";
    }
  }

function workCheck(that) {
  if (that.value == "نعم") {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "none";
  }
}

function categoryCheck(that) {
  if (that.value == "أسرة عادية") {

        // Change the label for Beneficiary National ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span>';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span>';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span>';


        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span>';
        

        // Hide/Show files upload group for regular family
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "flex";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "none";

        // Hide their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "none";


  } else if (that.value == "أسرة أرملة") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span> (الأرملة)';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span> (الأيتام)';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span> (للأم إن وجد)';

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span> (للأم إن وجد)';

        // Hide/Show files upload group for orphan family OR widowed family
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "flex";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "flex";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "none";
    
        // Hide/Show their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "none";

  } else if (that.value == "أسرة أيتام") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span> (الأرملة)';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span> (الأيتام)';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span> (للأم إن وجد)';

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span> (للأم إن وجد)';

        // Hide/Show files upload group for orphan family OR widowed family
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "flex";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "flex";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "none";
    
        // Hide/Show their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "none";

  } else if (that.value == "أسرة سجناء") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span>';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span>';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span> (للأم إن وجد)';

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span> (للأم إن وجد)';

        // Hide/Show files upload group for prisoners family
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "flex";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "flex";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "none";
    
        // Hide/Show their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "none";

  } else if (that.value == "أسرة مطلقة") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span>';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span>';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span>';

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span>';
        

        // Hide/Show files upload group for divorced family
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "flex";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "flex";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "flex";
    
        // Hide/Show their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "block";

  } else { // In case of "Individual" option

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة<span style="color: red">*</span>';

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").innerHTML = 'صورة الهوية الوطنية/الإقامة للمرافقين<span style="color: red">*</span>';

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").innerHTML = 'مشهد الضمان الاجتماعي<span style="color: red">*</span>';

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").innerHTML = 'مشهد التقاعد أو التأمينات الاجتماعية<span style="color: red">*</span>';

        // Hide/Show files upload group for individual
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info").style.display = "none";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info").style.display = "flex";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info").style.display = "none";

        // Hide/Show their horizental line also
        document.getElementById("id_attachmentNationalIDForBeneficiaryForDependents_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentSocialWarrantyInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentPensionOrSocialInsuranceInquiry_group_info_hr").style.display = "block";
        document.getElementById("id_attachmentFatherOrHusbandDeathCertificate_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentLetterFromPrison_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentDivorceDeed_group_info_hr").style.display = "none";
        document.getElementById("id_attachmentChildrenResponsibilityDeed_group_info_hr").style.display = "none";

  }
}

// Function to reset the input for IBAN input field 
function resetInputIban() {
  document.getElementById('id_beneficiaryinfo_iban').value = "SA";
}

function educationalStatusCheck(that) {
  if (that.value == "يدرس") {
      document.getElementById("id_dependent_info_educational_level_group_info").style.display = "block";
      document.getElementById("id_dependent_info_educational_degree_group_info").style.display = "none";
  } else {
      document.getElementById("id_dependent_info_educational_level_group_info").style.display = "none";
      document.getElementById("id_dependent_info_educational_degree_group_info").style.display = "block";
  }
}

function educationalStatusEditInfoCheck(that) {
  if (that.value == "يدرس") {
      document.getElementById("id_dependent_edit_info_educational_level_group_info").style.display = "block";
      document.getElementById("id_dependent_edit_info_educational_degree_group_info").style.display = "none";
  } else {
      document.getElementById("id_dependent_edit_info_educational_level_group_info").style.display = "none";
      document.getElementById("id_dependent_edit_info_educational_degree_group_info").style.display = "block";
  }
}

function provenDebtValueCheck(that) {
  var debtValue = parseFloat(that.value); // Convert the value to a number
  var fileInput = document.getElementById('id_formFileDeptInstrument');

  if (debtValue > 0) {
      fileInput.required = true; // Set the file input as required
  } else {
      fileInput.required = false; // Remove the required attribute
  }
}

// Define the maximum number of rows that can be added to the IncomeInfoTable
const maxRowsIncomeInfo = 5;

function addRowToIncomeInfoTable() {
  const monthlyIncome = document.getElementById('id_dependent_info_monthly_income').value;
  const incomeSource = document.getElementById('id_dependent_info_income_source').value;

  if (!monthlyIncome) {
    alert('الرجاء إدخال قيم صحيحة لدخل المرافق.');
    return;
  }

  if (incomeSource === '') {
    alert('الرجاء إختيار مصدر الدخل للمرافق.');
    return;
  }

  const tableBody = document.getElementById('incomeInfoTableBody');

  // Check if the maximum number of rows has been reached
  if (tableBody.rows.length >= maxRowsIncomeInfo) {
    displayMaxRowErrorMessage('تم الوصول إلى الحد الأقصى لعدد مصادر الدخل. لا يمكن إضافة المزيد.', 5000);
    return;
  }

  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  let monthlyIncomeVar = parseInt(monthlyIncome);

  // Specifying options for formatting
  const options = {
    style: 'decimal',  // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const monthlyIncomeFormatted = monthlyIncomeVar.toLocaleString('en-US', options);

  cell1.textContent = monthlyIncomeFormatted;
  cell2.textContent = incomeSource;


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'حذف';
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteButton.onclick = function (event) {
    deleteRowIncomeInfoTable(event, newRow);
  };
  cell3.appendChild(deleteButton);

  // Clear input fields after successful addition
  clearInputFieldsIncomeInfoTable();

  // Remove the MaxRow error messsage after successful addition
  removeMaxRowErrorMessage();
}


// Function to display an error message
function displayMaxRowErrorMessage(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById('incomeTableErrorMessage');
  
  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'incomeTableErrorMessage';
    errorMessageElement.classList.add('alert', 'alert-danger');

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById('id_add_row_income_table').parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    //setTimeout(function () {
    //  removeMaxRowErrorMessage();
    //}, duration);
  }

  // Set the error message text
  errorMessageElement.textContent = message;
}

// Function to remove the error message
function removeMaxRowErrorMessage() {
  var errorMessageElement = document.getElementById('incomeTableErrorMessage');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}


function deleteRowIncomeInfoTable(event, row) {
  event.preventDefault(); // Prevents the default behavior if applicable
  const tableBody = document.getElementById('incomeInfoTableBody');

  rowIndexValue = row.rowIndex - 1;

  // Log the row index for debugging
  //console.log('Deleting row at index:', rowIndexValue);

  // Check if the row index is valid before attempting to delete
  if (rowIndexValue >= 0 && rowIndexValue < tableBody.rows.length) {
    tableBody.deleteRow(rowIndexValue);
  } else {
    //console.error('Invalid row index:', rowIndexValue);
  }
}


function clearInputFieldsIncomeInfoTable() {
  document.getElementById("id_dependent_info_monthly_income").value = "";
  document.getElementById("id_dependent_info_income_source").value = "";
}


function addRowToIncomeEditInfoTable() {
  const monthlyIncome = document.getElementById('id_dependent_edit_info_monthly_income').value;
  const incomeSource = document.getElementById('id_dependent_edit_info_income_source').value;

  if (!monthlyIncome) {
    alert('الرجاء إدخال قيم صحيحة لدخل المرافق.');
    return;
  }

  if (incomeSource === '') {
    alert('الرجاء إختيار مصدر الدخل للمرافق.');
    return;
  }

  const tableBody = document.getElementById('incomeEditInfoTableBody');

  // Check if the maximum number of rows has been reached
  if (tableBody.rows.length >= maxRowsIncomeInfo) {
    displayMaxRowErrorMessageEditInfoTable('تم الوصول إلى الحد الأقصى لعدد مصادر الدخل. لا يمكن إضافة المزيد.', 5000);
    return;
  }

  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  let monthlyIncomeVar = parseInt(monthlyIncome);

  // Specifying options for formatting
  const options = {
    style: 'decimal',  // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const monthlyIncomeFormatted = monthlyIncomeVar.toLocaleString('en-US', options);

  cell1.textContent = monthlyIncomeFormatted;
  cell2.textContent = incomeSource;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'حذف';
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
  deleteButton.onclick = function (event) {
    deleteRowIncomeEditInfoTable(event, newRow);
  };
  cell3.appendChild(deleteButton);

  // Clear input fields after successful addition
  clearInputFieldsIncomeEditInfoTable();

  // Remove the MaxRow error messsage after successful addition
  removeMaxRowErrorMessageEditInfoTable();
}


// Function to display an error message
function displayMaxRowErrorMessageEditInfoTable(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById('editIncomeTableErrorMessage');
  
  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'editIncomeTableErrorMessage';
    errorMessageElement.classList.add('alert', 'alert-danger');

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById('id_add_row_edit_income_table').parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    setTimeout(function () {
      removeMaxRowErrorMessageEditInfoTable();
    }, duration);
  }

  // Listen for Bootstrap Modal events to remove the error message when the modal is closed
  $('#editModal').on('hidden.bs.modal', function () {
    removeMaxRowErrorMessageEditInfoTable();
  });

  // Set the error message text
  errorMessageElement.textContent = message;
}


// Function to remove the error message
function removeMaxRowErrorMessageEditInfoTable() {
  var errorMessageElement = document.getElementById('editIncomeTableErrorMessage');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}



function deleteRowIncomeEditInfoTable(event, row) {
  event.preventDefault(); // Prevents the default behavior if applicable
  const tableBody = document.getElementById('incomeEditInfoTableBody');

  rowIndexValue = row.rowIndex - 1;

  // Log the row index for debugging
  //console.log('Deleting row at index:', rowIndexValue);

  // Check if the row index is valid before attempting to delete
  if (rowIndexValue >= 0 && rowIndexValue < tableBody.rows.length) {
    tableBody.deleteRow(rowIndexValue);
  } else {
    //console.error('Invalid row index:', rowIndexValue);
  }
}


function clearInputFieldsIncomeEditInfoTable() {
  document.getElementById("id_dependent_edit_info_monthly_income").value = "";
  document.getElementById("id_dependent_edit_info_income_source").value = "";
}