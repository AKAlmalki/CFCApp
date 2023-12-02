from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

# Testing only


class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

#########################################################


RELATIONSHIP = [("son", "ابن"),
                ("daughter", "ابنة"),
                ("brother", "أخ"),
                ("sister", "أخت"),
                ("husband/wife", "زوج/ـة"),
                ("maternal aunt/maternal uncle", "خال/ـة"),
                ("paternal aunt/paternal uncle", "عم/ـة"),
                ("grandmother/grandfather", "جد/ـة"),]
GENDER = [("M", "ذكر"),
          ("F", "انثى")]
CATEGORY = [("regular family", "أسرة عادية"),
            ("orphan family", "أسرة أيتام"),
            ("widowed family", "أسرة أرملة"),
            ("prisoners family", "أسرة سجناء"),
            ("divorced family", "أسرة مطلقة"),
            ("individual", "فرد")]
MARITAL_STATUS = [("married", "متزوج/ـة"),
                  ("single", "أعزب/ـة"),
                  ("widower", "أرمل/ـة"),
                  ("divorced", "مطلقة"),
                  ("deserted", "مهجورة")]
EDUCATIONAL_STATUS = [("none", "لا يوجد"),
                      ("primary", "ابتدائي"),
                      ("middle", "متوسط"),
                      ("secondary", "ثانوي"),
                      ("university", "جامعي")]
EDUCATIONAL_LEVEL = [("primary-1", "أول ابتدائي"),
                     ("primary-2", "ثاني ابتدائي"),
                     ("primary-3", "ثالث ابتدائي"),
                     ("primary-4", "رابع ابتدائي"),
                     ("primary-5", "خامس ابتدائي"),
                     ("primary-6", "سادس ابتدائي"),
                     ("middle-1", "اول متوسط"),
                     ("middle-2", "ثاني متوسط"),
                     ("middle-3", "ثالث متوسط"),
                     ("secondary-1", "اول ثانوي"),
                     ("secondary-2", "ثاني ثانوي"),
                     ("secondary-3", "ثالث ثانوي"),
                     ("university", "جامعي"),
                     ("none", "لا يدرس")]
HEALTH_STATUS = [("good", "جيدة"),
                 ("not good", "غير جيدة")]
WORK_STATUS = [("yes", "نعم"),
               ("no", "لا")]
INCOME_SOURCE = [("salary", "الراتب"),
                 ("social development", "التأمينات الاجتماعية"),
                 ("social security system", "الضمان الاجتماعي"),
                 ("retired services", "مصلحة التقاعد"),
                 ("citizen account", "حساب المواطن"),
                 ("social security office", "التأهيل الشامل"),
                 ("charity", "جمعية خيرية"),
                 ("benefactor", "فاعل خير"),
                 ("other", "اخرى")]
NEEDS_TYPE = [("economic", "اقتصادي"),
              ("healthy", "صحي"),
              ("educational", "تعليمي"),
              ("employment", "توظيف"),
              ("sponsorship", "كفالة")]


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
    file_no = models.CharField(max_length=500, null=True)
    first_name = models.CharField(max_length=55, default="")
    middle_name = models.CharField(max_length=55, default="")
    last_name = models.CharField(max_length=55, default="")
    nationality = models.CharField(max_length=55)
    gender = models.CharField(max_length=1, choices=GENDER, null=True)
    date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    national_id = models.CharField(max_length=20)
    national_id_exp_date = models.DateField(null=True)
    # national address should be divided into multiple fields
    national_address = models.CharField(max_length=255)
    # consider changing it
    relationship = models.CharField(max_length=55)
    is_qualified = models.IntegerField()
    category = models.CharField(max_length=55, choices=CATEGORY)
    marital_status = models.CharField(max_length=55, choices=MARITAL_STATUS)
    educational_level = models.CharField(
        max_length=55, choices=EDUCATIONAL_LEVEL, null=True)
    health_status = models.CharField(
        max_length=55, choices=HEALTH_STATUS, null=True)
    disease_type = models.CharField(max_length=100, null=True)
    work_status = models.CharField(
        max_length=55, choices=WORK_STATUS, null=True)
    employer = models.CharField(max_length=100, null=True)
    death_date_father_husband = models.DateField(null=True)
    washing_place = models.CharField(max_length=55, null=True)
    is_benefiting = models.BooleanField(default=False)
    inquiries = models.CharField(max_length=500)
    justifications = models.CharField(max_length=500)
    signup_at = models.DateTimeField(auto_now_add=True, null=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "name: " + self.name + ", national_id:" + self.national_id


class family(models.Model):
    family_head = models.ForeignKey(beneficiary, on_delete=models.CASCADE)
    count = models.IntegerField()
    status = models.CharField(max_length=55, default=1)
    justifications = models.CharField(max_length=500)
    needs = models.TextField(max_length=500)


class dependent(models.Model):
    first_name = models.CharField(max_length=55)
    middle_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    gender = models.CharField(max_length=1, choices=GENDER, null=True)
    relationship = models.CharField(max_length=55, choices=RELATIONSHIP)
    date_of_birth = models.DateField()
    national_id = models.CharField(max_length=20)
    national_id_exp_date = models.DateField(null=True)
    marital_status = models.CharField(max_length=55, choices=MARITAL_STATUS)
    educational_level = models.CharField(
        max_length=55, choices=EDUCATIONAL_LEVEL, null=True)
    educational_status = models.CharField(
        max_length=55, choices=EDUCATIONAL_STATUS, null=True)
    health_status = models.CharField(
        max_length=100, choices=HEALTH_STATUS, null=True)
    disease_type = models.CharField(max_length=100, null=True)
    total_income = models.IntegerField()
    income_source = models.CharField(max_length=100, choices=INCOME_SOURCE)
    needs_type = models.CharField(max_length=100, choices=NEEDS_TYPE)
    needs_description = models.TextField(max_length=300)
    family_head_id = models.ForeignKey(family, on_delete=models.CASCADE)


class orphan(models.Model):
    name = models.CharField(max_length=55)
    status = models.CharField(max_length=55, default=1)
    justifications = models.CharField(max_length=500)
    needs = models.TextField(max_length=500)
    beneficiary_id = models.ForeignKey(beneficiary, on_delete=models.CASCADE)


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


class orphan_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    orphan_id = models.ForeignKey(orphan, on_delete=models.CASCADE)
