from django import forms


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
