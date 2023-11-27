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

function personalInfoHealthCheck(that) {
  if (that.value == "not good") {
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

function workCheck(that) {
  if (that.value == "yes") {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "block";
  } else {
      document.getElementById("id_personalinfo_employer_group_info").style.display = "none";
  }
}

function categoryCheck(that) {
  if (that.value == "regular family") {

        // Change the label for Beneficiary National ID
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية";
        

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


  } else if (that.value == "widowed family") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة (الأرملة)";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين (الأيتام)";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي (للأم إن وجد)";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية (للأم إن وجد)";

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

  } else if (that.value == "orphan family") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة (الأرملة)";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين (الأيتام)";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي (للأم إن وجد)";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية (للأم إن وجد)";

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

  } else if (that.value == "prisoners family") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي (للأم إن وجد)";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية (للأم إن وجد)";

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

  } else if (that.value == "divorced family") {

        // Change the label for national ID
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية";
        

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
        document.getElementById("id_beneficiaryNationalIDTitle").textContent = "صورة الهوية الوطنية/الإقامة";

        // Change the label for  Beneficiary's Dependents National ID
        document.getElementById("id_NationalIDForBeneficiaryForDependentsTitle").textContent = "صورة الهوية الوطنية/الإقامة للمرافقين";

        // Change the label for Social Warrnaty Inquiry 
        document.getElementById("id_SocialWarrantyInquiryTitle").textContent = "مشهد الضمان الاجتماعي";

        // Change the label for Pension Or Social Insurance Inquiry 
        document.getElementById("id_PensionOrSocialInsuranceInquiryTitle").textContent = "مشهد التقاعد أو التأمينات الاجتماعية";

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


$(document).ready(function() {
  $('#editModalForm').validate({ // Assuming your modal form has an ID 'editModalForm'
      rules: {
          DependentName: {
              required: true,
              minlength: 3 // Example rule
          },
          DependentGender: {
              required: true
          },
          DependentRelationship: {
              required: true
          },
          // Add other field rules here
      },
      messages: {
          DependentName: {
              required: "الرجاء إدخال الاسم",
              minlength: "يجب ألا يقل الاسم عن 3 أحرف"
          },
          DependentGender: {
              required: "الرجاء اختيار الجنس"
          },
          DependentRelationship: {
              required: "الرجاء اختيار صلة القرابة"
          },
          // Add other field messages here
      },
      errorElement: "div",
      errorClass: "invalid-feedback",
      highlight: function(element, errorClass, validClass) {
          //$(element).addClass('is-invalid');
          $(element).closest(".form-group").removeClass("has-error");
      },
      unhighlight: function(element, errorClass, validClass) {
        
        $(element).closest(".form-group").removeClass("has-error");
      },
      errorPlacement: function (error, element) {
        // Check if the element is inside an input-group
        if (element.parent('.input-group').length) {
            // Place the error after the input-group
            error.insertAfter(element.parent('.input-group'));
        } else {
            // Default placement for other elements
            error.insertAfter(element);
        }
      },
  });

  $('#saveChanges').click(function(event) {
    event.preventDefault();
    var $modalForm = $('#editModalForm'); // Get your modal form

    if ($modalForm.valid()) {
        // Only proceed if the form is valid
        var $rowToEdit = $(this).data('rowToEdit');
        // Your existing logic to save changes
        $('#editModal').modal('hide');
    } else {
        // Optionally, handle the case where the form is not valid
        // e.g., display a message or focus on the first invalid field
    }
  });

});
