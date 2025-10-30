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
const maxRowsIncomeInfo = 10;

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

function populateEditModal($row) {
  // First, uncheck all checkboxes in the modal
  $("#editModal").find("input[type='checkbox']").prop("checked", false);

  $row.children("td").each(function () {
    var tdDataAttr = $(this).data("attr");
    var cellText = $(this).text();
    var $inputs = $("#editModal").find('[name^="' + tdDataAttr + '"]'); // Selects all inputs that start with tdDataAttr

    $inputs.each(function () {
      if ($(this).attr("type") === "checkbox") {
        // Splitting the comma-separated values
        var values = cellText.split(",").map(function (item) {
          return item.trim(); // Trimming any extra whitespace
        });

        // Check if the checkbox value is in the values array
        if (values.includes($(this).val())) {
          $(this).prop("checked", true);
        }
      } else {
        $(this).val(cellText);

        // If the input is the national id field, add a data attribute
        if ($(this).attr("name") === "dependent_edit_info_national_id") {
          // Assuming you want to add a data attribute named 'custom-data'
          $(this).attr("data-attr-base-nid", cellText);
        }
      }
    });

    // Retrieve the stored income information array from the family table row
    var incomeInfoArrayText = "";

    if (tdDataAttr == "dependent_edit_info_income_table_data") {
      // Clear existing rows in the edit income table
      $("#incomeEditInfoTableBody").empty();

      incomeInfoArrayText = cellText;
      var incomeInfoArray = JSON.parse(incomeInfoArrayText) || [];

      // Add rows for each income information object in the array
      incomeInfoArray.forEach(function (incomeInfo) {
        var $incomeRow = $("<tr></tr>");
        $incomeRow.append($("<td></td>").text(incomeInfo.income_amount));
        $incomeRow.append($("<td></td>").text(incomeInfo.income_source));

        // Add a delete button to each row
        var $deleteButton = $("<button>حذف</button>").addClass(
          "btn btn-danger btn-sm removeIncomeEditInfoRow",
        );
        $deleteButton.on("click", function () {
          // Handle the delete button click event here
          // You can remove the corresponding row from the table or perform any other action
          $incomeRow.remove();

          // Select save changes btn
          var $saveChangesButton = $("#saveChanges");
          var $modalForm = $("#editModalForm");

          if ($modalForm.valid()) {
            $saveChangesButton.prop("disabled", false);
          } else {
            $saveChangesButton.prop("disabled", true);
          }
        });

        // Append the delete button column to the row
        $incomeRow.append($("<td></td>").append($deleteButton));

        // Append the row to the edit income table
        $("#incomeEditInfoTableBody").append($incomeRow);
      });
    }
  });

  $("#saveChanges").data("rowToEdit", $row);
}

function populateDependentRow($row, data) {

  if (data === undefined || $.isEmptyObject(data)) {
    const dependentNeedsTypeArray = [];
    $("#id_dependent_info_needs_type input[type=checkbox]:checked").each(function() {
      dependentNeedsTypeArray.push($(this).val());
    });

    data = {
      firstName: $("#id_dependent_info_first_name").val().trim(),
      secondName: $("#id_dependent_info_second_name").val().trim(),
      lastName: $("#id_dependent_info_last_name").val().trim(),
      gender: $("#id_dependent_info_gender").val(),
      relationship: $("#id_dependent_info_relationship").val(),
      educationalStatus: $("#id_dependent_info_educational_status").val(),
      maritalStatus: $("#id_dependent_info_marital_status").val(),
      nationalId: $("#id_dependent_info_national_id").val().trim(),
      bankIban: $("#id_dependent_info_bank_iban").val().trim(),
      bankType: $("#id_dependent_info_bank_type").val(),
      healthStatus: $("#id_dependent_info_health_status").val(),
      incomeData: getDependentIncomeTableDataAsJSON('incomeInfoTable'),
      needsType: dependentNeedsTypeArray.join(","),
      educationalDegree: $("#id_dependent_info_educational_degree").val(),
      dateOfBirth: $("#id_dependent_info_date_of_birth").val(),
      nationalIdExpDate: $("#id_dependent_info_national_id_exp_date").val(),
      needsDescription: $("#id_dependent_info_needs_description").val().trim(),
      educationalLevel: $("#id_dependent_info_educational_level").val(),
      diseaseType: $("#id_dependent_info_disease_type").val(),
      workStatus: $("#id_dependent_info_work_status").val(),
      employer: $("#id_dependent_info_employer").val().trim(),
      contributeToFamilyIncome: $("#id_dependent_info_contribute_to_family_income").val(),
      isDisabled: $("#id_dependent_info_is_disabled").val(),
      disabilityType: $("#id_dependent_info_disability_type").val(),
    }
  }
  $row.append(
      $("<td></td>")
          .text(data.firstName)
          .attr("data-attr", "dependent_edit_info_first_name"),
  );
  $row.append(
      $("<td></td>")
          .text(data.secondName)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_second_name"),
  );
  $row.append(
      $("<td></td>")
          .text(data.lastName)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_last_name"),
  );
  $row.append(
      $("<td></td>")
          .text(data.gender)
          .attr("data-attr", "dependent_edit_info_gender"),
  );
  $row.append(
      $("<td></td>")
          .text(data.relationship)
          .attr("data-attr", "dependent_edit_info_relationship"),
  );
  $row.append(
      $("<td></td>")
          .text(data.educationalStatus)
          .attr("data-attr", "dependent_edit_info_educational_status"),
  );
  $row.append(
      $("<td></td>")
          .text(data.maritalStatus)
          .attr("data-attr", "dependent_edit_info_marital_status"),
  );
  $row.append(
      $("<td></td>")
          .text(data.nationalId)
          .attr("data-attr", "dependent_edit_info_national_id")
          .attr("data-attr-base-nid", $("#id_dependent_info_national_id").val()),
  );

  $row.append(
      $("<td></td>")
          .text(data.bankIban)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_bank_iban"),
  );
  $row.append(
      $("<td></td>")
          .text(data.bankType)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_bank_type"),
  );

  $row.append(
      $("<td></td>")
          .text(data.healthStatus)
          .attr("data-attr", "dependent_edit_info_health_status"),
  );
  $row.append(
      $("<td></td>")
          .text(data.incomeData)
          .addClass("d-none dependent_income_json")
          .attr("data-attr", "dependent_edit_info_income_table_data"),
  );


  $row.append(
      $("<td></td>")
          .text(data.needsType)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_needs_type"),
  );
  $row.append(
      $("<td></td>")
          .text(data.educationalDegree)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_educational_degree"),
  );
  $row.append(
      $("<td></td>")
          .text(data.dateOfBirth)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_date_of_birth"),
  );
  $row.append(
      $("<td></td>")
          .text(data.nationalIdExpDate)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_national_id_exp_date"),
  );
  $row.append(
      $("<td></td>")
          .text(data.needsDescription)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_needs_description"),
  );
  $row.append(
      $("<td></td>")
          .text(data.educationalLevel)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_educational_level"),
  );
  $row.append(
      $("<td></td>")
          .text(data.diseaseType)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_disease_type"),
  );

  $row.append(
      $("<td></td>")
          .text(data.workStatus)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_work_status"),
  );
  $row.append(
      $("<td></td>")
          .text(data.employer)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_employer"),
  );
  $row.append(
      $("<td></td>")
          .text(data.contributeToFamilyIncome)
          .addClass("d-none")
          .attr(
              "data-attr",
              "dependent_edit_info_contribute_to_family_income",
          ),
  );
  $row.append(
      $("<td></td>")
          .text(data.isDisabled)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_is_disabled"),
  );
  $row.append(
      $("<td></td>")
          .text(data.disabilityType)
          .addClass("d-none")
          .attr("data-attr", "dependent_edit_info_disability_type"),
  );

  var $editButton = $("<button>تفاصيل</button>")
    .addClass("edit btn btn-primary")
    .attr("data-bs-toggle", "modal")
    .attr("data-bs-target", "#editModal")
    .attr("id", "editModalButton")
    .click(function (event) {
      event.preventDefault();
      // Populate the modal fields with data from $row
      populateEditModal($row);
    });

  var $deleteButton = $('<button type="button">حذف</button>')
    .addClass("delete btn btn-danger")
    .click(function (event) {
      event.preventDefault();
      $row.remove();
    });

  var $actionsCell = $(
    '<td class="d-grid gap-2" style="grid-template-columns: 80px 80px; grid-template-rows: 50px;"></td>'
  ).append($deleteButton);
  $actionsCell.append($editButton);

  $row.append($actionsCell);
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

function displayMinChoiceCountEditErrorMessage(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById(
    "minChoiceCountEditErrorMessage",
  );

  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement("div");
    errorMessageElement.id = "minChoiceCountEditErrorMessage";
    errorMessageElement.classList.add("alert", "alert-danger");

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById(
      "id_dependent_edit_info_needs_type",
    ).parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    //setTimeout(function () {
    //  removeMaxRowErrorMessage();
    //}, duration);
  }

  // Listen for changes in the checkboxes to update the error message
  var checkboxes = document.querySelectorAll(
    '#id_dependent_edit_info_needs_type input[type="checkbox"]',
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Check if more than one checkbox is checked
      var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
      }).length;

      // If more than one checkbox is checked, remove the error message
      if (checkedCount > 0) {
        removeMinChoiceCountEditErrorMessage();
      }
    });
  });

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

function removeMinChoiceCountEditErrorMessage() {
  var errorMessageElement = document.getElementById('minChoiceCountEditErrorMessage');
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

function displayMinChoiceCountFamilyIssuesErrorMessage(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById('minChoiceCountFamilyIssuesErrorMessage');

  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'minChoiceCountFamilyIssuesErrorMessage';
    errorMessageElement.classList.add('alert', 'alert-danger', 'minChoiceErrorMessage');

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById('id_familyinfo_family_issues').parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    //setTimeout(function () {
    //  removeMaxRowErrorMessage();
    //}, duration);
  }

  // Listen for changes in the checkboxes to update the error message
  var checkboxes = document.querySelectorAll('#id_familyinfo_family_issues input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      // Check if more than one checkbox is checked
      var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
      }).length;

      // If more than one checkbox is checked, remove the error message
      if (checkedCount > 0) {
        removeMinChoiceCountFamilyIssuesErrorMessage();

      }
    });
  });

  // Set the error message text
  errorMessageElement.textContent = message;
}

function removeMinChoiceCountNeedsTypeErrorMessage() {
  var errorMessageElement = document.getElementById('minChoiceCountNeedsTypeErrorMessage');
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}

function clearInputFieldsIncomeInfoTable() {
  document.getElementById("id_dependent_info_monthly_income").value = "";
  document.getElementById("id_dependent_info_income_source").value = "";
}


function getDependentIncomeTableDataAsJSON(tableId) {
  var incomeInfoArray = [];

  const dependentIncomeTable = document.getElementById(tableId);
  const dependentIncomeTableRows = document.querySelectorAll(
    "#" + tableId + " tr",
  );

  for (let i = 1; i < dependentIncomeTableRows.length; i++) {
    const cells = dependentIncomeTableRows[i].getElementsByTagName("td");

    var incomeInfo = {
      income_amount: cells[0].innerText,
      income_source: cells[1].innerText,
    };

    incomeInfoArray.push(incomeInfo);
  }

  return JSON.stringify(incomeInfoArray);
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

function getTableDataAsJSON() {
  const table = document.getElementById("family-table");
  const rows = document.querySelectorAll("#family-table tr");
  let dependentsData = [];

  for (let i = 1; i < rows.length; i++) {
    // Start from 1 to skip table header
    const cells = rows[i].getElementsByTagName("td");

    // Check if nationalIDExpDate is null or empty and handle it
    let nationalIDExpDate = cells[13].innerText;
    if (
      !nationalIDExpDate ||
      nationalIDExpDate === "null" ||
      nationalIDExpDate.trim() === ""
    ) {
      nationalIDExpDate = null; // Set it to null if empty or invalid
    }

    let dependent = {
      firstName: cells[0].innerText, // Assuming first cell contains the first name
      secondName: cells[1].innerText,
      lastName: cells[2].innerText,
      gender: cells[3].innerText,
      relationship: cells[4].innerText,
      educationalStatus: cells[5].innerText,
      martialStatus: cells[6].innerText,
      nationalID: cells[7].innerText,
      bankIban: cells[8].innerText,
      bankType: cells[9].innerText,
      healthStatus: cells[10].innerText,
      dependentIncomeTable: cells[11].innerText,
      needsType: cells[12].innerText,
      educationalDegree: cells[13].innerText,
      dateOfBitrh: cells[14].innerText,
      nationalIDExpDate: cells[15].innerText,
      needsDescription: cells[16].innerText,
      educationalLevel: cells[17].innerText,
      diseaseType: cells[18].innerText,
      workStatus: cells[19].innerText,
      employer: cells[20].innerText,
      contributeToFamilyIncome: cells[21].innerText,
      disabilityCheck: cells[22].innerText,
      disabilityType: cells[23].innerText,
    };
    dependentsData.push(dependent);
  }

  return JSON.stringify(dependentsData);
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

function displayMinChoiceCountErrorMessage(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById('minChoiceCountErrorMessage');

  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'minChoiceCountErrorMessage';
    errorMessageElement.classList.add('alert', 'alert-danger');

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById('id_dependent_info_needs_type').parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    //setTimeout(function () {
    //  removeMaxRowErrorMessage();
    //}, duration);
  }

  // Listen for changes in the checkboxes to update the error message
  var checkboxes = document.querySelectorAll('#id_dependent_info_needs_type input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      // Check if more than one checkbox is checked
      var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
      }).length;

      // If more than one checkbox is checked, remove the error message
      if (checkedCount > 0) {
        removeMinChoiceCountErrorMessage();
      }
    });
  });

  // Set the error message text
  errorMessageElement.textContent = message;
}

function displayMinChoiceCountNeedsTypeErrorMessage(message, duration) {
  // Check if the error message element already exists
  var errorMessageElement = document.getElementById('minChoiceCountNeedsTypeErrorMessage');

  // If not, create a new element and append it to the page
  if (!errorMessageElement) {
    errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'minChoiceCountNeedsTypeErrorMessage';
    errorMessageElement.classList.add('alert', 'alert-danger');

    // Get the parent node of the dependent income table
    var parentElement = document.getElementById('id_familyinfo_needs_type').parentNode;

    // Insert the error message element at the top of the parent node
    parentElement.insertBefore(errorMessageElement, parentElement.firstChild);

    // Focus on the error message
    errorMessageElement.focus();

    // Remove the error message after a specified duration
    //setTimeout(function () {
    //  removeMaxRowErrorMessage();
    //}, duration);
  }

  // Listen for changes in the checkboxes to update the error message
  var checkboxes = document.querySelectorAll('#id_familyinfo_needs_type input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      // Check if more than one checkbox is checked
      var checkedCount = Array.from(checkboxes).filter(function (checkbox) {
        return checkbox.checked;
      }).length;

      // If more than one checkbox is checked, remove the error message
      if (checkedCount > 0) {
        removeMinChoiceCountNeedsTypeErrorMessage();
      }
    });
  });

  // Set the error message text
  errorMessageElement.textContent = message;
}

function removeMinChoiceCountErrorMessage() {
  var errorMessageElement = document.getElementById(
    "minChoiceCountErrorMessage",
  );
  if (errorMessageElement) {
    errorMessageElement.remove();
  }
}

function handleEducationalStatusEditInput() {
  // Get the selected value
  var selectedValue = document.getElementById(
    "id_dependent_edit_info_educational_status",
  ).value;

  // Get the elements representing educational level and degree sections
  var educationalLevelGroup = document.getElementById(
    "id_dependent_edit_info_educational_level_group_info",
  );
  var educationalDegreeGroup = document.getElementById(
    "id_dependent_edit_info_educational_degree_group_info",
  );

  // Show or hide the sections based on the selected value
  if (selectedValue === "يدرس") {
    // If يدرس is selected, show educational level and hide educational degree
    educationalLevelGroup.style.display = "block";
    educationalDegreeGroup.style.display = "none";
  } else if (selectedValue === "لا يدرس") {
    // If لا يدرس is selected, show educational degree and hide educational level
    educationalLevelGroup.style.display = "none";
    educationalDegreeGroup.style.display = "block";
  } else {
    // If none is selected, hide both sections
    educationalLevelGroup.style.display = "none";
    educationalDegreeGroup.style.display = "none";
  }
}

function handleHealthStatusEditInput() {
  // Get the selected value
  var selectedValue = document.getElementById(
    "id_dependent_edit_info_health_status",
  ).value;

  // Get the elements representing educational level and degree sections
  var diseaseTypeGroup = document.getElementById(
    "id_dependent_edit_info_disease_type_group_info",
  );

  // Show or hide the sections based on the selected value
  if (selectedValue === "جيدة") {
    diseaseTypeGroup.style.display = "none";
  } else if (selectedValue === "غير جيدة") {
    diseaseTypeGroup.style.display = "block";
  } else {
    // If none is selected, hide both sections
    diseaseTypeGroup.style.display = "none";
  }
}

function handleWorkStatusEditInput() {
  // Get the selected value
  var selectedValue = document.getElementById(
    "id_dependent_edit_info_work_status",
  ).value;

  // Get the elements representing work status sections
  var employerGroup = document.getElementById(
    "id_dependent_edit_info_employer_group_info",
  );

  // Show or hide the sections based on the selected value
  if (selectedValue === "نعم") {
    employerGroup.style.display = "block";
  } else if (selectedValue === "لا") {
    employerGroup.style.display = "none";
  } else {
    // If none is selected, hide both sections
    employerGroup.style.display = "none";
  }
}

function handleIsDisabledEditInput() {
  // Get the selected value
  var selectedValue = document.getElementById(
    "id_dependent_edit_info_is_disabled",
  ).value;

  // Get the elements representing is disability sections
  var disabilityTypeGroup = document.getElementById(
    "id_dependent_edit_info_disability_type_group_info",
  );

  // Show or hide the sections based on the selected value
  if (selectedValue === "نعم") {
    disabilityTypeGroup.style.display = "block";
  } else if (selectedValue === "لا") {
    disabilityTypeGroup.style.display = "none";
  } else {
    // If none is selected, hide both sections
    disabilityTypeGroup.style.display = "none";
  }
}

function handleModalShown() {
  // Show loading state
  document.getElementById("loadingStateEditModal").style.display = "block";
  document.getElementById("editModalContent").style.display = "none";

  // Simulate an asynchronous operation (replace this with your actual data retrieval logic)
  setTimeout(function () {
    // Hide loading state
    document.getElementById("loadingStateEditModal").style.display = "none";
    // Show actual content
    document.getElementById("editModalContent").style.display = "block";

    const educationalStatusDropdown = document.getElementById('id_dependent_info_educational_status'); // It may need to be changed to "_edit_info_"
    educationalStatusDropdown.addEventListener('input', handleEducationalStatusEditInput);

    // Call the function on the educational status dropdown to set the initial visibility
    handleEducationalStatusEditInput.call(educationalStatusDropdown);
    handleHealthStatusEditInput.call();
    handleWorkStatusEditInput.call();
    handleIsDisabledEditInput.call();
  }, 2000); // 2000 = 2 seconds timeout
}

function checkAllCheckboxes() {
  return (
    $('#submit_confirmation input[type="checkbox"]').length ===
    $('#submit_confirmation input[type="checkbox"]:checked').length
  );
}

function validateCheckboxesAndShowError() {
  var allChecked = checkAllCheckboxes();

  if (!allChecked) {
    $("#checkboxError").removeClass("d-none"); // Remove 'd-none' to show the error message
    alert("الرجاء الموافقة على الإقرار"); // [NOT WORKING]
    return false; // Indicate validation failed
  } else {
    $("#checkboxError").addClass("d-none"); // Add 'd-none' to hide the error message
    return true; // Indicate validation passed
  }
}

function updateFileNamesDisplay(fileInputId, fileNamesDivId) {
  var fileInput = document.getElementById(fileInputId);
  var fileNamesDiv = document.getElementById(fileNamesDivId);


  // Initialize with a message indicating no file is uploaded
  fileNamesDiv.innerHTML = "[لم يتم إرفاق أي ملفات]";

  fileInput.addEventListener("change", function () {
    var fileList = fileInput.files;

    if (fileList.length > 0) {
      fileNamesDiv.innerHTML = ""; // Clear the initial message
      var ul = document.createElement("ul"); // Create unordered list element
      ul.classList.add("file-names-list", "ps-1", "mt-3"); // Add classes to the list

      for (var i = 0; i < fileList.length; i++) {
        var fileSize = fileList[i].size;
        var sizeLabel = "";

        if (fileSize < 1024 * 1024) {
          sizeLabel = (fileSize / 1024).toFixed(2) + " KB";
        } else {
          sizeLabel = (fileSize / (1024 * 1024)).toFixed(2) + " MB";
        }

        // Add CSS class to size label if file size exceeds 1 MB
        var sizeClass = fileSize > 1024 * 1024 ? "text-bg-danger" : "text-bg-secondary";
        sizeLabel = "<span class='badge " + sizeClass + " d-inline'>" + sizeLabel + "</span>";

        // Create list item and append to the unordered list
        var li = document.createElement("li");
        li.innerHTML = fileList[i].name + " " + sizeLabel;
        li.classList.add("mb-3", "text-truncate"); // Add class to list item
        ul.appendChild(li);
      }

        // Append the unordered list to the fileNamesDiv
      fileNamesDiv.appendChild(ul);
    } else {
      // Show the no files uploaded message if no file is selected
      fileNamesDiv.innerHTML = "[لم يتم إرفاق أي ملفات]";
    }
  });
}

function resetInputFields() {
  // Reset the value of the monthly income input field
  $('#id_dependent_edit_info_monthly_income').val('');

  // Reset the value of the income source select field
  $('#id_dependent_edit_info_income_source').val('');
}


$(document).ready(function () {
  $("#saveChanges").click(function (event) {
    event.preventDefault();

    var duplicateNationalIdFound = false; // Flag to indicate whether a duplicate national ID is found

    var isEqualToApplierNationalId = false; // Flag to indicate whether the dependent national ID is equal to applier national ID

    // Get all checkboxes within the specified container
    var checkboxes = document.querySelectorAll('#id_dependent_edit_info_needs_type input[type="checkbox"]');

    // Check if at least one checkbox is selected
    var atLeastOneChecked = Array.from(checkboxes).some(function(checkbox) {
      return checkbox.checked;
    });

    if (!atLeastOneChecked) {
      // Display an error message or perform any other action to indicate the requirement
      displayMinChoiceCountEditErrorMessage('الرجاء تحديد نوع واحد على الأقل.', 5000);
      return;
    }

    var $rowToEdit = $(this).data("rowToEdit");
    var checkedValues = [];

    // Iterate over all inputs, selects, and textareas in the modal
    $("#editModal").find(".modal-body input, .modal-body select, .modal-body textarea").each(function () {
        // Get the name of the input field in the edit modal
        var inputName = $(this).attr("name");
        // Select the cell in the corresponding row of the dependent with data-attr as inputName
        var $cell = $rowToEdit.find('td[data-attr="' + inputName + '"]');

        var applierNationalID = $("#id_personalinfo_national_id").val().trim();

        // Retrieve the data for national id in the edit form
        if ($(this).attr("name") == "dependent_edit_info_national_id") {

          // Get the value of data-attr-base-nid attribute
          var baseNid = $(this).data("attr-base-nid");

          // Check whether the provided national ID equal to the applier national ID
          if ($(this).val() === applierNationalID) {
            alert("رقم الهوية/الإقامة للمرافق لا يمكن أن يكون مماثلًا لرقم الهوية/الإقامة لمقدم الطلب!!");
            isEqualToApplierNationalId = true; // Set the flag to true
            return false; // Exit the loop early since we found a duplicate
          }

          // Alert the user if the provided national ID is added before in the family table
          if (isNationalIdExists($(this).val())) {

            // Check whether the national ID equals to the base national ID
            if (baseNid != $(this).val()) {
              alert("رقم الهوية/الإقامة للمرافق تم إضافته بالفعل في قائمة المرافقين!");
              duplicateNationalIdFound = true; // Set the flag to true
              return false; // Exit the loop early since we found a duplicate
            }
          }
        }

        if ($(this).attr('type') === 'checkbox') {
            // If it's a checkbox, gather all checked values with this name
            $('#editModal input[name="' + inputName + '"]:checked').each(function() {
                checkedValues.push($(this).val());
            });
            // Select the cell that holds the dependent needs type as a list
            var $cell = $rowToEdit.find('td[data-attr="dependent_edit_info_needs_type"]');
            // Join the values with a comma and update the cell text
            $cell.text(checkedValues.join(','));
        } else {
            // For other input types, just update the cell text
            $cell.text($(this).val());
        }
    });

    // If a duplicate national ID is found, don't proceed with saving changes
    if (duplicateNationalIdFound || isEqualToApplierNationalId) {
      return;
    }

    // Get dependent income information from incomeEditInfoTable
    let dependentIncomeJSON = getDependentIncomeTableDataAsJSON('incomeEditInfoTable');

    // Select the corresponding cell
    var $incomeTableCell = $rowToEdit.find('td[data-attr="dependent_edit_info_income_table_data"]');

    // Update the cell text (value)
    $incomeTableCell.text(dependentIncomeJSON);

    // Remove error messages
    removeMaxRowErrorMessage();
    removeMinChoiceCountEditErrorMessage();

    $("#editModal").modal("hide");
  });

  $("#editModal").on("hidden.bs.modal", function () {
    // Call the function to reset the input fields
    resetInputFields();

    // Assuming your button has an ID "saveChanges"
    var saveChangesButton = document.getElementById("saveChanges");

    // Remove the 'disabled' attribute
    saveChangesButton.setAttribute("disabled", "disabled");

    // Show loading state
    document.getElementById("loadingStateEditModal").style.display = "block";
    // Hide actual content
    document.getElementById("editModalContent").style.display = "none";
  });

  $("#id_dependent_edit_info_bank_iban").on("input", function () {
    var iban = $(this).val();
    var bankNameAr = getBankByIBAN(iban);

    if (bankNameAr) {
      $("#id_dependent_edit_info_bank_type").val(bankNameAr).change();
    } else {
      $("#id_dependent_edit_info_bank_type").val("").change(); // Reset to default if IBAN is invalid
    }
  });

  $("#id_add_row_income_edit_info").on("click", function () {
    if ($modalForm.valid()) {
        $saveChangesButton.prop("disabled", false);
    } else {
        $saveChangesButton.prop("disabled", true);
    }
  });

  $("#submit-btn").click(function (e) {
    if (!validateCheckboxesAndShowError()) {
      e.preventDefault(); // Prevent form submission
    }
    // else form will be submitted as all checkboxes are checked
  });

  $('#submit_confirmation input[type="checkbox"]').change(function () {
    if (checkAllCheckboxes()) {
      $("#submit-btn").prop("disabled", false); // Enable submit button if all checkboxes are checked
    } else {
      $("#submit-btn").prop("disabled", true); // Keep submit button disabled otherwise
    }
  });

  // Array of [fileInputId, fileNamesDivId] pairs
  const fileInputPairs = [
    ['BeneficiaryNationalAddress', 'NationalAddress'],
    ['LeaseContractOrTitleDeed', 'LeaseContractOrTitleDeed'],
    ['DeptInstrument', 'DeptInstrument'],
    ['NationalIDForBeneficiaryForDependents', 'NationalIDForBeneficiaryForDependents'],
    ['BeneficiaryNationalID', 'BeneficiaryNationalID'],
    ['WaterOrElectricityBills', 'WaterOrElectricityBills'],
    ['SocialWarrantyInquiry', 'SocialWarrantyInquiry'],
    ['PensionOrSocialInsuranceInquiry', 'PensionOrSocialInsuranceInquiry'],
    ['FatherOrHusbandDeathCertificate', 'FatherOrHusbandDeathCertificate'],
    ['LetterFromPrison', 'LetterFromPrison'],
    ['DivorceDeed', 'DivorceDeed'],
    ['ChildrenResponsibilityDeed', 'ChildrenResponsibilityDeed'],
    ['Other', 'Other']
  ];

  fileInputPairs.forEach(([input, display]) => {
    updateFileNamesDisplay(`id_formFile${input}`, `id_fileNames${display}`);
  });

  $("#id_dependent_info_bank_iban").on("input", function () {
    var iban = $(this).val();
    var bankNameAr = getBankByIBAN(iban);

    if (bankNameAr) {
      $("#id_dependent_info_bank_type").val(bankNameAr).change();
    } else {
      $("#id_dependent_info_bank_type").val("").change(); // Reset to default if IBAN is invalid
    }
  });

  $("#id_personalinfo_bank_iban").on("input", function () {
    var iban = $(this).val();
    var bankNameAr = getBankByIBAN(iban);

    if (bankNameAr) {
      $("#id_personalinfo_bank_type").val(bankNameAr).change();
    } else {
      $("#id_personalinfo_bank_type").val("").change(); // Reset to default if IBAN is invalid
    }
  });

  $("#id_beneficiaryinfo_iban").on("input", function () {
    var iban = $(this).val();
    var bankNameAr = getBankByIBAN(iban);

    if (bankNameAr) {
      $("#id_beneficiaryinfo_bank").val(bankNameAr).change();
    } else {
      $("#id_beneficiaryinfo_bank").val("").change(); // Reset to default if IBAN is invalid
    }
  });

  $('#id_dependent_edit_info_health_status').on('input', handleHealthStatusEditInput);
  $('#id_dependent_edit_info_work_status').on('input', handleWorkStatusEditInput);
  $('#id_dependent_edit_info_is_disabled').on('input', handleIsDisabledEditInput);
  $('#id_personalinfo_category').on('input', categoryCheck)

  const fields = [
    '#id_personalinfo_national_id',
    '#id_personalinfo_phone_number',
    '#id_dependent_info_national_id',
    '#id_houseinfo_unit',
    '#id_beneficiaryinfo_iban'
  ];

  $(fields.join(', ')).on('input', function() {
    this.value = convertToEnglishNumber(this.value);
  });

  $.validator.addMethod(
    "nationalidRegex",
    function (value, element) {
      return this.optional(element) || validateSAID(value);
    },
    "أدخل رقم هوية/إقامة صحيح."
  );

  $.validator.addMethod(
    "dependentNameRegex",
    function (value, element) {
      return (
        this.optional(element) || /^[a-zA-Z0-9\u0621-\u064A]*$/i.test(value)
      );
    },
    "يحتوي الأسم على حروف فقط."
  );

  $.validator.addMethod(
    "validateIBAN",
    function (value, element) {
      return this.optional(element) || validateIBAN(value);
    },
    "الرجاء إدخال رقم إيبان صحيح"
  );

  $.validator.addMethod(
    "fullNameRegex",
    function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z\u0621-\u064A]+([ '-][a-zA-Z\u0621-\u064A]+)*$/i.test(value)
      );
    },
    "يجب أن يتكون الاسم الكامل من الاسم الأول والأوسط والأخير."
  );

  $.validator.addMethod(
    "saudiPhoneRegex",
    function (value, element) {
      return (
        this.optional(element) || /^(5\d{8})$/i.test(value)
      );
    },
    "الرجاء إدخال رقم جوال صحيح يبدأ برقم 5 وبطول 9 ارقام."
  );

  $.validator.addMethod(
        "emailRegex",
        function (value, element) {
          return (
            this.optional(element) ||
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          );
        },
        "الرجاء إدخال بريد إلكتروني صحيح."
      );

  $.validator.addMethod(
    "nameRegex",
    function (value, element) {
      return (
        this.optional(element) || /^[a-zA-Z0-9\u0621-\u064A]*$/i.test(value)
      );
    },
    "يحتوي الأسم على حروف فقط."
  );

  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param * 1000000)
  }, 'حجم الملف يجب أن يكون أقل من {0} MB');

  $.extend($.validator.messages, {
    required: "هذا الحقل مطلوب.",
    remote: "الرجاء اصلاح هذا الحقل.",
    email: "الرجاء إدخال بريد الكتروني صالح.",
    url: "الرجاء إدخال رابط صحيح وفعال.",
    date: "الرجاء إدخال تاريخ صالح.",
    dateISO: "الرجاء إدخال تاريخ صحيح (بصيغة ISO).",
    number: "الرجاء إدخال رقم صحيح.",
    digits: "الرجاء إدخال أرقام فقط.",
    creditcard: "الرجاء إدخال رقم بطاقة ائتمان صالحة.",
    equalTo: "رجاء أدخل نفس القيمة مره أخرى.",
    accept: "الرجاء إدخال قيمة بإمتداد صحيح.",
    maxlength: $.validator.format("الرجاء عدم إدخال أكثر من {0} أحرف."),
    minlength: $.validator.format("الرجاء إدخال على الأقل {0} حروف."),
    rangelength: $.validator.format(
      "Please enter a value between {0} and {1} characters long."
    ),
    range: $.validator.format("الرجاء إدخال رقم بين {0} و {1}."),
    max: $.validator.format(" الرجاء إدخال قيمة أقل من أو تساوي {0}."),
    min: $.validator.format("الرجاء إدخال قيمة أعلى من أو تساوي {0}."),
  });
});
