from django.shortcuts import render, HttpResponse, redirect
from django.http import HttpResponseRedirect
from .models import TodoItem, beneficiary, supporter_operation, entity, individual, individual_supporter_operation, entity_supporter_operation
from .forms import RegisterForm
from django.db.models import Q
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
import datetime


# Just for testing purposes


def individual2test(request):
    return render(request, 'main/individual2.html')


def individualtest(request):
    return render(request, 'main/individual.html')


def home(request):
    return render(request, "home.html")


def home_redirect(request):
    return redirect("/home")


def confirmBeneficiaryRequestView(request):
    return render(request, "main/confirmBeneficiaryReq.html")


def sign_up(request):
    if request.method == 'POST':

        form = RegisterForm(request.POST)
        if form.is_valid():
            # consider the case when the user already exists
            # if User.objects.filter(username=form.cleaned_data.username).exists():
            user = form.save()
            login(request, user)
            return redirect('/home')
    else:
        form = RegisterForm()

    return render(request, "registration/sign_up.html", {"form": form})


def signin(request):

    if request.method == 'POST':

        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "تم تسجيل الدخول بنجاح")
            return redirect("home")
        else:
            messages.error(request, "كلمة المرور أو اسم المستخدم خطأ!")
            return redirect("login")

    return render(request, "registration/login.html")


def todos(request):
    items = TodoItem.objects.all()
    return render(request, "todos.html", {"todos": items})


# def get_name(request):
#     # if this is a POST request we need to process the form data

#     if request.method == "POST":
#         # create a form instance and populate it with data from the request:
#         form = NameForm(request.POST)
#         print(form.data.get('name'))
#         # check whether it's valid:
#         if form.is_valid():
#             # process the data in form.cleaned_data as required
#             # ...
#             # redirect to a new URL:

#             return HttpResponseRedirect("/")

#     # if a GET (or any other method) we'll create a blank form
#     else:
#         form = NameForm()

#     return render(request, "home.html", {"form": form})


@login_required(login_url="/login")
def dashboard(request):
    # insights for the dashboard
    beneficiaries_num = beneficiary.objects.count()
    supporter_operations_num = supporter_operation.objects.count()
    entities_num = entity.objects.count()

    return render(request, "dashboard.html", {"beneficiaries_num": beneficiaries_num, "supporter_operations_num": supporter_operations_num, "entities_num": entities_num})


@login_required(login_url="/login")
def dashboard_requests(request):
    beneficiary_obj = beneficiary.objects.all()
    entity_obj = entity.objects.all()
    individual_obj = individual.objects.all()

    return render(request, "requests.html", {"beneficiary_obj": beneficiary_obj, "beneficiaries_headers": ['التصنيف', 'مؤهل؟', 'الاجراءات'], "entity_obj": entity_obj, "entities_headers": ['الأسم', 'المبلغ كامل'], "individual_obj": individual_obj, "individuals_headers": ['الأسم', 'المبلغ كامل']})


def test1(request):
    return render(request, "index.html")


def test2(request):
    return render(request, "main/index2.html")


def handle_test2(request):

    if request.method == "POST":
        var1 = request.POST.get("var1")
        print(var1)

    return render(request, "main/index2.html")


@login_required(login_url="/login")
def dashboard_reports(request):

    if request.method == "POST":

        beneficiary_arr = beneficiary.objects.all()

        beneficiary_name = request.POST.get("beneficiary_name")
        national_id = request.POST.get("national_id")
        category = request.POST.get("category")
        marital_status = request.POST.get("marital_status")
        is_qualified = request.POST.get("is_qualified")

        if beneficiary_name != "" and beneficiary_name is not None:
            beneficiary_arr = beneficiary_arr.filter(
                name__icontains=beneficiary_name)

        if national_id != "" and national_id is not None:
            beneficiary_arr = beneficiary_arr.filter(national_id=national_id)

        if category != "اختار..." and national_id is not None:
            beneficiary_arr = beneficiary_arr.filter(category=category)

        if marital_status != "اختار..." and national_id is not None:
            beneficiary_arr = beneficiary_arr.filter(
                marital_status=marital_status)

        if is_qualified != "اختار..." and national_id is not None:
            if is_qualified == "مؤهل":
                is_qualified = True
            else:
                is_qualified = False

            beneficiary_arr = beneficiary_arr.filter(is_qualified=is_qualified)

        context = {
            "beneficiaries": beneficiary_arr
        }

        return render(request, "reports.html", context)

    else:
        return render(request, "reports.html")


def beneficiary_indiv(request):

    # if request.method == "POST":

    #     form = BeneficiaryForm(request.POST)

    #     # print(form.is_valid(),form.data)

    #     if form.is_valid():

    #         beneficiary_obj = beneficiary(
    #             file_no="000",
    #             name=form.data.get("name"),
    #             nationality=form.data.get("nationality"),
    #             date_of_birth=form.data.get("date_of_birth"),
    #             phone_number=form.data.get("phone_number"),
    #             national_id=form.data.get("national_id"),
    #             national_address=form.data.get("national_address"),
    #             relationship=form.data.get("relationship"),
    #             is_qualified=False,
    #             category=form.data.get("category"),
    #             marital_status=form.data.get("marital_status"),
    #             is_benefiting=False,
    #             inquiries="inquiries",
    #             justifications=form.data.get("justifications"),
    #         )

    #         print(beneficiary_obj)
    #         beneficiary_obj.save()  # save the object in the database
    #         #  beneficiary.objects.create(form)

    #         return HttpResponseRedirect("/")
    #     else:
    #         print(form.errors)

    # else:
    #     form = BeneficiaryForm()

    #     return render(request, "beneficiary_form(indiv).html", {'form': form})

    return render(request, "main/confirmBeneficiaryReq.html")


# def supporter_entity(request):

#     if request.method == "POST":

#         form = SupporterEntityForm(request.POST)

#         # print(form.is_valid(),form.data)

#         if form.is_valid():

#             entity_obj = entity(
#                 name=form.data.get("name"),
#                 account=form.data.get("account"),
#                 total_amount=form.data.get("amount"),
#             )

#             entity_obj.save()  # save the object in the database

#             supporter_operation_obj = supporter_operation(
#                 category=form.data.get("category"),
#                 amount=form.data.get("amount"),
#             )

#             supporter_operation_obj.save()  # save the object in the database

#             current_date = datetime.datetime.now()

#             entity_supporter_operation_obj = entity_supporter_operation(
#                 entity_id=entity_obj,
#                 supporter_operation_id=supporter_operation_obj,
#                 date=current_date,
#                 status="0",
#                 amount=form.data.get("amount"),
#             )

#             entity_supporter_operation_obj.save()  # save the object in the database

#             return HttpResponseRedirect("/")
#         else:
#             print(form.errors)

#     else:
#         form = SupporterEntityForm()

#         return render(request, "supporter_form(entity).html", {'form': form})

#     return HttpResponseRedirect("/supporters/entities/new")
