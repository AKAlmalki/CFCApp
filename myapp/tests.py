from django.test import TestCase, Client
from django.urls import reverse
from .models import Beneficiary, Dependent, BeneficiaryHouse, BeneficiaryIncomeExpense
from .forms import RegisterForm
from django.contrib.auth.models import User

class URLTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_home_url(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_dashboard_url(self):
        response = self.client.get(reverse('dashboard2'))
        self.assertEqual(response.status_code, 200)


class ViewTests(TestCase):
    def setUp(self):
        self.client = Client()
        User.objects.create_user('testuser', 'test@example.com', 'testpassword')

    def test_home_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

    def test_dashboard_view_authenticated(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(reverse('dashboard2'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'dashboard/dashboard2.html')


class ModelTests(TestCase):
    def test_beneficiary_creation(self):
        beneficiary = Beneficiary.objects.create(
            first_name="John",
            last_name="Doe",
        )
        self.assertEqual(beneficiary.first_name, "John")


class FormTests(TestCase):
    def test_register_form(self):
        form_data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password1': 'testpassword',
            'password2': 'testpassword'
        }
        form = RegisterForm(data=form_data)
        self.assertTrue(form.is_valid())

    # Add more form tests...
