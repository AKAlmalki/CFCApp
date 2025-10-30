const banks = [
  {
    samaCode: "55",
    bankName: "Banque Saudi Fransi",
    nameEn: "Banque Saudi Fransi",
    nameAr: "السعودي الفرنسي",
  },
  {
    samaCode: "80",
    name: "Alrajhi Bank",
    nameEn: "Alrajhi Bank",
    nameAr: "الراجحي",
  },
  {
    samaCode: "10",
    bankName: "National Commercial Bank",
    nameEn: "National Commertial Bank",
    nameAr: "الأهلي السعودي",
  },
  {
    samaCode: "45",
    bankName: "Saudi British Bank",
    nameEn: "SABB",
    nameAr: "ساب",
  },
  {
    samaCode: "20",
    bankName: "Riyadh Bank",
    nameEn: "Riyad Bank",
    nameAr: "الرياض",
  },
  {
    samaCode: "05",
    bankName: "Alinma Bank",
    nameEn: "AL Inma Bank",
    nameAr: "الإنماء",
  },
  {
    samaCode: "60",
    bankName: "Bank AlJazira",
    nameEn: "Bank Aljazerah",
    nameAr: "الجزيرة",
  },
  {
    samaCode: "15",
    bankName: "Bank AlBilad ",
    nameEn: "BANK ALBELAD",
    nameAr: "البلاد",
  },
  {
    samaCode: "30",
    bankName: "Arab National Bank",
    nameEn: "Arab National Bank",
    nameAr: "العربي",
  },

  {
    samaCode: "76",
    bankName: "Bank Muscat",
    nameEn: "Bank Muscat",
    nameAr: "مسقط",
  },
  /*
    {
      samaCode: "98",
      bankName: "BNP Paribas",
      nameEn: "BNP Paribas",
      nameAr: "بي ان بي باريبا",
    },
    {
      samaCode: "81",
      bankName: "Deutsche Bank",
      nameEn: "Deutsche Bank",
      nameAr: "دويتشه",
    },
    */
  {
    samaCode: "95",
    bankName: "Emirates Bank",
    nameEn: "Emirates Bank",
    nameAr: "الإمارات دبي الوطني",
  },
  {
    samaCode: "90",
    bankName: "Gulf International Bank",
    nameEn: "Gulf International Bank",
    nameAr: "الخليج الدولي",
  },
  {
    samaCode: "71",
    bankName: "National Bank of Bahrain",
    nameEn: "National Bank of Bahrain",
    nameAr: "البحرين الوطني",
  },
  {
    samaCode: "75",
    bankName: "National Bank of Kuwait",
    nameEn: "National Bank of Kuwait",
    nameAr: "الكويت الوطني",
  },
  {
    samaCode: "82",
    bankName: "National Bank of Pakistan",
    nameEn: "National Bank of Pakistan",
    nameAr: "باكستان الوطني",
  },
  /*
    {
      samaCode: "40",
      bankName: "Samba Financial Services",
      nameEn: "Samba Financial Services",
      nameAr: "سامبا",
    },
    {
      samaCode: "01",
      bankName: "Saudi Arabian Monetary Agency",
      nameEn: "Saudi Arabian Monetary Agency",
      nameAr: "المركزي السعودي",
    },
    */
  {
    samaCode: "50",
    bankName: "Alawwal Bank",
    nameEn: "Alawwal Bank",
    nameAr: "الأول",
  },
  {
    samaCode: "65",
    bankName: "Saudi Investment Bank",
    nameEn: "Saudi Investment Bank",
    nameAr: "السعودي للاستثمار",
  },
  /*
    {
      samaCode: "83",
      bankName: "State Bank of India",
      nameEn: "State Bank of India",
      nameAr: "الهند الوطني",
    },
    */
  {
    samaCode: "84",
    bankName: "Turkiye Cumhuriyeti Ziraat Bankasi",
    nameEn: "Turkiye Cumhuriyeti Ziraat Bankasi",
    nameAr: "زراعات",
  },
  /*
    {
      samaCode: "87",
      bankName: "Industrial & Commercial Bank of China (Riyadh Branch)",
      nameEn: "Industrial & Commercial Bank of China (Riyadh Branch)",
      nameAr: "ICBC",
    },
    {
      samaCode: "86",
      bankName: "Saudi Arabian Monetary Agency",
      nameEn: "Saudi Arabian Monetary Agency",
      nameAr: "جي بي مورجان",
    },
    */
];

function updateSteps(currentStep) {
  // Reset all steps
  $(".form-stepper-list")
    .removeClass("form-stepper-active form-stepper-completed")
    .addClass("form-stepper-unfinished");

  // Activate and complete relevant steps
  for (let step = 1; step <= currentStep; step++) {
    $(`li[step="${step}"]`)
      .removeClass("form-stepper-unfinished")
      .addClass(
        step === currentStep
          ? "form-stepper-active"
          : "form-stepper-completed"
      );
  }
}

function validateIBAN(iban) {
  if (!iban) {
    return false;
  }

  iban = iban.trim();

  if (iban.length !== 24) {
    return false;
  }

  if (!iban.startsWith("SA")) {
    return false;
  }

  const bankCode = iban.substring(4, 6);

  return banks.some((b) => b.samaCode === bankCode);
}

function getBankByIBAN(iban) {
  if (!validateIBAN(iban)) return null;

  const bankCode = iban.substring(4, 6);
  const bank = banks.find((b) => b.samaCode === bankCode);
  return bank ? bank.nameAr : null;
}

function toggleConditionalField(sourceElem, targetElemId, showValue='نعم') {
    const targetElem = document.getElementById(targetElemId);
    if (targetElem) {
        targetElem.style.display = (sourceElem.value === showValue) ? 'block' : 'none';
    }
}

function validateSAID(id) {
  let type = id.substr(0, 1);
  let sum = 0;
  const _idLength = 10;
  const _type1 = "1";
  const _type2 = "2";
  id = id.trim();
  if (
    isNaN(parseInt(id)) ||
    id.length !== _idLength ||
    (type !== _type2 && type !== _type1)
  ) {
    return false;
  }
  for (let num = 0; num < 10; num++) {
    const digit = Number(id[num]);
    if (num % 2 === 0) {
      const doubled = digit * 2;
      const ZFOdd = `00${doubled}`.slice(-2);
      sum += Number(ZFOdd[0]) + Number(ZFOdd[1]);
    } else {
      sum += digit;
    }
  }
  return sum % 10 !== 0 ? false : true;
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

function validateFileSizes() {
  var files = document.querySelectorAll('input[type="file"]');
  var maxSize = 1 * 1024 * 1024; // 1MB in bytes

  for (var i = 0; i < files.length; i++) {
      var fileInput = files[i];
      var fileList = fileInput.files;

      for (var j = 0; j < fileList.length; j++) {
          var file = fileList[j];

          // Check if file size exceeds the limit
          if (file.size > maxSize) {
              alert('حجم الملف يجب ألا يتجاوز 1 ميجابايت.');
              return false;
          }
      }
  }
  return true; // All files are within the size limit
}

function convertToEnglishNumber(input) {
  const easternArabicNumerals = '٠١٢٣٤٥٦٧٨٩';
  const englishNumerals = '0123456789';

  for (let i = 0; i < easternArabicNumerals.length; i++) {
      const regex = new RegExp(easternArabicNumerals[i], 'g');
      input = input.replace(regex, englishNumerals[i]);
  }

  return input;
}

function initializeSteps() {
  $(".form-stepper-list")
      .removeClass("form-stepper-active form-stepper-completed")
      .addClass("form-stepper-unfinished");

  let stepNumber = 1;

  // Select the form step circle (progress bar) and mark as active
  $(`li[step="${stepNumber}"]`)
      .removeClass("form-stepper-unfinished form-stepper-completed")
      .addClass("form-stepper-active");
}

function updateMeter($meterSections, $passwordInput) {
  let strength = calculatePasswordStrength($passwordInput.val());

  $meterSections.removeClass('weak medium strong very-strong');
  // Add the appropriate strength class based on the strength value
  if (strength >= 1) {
      $meterSections[0].classList.add('weak');
  }
  if (strength >= 2) {
      $meterSections[1].classList.add('medium');
  }
  if (strength >= 3) {
      $meterSections[2].classList.add('strong');
  }
  if (strength >= 4) {
      $meterSections[3].classList.add('very-strong');
  }
}

function calculatePasswordStrength(password) {
  const lengthWeight = 0.2;
  const uppercaseWeight = 0.5;
  const lowercaseWeight = 0.5;
  const numberWeight = 0.7;
  const symbolWeight = 1;

  let strength = 0;

  // Calculate the strength based on the password length
  strength += password.length * lengthWeight;

  // Calculate the strength based on uppercase letters
  if (/[A-Z]/.test(password)) {
      strength += uppercaseWeight;
  }

  // Calculate the strength based on lowercase letters
  if (/[a-z]/.test(password)) {
      strength += lowercaseWeight;
  }

  // Calculate the strength based on numbers
  if (/\d/.test(password)) {
      strength += numberWeight;
  }

  // Calculate the strength based on symbols
  if (/[^A-Za-z0-9]/.test(password)) {
      strength += symbolWeight;
  }

  return strength;
}
