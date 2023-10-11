from django.db import models

# Create your models here.

# Testing only


class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

#########################################################


class entity(models.Model):
    name = models.CharField(max_length=55)
    account = models.CharField(max_length=55, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=55, default=0)


class individual(models.Model):
    name = models.CharField(max_length=55)
    account = models.CharField(max_length=55, null=True)
    total_amount = models.DecimalField(
        decimal_places=2, max_digits=55, default=0)


class supporter_operation(models.Model):
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    category = models.CharField(max_length=55)
    # entity_id = models.ForeignKey(entity, on_delete=models.CASCADE)


class beneficiary(models.Model):
    file_no = models.CharField(max_length=500, null=True)
    name = models.CharField(max_length=55)
    nationality = models.CharField(max_length=55)
    date_of_birth = models.DateTimeField()
    phone_number = models.CharField(max_length=20)
    national_id = models.CharField(max_length=20)
    national_address = models.CharField(max_length=255)
    relationship = models.CharField(max_length=55)
    is_qualified = models.IntegerField()
    category = models.CharField(max_length=55)
    marital_status = models.CharField(max_length=55)
    is_benefiting = models.BooleanField(default=False)
    inquiries = models.CharField(max_length=500)
    justifications = models.CharField(max_length=500)


class orphan(models.Model):
    name = models.CharField(max_length=55)
    status = models.CharField(max_length=55, default=1)
    justifications = models.CharField(max_length=500)
    needs = models.TextField(max_length=500)
    beneficiary_id = models.ForeignKey(beneficiary, on_delete=models.CASCADE)


class individual_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    individual_id = models.ForeignKey(individual, on_delete=models.CASCADE)


class entity_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    amount = models.DecimalField(decimal_places=2, max_digits=55, default=0)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    entity_id = models.ForeignKey(entity, on_delete=models.CASCADE)


class orphan_supporter_operation(models.Model):
    status = models.CharField(max_length=55, default=1)
    date = models.DateTimeField(auto_now_add=True)
    supporter_operation_id = models.ForeignKey(
        supporter_operation, on_delete=models.CASCADE)
    orphan_id = models.ForeignKey(orphan, on_delete=models.CASCADE)
