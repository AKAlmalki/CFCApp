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
      document.getElementById("id_personalinfo_disease_type_group_info").style.display = "none";
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


