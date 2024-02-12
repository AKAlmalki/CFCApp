from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import beneficiary, beneficiary_house, beneficiary_income_expense, dependent, Supporter_beneficiary_sponsorship, CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm


admin.site.register(beneficiary)
admin.site.register(beneficiary_house)
admin.site.register(beneficiary_income_expense)
admin.site.register(dependent)
admin.site.register(Supporter_beneficiary_sponsorship)


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username", "is_staff", "is_active"]
    list_filter = ["email", "username", "is_staff", "is_active"]
    fieldsets = (
        (None, {'fields': ('email', 'username', 'phonenumber',
                           'first_name', 'last_name', 'is_superuser', 'date_of_birth', 'gender', 'nationality', 'last_updated')}),
        ('Permissions', {'fields': ('is_staff',
         'is_active', 'groups', 'user_permissions',)}),
    )
    search_fields = ('username',)
    ordering = ('username',)


admin.site.register(CustomUser, CustomUserAdmin)
