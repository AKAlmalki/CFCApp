from django.shortcuts import render, HttpResponse
from django.http import HttpResponseRedirect
from .models import TodoItem, beneficiary, supporter_operation, entity, individual, individual_supporter_operation, entity_supporter_operation
from .forms import NameForm, BeneficiaryForm, SupporterIndividualForm, SupporterEntityForm
import datetime

# Create your views here.
def home(request):
  return render(request, "home.html")

def todos(request):
  items = TodoItem.objects.all()
  return render(request, "todos.html", {"todos": items})

def get_name(request):
    # if this is a POST request we need to process the form data
    
    if request.method == "POST":
        # create a form instance and populate it with data from the request:
        form = NameForm(request.POST)
        print(form.data.get('name'))
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            
            return HttpResponseRedirect("/")

    # if a GET (or any other method) we'll create a blank form
    else:
        form = NameForm()

    return render(request, "home.html", {"form": form})

def dashboard(request):
  # insights for the dashboard
  beneficiaries_num = beneficiary.objects.count()
  supporter_operations_num = supporter_operation.objects.count()
  entities_num = entity.objects.count()

  return render(request, "dashboard.html", {"beneficiaries_num": beneficiaries_num, "supporter_operations_num": supporter_operations_num, "entities_num": entities_num})


def dashboard_requests(request):
  beneficiary_obj = beneficiary.objects.all()
  entity_obj = entity.objects.all()
  individual_obj = individual.objects.all()

  return render(request, "requests.html", {"beneficiary_obj": beneficiary_obj, "beneficiaries_headers": ['التصنيف', 'مؤهل؟'], "entity_obj": entity_obj, "entities_headers": ['الأسم', 'المبلغ كامل'], "individual_obj": individual_obj, "individuals_headers": ['الأسم', 'المبلغ كامل']})


def test1(request):
  return render(request, "index.html")


def beneficiary_indiv(request):
   
  if request.method == "POST":
      
    form = BeneficiaryForm(request.POST)

    # print(form.is_valid(),form.data)

    if form.is_valid():
         
      beneficiary_obj = beneficiary(
          file_no = "000",
          name = form.data.get("name"),
          nationality = form.data.get("nationality"),
          date_of_birth = form.data.get("date_of_birth"),
          phone_number = form.data.get("phone_number"),
          national_id = form.data.get("national_id"),
          national_address = form.data.get("national_address"),
          relationship = form.data.get("relationship"),
          is_qualified = False,
          category = form.data.get("category"),
          marital_status = form.data.get("marital_status"),
          is_benefiting = False,
          inquiries = "inquiries",
          justifications = form.data.get("justifications"),
      )

      print(beneficiary_obj)
      beneficiary_obj.save() # save the object in the database 
      #  beneficiary.objects.create(form)
         
      return HttpResponseRedirect("/")
    else: 
       print(form.errors)
      
  else:
    form = BeneficiaryForm()

    return render(request, "beneficiary_form(indiv).html", {'form': form})

  return HttpResponseRedirect("/beneficiaries/individuals/new")


def supporter_entity(request):
   
  if request.method == "POST":
      
    form = SupporterEntityForm(request.POST)

    # print(form.is_valid(),form.data)

    if form.is_valid():
         
      entity_obj = entity(
          name = form.data.get("name"),
          account = form.data.get("account"),
          total_amount = form.data.get("amount"),
      )

      entity_obj.save() # save the object in the database 

      supporter_operation_obj = supporter_operation(
        category = form.data.get("category"),
        amount = form.data.get("amount"),
      )

      supporter_operation_obj.save() # save the object in the database

      current_date = datetime.datetime.now()

      entity_supporter_operation_obj = entity_supporter_operation(
        entity_id = entity_obj,
        supporter_operation_id = supporter_operation_obj,
        date = current_date,
        status = "0",
        amount = form.data.get("amount"),
      )

      entity_supporter_operation_obj.save() # save the object in the database
         
      return HttpResponseRedirect("/")
    else: 
       print(form.errors)
      
  else:
    form = SupporterEntityForm()

    return render(request, "supporter_form(entity).html", {'form': form})

  return HttpResponseRedirect("/supporters/entities/new")



def supporter_indiv(request):
   
  if request.method == "POST":
      
    form = SupporterIndividualForm(request.POST)

    # print(form.is_valid(),form.data)

    if form.is_valid():
         
      individual_obj = individual(
          name = form.data.get("name"),
          account = form.data.get("account"),
          total_amount = form.data.get("amount"),
      )

      individual_obj.save() # save the object in the database 

      supporter_operation_obj = supporter_operation(
        category = form.data.get("category"),
        amount = form.data.get("amount"),
      )

      supporter_operation_obj.save() # save the object in the database

      current_date = datetime.datetime.now()

      individual_supporter_operation_obj = individual_supporter_operation(
        individual_id = individual_obj,
        supporter_operation_id = supporter_operation_obj,
        date = current_date,
        status = "0",
        amount = form.data.get("amount"),
      )

      individual_supporter_operation_obj.save() # save the object in the database
         
      return HttpResponseRedirect("/")
    else: 
       print(form.errors)
      
  else:
    form = SupporterIndividualForm()

    return render(request, "supporter_form(indiv).html", {'form': form})

  return HttpResponseRedirect("/supporters/individuals/new")