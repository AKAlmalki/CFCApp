from django.db import models
from django.core.validators import RegexValidator
from django.db.models import JSONField
import datetime
from datetime import date


class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

# directory path functions


def beneficiary_national_id_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_national_id/{1}".format(instance.national_id, filename)


def beneficiary_national_address_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_national_address/{1}".format(instance.national_id, filename)


def beneficiary_debt_instrument_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_debt_instrument/{1}".format(instance.national_id, filename)


def beneficiary_pension_social_insurance_inquiry_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_pension_social_insurance_inquiry/{1}".format(instance.national_id, filename)


def beneficiary_father_husband_death_certificate_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_father_husband_death_certificate/{1}".format(instance.national_id, filename)


def beneficiary_letter_from_prison_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_letter_from_prison/{1}".format(instance.national_id, filename)


def beneficiary_divorce_deed_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_divorce_deed/{1}".format(instance.national_id, filename)


def beneficiary_children_responsibility_deed_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_children_responsibility_deed/{1}".format(instance.national_id, filename)


def beneficiary_other_files_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_other_files/{1}".format(instance.national_id, filename)


def beneficiary_lease_contract_title_deed_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_lease_contract_title_deed/{1}".format(instance.national_id, filename)


def beneficiary_water_electricity_bills_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_water_electricity_bills/{1}".format(instance.national_id, filename)


def beneficiary_national_id_dependents_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_national_id_dependents/{1}".format(instance.national_id, filename)


def beneficiary_social_warranty_inquiry_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/beneficiary_social_warranty_inquiry/{1}".format(instance.national_id, filename)
#########################################################


class entity(models.Model):
    name = models.CharField(max_length=55)
    account = models.CharField(max_length=55, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=55, default=0)


class individual(models.Model):
    name = models.CharField(max_length=55)
    account = models.CharField(max_length=55, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=55, default=0)


class supporter_operation(models.Model):
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    category = models.CharField(max_length=55)
    # entity_id = models.ForeignKey(entity, on_delete=models.CASCADE)


class beneficiary(models.Model):
    id = models.AutoField(primary_key=True)
    file_no = models.CharField(max_length=512, null=True, blank=True)
    first_name = models.CharField(max_length=64, default="")
    second_name = models.CharField(max_length=64, default="")
    last_name = models.CharField(max_length=64, default="")
    nationality = models.CharField(max_length=64)
    gender = models.CharField(max_length=5, null=True)
    date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    national_id = models.CharField(max_length=20)
    national_id_exp_date = models.DateField(null=True)
    # national address should be divided into multiple fields
    # national_address = models.CharField(max_length=255)  # Not included here
    # consider changing it
    # relationship = models.CharField(max_length=64)# Not included here
    is_qualified = models.IntegerField(
        default=0)  # Not included yet - dashboard
    category = models.CharField(max_length=128)
    marital_status = models.CharField(max_length=64)
    educational_level = models.CharField(max_length=128, null=True)
    health_status = models.CharField(max_length=64, null=True)
    disease_type = models.CharField(max_length=128, null=True)
    work_status = models.CharField(max_length=64, null=True)
    employer = models.CharField(max_length=128, null=True)
    death_date_father_husband = models.DateField(null=True)
    washing_place = models.CharField(max_length=64, null=True)
    is_benefiting = models.BooleanField(
        default=False)  # Not included yet - dashboard
    # inquiries = models.CharField(max_length=512)# Not included here
    # justifications = models.CharField(max_length=512)# Not included here
    receivedAt = models.DateTimeField(auto_now_add=True, null=True)
    reviewedAt = models.DateTimeField(
        null=True)  # Not included yet - dashboard
    bank_type = models.CharField(max_length=64, null=True)
    bank_iban = models.CharField(max_length=32, null=True)
    family_issues = JSONField(default=list)
    family_needs = JSONField(default=list)
    # File fields
    file_beneficiary_national_id = models.FileField(
        upload_to=beneficiary_national_id_directory_path, blank=True, null=True)
    file_beneficiary_national_address = models.FileField(
        upload_to=beneficiary_national_address_directory_path, blank=True, null=True)
    file_debt_instrument = models.FileField(
        upload_to=beneficiary_debt_instrument_directory_path, blank=True, null=True)
    file_pension_social_insurance_inquiry = models.FileField(
        upload_to=beneficiary_pension_social_insurance_inquiry_directory_path, blank=True, null=True)
    file_father_husband_death_certificate = models.FileField(
        upload_to=beneficiary_father_husband_death_certificate_directory_path, blank=True, null=True)
    file_letter_from_prison = models.FileField(
        upload_to=beneficiary_letter_from_prison_directory_path, blank=True, null=True)
    file_divorce_deed = models.FileField(
        upload_to=beneficiary_divorce_deed_directory_path, blank=True, null=True)
    file_children_responsibility_deed = models.FileField(
        upload_to=beneficiary_children_responsibility_deed_directory_path, blank=True, null=True)
    file_other_files = models.FileField(
        upload_to=beneficiary_other_files_directory_path, blank=True, null=True)
    file_lease_contract_title_deed = models.FileField(
        upload_to=beneficiary_lease_contract_title_deed_directory_path, blank=True, null=True)
    file_water_electricity_bills = models.FileField(
        upload_to=beneficiary_water_electricity_bills_directory_path, blank=True, null=True)
    file_national_id_dependents = models.FileField(
        upload_to=beneficiary_national_id_dependents_directory_path, blank=True, null=True)
    file_social_warranty_inquiry = models.FileField(
        upload_to=beneficiary_social_warranty_inquiry_directory_path, blank=True, null=True)

    def __str__(self):
        return "file_no " + self.file_no + ", name: " + self.first_name + ", national_id:" + self.national_id

    # Overwrite save() method to perform additional operations (calculate file_no)
    def save(self, category_seg, region_seg, *args, **kwargs):
        if not self.file_no:
            year = datetime.date.today().year
            category_code = category_seg  # Replace with actual logic to determine category
            region_code = region_seg  # Replace with actual logic to determine region
            last_beneficiary = beneficiary.objects.filter(
                file_no__startswith=f"{year}-{category_code}-{region_code}").order_by('file_no').last()

            if last_beneficiary:
                last_seq_number = int(last_beneficiary.file_no.split('-')[3])
                seq_number = f"{last_seq_number + 1:06d}"
            else:
                seq_number = "000001"

            check_digit = self.calculate_check_digit(
                year, category_code, region_code, seq_number)  # Implement this method
            self.file_no = f"{year}-{category_code}-{region_code}-{seq_number}-{check_digit}"

        super(beneficiary, self).save(*args, **kwargs)

    def calculate_check_digit(self, year, category_code, region_code, seq_number):
        # Implement your logic to calculate the check digit
        # This is a placeholder function
        return 0

    # Calculate age and make it a property (which will be always calculated when invoked)
    @property
    def age(self):
        today = date.today()
        return today.year - self.date_of_birth.year - ((today.month, today.day) < (self.date_of_birth.month, self.date_of_birth.day))


class beneficiary_house(models.Model):
    beneficiary_id = models.ForeignKey(beneficiary, on_delete=models.CASCADE)
    building_number = models.CharField(max_length=64)
    street_name = models.CharField(max_length=64)
    neighborhood = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    postal_code = models.CharField(max_length=64)
    additional_number = models.CharField(max_length=64)
    unit = models.CharField(max_length=64)
    location_url = models.CharField(max_length=1064)
    housing_type = models.CharField(max_length=64)
    housing_ownership = models.CharField(max_length=64)


class beneficiary_income_expense(models.Model):
    beneficiary_id = models.ForeignKey(beneficiary, on_delete=models.CASCADE)
    salary_in = models.DecimalField(decimal_places=2, max_digits=15, default=0)
    social_insurance_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    charity_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    social_warranty_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    pension_agency_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    citizen_account_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    benefactor_in = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    other_in = models.DecimalField(decimal_places=2, max_digits=15, default=0)
    housing_rent_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    electricity_bills_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    water_bills_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    transportation_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    health_supplies_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    food_supplies_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    educational_supplies_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    proven_debts_ex = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    other_ex = models.DecimalField(decimal_places=2, max_digits=15, default=0)

    @property
    def total_in(self):
        total_in = float(self.salary_in + self.social_insurance_in + self.charity_in + self.social_warranty_in +
                         self.pension_agency_in + self.citizen_account_in + self.benefactor_in + self.other_in)
        total_in = round(total_in, 2)  # let 2 digits after the decimal point
        return total_in

    @property
    def total_ex(self):
        total_ex = float(self.housing_rent_ex + self.electricity_bills_ex + self.water_bills_ex + self.transportation_ex +
                         self.health_supplies_ex + self.food_supplies_ex + self.educational_supplies_ex + self.proven_debts_ex + self.other_ex)
        total_ex = round(total_ex, 2)  # let 2 digits after the decimal point
        return total_ex

    @property
    def in_ex_diff(self):
        in_ex_diff_percentage = 0
        if self.total_ex != 0:
            in_ex_diff_percentage = (1 - (self.total_in / self.total_ex)) * 100
        # let 2 digits after the decimal point
        in_ex_diff_percentage = round(in_ex_diff_percentage, 2)

        return in_ex_diff_percentage


class dependent(models.Model):
    first_name = models.CharField(max_length=55)
    second_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    gender = models.CharField(max_length=5, null=True)
    relationship = models.CharField(max_length=64)
    educational_status = models.CharField(max_length=128, null=True)
    marital_status = models.CharField(max_length=64)
    national_id = models.CharField(max_length=20)
    health_status = models.CharField(max_length=128, null=True)
    income_amount = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    income_source = models.CharField(max_length=128)
    needs_type = JSONField(default=list)
    educational_degree = models.CharField(max_length=128, null=True)
    date_of_birth = models.DateField()
    national_id_exp_date = models.DateField(null=True)
    needs_description = models.TextField(max_length=300)
    educational_level = models.CharField(max_length=64, null=True)
    disease_type = models.CharField(max_length=100, null=True)
    beneficiary_id = models.ForeignKey(
        beneficiary, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "first_name " + self.first_name + ", second_name: " + self.second_name + ", national_id:" + self.national_id


class individual_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    individual_id = models.ForeignKey(individual, on_delete=models.CASCADE)


class entity_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    entity_id = models.ForeignKey(entity, on_delete=models.CASCADE)
