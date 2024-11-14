from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db.models import JSONField
import datetime
from datetime import date
import os


class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

# directory path functions


def beneficiary_file_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/{1}/{2}".format(instance.beneficiary.user.national_id, instance.file_type, filename)


def supporter_request_file_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "supporters/{0}/requests/{1}/{2}/{3}".format(instance.supporter_request.supporter.id, instance.supporter_request.id, instance.file_type, filename)


def support_operation_file_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/support_operations/{1}/{2}/{3}".format(instance.support_operation.beneficiary.national_id, instance.support_operation.id, instance.file_type, filename)


def field_visit_file_directory(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<attachement_name>/<file_name>
    return "beneficiaries/{0}/field_visits/{1}/{2}/{3}".format(instance.field_visit.beneficiary.national_id, instance.field_visit.id, instance.file_type, filename)


#########################################################


# Adjust the original user modal to have other fields
class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=150, blank=True)
    second_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(max_length=5, null=True)
    phonenumber = models.CharField(max_length=15, null=True, unique=True)
    last_updated = models.DateTimeField(auto_now=True, null=True)
    national_id = models.CharField(max_length=20, null=True, unique=True)
    national_id_exp_date = models.DateField(null=True)
    nationality = models.CharField(max_length=64, null=True)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username


class beneficiary(models.Model):
    id = models.AutoField(primary_key=True)
    file_no = models.CharField(max_length=512, null=True, blank=True)
    first_name = models.CharField(max_length=64, default="")
    second_name = models.CharField(max_length=64, default="")
    last_name = models.CharField(max_length=64, default="")
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
    last_updated = models.DateTimeField(null=True)
    status = models.CharField(max_length=55, null=True)
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=True, unique=True)

    def __str__(self):
        return "file_no " + self.file_no + ", name: " + self.first_name + ", national_id:" + self.national_id

    # Overwrite save() method to perform additional operations (calculate file_no)
    def save(self, category_seg="CAT", region_seg="SA", *args, **kwargs):
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


class Beneficiary_attachment(models.Model):
    db_table = "beneficiary_attachment"
    beneficiary = models.ForeignKey(beneficiary, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=256, null=True)
    file_object = models.FileField(
        upload_to=beneficiary_file_directory, blank=True, null=True)

    @property
    def file_size(self):
        return self.file_object.size

    # Returns file name with its extension
    def filename(self):
        return os.path.basename(self.file_object.name)


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


class Beneficiary_request(models.Model):
    db_table = "beneficiary_request"
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='requested_beneficiary_set')
    beneficiary = models.ForeignKey(beneficiary, on_delete=models.CASCADE)
    status = models.CharField(max_length=55)
    request_type = models.CharField(max_length=55, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    reviewed_by = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='reviewed_beneficiary_set', null=True)
    reviewed_at = models.DateTimeField(null=True)
    comment = models.CharField(max_length=512, null=True)


class dependent(models.Model):
    first_name = models.CharField(max_length=55)
    second_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    gender = models.CharField(max_length=5, null=True)
    relationship = models.CharField(max_length=64)
    educational_status = models.CharField(max_length=128, null=True)
    marital_status = models.CharField(max_length=64)
    national_id = models.CharField(max_length=20, unique=True)
    health_status = models.CharField(max_length=128, null=True)
    needs_type = JSONField(default=list)
    educational_degree = models.CharField(max_length=128, null=True)
    date_of_birth = models.DateField()
    national_id_exp_date = models.DateField(null=True)
    work_status = models.CharField(max_length=64, null=True)
    employer = models.CharField(max_length=128, null=True)
    contribute_to_family_income = models.CharField(max_length=64, null=True)
    disability_check = models.CharField(max_length=64, null=True)
    disability_type = models.CharField(max_length=64, null=True)
    needs_description = models.TextField(max_length=300)
    educational_level = models.CharField(max_length=64, null=True)
    disease_type = models.CharField(max_length=100, null=True)
    beneficiary_id = models.ForeignKey(
        beneficiary, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "first_name " + self.first_name + ", second_name: " + self.second_name + ", national_id:" + self.national_id


class Dependent_income(models.Model):
    db_table = "dependent_income"
    dependent = models.ForeignKey(dependent, on_delete=models.CASCADE)
    source = models.CharField(max_length=128, null=True, blank=True)
    amount = models.DecimalField(decimal_places=2, max_digits=15, default=0)


class Support_operation(models.Model):
    db_table = "support_operation"
    beneficiary = models.ForeignKey(
        beneficiary, on_delete=models.CASCADE)
    support_type = models.CharField(max_length=64)
    created_at = models.DateTimeField(auto_now_add=True)
    notes = models.CharField(max_length=512, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)


class Support_operation_attachment(models.Model):
    db_table = "support_operation_attachment"
    support_operation = models.ForeignKey(
        Support_operation, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=256, null=True)
    file_object = models.FileField(
        upload_to=support_operation_file_directory, blank=True, null=True)

    @property
    def file_size(self):
        return self.file_object.size

    # Returns file name with its extension
    def filename(self):
        return os.path.basename(self.file_object.name)


class Field_visit(models.Model):
    db_table = "field_visit"
    beneficiary = models.ForeignKey(
        beneficiary, on_delete=models.CASCADE)
    specialist = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE)
    report_after_visit = models.CharField(max_length=1024)
    visit_type = models.CharField(max_length=64)
    created_at = models.DateTimeField(auto_now_add=True)


class Field_visit_attachment(models.Model):
    db_table = "field_visit_attachment"
    field_visit = models.ForeignKey(
        Field_visit, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=256, null=True)
    file_object = models.FileField(
        upload_to=field_visit_file_directory, blank=True, null=True)

    @property
    def file_size(self):
        return self.file_object.size

    # Returns file name with its extension
    def filename(self):
        return os.path.basename(self.file_object.name)


class Supporter(models.Model):
    db_table = "supporter"
    first_name = models.CharField(max_length=55)
    second_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=5, null=True)
    national_id = models.CharField(max_length=20, unique=True)
    national_id_exp_date = models.DateField(null=True)
    nationality = models.CharField(max_length=64)
    marital_status = models.CharField(max_length=64)
    educational_level = models.CharField(max_length=128, null=True)
    work_status = models.CharField(max_length=64, null=True)
    employer = models.CharField(max_length=128, null=True)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    status = models.CharField(max_length=55, null=True)
    was_sponsor = models.CharField(max_length=55, null=True)
    status_notify = models.CharField(max_length=55, null=True)
    invite_beneficiary = models.CharField(max_length=55, null=True)
    visit_beneficiary = models.CharField(max_length=55, null=True)


class Supporter_request(models.Model):
    db_table = "supporter_request"
    supporter = models.ForeignKey(
        Supporter, on_delete=models.CASCADE)
    status = models.CharField(max_length=55)
    request_type = models.CharField(max_length=55, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    reviewed_by = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name='reviewed_supporter_set', null=True)
    reviewed_at = models.DateTimeField(null=True)
    comment = models.CharField(max_length=512, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=15, default=0, null=True)
    selection_type = models.CharField(max_length=55, null=True)

    # Fields for charity beneficiary selection
    orphan_number = models.PositiveIntegerField(
        default=0, null=True)
    orphan_donation_type = models.CharField(max_length=55, null=True)
    widower_number = models.PositiveIntegerField(
        default=0, null=True)
    widower_donation_type = models.CharField(max_length=55, null=True)

    # Fields for personal beneficiary selection
    duration = models.CharField(max_length=55, null=True)
    donation_type = models.CharField(max_length=55, null=True)
    beneficiary_list = JSONField(default=list)


class Supporter_request_attachment(models.Model):
    db_table = "supporter_request_attachment"
    supporter_request = models.ForeignKey(
        Supporter_request, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=256, null=True)
    file_object = models.FileField(
        upload_to=supporter_request_file_directory, blank=True, null=True)

    @property
    def file_size(self):
        return self.file_object.size

    # Returns file name with its extension
    def filename(self):
        return os.path.basename(self.file_object.name)


# A table that link between the beneficiary and the supporter which represents the support operation
class Supporter_beneficiary_sponsorship(models.Model):
    db_table = "supporter_beneficiary_sponsorship"
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount_donated = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    amount_donated_monthly = models.DecimalField(
        decimal_places=2, max_digits=15, default=0)
    start_date = models.DateField()
    end_date = models.DateField()
    beneficiary = models.ForeignKey(
        beneficiary, on_delete=models.CASCADE)
    supporter = models.ForeignKey(
        Supporter, on_delete=models.CASCADE)
