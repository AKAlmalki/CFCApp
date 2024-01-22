from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

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
    path(
        "supporters/individuals/new",
        views.supporter_indiv,
        name="supporter_indiv"
    ),
    path(
        "supporters/individuals/new_request",
        views.supporter_indiv_post,
        name="supporter_indiv_post"
    ),
    path(
        "supporters/individuals/test",
        views.supporter_test,
        name="supporter_indiv_test"
    ),
    path(
        "dashboard/",
        views.dashboard,
        name="dashboard"
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
        "dashboard/reports/new",
        views.dashboard_reports_post,
        name="reports_post"
    ),
    path(
        'export_excel',
        views.export_excel,
        name="export_excel"
    ),

    path(
        'beneficiaries/<str:username>/requests/',
        views.export_excel,
        name="beneficiary_request"
    ),
    path(
        'beneficiaries/<str:username>/requests/<int:req_id>/',
        views.export_excel,
        name="beneficiary_request_details"
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
    path(
        "logout/",
        views.logout_user,
        name="logout"
    ),
    path(
        "sign-up/validate_email/",
        views.validate_email,
        name="validate_email"
    ),
    path(
        "sign-up/validate_username/",
        views.validate_username,
        name="validate_username"
    ),
    path(
        "sign-up/validate_phonenumber/",
        views.validate_phonenumber,
        name="validate_phonenumber"
    ),
    path(
        "activate/<uidb64>/<token>/",
        views.activate,
        name="activate"
    ),
    path(
        'resend-activation/',
        views.resend_activation_email,
        name='resend_activation_email'
    ),
    path(
        'resend-activation-email/',
        views.resend_activation_email_view,
        name="resend_activation_email_view"
    ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
