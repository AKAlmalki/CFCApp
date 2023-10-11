from django.contrib import admin
from .models import TodoItem, beneficiary, entity, individual, orphan, individual_supporter_operation, orphan_supporter_operation, supporter_operation, entity_supporter_operation

# Register your models here.

admin.site.register(TodoItem)
admin.site.register(beneficiary)
admin.site.register(entity)
admin.site.register(individual)
admin.site.register(orphan)
admin.site.register(individual_supporter_operation)
admin.site.register(entity_supporter_operation)
admin.site.register(orphan_supporter_operation)
admin.site.register(supporter_operation)
