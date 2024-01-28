from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import beneficiary, beneficiary_house, beneficiary_income_expense, dependent, Individual_supporter_beneficiary_sponsorship, CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm


# Register your models here.

admin.site.register(beneficiary)
admin.site.register(beneficiary_house)
admin.site.register(beneficiary_income_expense)
admin.site.register(dependent)
admin.site.register(Individual_supporter_beneficiary_sponsorship)


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username"]


admin.site.register(CustomUser, CustomUserAdmin)
