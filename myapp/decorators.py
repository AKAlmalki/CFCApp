from django.contrib.auth.decorators import user_passes_test


def group_required(*group_names):
    """Requires user membership in at least one of the groups passed in."""
    def in_groups(user):
        if user.is_authenticated:

            # Get the user's groups
            groups = user.groups.all()

            if user.groups.filter(name__in=group_names).exists() or user.is_superuser or groups[0].name == "Admin":
                return True
        return False

    return user_passes_test(in_groups, login_url='403')
