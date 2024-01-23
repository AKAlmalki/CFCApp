from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import TodoItem, beneficiary, beneficiary_house, beneficiary_income_expense, dependent, entity, individual, Individual_supporter_beneficiary_sponsorship, supporter_operation, Entity_supporter_operation, CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm


# Register your models here.

admin.site.register(TodoItem)
admin.site.register(beneficiary)
admin.site.register(beneficiary_house)
admin.site.register(beneficiary_income_expense)
admin.site.register(dependent)
admin.site.register(entity)
admin.site.register(individual)
admin.site.register(Individual_supporter_beneficiary_sponsorship)
admin.site.register(Entity_supporter_operation)
admin.site.register(supporter_operation)


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username"]


admin.site.register(CustomUser, CustomUserAdmin)
