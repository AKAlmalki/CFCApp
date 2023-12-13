from django.urls import path
from . import views

urlpatterns = [
    path(
        "",
        views.home_redirect,
        name="index"
    ),
    path(
        "home/",
        views.home,
        name="home"
    ),
    path(
        "index2/",
        views.test2,
        name="index"
    ),
    path(
        "beneficiaries/new",
        views.beneficiary_indiv,
        name="beneficiary_new"
    ),
    path(
        "beneficiary_details/<int:beneficiary_id>",
        views.beneficiary_details,
        name="beneficiary_details"
    ),
    path(
        "confirmation",
        views.confirmBeneficiaryRequestView,
        name="beneficiary_confirmation"
    ),
    # path(
    #     "supporters/entities/new",
    #     views.supporter_entity,
    #     name="supporter_entity"
    # ),
    # path(
    #     "supporters/individuals/new",
    #     views.supporter_indiv,
    #     name="supporter_indiv"
    # ),
    path(
        "dashboard/",
        views.dashboard,
        name="dashboard2"
    ),
    path(
        "dashboard/requests",
        views.dashboard_requests,
        name="requests"
    ),
    path(
        "dashboard/reports",
        views.dashboard_reports,
        name="reports"
    ),
    path(
        'export_excel',
        views.export_excel,
        name="export_excel"
    ),
    path(
        "sign-up",
        views.sign_up,
        name="sign-up"
    ),
    path(
        "login/",
        views.signin,
        name="login"
    ),
]
