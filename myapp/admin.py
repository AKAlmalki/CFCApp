from django.contrib import admin
from .models import TodoItem, beneficiary, beneficiary_house, beneficiary_income_expense, dependent, entity, individual, individual_supporter_operation, supporter_operation, entity_supporter_operation

# Register your models here.

admin.site.register(TodoItem)
admin.site.register(beneficiary)
admin.site.register(beneficiary_house)
admin.site.register(beneficiary_income_expense)
admin.site.register(dependent)
admin.site.register(entity)
admin.site.register(individual)
admin.site.register(individual_supporter_operation)
admin.site.register(entity_supporter_operation)
admin.site.register(supporter_operation)
