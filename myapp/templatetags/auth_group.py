from django import template

register = template.Library()


@register.filter(name='has_group')
def has_group(user, group_name):
    # Get the user's groups
    groups = user.groups.all()

    return user.groups.filter(name=group_name).exists() or user.is_superuser or groups[0].name == "Admin"
