from django import forms
from .models import beneficiary, individual, dependent
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class NameForm(forms.Form):
    name = forms.CharField(label="name", max_length=100)


class BeneficiaryForm(forms.Form):
    name = forms.CharField(label="name", max_length=100)
    phone_number = forms.CharField(label="phone_number", max_length=20)
    date_of_birth = forms.DateField(label="date_of_birth")
    nationality = forms.CharField(label="nationality", max_length=20)
    national_id = forms.CharField(label="national_id", max_length=20)
    national_address = forms.CharField(
        label="national_address", max_length=100)
    marital_status = forms.CharField(label="marital_status")
    relationship = forms.CharField(label="relationship")
    category = forms.CharField(label="category")
    needs = forms.CharField(label="needs")
    justifications = forms.CharField(label="justifications")


class SupporterIndividualForm(forms.Form):
    name = forms.CharField(label="name", max_length=100)


class SupporterEntityForm(forms.Form):
    name = forms.CharField(label="name", max_length=100)
    account = forms.CharField(label="account", max_length=30)
    category = forms.CharField(label="category", max_length=55)
    amount = forms.IntegerField(label="amount")


class RegisterForm(UserCreationForm):
    email = forms.EmailField(label="البريد الإلكتروني", required=True, widget=forms.EmailInput(
        attrs={'class': 'form-control'}))
    username = forms.CharField(label="اسم المستخدم", widget=forms.TextInput(
        attrs={'class': 'form-control'}))
    password1 = forms.CharField(
        label="كلمة المرور", widget=forms.PasswordInput(render_value=True, attrs={'class': 'form-control'}))
    password2 = forms.CharField(
        label="تأكيد كلمة المرور", widget=forms.PasswordInput(render_value=True, attrs={'class': 'form-control mb-3'}))

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]


class beneficiaryPersonalDetails(forms.ModelForm):
    BOOL_CHOICES = [(True, 'Yes'), (False, 'No')]
    is_business_guest = forms.BooleanField(
        widget=forms.RadioSelect(choices=BOOL_CHOICES),
        required=False
    )

    class Meta:
        model = beneficiary
        fields = ['first_name', 'middle_name', 'last_name', 'gender', 'category', 'marital_status',
                  'educational_level', 'work_status', 'health_status', 'disease_type', 'employer', 'nationality', 'date_of_birth', 'phone_number', 'email', 'national_id', 'national_id_exp_date', 'date_of_death_of_father_or_husband', 'washing_place']


class dependentPersonalDetails(forms.ModelForm):
    family_count = forms.IntegerField()

    class Meta:
        model = dependent
        fields = ['first_name', 'middle_name', 'last_name', 'gender', 'relationship', 'date_of_birth', 'national_id', 'national_id_exp_date', 'marital_status',
                  'educational_status', 'educational_level', 'health_status', 'disease_type', 'total_income', 'income_source', 'needs_type', 'needs_description']


class beneficiaryIndividual2(forms.ModelForm):

    class Meta:
        model = individual
        fields = ['name']


# class beneficiary(models.Model):
#     file_no = models.CharField(max_length=500, null=True)
#     name = models.CharField(max_length=55)
#     nationality = models.CharField(max_length=55)
#     #gender
#     date_of_birth = models.DateTimeField()
#     phone_number = models.CharField(max_length=20)
#     national_id = models.CharField(max_length=20)
#     national_address = models.CharField(max_length=255)
#     relationship = models.CharField(max_length=55)
#     is_qualified = models.IntegerField()
#     category = models.CharField(max_length=55)
#     marital_status = models.CharField(max_length=55)
#     is_benefiting = models.BooleanField(default=False)
#     inquiries = models.CharField(max_length=500)
#     justifications = models.CharField(max_length=500)

# class individual(models.Model):
#     name = models.CharField(max_length=55)
#     account = models.CharField(max_length=55, null=True)
#     total_amount = models.DecimalField(
#         decimal_places=2, max_digits=55, default=0)
