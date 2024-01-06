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