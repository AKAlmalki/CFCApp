from django import forms
from .models import beneficiary, individual, dependent
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


# class NameForm(forms.Form):
#     name = forms.CharField(label="name", max_length=100)


# class SupporterIndividualForm(forms.Form):
#     name = forms.CharField(label="name", max_length=100)


# class SupporterEntityForm(forms.Form):
#     name = forms.CharField(label="name", max_length=100)
#     account = forms.CharField(label="account", max_length=30)
#     category = forms.CharField(label="category", max_length=55)
#     amount = forms.IntegerField(label="amount")


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
