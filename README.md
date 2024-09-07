
# Community Friends Charity App (CFC)

CFC App is a web application built using the Django framework. It is designed to empower charity support and ease of use.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Python 3.10
- Django (5.0.1)
- Other dependencies listed in `requirements.txt`

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/dawaime/CFCApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CFCApp
   ```
3. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up the database (if applicable):
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser account (for admin access):
   ```bash
   python manage.py createsuperuser
   ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```
7. Open a browser and go to `http://localhost:8000`.

## Running the tests

Explain how to run the automated tests for this system:

```bash
python manage.py test
```

## Deployment

Add additional notes about how to deploy this on a live system.

## Built With

* [Django](https://www.djangoproject.com/) - The web framework used
* [Python](https://www.python.org/) - Programming Language
* [PostgreSQL](https://www.postgresql.org/) - Database Management System (if applicable)
* [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/) - Library for web scraping
* [Django Crispy Forms](https://django-crispy-forms.readthedocs.io/) - Styling Django forms
* [Django Formtools](https://django-formtools.readthedocs.io/) - Collection of utilities for Django forms
* [Django Widget Tweaks](https://django-widget-tweaks.readthedocs.io/) - Tweak the form field rendering in templates
* [jQuery Validate](https://jqueryvalidation.org/) - Client-side form validation
* [DataTables](https://datatables.net/) - jQuery plugin for interactive tables
* [openpyxl](https://openpyxl.readthedocs.io/) - Library for reading and writing Excel files
* [psycopg2-binary](https://www.psycopg.org/) - PostgreSQL adapter for Python
* [python-dotenv](https://pypi.org/project/python-dotenv/) - Library for loading environment variables from a file
* [typing-extensions](https://docs.python.org/3/library/typing.html) - Type hints for Python
* [et-xmlfile](https://pypi.org/project/et-xmlfile/) - Library for reading and writing Excel files
* [six](https://pypi.org/project/six/) - Python 2 and 3 compatibility library
* [soupsieve](https://pypi.org/project/soupsieve/) - Library for parsing CSS selectors
* [sqlparse](https://pypi.org/project/sqlparse/) - SQL parser for Python
* ...

## Contributing

Please read [CONTRIBUTING.md](link to CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](repository tags link).

## Authors

* Ahmed Khaled - *Initial work* - [YourGithubProfile](link to your GitHub profile)
* Anas Khaled - *Initial work* - [YourGithubProfile](link to your GitHub profile)

See also the list of [contributors](link to contributors list) who participated in this project.

## Acknowledgments

* Special Thank to Dr.Fahad AlQurashi for his guidance and huge support.
