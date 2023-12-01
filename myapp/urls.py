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
        "todos/",
        views.todos,
        name="Todos"
    ),
    path(
        "index/",
        views.test1,
        name="index"
    ),
    path(
        "handle_test2",
        views.handle_test2,
        name="handle_test2"
    ),
    path(
        "index2/",
        views.test2,
        name="index"
    ),
    path(
        "beneficiaries/new",
        views.beneficiary_indiv,
        name="post_beneficiary"
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
        name="dashboard"
    ),
    path(
        "dashboard2/",
        views.new_dashboard,
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
